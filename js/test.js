/**
 * =========================================================================
 * 🎓 GAUTAM TEACHING CENTRE (GTC) - LIVE CBT EXAMINATION ENGINE
 * File: js/test.js
 * Specification: NTA/Railway Standard Computer-Based Test (CBT) Engine
 * Configuration: Strict Single-Language, Real Per-Question Timer & Anti-Hang
 * =========================================================================
 */

(function (window, document) {
    "use strict";

    const CBT_CONFIG = {
        scriptUrl: "https://script.google.com/macros/s/AKfycbzQysEVoQmSS6w_cEeLYK1g95T16cUT5taIdjXfdDLUsOggqFnVMU5GDrl3C3c-Olvt/exec",
        durationMinutes: 60,
        marksPerCorrect: 2.00,
        negativeMarksPerWrong: -0.25,
        masterKeys: ["GK9890", "GTC#2000", "GTC@2026", "GK77"],
        maxAllowedTabSwitches: 15,
        heartbeatIntervalMs: 5000,
        lockDurationMs: 24 * 60 * 60 * 1000
    };

    let examQuestions = [];
    let currentQuestionIndex = 0;
    let userResponses = [];
    let questionReviewFlags = [];
    let questionTimesSpent = {};
    let questionStartTime = Date.now();
    let examStartTimestamp = Date.now();
    let examTimeRemainingSeconds = CBT_CONFIG.durationMinutes * 60;
    let timerInterval = null;
    let heartbeatInterval = null;
    let currentLanguage = "hi";
    let tabSwitchViolationCount = 0;
    let isExamSubmitted = false;

    let candidateName = "Candidate";
    let candidateRoll = "GTC";
    let candidateClass = "Standard";

    function getCandidateKey() {
        const cleanRoll = (candidateRoll || "GTC").toUpperCase().trim();
        const cleanName = (candidateName || "Candidate").toUpperCase().trim().replace(/\s+/g, '_');
        return `${cleanRoll}_${cleanName}`;
    }

    window.addEventListener("DOMContentLoaded", function () {
        document.addEventListener("contextmenu", function (e) { e.preventDefault(); });

        document.addEventListener("keydown", function (e) {
            if (
                e.key === "F12" ||
                (e.ctrlKey && e.shiftKey && ["I", "C", "J"].includes(e.key)) ||
                (e.ctrlKey && e.key === "U")
            ) {
                e.preventDefault();
                return false;
            }
        });

        initializeCandidateProfile();
        loadQuestionBank();
        checkEligibilityAnd24hLock();
    });

    function initializeCandidateProfile() {
        candidateName = localStorage.getItem("name") || "Candidate";
        candidateRoll = (localStorage.getItem("roll") || "GTC").toUpperCase();
        candidateClass = localStorage.getItem("class") || "";
        currentLanguage = localStorage.getItem("lang") || localStorage.getItem("exam_lang") || "hi";

        const badgeEl = document.getElementById("candidateLiveInfo");
        if (badgeEl) {
            badgeEl.textContent = `${candidateName} (${candidateRoll}${candidateClass ? " • " + candidateClass : ""})`;
        }

        const langSelect = document.getElementById("examLangSelect");
        if (langSelect) {
            langSelect.value = currentLanguage;
        }
    }

    function loadQuestionBank() {
        if (typeof window.questions !== "undefined" && Array.isArray(window.questions) && window.questions.length > 0) {
            examQuestions = window.questions;
        } else if (typeof questions !== "undefined" && Array.isArray(questions) && questions.length > 0) {
            examQuestions = questions;
        } else {
            examQuestions = [];
        }

        const totalQ = examQuestions.length;
        userResponses = new Array(totalQ).fill(null);
        questionReviewFlags = new Array(totalQ).fill(false);
        questionTimesSpent = {};
        for (let i = 0; i < totalQ; i++) {
            questionTimesSpent[i] = 0;
        }

        const palTotal = document.getElementById("paletteTotalCount");
        const totCount = document.getElementById("totalQuestionsCount");
        if (palTotal) palTotal.textContent = totalQ;
        if (totCount) totCount.textContent = totalQ;
    }

    function checkEligibilityAnd24hLock() {
        const nowMs = Date.now();
        const candKey = getCandidateKey();
        const lockTimestamp = localStorage.getItem(`gtc_locked_${candKey}`);
        const isReattemptGranted = localStorage.getItem(`reattemptGranted_${candKey}`) === "true";

        if (lockTimestamp && !isReattemptGranted) {
            const elapsed = nowMs - parseInt(lockTimestamp, 10);
            if (elapsed < CBT_CONFIG.lockDurationMs) {
                const hoursLeft = Math.ceil((CBT_CONFIG.lockDurationMs - elapsed) / (60 * 60 * 1000));
                hideLoading();
                openRetestModal(
                    `<b>24 घंटे का डिवाइस लॉक:</b> छात्र <b>${candidateName} (Roll: ${candidateRoll})</b> का पिछला टेस्ट सबमिट हो चुका है। लॉक समाप्त होने में <b>${hoursLeft} घंटे</b> शेष हैं। दोबारा टेस्ट देने हेतु शिक्षक का मास्टर पासवर्ड दर्ज करें:`
                );
                return;
            } else {
                clearSavedCandidateSession(candKey);
            }
        }

        if (examQuestions.length === 0) {
            hideLoading();
            openCustomDialog("त्रुटि / Error", "प्रश्न बैंक (js/questions.js) लोड नहीं हो सका!", "❌");
            return;
        }

        restoreExamProgress();
        hideLoading();
        
        const mainBox = document.getElementById("examMainBox") || document.querySelector(".exam-container");
        if (mainBox) mainBox.style.display = "block";

        questionStartTime = Date.now();
        renderHorizontalPalette();
        displayCurrentQuestion();

        startExamTimer();
        startProctorHeartbeat();
        setupAntiCheatListeners();
    }

    function clearSavedCandidateSession(candKey) {
        try {
            localStorage.removeItem(`gtc_locked_${candKey}`);
            localStorage.removeItem(`gtc_answers_${candKey}`);
            localStorage.removeItem(`gtc_reviews_${candKey}`);
            localStorage.removeItem(`gtc_times_${candKey}`);
            localStorage.removeItem(`gtc_end_time_${candKey}`);
            localStorage.removeItem(`gtc_start_time_${candKey}`);
            localStorage.removeItem(`gtc_qindex_${candKey}`);
        } catch (e) {}
    }

    function restoreExamProgress() {
        try {
            const candKey = getCandidateKey();
            const savedAns = localStorage.getItem(`gtc_answers_${candKey}`);
            if (savedAns) {
                const parsed = JSON.parse(savedAns);
                if (Array.isArray(parsed) && parsed.length === examQuestions.length) userResponses = parsed;
            }

            const savedRev = localStorage.getItem(`gtc_reviews_${candKey}`);
            if (savedRev) {
                const parsedRev = JSON.parse(savedRev);
                if (Array.isArray(parsedRev) && parsedRev.length === examQuestions.length) questionReviewFlags = parsedRev;
            }

            const savedTimes = localStorage.getItem(`gtc_times_${candKey}`);
            if (savedTimes) {
                const parsedTimes = JSON.parse(savedTimes);
                if (parsedTimes && typeof parsedTimes === "object") {
                    questionTimesSpent = parsedTimes;
                }
            }

            const savedStartTime = localStorage.getItem(`gtc_start_time_${candKey}`);
            if (savedStartTime) {
                examStartTimestamp = parseInt(savedStartTime, 10) || Date.now();
            } else {
                examStartTimestamp = Date.now();
                localStorage.setItem(`gtc_start_time_${candKey}`, String(examStartTimestamp));
            }

            const savedEndTime = localStorage.getItem(`gtc_end_time_${candKey}`);
            if (savedEndTime) {
                const secondsLeft = Math.floor((parseInt(savedEndTime, 10) - Date.now()) / 1000);
                examTimeRemainingSeconds = secondsLeft > 0 ? secondsLeft : 0;
            } else {
                const targetEnd = Date.now() + examTimeRemainingSeconds * 1000;
                localStorage.setItem(`gtc_end_time_${candKey}`, String(targetEnd));
            }

            const savedQIndex = localStorage.getItem(`gtc_qindex_${candKey}`);
            if (savedQIndex !== null) {
                const idx = parseInt(savedQIndex, 10);
                if (idx >= 0 && idx < examQuestions.length) currentQuestionIndex = idx;
            }
        } catch (e) {}
    }

    function saveExamProgress() {
        try {
            const candKey = getCandidateKey();
            localStorage.setItem(`gtc_answers_${candKey}`, JSON.stringify(userResponses));
            localStorage.setItem("gtc_answers", JSON.stringify(userResponses));
            localStorage.setItem(`gtc_reviews_${candKey}`, JSON.stringify(questionReviewFlags));
            localStorage.setItem(`gtc_times_${candKey}`, JSON.stringify(questionTimesSpent));
            localStorage.setItem("gtc_last_times", JSON.stringify(questionTimesSpent));
            localStorage.setItem(`gtc_qindex_${candKey}`, String(currentQuestionIndex));
        } catch (e) {}
    }

    /**
     * ⏱ ACCURATE PER-QUESTION TIME RECORDER
     * Always called BEFORE switching currentQuestionIndex or submitting
     */
    function recordCurrentQuestionTime() {
        if (isExamSubmitted) return;
        const now = Date.now();
        const elapsedSeconds = Math.max(0, Math.round((now - questionStartTime) / 1000));
        if (currentQuestionIndex >= 0 && currentQuestionIndex < examQuestions.length) {
            const prevTotal = Number(questionTimesSpent[currentQuestionIndex]) || 0;
            questionTimesSpent[currentQuestionIndex] = prevTotal + elapsedSeconds;
        }
        questionStartTime = now;
    }

    function renderHorizontalPalette() {
        const listContainer = document.getElementById("questionList");
        if (!listContainer) return;

        let html = "";
        examQuestions.forEach(function (q, idx) {
            const qNum = idx + 1;
            const isAnswered = (userResponses[idx] !== null && userResponses[idx] !== undefined && userResponses[idx] >= 0);
            const isReview = (questionReviewFlags[idx] === true);

            let statusClass = "pad-btn";
            if (isAnswered && isReview) statusClass += " answered review";
            else if (isAnswered) statusClass += " answered";
            else if (isReview) statusClass += " review";
            else statusClass += " unanswered";

            if (idx === currentQuestionIndex) statusClass += " current";

            html += `
                <button type="button" class="${statusClass}" id="pad-btn-${qNum}" onclick="jumpToQuestion(${idx})" title="Question ${qNum}">
                    ${qNum}
                </button>
            `;
        });
        listContainer.innerHTML = html;
        scrollPaletteToActive();
    }

    function scrollPaletteToActive() {
        const activeBtn = document.getElementById(`pad-btn-${currentQuestionIndex + 1}`);
        if (activeBtn) {
            activeBtn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        }
    }

    function updatePaletteNode(index) {
        const btn = document.getElementById(`pad-btn-${index + 1}`);
        if (!btn) return;

        const isAnswered = (userResponses[index] !== null && userResponses[index] !== undefined && userResponses[index] >= 0);
        const isReview = (questionReviewFlags[index] === true);

        let statusClass = "pad-btn";
        if (isAnswered && isReview) statusClass += " answered review";
        else if (isAnswered) statusClass += " answered";
        else if (isReview) statusClass += " review";
        else statusClass += " unanswered";

        if (index === currentQuestionIndex) statusClass += " current";
        btn.className = statusClass;
    }

    /**
     * 🌟 STRICT SINGLE-LANGUAGE RENDERING ENGINE (Hindi OR English)
     */
    function displayCurrentQuestion() {
        if (currentQuestionIndex < 0 || currentQuestionIndex >= examQuestions.length) return;

        questionStartTime = Date.now();

        const q = examQuestions[currentQuestionIndex];
        const qNum = currentQuestionIndex + 1;
        const totalQ = examQuestions.length;

        const qnoEl = document.getElementById("qno");
        if (qnoEl) qnoEl.textContent = qNum;

        const topicBadge = document.getElementById("questionTopicBadge");
        if (topicBadge) topicBadge.textContent = `Topic: ${q.topic || detectTopicName(currentQuestionIndex)}`;

        // Extract Single Language Question Text
        const qTextHi = q.question_hi || q.question || "";
        const qTextEn = q.question_en || "";
        
        let questionHTML = qTextHi;
        if (currentLanguage === "en") {
            questionHTML = qTextEn || qTextHi;
        } else {
            questionHTML = qTextHi || qTextEn;
        }

        const questionEl = document.getElementById("question");
        if (questionEl) questionEl.innerHTML = questionHTML;

        // Extract Single Language Options
        const optsHi = q.options_hi || q.options || [];
        const optsEn = q.options_en || [];
        const currentSelected = userResponses[currentQuestionIndex];

        const optionLabels = document.querySelectorAll(".option-container");
        const radioInputs = document.querySelectorAll(".option-container input[type='radio']");

        for (let i = 0; i < 4; i++) {
            const rawHi = optsHi[i] || "";
            const rawEn = optsEn[i] || "";
            const letter = ["A", "B", "C", "D"][i];

            let textHi = extractCleanOptionText(rawHi);
            let textEn = extractCleanOptionText(rawEn);

            let optionText = textHi;
            if (currentLanguage === "en") {
                optionText = textEn || textHi;
            } else {
                optionText = textHi || textEn;
            }

            const spanEl = document.getElementById(`op${i + 1}`);
            if (spanEl) {
                spanEl.innerHTML = `<b>(${letter.toLowerCase()})</b> ${optionText}`;
            }

            const isSelected = (currentSelected === i);
            if (radioInputs[i]) radioInputs[i].checked = isSelected;
            if (optionLabels[i]) {
                optionLabels[i].classList.toggle("selected", isSelected);
            }
        }

        const reviewBtn = document.getElementById("reviewBtn");
        const isMarkedReview = (questionReviewFlags[currentQuestionIndex] === true);
        if (reviewBtn) {
            reviewBtn.classList.toggle("active-marked", isMarkedReview);
            reviewBtn.innerHTML = isMarkedReview ? "<span>✓ Marked Review</span>" : "<span>⭐ Mark Review</span>";
        }

        const prevBtn = document.getElementById("prevBtn");
        if (prevBtn) prevBtn.disabled = (currentQuestionIndex === 0);

        const nextBtn = document.getElementById("nextBtn");
        const submitBtn = document.getElementById("submitBtn");
        const isLastQuestion = (currentQuestionIndex === totalQ - 1);

        if (submitBtn) submitBtn.style.display = isLastQuestion ? "inline-flex" : "none";
        if (nextBtn) nextBtn.style.display = isLastQuestion ? "none" : "inline-flex";

        updatePaletteNode(currentQuestionIndex);
        scrollPaletteToActive();
    }

    function handleOptionSelect(optionIndex) {
        recordCurrentQuestionTime();
        userResponses[currentQuestionIndex] = optionIndex;
        playChime("click");

        const optionLabels = document.querySelectorAll(".option-container");
        const radioInputs = document.querySelectorAll(".option-container input[type='radio']");

        optionLabels.forEach(function (label, idx) {
            const isSelected = (idx === optionIndex);
            label.classList.toggle("selected", isSelected);
            if (radioInputs[idx]) radioInputs[idx].checked = isSelected;
        });

        updatePaletteNode(currentQuestionIndex);
        saveExamProgress();
    }

    function clearSelectedResponse() {
        recordCurrentQuestionTime();
        userResponses[currentQuestionIndex] = null;
        const optionLabels = document.querySelectorAll(".option-container");
        const radioInputs = document.querySelectorAll(".option-container input[type='radio']");

        optionLabels.forEach(function (label, idx) {
            label.classList.remove("selected");
            if (radioInputs[idx]) radioInputs[idx].checked = false;
        });

        playChime("click");
        updatePaletteNode(currentQuestionIndex);
        saveExamProgress();
        showToast("Selection cleared.");
    }

    function toggleReviewQuestion() {
        recordCurrentQuestionTime();
        questionReviewFlags[currentQuestionIndex] = !questionReviewFlags[currentQuestionIndex];
        const isMarked = questionReviewFlags[currentQuestionIndex];

        const reviewBtn = document.getElementById("reviewBtn");
        if (reviewBtn) {
            reviewBtn.classList.toggle("active-marked", isMarked);
            reviewBtn.innerHTML = isMarked ? "<span>✓ Marked Review</span>" : "<span>⭐ Mark Review</span>";
        }

        updatePaletteNode(currentQuestionIndex);
        playChime("click");
        saveExamProgress();
        showToast(isMarked ? "Marked for Review 🟣" : "Review tag removed.");
    }

    function nextQuestion() {
        if (currentQuestionIndex < examQuestions.length - 1) {
            recordCurrentQuestionTime();
            const prevIdx = currentQuestionIndex;
            currentQuestionIndex++;
            updatePaletteNode(prevIdx);
            displayCurrentQuestion();
            playChime("click");
            saveExamProgress();
        }
    }

    function prevQuestion() {
        if (currentQuestionIndex > 0) {
            recordCurrentQuestionTime();
            const prevIdx = currentQuestionIndex;
            currentQuestionIndex--;
            updatePaletteNode(prevIdx);
            displayCurrentQuestion();
            playChime("click");
            saveExamProgress();
        }
    }

    function jumpToQuestion(idx) {
        if (idx >= 0 && idx < examQuestions.length && idx !== currentQuestionIndex) {
            recordCurrentQuestionTime();
            const prevIdx = currentQuestionIndex;
            currentQuestionIndex = idx;
            updatePaletteNode(prevIdx);
            displayCurrentQuestion();
            playChime("click");
            saveExamProgress();
        }
    }

    function changeQuestionLanguage(langVal) {
        recordCurrentQuestionTime();
        currentLanguage = langVal;
        localStorage.setItem("lang", langVal);
        displayCurrentQuestion();
        playChime("click");
        showToast(`Language switched to ${langVal === "hi" ? "हिन्दी" : "English"}`);
    }

    function startExamTimer() {
        const timerEl = document.getElementById("timer");
        clearInterval(timerInterval);

        function updateTimer() {
            if (examTimeRemainingSeconds <= 0) {
                clearInterval(timerInterval);
                if (timerEl) {
                    timerEl.textContent = "⏱ Time Left : 00:00";
                    timerEl.classList.add("timer-warning-pulse");
                }
                autoSubmitOnTimeUp();
                return;
            }

            const minutes = Math.floor(examTimeRemainingSeconds / 60);
            const seconds = examTimeRemainingSeconds % 60;
            const mStr = minutes < 10 ? "0" + minutes : minutes;
            const sStr = seconds < 10 ? "0" + seconds : seconds;

            if (timerEl) {
                timerEl.textContent = `⏱ Time Left : ${mStr}:${sStr}`;
                if (examTimeRemainingSeconds <= 300) timerEl.classList.add("timer-warning-pulse");
            }
            examTimeRemainingSeconds--;
        }

        updateTimer();
        timerInterval = setInterval(updateTimer, 1000);
    }

    function autoSubmitOnTimeUp() {
        if (isExamSubmitted) return;
        executeFinalExamSubmission("Time Over");
    }

    function setupAntiCheatListeners() {
        function handleTabSwitch() {
            if (isExamSubmitted) return;
            tabSwitchViolationCount++;
            playPoliceSirenSound();
            sendHeartbeatToServer(`Tab Switch #${tabSwitchViolationCount}`);

            const remaining = CBT_CONFIG.maxAllowedTabSwitches - tabSwitchViolationCount;
            if (remaining <= 0) {
                executeFinalExamSubmission("Anti-Cheat Limit Exceeded");
            } else {
                openCustomDialog("⚠️ Security Alert!", `स्क्रीन बदलना सख्त वर्जित है! चेतावनी #${tabSwitchViolationCount}. (${remaining} शेष)`, "🚨");
            }
        }

        document.addEventListener("visibilitychange", function () {
            if (document.hidden) handleTabSwitch();
        });
    }

    function startProctorHeartbeat() {
        sendHeartbeatToServer("Normal");
        clearInterval(heartbeatInterval);
        heartbeatInterval = setInterval(function () {
            sendHeartbeatToServer("Normal");
        }, CBT_CONFIG.heartbeatIntervalMs);
    }

    async function sendHeartbeatToServer(incidentStatus) {
        if (isExamSubmitted) return;
        try {
            const formData = new URLSearchParams();
            formData.append("action", "ping_status");
            formData.append("roll", candidateRoll);
            formData.append("name", candidateName);
            formData.append("class", candidateClass);
            formData.append("qno", String(currentQuestionIndex + 1));
            formData.append("incident", incidentStatus);

            await fetch(CBT_CONFIG.scriptUrl, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: formData.toString()
            });
        } catch (e) {}
    }

    function confirmSubmitTest() {
        recordCurrentQuestionTime();
        saveExamProgress();

        const total = examQuestions.length;
        const attempted = userResponses.filter(r => r !== null && r !== undefined && r >= 0).length;
        const unattempted = total - attempted;

        openCustomDialog(
            "Submit Examination? / टेस्ट सबमिट करें?",
            `कुल प्रश्न: <b>${total}</b><br>हल किए गए: <b style="color:var(--success-deep);">${attempted}</b><br>शेष: <b style="color:var(--danger-deep);">${unattempted}</b><br><br>क्या आप टेस्ट सबमिट करना चाहते हैं?`,
            "❓",
            function () { executeFinalExamSubmission("Normal Submission"); },
            true
        );
    }

    /**
     * 🚀 ZERO-HANG FINAL SUBMISSION ENGINE WITH REAL TIME LOGGING
     */
    async function executeFinalExamSubmission(reason = "Normal Submission") {
        if (isExamSubmitted) return;
        recordCurrentQuestionTime();
        isExamSubmitted = true;

        clearInterval(timerInterval);
        clearInterval(heartbeatInterval);
        showLoading("Submitting your responses to Google Sheet... ⏳");

        try {
            const nowMs = Date.now();
            let correctCount = 0;
            let wrongCount = 0;
            const totalQ = examQuestions.length || 40;
            const responseLogTokens = [];

            let sumOfQuestionSeconds = 0;
            examQuestions.forEach(function (q, idx) {
                const chosenIdx = userResponses[idx];
                const hasAnswered = (chosenIdx !== undefined && chosenIdx !== null && chosenIdx >= 0);
                const chosenLetter = hasAnswered ? ["A", "B", "C", "D"][chosenIdx] : "--";
                const correctLetter = getCorrectOptionLetter(q);
                const qSec = Math.max(0, Number(questionTimesSpent[idx]) || 0);
                sumOfQuestionSeconds += qSec;

                if (hasAnswered) {
                    if (chosenLetter === correctLetter) {
                        correctCount++;
                        responseLogTokens.push(`Q${idx + 1}: (${chosenLetter.toLowerCase()}) ✅ [${qSec}s]`);
                    } else {
                        wrongCount++;
                        responseLogTokens.push(`Q${idx + 1}: (${chosenLetter.toLowerCase()}) ❌ [${qSec}s]`);
                    }
                } else {
                    responseLogTokens.push(`Q${idx + 1}: (--) ○ [${qSec}s]`);
                }
            });

            const maxMarks = totalQ * CBT_CONFIG.marksPerCorrect;
            const rawScore = (correctCount * CBT_CONFIG.marksPerCorrect) + (wrongCount * CBT_CONFIG.negativeMarksPerWrong);
            const finalScore = Math.max(0, rawScore);
            const percentage = maxMarks > 0 ? Math.round((finalScore / maxMarks) * 100) : 0;

            const timerElapsedSec = (CBT_CONFIG.durationMinutes * 60) - Math.max(0, examTimeRemainingSeconds);
            const realWallSec = Math.round((nowMs - examStartTimestamp) / 1000);
            const totalElapsedSec = Math.max(1, sumOfQuestionSeconds, timerElapsedSec > 0 ? timerElapsedSec : realWallSec);
            const timeTakenStr = formatTimeSeconds(totalElapsedSec);

            // Save locally immediately so zero data is ever lost
            try {
                const candKey = getCandidateKey();
                localStorage.setItem(`gtc_locked_${candKey}`, String(nowMs));
                localStorage.setItem(`gtc_answers_${candKey}`, JSON.stringify(userResponses));
                localStorage.setItem(`gtc_times_${candKey}`, JSON.stringify(questionTimesSpent));
                localStorage.setItem("gtc_answers", JSON.stringify(userResponses));
                localStorage.setItem("gtc_last_times", JSON.stringify(questionTimesSpent));
                localStorage.setItem("gtc_last_time_taken", timeTakenStr);
                localStorage.setItem("gtc_last_score", String(finalScore.toFixed(2)));
                localStorage.setItem("gtc_last_correct", String(correctCount));
                localStorage.setItem("gtc_last_wrong", String(wrongCount));
                localStorage.setItem("gtc_last_percentage", `${percentage}%`);
                localStorage.removeItem(`reattemptGranted_${candKey}`);
            } catch (e) {}

            // Build POST payload for Google Sheet
            const formData = new URLSearchParams();
            formData.append("action", "submit");
            formData.append("roll", candidateRoll);
            formData.append("name", candidateName);
            formData.append("class", candidateClass);
            formData.append("score", String(finalScore.toFixed(2)));
            formData.append("correct", String(correctCount));
            formData.append("wrong", String(wrongCount));
            formData.append("percentage", `${percentage}%`);
            formData.append("status", percentage >= 50 ? "PASS" : "FAIL");
            formData.append("timeTaken", timeTakenStr);
            formData.append("responses", responseLogTokens.join(" | "));
            formData.append("rawPayload", JSON.stringify({
                userAnswers: userResponses,
                questionTimes: questionTimesSpent,
                timeTaken: timeTakenStr,
                timeTakenSeconds: totalElapsedSec,
                submissionTimestamp: nowMs
            }));
            formData.append("adminPass", "GK9890");

            // Send with 6-second anti-hang timeout so spinner NEVER spins forever
            const controller = new AbortController();
            const timeoutId = setTimeout(function () { controller.abort(); }, 6000);

            try {
                await fetch(CBT_CONFIG.scriptUrl, {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: formData.toString(),
                    signal: controller.signal
                });
            } catch (fetchErr) {
                try {
                    fetch(CBT_CONFIG.scriptUrl, {
                        method: "POST",
                        mode: "no-cors",
                        headers: { "Content-Type": "application/x-www-form-urlencoded" },
                        body: formData.toString()
                    });
                } catch (e2) {}
            } finally {
                clearTimeout(timeoutId);
            }
        } catch (err) {
            console.error("Submission error handled:", err);
        } finally {
            hideLoading();
            playChime("success");

            const successModal = document.getElementById("premiumSuccessModal");
            if (successModal) {
                successModal.style.display = "flex";
            } else {
                window.location.replace("index.html");
            }
        }
    }

    function exitToPortalHome() {
        window.location.replace("index.html");
    }

    function openRetestModal(descText) {
        const modal = document.getElementById("retestAuthModal");
        const desc = document.getElementById("retestModalDesc");
        const passField = document.getElementById("adminPasscodeField");
        const err = document.getElementById("retestPassError");

        if (desc && descText) desc.innerHTML = descText;
        if (err) err.style.display = "none";
        if (modal) modal.style.display = "flex";
        if (passField) {
            passField.value = "";
            setTimeout(() => passField.focus(), 150);
        }
    }

    function verifyRetestPasscode() {
        const passField = document.getElementById("adminPasscodeField");
        const err = document.getElementById("retestPassError");
        const entered = passField ? passField.value.trim().toUpperCase() : "";

        if (CBT_CONFIG.masterKeys.map(k => k.toUpperCase()).includes(entered)) {
            playChime("success");
            try {
                const candKey = getCandidateKey();
                clearSavedCandidateSession(candKey);
                localStorage.setItem(`reattemptGranted_${candKey}`, "true");
            } catch (e) {}

            const modal = document.getElementById("retestAuthModal");
            if (modal) modal.style.display = "none";
            showToast("✅ Authorization confirmed! Starting fresh re-test...");
            setTimeout(() => window.location.reload(), 350);
        } else {
            playChime("error");
            if (err) {
                err.textContent = "❌ अमान्य पासवर्ड!";
                err.style.display = "block";
            }
        }
    }

    function cancelRetestExit() {
        window.location.replace("index.html");
    }

    function openCustomDialog(title, message, icon, onConfirm, showCancel = false) {
        const modal = document.getElementById("customDialogModal");
        const titleEl = document.getElementById("customDialogTitle");
        const msgEl = document.getElementById("customDialogMsg");
        const iconEl = document.getElementById("customDialogIcon");
        const okBtn = document.getElementById("customDialogOkBtn");
        const cancelBtn = document.getElementById("customDialogCancelBtn");

        if (titleEl) titleEl.innerHTML = title;
        if (msgEl) msgEl.innerHTML = message;
        if (iconEl) iconEl.textContent = icon || "⚠️";
        if (cancelBtn) cancelBtn.style.display = showCancel ? "inline-block" : "none";

        if (okBtn) {
            okBtn.onclick = function () {
                if (modal) modal.style.display = "none";
                if (typeof onConfirm === "function") onConfirm();
            };
        }
        if (cancelBtn) {
            cancelBtn.onclick = function () { if (modal) modal.style.display = "none"; };
        }
        if (modal) modal.style.display = "flex";
    }

    function showLoading(msg) {
        const overlay = document.getElementById("loadingOverlay");
        const text = document.getElementById("loadingText");
        if (overlay) overlay.style.display = "flex";
        if (text && msg) text.textContent = msg;
    }

    function hideLoading() {
        const overlay = document.getElementById("loadingOverlay");
        if (overlay) overlay.style.display = "none";
    }

    function showToast(msg) {
        const toast = document.getElementById("cbtToast");
        if (toast) {
            toast.textContent = msg;
            toast.style.display = "block";
            setTimeout(() => { toast.style.display = "none"; }, 3200);
        }
    }

    function playChime(type) {
        try {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            const ctx = new AudioCtx();
            if (ctx.state === "suspended") ctx.resume();

            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            if (type === "success") {
                osc.type = "sine";
                osc.frequency.setValueAtTime(523.25, ctx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.18);
                gain.gain.setValueAtTime(0.2, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
            } else if (type === "error") {
                osc.type = "sawtooth";
                osc.frequency.setValueAtTime(170, ctx.currentTime);
                osc.frequency.linearRampToValueAtTime(110, ctx.currentTime + 0.2);
                gain.gain.setValueAtTime(0.2, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
            } else if (type === "click") {
                osc.type = "sine";
                osc.frequency.setValueAtTime(750, ctx.currentTime);
                gain.gain.setValueAtTime(0.04, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
            }

            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.45);
        } catch (e) {}
    }

    function playPoliceSirenSound() {
        try {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            const ctx = new AudioCtx();
            if (ctx.state === "suspended") ctx.resume();

            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            const filter = ctx.createBiquadFilter();

            osc.type = "sawtooth";
            filter.type = "lowpass";
            filter.frequency.setValueAtTime(1600, ctx.currentTime);

            const now = ctx.currentTime;
            const wails = 3;
            const wTime = 0.45;

            osc.frequency.setValueAtTime(650, now);
            for (let i = 0; i < wails; i++) {
                const start = now + (i * wTime);
                osc.frequency.linearRampToValueAtTime(1350, start + (wTime / 2));
                osc.frequency.linearRampToValueAtTime(650, start + wTime);
            }

            gain.gain.setValueAtTime(0.01, now);
            gain.gain.linearRampToValueAtTime(0.4, now + 0.05);
            gain.gain.setValueAtTime(0.4, now + (wails * wTime) - 0.08);
            gain.gain.linearRampToValueAtTime(0.001, now + (wails * wTime));

            osc.connect(filter);
            filter.connect(gain);
            gain.connect(ctx.destination);

            osc.start(now);
            osc.stop(now + (wails * wTime));
        } catch (e) {}
    }

    function detectTopicName(idx) {
        if (idx >= 0 && idx < 5) return "Cuboid (घनाभ)";
        if (idx >= 5 && idx < 10) return "Cube (घन)";
        if (idx >= 10 && idx < 15) return "Triangle (त्रिभुज)";
        if (idx >= 15 && idx < 20) return "Profit & Loss (लाभ-हानि)";
        if (idx >= 20 && idx < 25) return "BODMAS Calculations";
        if (idx >= 25 && idx < 30) return "Equations (समीकरण)";
        if (idx >= 30 && idx < 35) return "Simple Interest (ब्याज)";
        return "Logical Reasoning";
    }

    function extractCleanOptionText(rawOption) {
        if (!rawOption) return "";
        return String(rawOption).replace(/^\([a-dA-D]\)\s*/, "").trim();
    }

    function getCorrectOptionLetter(q) {
        if (!q) return "--";
        const ans = String(q.answer || q.correct || "").trim().toLowerCase();
        if (ans.includes("(a)") || ans === "a") return "A";
        if (ans.includes("(b)") || ans === "b") return "B";
        if (ans.includes("(c)") || ans === "c") return "C";
        if (ans.includes("(d)") || ans === "d") return "D";
        return "--";
    }

    function formatTimeSeconds(seconds) {
        if (!seconds || isNaN(seconds) || seconds <= 0) return "0s";
        const secNum = Math.round(seconds);
        if (secNum < 60) return `${secNum}s`;
        const m = Math.floor(secNum / 60);
        const s = secNum % 60;
        return s > 0 ? `${m}m ${s}s` : `${m}m`;
    }

    window.handleOptionSelect = handleOptionSelect;
    window.clearSelectedResponse = clearSelectedResponse;
    window.toggleReviewQuestion = toggleReviewQuestion;
    window.nextQuestion = nextQuestion;
    window.prevQuestion = prevQuestion;
    window.jumpToQuestion = jumpToQuestion;
    window.changeQuestionLanguage = changeQuestionLanguage;
    window.confirmSubmitTest = confirmSubmitTest;
    window.submitTestFromButton = confirmSubmitTest;
    window.exitToPortalHome = exitToPortalHome;
    window.verifyRetestPasscode = verifyRetestPasscode;
    window.cancelRetestExit = cancelRetestExit;

})(window, document);