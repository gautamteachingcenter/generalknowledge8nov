/**
 * =========================================================================
 * 🎓 GAUTAM TEACHING CENTRE (GTC) - OFFICIAL CBT QUESTION BANK
 * File: js/questions.js
 * Subject: सामान्य विज्ञान (General Science - 10 Topics Complete Set)
 * Total Questions: 50 (5 Questions Per Topic)
 * 
 * Verified Official Answer Key (50 Questions):
 * Q01-Q10: B C D A B | A C B D C
 * Q11-Q20: B A C D B | A C B D A
 * Q21-Q30: B C A D C | B A D C B
 * Q31-Q40: B C D A B | C A D B C
 * Q41-Q50: B C A D B | C D A B C
 * =========================================================================
 */

const questions = [
  // =======================================================================
  // 🫀 1. मानव शरीर एवं स्वास्थ्य (Human Body & Health) [Q1 - Q5]
  // =======================================================================

  // Q1 Target Key: B (यकृत / Liver)
  {
    id: 1,
    topic: "मानव शरीर एवं स्वास्थ्य",
    question_hi: "मानव शरीर की सबसे बड़ी ग्रंथि कौन-सी है?",
    question_en: "Which is the largest gland in the human body?",
    options_hi: ["(a) अग्न्याशय (Pancreas)", "(b) यकृत (Liver)", "(c) थायरॉइड ग्रंथि (Thyroid)", "(d) पीयूष ग्रंथि (Pituitary)"],
    options_en: ["(a) Pancreas", "(b) Liver", "(c) Thyroid Gland", "(d) Pituitary Gland"],
    answer: "(b)",
    formula_hi: "मानव शरीर की सबसे बड़ी आंतरिक ग्रंथि = यकृत (Liver) [भार: लगभग 1.5 किग्रा]",
    formula_en: "Largest internal gland of human body = Liver [Weight: ~1.5 kg]",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• मानव शरीर की सबसे बड़ी ग्रंथि <b>यकृत (Liver)</b> है।<br>• यह पित्त रस (Bile Juice) का निर्माण करता है जो वसा के पाचन में सहायक होता है।<br><br><b>2. अन्य विकल्पों का विश्लेषण:</b><br>• <b>त्वचा (Skin):</b> यह शरीर का सबसे बड़ा बाह्य अंग (Organ) है।<br>• <b>पीयूष ग्रंथि (Pituitary):</b> इसे मास्टर ग्रंथि कहते हैं और यह सबसे छोटी अंतःस्रावी ग्रंथि है।",
    solution_en: "<b>1. Key Fact:</b><br>• The <b>Liver</b> is the largest gland in the human body.<br>• It secretes bile juice which helps in the digestion of fats.<br><br><b>2. Other Options:</b><br>• <b>Skin</b> is the largest external organ.<br>• <b>Pituitary gland</b> is the master gland.",
    trick_hi: "याद रखें: सबसे बड़ा अंग पूछे तो 'त्वचा', और सबसे बड़ी ग्रंथि पूछे तो 'यकृत (Liver)'!",
    trick_en: "Largest Organ = Skin | Largest Gland = Liver!",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#065f46" text-anchor="middle">मानव शरीर की सबसे बड़ी ग्रंथि</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#059669" text-anchor="middle">यकृत (Liver) — पित्त रस का निर्माण</text>
    </svg>`
  },

  // Q2 Target Key: C (गुर्दे / Kidneys)
  {
    id: 2,
    topic: "मानव शरीर एवं स्वास्थ्य",
    question_hi: "रक्त को शुद्ध करने का कार्य कौन करता है?",
    question_en: "Which organ performs the function of purifying (filtering) blood in the human body?",
    options_hi: ["(a) हृदय (Heart)", "(b) आमाशय (Stomach)", "(c) गुर्दे (Kidneys)", "(d) यकृत (Liver)"],
    options_en: ["(a) Heart", "(b) Stomach", "(c) Kidneys", "(d) Liver"],
    answer: "(c)",
    formula_hi: "रक्त का छनन (Ultrafiltration) एवं शुद्धिकरण = गुर्दे (Kidneys / वृक्क)",
    formula_en: "Blood filtration and nitrogenous waste removal = Kidneys",
    solution_hi: "<b>1. मुख्य कार्य:</b><br>• मानव शरीर में रक्त को छानकर शुद्ध करने (अपशिष्ट पदार्थ जैसे यूरिया को अलग करने) का कार्य <b>गुर्दे (Kidneys / वृक्क)</b> करते हैं।<br>• गुर्दे की कार्यात्मक इकाई को <b>नेफ्रॉन (Nephron)</b> कहा जाता है।<br><br><b>2. विशेष अंतर:</b><br>• फेफड़े रक्त में ऑक्सीजन मिलाते हैं, जबकि गुर्दे रक्त से अशुद्धियों को छानकर मूत्र के रूप में बाहर निकालते हैं।",
    solution_en: "<b>1. Core Function:</b><br>• <b>Kidneys</b> filter the blood to remove nitrogenous waste products (like urea) and excess water as urine.<br>• The structural and functional unit of the kidney is the <b>Nephron</b>.",
    trick_hi: "किडनी (गुर्दे) शरीर का 'वाटर और ब्लड फिल्टर' है जो रक्त से यूरिया छानता है।",
    trick_en: "Kidneys act as the natural blood filter of the body.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#1e40af" text-anchor="middle">रक्त शुद्धिकरण एवं छनन (Blood Filtration)</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#2563eb" text-anchor="middle">गुर्दे (Kidneys) • इकाई: नेफ्रॉन (Nephron)</text>
    </svg>`
  },

  // Q3 Target Key: D (चार / Four)
  {
    id: 3,
    topic: "मानव शरीर एवं स्वास्थ्य",
    question_hi: "मानव हृदय में कितने कक्ष होते हैं?",
    question_en: "How many chambers are there in the human heart?",
    options_hi: ["(a) दो", "(b) तीन", "(c) पाँच", "(d) चार"],
    options_en: ["(a) Two", "(b) Three", "(c) Five", "(d) Four"],
    answer: "(d)",
    formula_hi: "मानव हृदय के कक्ष = 4 (2 अलिंद + 2 निलय)",
    formula_en: "Chambers in Human Heart = 4 (2 Atria + 2 Ventricles)",
    solution_hi: "<b>1. हृदय की संरचना:</b><br>• मानव हृदय में कुल <b>चार (4) कक्ष</b> होते हैं:<br>  1. दायाँ अलिंद (Right Atrium)<br>  2. बायाँ अलिंद (Left Atrium)<br>  3. दायाँ निलय (Right Ventricle)<br>  4. बायाँ निलय (Left Ventricle)<br><br><b>2. लाभ:</b><br>• चार कक्ष होने के कारण ऑक्सीजन युक्त (शुद्ध) और कार्बन डाइऑक्साइड युक्त (अशुद्ध) रक्त आपस में नहीं मिलते।",
    solution_en: "<b>1. Structure of Heart:</b><br>• The human heart has <b>Four (4) chambers</b>: two upper Atria (left & right) and two lower Ventricles (left & right).<br>• This ensures complete separation of oxygenated and deoxygenated blood.",
    trick_hi: "ऊपर के 2 कमरे 'अलिंद' और नीचे के 2 कमरे 'निलय' — कुल = 4 कक्ष!",
    trick_en: "2 Upper Atria + 2 Lower Ventricles = 4 Chambers.",
    diagram_svg: `<svg viewBox="0 0 350 115" width="100%" height="108" xmlns="http://www.w3.org/2000/svg">
      <rect x="35" y="15" width="130" height="40" rx="6" fill="#fee2e2" stroke="#dc2626" stroke-width="1.6"/>
      <text x="100" y="40" font-size="11" font-weight="900" fill="#991b1b" text-anchor="middle">1. दायाँ अलिंद</text>
      <rect x="185" y="15" width="130" height="40" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1.6"/>
      <text x="250" y="40" font-size="11" font-weight="900" fill="#166534" text-anchor="middle">2. बायाँ अलिंद</text>
      <rect x="35" y="62" width="130" height="40" rx="6" fill="#fecaca" stroke="#dc2626" stroke-width="1.6"/>
      <text x="100" y="87" font-size="11" font-weight="900" fill="#991b1b" text-anchor="middle">3. दायाँ निलय</text>
      <rect x="185" y="62" width="130" height="40" rx="6" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.6"/>
      <text x="250" y="87" font-size="11" font-weight="900" fill="#166534" text-anchor="middle">4. बायाँ निलय</text>
    </svg>`
  },

  // Q4 Target Key: A (स्टेपीज / Stapes)
  {
    id: 4,
    topic: "मानव शरीर एवं स्वास्थ्य",
    question_hi: "मानव शरीर की सबसे छोटी हड्डी कौन-सी है?",
    question_en: "Which is the smallest bone in the human body?",
    options_hi: ["(a) स्टेपीज (कान में)", "(b) फीमर (जांघ में)", "(c) टिबिया (पैर में)", "(d) ह्यूमरस (भुजा में)"],
    options_en: ["(a) Stapes (in Ear)", "(b) Femur (in Thigh)", "(c) Tibia (in Leg)", "(d) Humerus (in Arm)"],
    answer: "(a)",
    formula_hi: "सबसे छोटी हड्डी = स्टेपीज (मध्य कान में स्थित, लंबाई ~3 मिमी)",
    formula_en: "Smallest Bone = Stapes (Located in middle ear, length ~3 mm)",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• मानव शरीर की सबसे छोटी और सबसे हल्की हड्डी <b>स्टेपीज (Stapes)</b> है, जो हमारे <b>मध्य कान (Middle Ear)</b> में पाई जाती है।<br>• प्रत्येक कान में 3 हड्डियाँ होती हैं: मेलियस, इनकस और स्टेपीज।",
    solution_en: "<b>1. Key Fact:</b><br>• <b>Stapes</b> (stirrup) is the smallest and lightest bone in the human body, located in the middle ear.<br>• Its size is only about 3 millimeters.",
    trick_hi: "कान की 'स्टेपीज' सबसे छोटी और जांघ की 'फीमर' सबसे लंबी हड्डी है।",
    trick_en: "Smallest = Stapes (Ear) | Longest = Femur (Thigh).",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#92400e" text-anchor="middle">मानव शरीर की सबसे छोटी हड्डी</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#b45309" text-anchor="middle">स्टेपीज (Stapes) — मध्य कान में स्थित</text>
    </svg>`
  },

  // Q5 Target Key: B (फीमर / Femur)
  {
    id: 5,
    topic: "मानव शरीर एवं स्वास्थ्य",
    question_hi: "मानव शरीर की सबसे लंबी हड्डी कौन-सी है?",
    question_en: "Which is the longest bone in the human body?",
    options_hi: ["(a) स्टेपीज (कान की हड्डी)", "(b) फीमर (जांघ की हड्डी)", "(c) रेडियस (हाथ की हड्डी)", "(d) पटेला (घुटने की हड्डी)"],
    options_en: ["(a) Stapes (Ear bone)", "(b) Femur (Thigh bone)", "(c) Radius (Arm bone)", "(d) Patella (Knee bone)"],
    answer: "(b)",
    formula_hi: "मानव शरीर की सबसे लंबी व मजबूत हड्डी = फीमर (जांघ की हड्डी)",
    formula_en: "Longest & Strongest Bone = Femur (Thigh bone)",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• मानव शरीर की सबसे लंबी और सबसे मजबूत हड्डी <b>फीमर (Femur)</b> है, जिसे उरु अस्थि या <b>जांघ की हड्डी (Thigh Bone)</b> भी कहते हैं।<br>• यह शरीर के कुल भार को सहारा देने का मुख्य कार्य करती है।",
    solution_en: "<b>1. Key Fact:</b><br>• The <b>Femur</b> (thigh bone) is the longest, heaviest, and strongest bone in the human body.",
    trick_hi: "जांघ की हड्डी 'फीमर' शरीर की सबसे लंबी और सबसे मजबूत हड्डी होती है।",
    trick_en: "Femur in the thigh is the longest bone in our skeleton.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#0369a1" text-anchor="middle">मानव शरीर की सबसे लंबी एवं मजबूत हड्डी</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#0284c7" text-anchor="middle">फीमर (Femur) — जांघ की हड्डी</text>
    </svg>`
  },

  // =======================================================================
  // 🍎 2. पोषण एवं विटामिन (Nutrition & Vitamins) [Q6 - Q10]
  // =======================================================================

  // Q6 Target Key: A (कार्बोहाइड्रेट / Carbohydrate)
  {
    id: 6,
    topic: "पोषण एवं विटामिन",
    question_hi: "शरीर को ऊर्जा देने वाला मुख्य पोषक तत्व कौन-सा है?",
    question_en: "Which is the main energy-giving nutrient for the body?",
    options_hi: ["(a) कार्बोहाइड्रेट", "(b) प्रोटीन", "(c) विटामिन", "(d) खनिज लवण"],
    options_en: ["(a) Carbohydrate", "(b) Protein", "(c) Vitamin", "(d) Minerals"],
    answer: "(a)",
    formula_hi: "त्वरित एवं मुख्य ऊर्जादायक पोषक तत्व = कार्बोहाइड्रेट (चावल, रोटी, आलू, ग्लूकोज)",
    formula_en: "Primary Energy-Giving Nutrient = Carbohydrate (Rice, Wheat, Potato, Glucose)",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• हमारे शरीर को दैनिक कार्यों के लिए तुरंत और मुख्य ऊर्जा देने वाला पोषक तत्व <b>कार्बोहाइड्रेट (Carbohydrate)</b> है।<br>• पाचन के बाद कार्बोहाइड्रेट <b>ग्लूकोज</b> में बदल जाता है जो कोशिकाओं को ऊर्जा प्रदान करता है।",
    solution_en: "<b>1. Key Fact:</b><br>• <b>Carbohydrates</b> are the primary source of immediate energy for the human body.<br>• Sources include wheat, rice, potatoes, bananas, and sugar.",
    trick_hi: "ऊर्जा के लिए 'कार्बोहाइड्रेट', शरीर निर्माण के लिए 'प्रोटीन', और रोगों से रक्षा के लिए 'विटामिन'!",
    trick_en: "Energy = Carbohydrates | Body-building = Proteins | Protection = Vitamins!",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#065f46" text-anchor="middle">शरीर को ऊर्जा देने वाला मुख्य पोषक तत्व</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#059669" text-anchor="middle">⚡ कार्बोहाइड्रेट (Carbohydrate)</text>
    </svg>`
  },

  // Q7 Target Key: C (प्रोटीन / Protein)
  {
    id: 7,
    topic: "पोषण एवं विटामिन",
    question_hi: "शरीर की वृद्धि एवं मरम्मत के लिए कौन-सा पोषक तत्व आवश्यक है?",
    question_en: "Which nutrient is essential for the growth and repair of the body?",
    options_hi: ["(a) कार्बोहाइड्रेट", "(b) वसा", "(c) प्रोटीन", "(d) जल"],
    options_en: ["(a) Carbohydrate", "(b) Fat", "(c) Protein", "(d) Water"],
    answer: "(c)",
    formula_hi: "शरीर वर्धक भोजन (Body-Building Food) = प्रोटीन",
    formula_en: "Body-Building & Tissue Repair Nutrient = Protein",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• शरीर की नई कोशिकाओं के निर्माण, शारीरिक वृद्धि और टूटे-फूटे ऊतकों की मरम्मत के लिए <b>प्रोटीन (Protein)</b> आवश्यक है।<br>• प्रोटीन के प्रमुख स्रोत: दालें, सोयाबीन, दूध, पनीर, अंडे और मूंगफली हैं।",
    solution_en: "<b>1. Key Fact:</b><br>• <b>Proteins</b> are known as body-building nutrients because they are essential for body growth and repair of damaged tissues.<br>• Rich sources: Pulses, soybean, milk, eggs, and nuts.",
    trick_hi: "मांसपेशियों और शरीर की वृद्धि व मरम्मत (Repair) करने वाला मिस्त्री 'प्रोटीन' है!",
    trick_en: "Protein = Body Builder & Tissue Repairer.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#eef2ff" stroke="#4f46e5" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#3730a3" text-anchor="middle">शरीर की वृद्धि एवं ऊतकों की मरम्मत</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#4f46e5" text-anchor="middle">💪 प्रोटीन (Protein) — दालें, सोयाबीन, दूध</text>
    </svg>`
  },

  // Q8 Target Key: B (रतौंधी / Night Blindness)
  {
    id: 8,
    topic: "पोषण एवं विटामिन",
    question_hi: "विटामिन A की कमी से कौन-सा रोग होता है?",
    question_en: "Which disease is caused by the deficiency of Vitamin A?",
    options_hi: ["(a) बेरी-बेरी", "(b) रतौंधी", "(c) स्कर्वी", "(d) रिकेट्स"],
    options_en: ["(a) Beri-Beri", "(b) Night Blindness", "(c) Scurvy", "(d) Rickets"],
    answer: "(b)",
    formula_hi: "विटामिन A (रेटिनॉल) की कमी = रतौंधी (कम रोशनी में दिखाई न देना)",
    formula_en: "Deficiency of Vitamin A (Retinol) = Night Blindness",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• <b>विटामिन A</b> हमारी आँखों की रोशनी के लिए अत्यंत आवश्यक है। इसकी कमी से <b>रतौंधी (Night Blindness)</b> नामक रोग हो जाता है, जिसमें रात या कम प्रकाश में स्पष्ट दिखाई नहीं देता।<br>• मुख्य स्रोत: गाजर, पपीता, आम, हरी पत्तेदार सब्जियाँ और दूध।",
    solution_en: "<b>1. Key Fact:</b><br>• Deficiency of <b>Vitamin A</b> causes <b>Night Blindness</b>, where a person finds it difficult to see in dim light or at night.<br>• Rich sources: Carrots, papaya, mango, and green leafy vegetables.",
    trick_hi: "A = आँख (रतौंधी) | B = बेरी-बेरी | C = स्कर्वी | D = रिकेट्स।",
    trick_en: "Vit A = Eyes (Night Blindness) | Vit B = Beri-Beri | Vit C = Scurvy | Vit D = Rickets.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#92400e" text-anchor="middle">विटामिन A की कमी से होने वाला रोग</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#d97706" text-anchor="middle">👁️ रतौंधी (Night Blindness) • स्रोत: गाजर</text>
    </svg>`
  },

  // Q9 Target Key: D (स्कर्वी / Scurvy)
  {
    id: 9,
    topic: "पोषण एवं विटामिन",
    question_hi: "विटामिन C की कमी से कौन-सा रोग होता है?",
    question_en: "Which disease is caused by the deficiency of Vitamin C?",
    options_hi: ["(a) घेंघा", "(b) रिकेट्स", "(c) रतौंधी", "(d) स्कर्वी"],
    options_en: ["(a) Goitre", "(b) Rickets", "(c) Night Blindness", "(d) Scurvy"],
    answer: "(d)",
    formula_hi: "विटामिन C (एस्कॉर्बिक अम्ल) की कमी = स्कर्वी (मसूड़ों से खून आना)",
    formula_en: "Deficiency of Vitamin C (Ascorbic Acid) = Scurvy (Bleeding gums)",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• <b>विटामिन C</b> की कमी से <b>स्कर्वी (Scurvy)</b> रोग होता है, जिसमें मसूड़ों में सूजन आ जाती है और खून निकलने लगता है।<br>• मुख्य स्रोत: आंवला, नींबू, संतरा और सभी खट्टे रसीले फल।",
    solution_en: "<b>1. Key Fact:</b><br>• Deficiency of <b>Vitamin C</b> causes <b>Scurvy</b>, characterized by bleeding and swollen gums.<br>• Rich sources: Amla (Indian gooseberry), lemon, orange, and citrus fruits.",
    trick_hi: "खट्टे फलों में विटामिन C मिलता है, जिसकी कमी से मसूड़ों का रोग 'स्कर्वी' होता है।",
    trick_en: "Citrus fruits give Vitamin C and prevent Scurvy.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#fef2f2" stroke="#ef4444" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#991b1b" text-anchor="middle">विटामिन C की कमी से होने वाला रोग</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#dc2626" text-anchor="middle">🍋 स्कर्वी (Scurvy) • मुख्य स्रोत: आंवला व नींबू</text>
    </svg>`
  },

  // Q10 Target Key: C (घेंघा / Goitre)
  {
    id: 10,
    topic: "पोषण एवं विटामिन",
    question_hi: "आयोडीन की कमी से कौन-सा रोग होता है?",
    question_en: "Which disease is caused by the deficiency of Iodine?",
    options_hi: ["(a) एनीमिया", "(b) रिकेट्स", "(c) घेंघा", "(d) बेरी-बेरी"],
    options_en: ["(a) Anaemia", "(b) Rickets", "(c) Goitre", "(d) Beri-Beri"],
    answer: "(c)",
    formula_hi: "आयोडीन खनिज की कमी = घेंघा (Goitre / गलगंड) रोग",
    formula_en: "Deficiency of Iodine mineral = Goitre (Swelling in neck thyroid gland)",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• हमारे भोजन में <b>आयोडीन (Iodine)</b> की कमी से गले की थायरॉइड ग्रंथि फूल जाती है, जिसे <b>घेंघा (Goitre)</b> या गलगंड रोग कहते हैं।<br>• इससे बचाव के लिए आयोडीन युक्त नमक का सेवन किया जाता है।",
    solution_en: "<b>1. Key Fact:</b><br>• Deficiency of <b>Iodine</b> in the diet leads to enlargement of the thyroid gland in the neck, causing <b>Goitre</b>.",
    trick_hi: "आयोडीन युक्त नमक खाएं, गले के 'घेंघा' रोग को दूर भगाएं!",
    trick_en: "Iodized salt prevents Goitre.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#0369a1" text-anchor="middle">आयोडीन खनिज की कमी से होने वाला रोग</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#0284c7" text-anchor="middle">घेंघा (Goitre) — थायरॉइड ग्रंथि में सूजन</text>
    </svg>`
  },

  // =======================================================================
  // 🌿 3. पौधे एवं वनस्पति विज्ञान (Plants & Botany) [Q11 - Q15]
  // =======================================================================

  // Q11 Target Key: B (प्रकाश संश्लेषण / Photosynthesis)
  {
    id: 11,
    topic: "पौधे एवं वनस्पति विज्ञान",
    question_hi: "पौधे अपना भोजन किस प्रक्रिया द्वारा बनाते हैं?",
    question_en: "By which process do green plants prepare their own food?",
    options_hi: ["(a) वाष्पोत्सर्जन", "(b) प्रकाश संश्लेषण", "(c) श्वसन", "(d) किण्वन"],
    options_en: ["(a) Transpiration", "(b) Photosynthesis", "(c) Respiration", "(d) Fermentation"],
    answer: "(b)",
    formula_hi: "भोजन निर्माण की प्रक्रिया = प्रकाश संश्लेषण (सूर्य का प्रकाश + क्लोरोफिल + CO₂ + जल)",
    formula_en: "Food preparation in green plants = Photosynthesis",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• हरे पौधे सूर्य के प्रकाश और क्लोरोफिल की उपस्थिति में कार्बन डाइऑक्साइड तथा जल की सहायता से अपना भोजन (ग्लूकोज) स्वयं बनाते हैं। इस प्रक्रिया को <b>प्रकाश संश्लेषण (Photosynthesis)</b> कहते हैं।<br>• इस प्रक्रिया में पौधे जीवनदायिनी <b>ऑक्सीजन गैस</b> मुक्त करते हैं।",
    solution_en: "<b>1. Key Fact:</b><br>• Green plants synthesize their own food using sunlight, chlorophyll, carbon dioxide, and water through the process called <b>Photosynthesis</b>.",
    trick_hi: "प्रकाश (सूर्य की रोशनी) की मदद से भोजन का संश्लेषण = प्रकाश संश्लेषण!",
    trick_en: "Photo (Light) + Synthesis (Putting together) = Photosynthesis.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="1.8"/>
      <text x="175" y="45" font-size="11.5" font-weight="800" fill="#065f46" text-anchor="middle">CO₂ + जल + सूर्य का प्रकाश + क्लोरोफिल</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#059669" text-anchor="middle">🌿 प्रकाश संश्लेषण (Photosynthesis)</text>
    </svg>`
  },

  // Q12 Target Key: A (क्लोरोफिल / Chlorophyll)
  {
    id: 12,
    topic: "पौधे एवं वनस्पति विज्ञान",
    question_hi: "पौधों में हरा रंग किसके कारण होता है?",
    question_en: "Due to which pigment do plant leaves appear green?",
    options_hi: ["(a) क्लोरोफिल", "(b) हीमोग्लोबिन", "(c) कैरोटीन", "(d) जाइलम"],
    options_en: ["(a) Chlorophyll", "(b) Haemoglobin", "(c) Carotene", "(d) Xylem"],
    answer: "(a)",
    formula_hi: "पत्तियों का हरा वर्णक = क्लोरोफिल (पर्णहरित)",
    formula_en: "Green pigment in leaves = Chlorophyll",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• पेड़-पौधों की पत्तियों का हरा रंग उनमें उपस्थित हरे वर्णक <b>क्लोरोफिल (Chlorophyll / पर्णहरित)</b> के कारण होता है।<br>• क्लोरोफिल सूर्य की प्रकाश ऊर्जा को ग्रहण करने में मुख्य भूमिका निभाता है।",
    solution_en: "<b>1. Key Fact:</b><br>• Leaves are green due to the presence of a green pigment called <b>Chlorophyll</b> inside chloroplasts, which traps solar energy for photosynthesis.",
    trick_hi: "खून का लाल रंग 'हीमोग्लोबिन' से और पत्तियों का हरा रंग 'क्लोरोफिल' से होता है!",
    trick_en: "Red Blood = Haemoglobin | Green Leaf = Chlorophyll.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#15803d" text-anchor="middle">पौधों की पत्तियों में हरा रंग</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#16a34a" text-anchor="middle">🍃 क्लोरोफिल (Chlorophyll / पर्णहरित)</text>
    </svg>`
  },

  // Q13 Target Key: C (जाइलम / Xylem)
  {
    id: 13,
    topic: "पौधे एवं वनस्पति विज्ञान",
    question_hi: "पौधों में जल एवं खनिजों का परिवहन कौन करता है?",
    question_en: "Which tissue transports water and minerals in plants?",
    options_hi: ["(a) फ्लोएम", "(b) रंध्र", "(c) जाइलम", "(d) क्लोरोप्लास्ट"],
    options_en: ["(a) Phloem", "(b) Stomata", "(c) Xylem", "(d) Chloroplast"],
    answer: "(c)",
    formula_hi: "जड़ों से पत्तियों तक जल एवं खनिज का संवहन = जाइलम (Xylem)",
    formula_en: "Conduction of Water & Minerals from roots = Xylem",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• पौधों में जड़ों द्वारा अवशोषित जल एवं खनिज लवणों को पौधे के सभी भागों और पत्तियों तक पहुँचाने का कार्य <b>जाइलम (Xylem)</b> ऊतक करता है।",
    solution_en: "<b>1. Key Fact:</b><br>• <b>Xylem</b> is the vascular tissue responsible for transporting water and dissolved minerals upward from the roots to the leaves.",
    trick_hi: "'ज' से जल और 'ज' से जाइलम (Xylem) — कभी नहीं भूलेगा!",
    trick_en: "'J' for Jal (Water) = 'J' for Xylem (जाइलम)!",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#0369a1" text-anchor="middle">पौधों में जल (Water) एवं खनिजों का परिवहन</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#0284c7" text-anchor="middle">💧 जाइलम (Xylem) — जड़ों से पत्तियों तक</text>
    </svg>`
  },

  // Q14 Target Key: D (फ्लोएम / Phloem)
  {
    id: 14,
    topic: "पौधे एवं वनस्पति विज्ञान",
    question_hi: "पौधों में बने भोजन का परिवहन कौन करता है?",
    question_en: "Which vascular tissue transports prepared food in plants?",
    options_hi: ["(a) जाइलम", "(b) जड़", "(c) तना", "(d) फ्लोएम"],
    options_en: ["(a) Xylem", "(b) Root", "(c) Stem", "(d) Phloem"],
    answer: "(d)",
    formula_hi: "पत्तियों में बने भोजन (Food) का संवहन = फ्लोएम (Phloem)",
    formula_en: "Translocation of prepared Food from leaves = Phloem",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• पत्तियों में प्रकाश संश्लेषण द्वारा निर्मित भोजन को पौधे के अन्य सभी भागों तक पहुँचाने का कार्य <b>फ्लोएम (Phloem)</b> ऊतक करता है।",
    solution_en: "<b>1. Key Fact:</b><br>• <b>Phloem</b> transports the food (glucose/sucrose) synthesized in the leaves to all other parts of the plant.",
    trick_hi: "'फ' से फल/फूड (भोजन) और 'फ' से फ्लोएम (Phloem)!",
    trick_en: "'Ph' for Phloem = 'F' for Food transport!",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#92400e" text-anchor="middle">पौधों में बने भोजन (Food) का परिवहन</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#b45309" text-anchor="middle">🌾 फ्लोएम (Phloem) — पत्तियों से सभी अंगों तक</text>
    </svg>`
  },

  // Q15 Target Key: B (रंध्र / Stomata)
  {
    id: 15,
    topic: "पौधे एवं वनस्पति विज्ञान",
    question_hi: "पत्तियों में गैसों का आदान-प्रदान किसके द्वारा होता है?",
    question_en: "Through which tiny pores does the exchange of gases take place in plant leaves?",
    options_hi: ["(a) शिराओं द्वारा", "(b) रंध्र (Stomata)", "(c) छाल द्वारा", "(d) मूलरोम द्वारा"],
    options_en: ["(a) Veins", "(b) Stomata", "(c) Bark", "(d) Root hairs"],
    answer: "(b)",
    formula_hi: "पत्तियों में गैसों का विनिमय एवं वाष्पोत्सर्जन = रंध्र (Stomata)",
    formula_en: "Gaseous exchange and transpiration in leaves = Stomata",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• पत्तियों की सतह पर पाए जाने वाले अत्यंत सूक्ष्म छिद्रों को <b>रंध्र (Stomata)</b> कहते हैं।<br>• इन्हीं रंध्रों के माध्यम से पौधे कार्बन डाइऑक्साइड ग्रहण करते हैं और ऑक्सीजन बाहर छोड़ते हैं।",
    solution_en: "<b>1. Key Fact:</b><br>• <b>Stomata</b> are tiny pores on the surface of leaves guarded by guard cells that control gas exchange ($CO_2$ and $O_2$) and transpiration.",
    trick_hi: "पत्तियों की नाक 'रंध्र (Stomata)' होती है जिससे पौधे साँस लेते हैं।",
    trick_en: "Stomata are the tiny breathing pores on plant leaves.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#065f46" text-anchor="middle">पत्तियों में गैसों (CO₂ व O₂) का आदान-प्रदान</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#059669" text-anchor="middle">रंध्र (Stomata) — सूक्ष्म छिद्र</text>
    </svg>`
  },

  // =======================================================================
  // 🐋 4. पशु जगत एवं जीव विज्ञान (Animal Kingdom & Biology) [Q16 - Q20]
  // =======================================================================

  // Q16 Target Key: A (नीली व्हेल / Blue Whale)
  {
    id: 16,
    topic: "पशु जगत एवं जीव विज्ञान",
    question_hi: "विश्व का सबसे बड़ा स्तनधारी कौन-सा है?",
    question_en: "Which is the largest mammal in the world?",
    options_hi: ["(a) नीली व्हेल", "(b) अफ्रीकी हाथी", "(c) जिराफ", "(d) सफेद शार्क"],
    options_en: ["(a) Blue Whale", "(b) African Elephant", "(c) Giraffe", "(d) White Shark"],
    answer: "(a)",
    formula_hi: "पृथ्वी का सबसे विशाल जीव एवं सबसे बड़ा स्तनधारी = नीली व्हेल (Blue Whale)",
    formula_en: "Largest mammal on Earth = Blue Whale",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• <b>नीली व्हेल (Blue Whale)</b> पूरी पृथ्वी का सबसे बड़ा जंतु और सबसे बड़ा स्तनधारी (Mammal) जीव है।<br>• स्थल (जमीन) पर पाया जाने वाला सबसे बड़ा स्तनधारी 'अफ्रीकी हाथी' है।",
    solution_en: "<b>1. Key Fact:</b><br>• The <b>Blue Whale</b> is the largest mammal and the largest animal ever known to have lived on Earth.",
    trick_hi: "विश्व का सबसे बड़ा स्तनधारी = नीली व्हेल | जमीन का सबसे बड़ा स्तनधारी = हाथी।",
    trick_en: "Largest Mammal overall = Blue Whale | Largest Land Mammal = Elephant.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#eff6ff" stroke="#2563eb" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#1e40af" text-anchor="middle">विश्व का सबसे विशाल स्तनधारी जीव</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#2563eb" text-anchor="middle">🐋 नीली व्हेल (Blue Whale)</text>
    </svg>`
  },

  // Q17 Target Key: C (प्लैटिपस / Platypus)
  {
    id: 17,
    topic: "पशु जगत एवं जीव विज्ञान",
    question_hi: "कौन-सा स्तनधारी अंडे देता है?",
    question_en: "Which of the following mammals lays eggs?",
    options_hi: ["(a) कंगारू", "(b) चमगादड़", "(c) प्लैटिपस", "(d) डॉल्फिन"],
    options_en: ["(a) Kangaroo", "(b) Bat", "(c) Platypus", "(d) Dolphin"],
    answer: "(c)",
    formula_hi: "अंडे देने वाला स्तनधारी (Monotreme) = प्लैटिपस (Platypus) एवं एकिडना",
    formula_en: "Egg-laying Mammal = Platypus",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• सामान्यतः स्तनधारी जीव सीधे बच्चे को जन्म देते हैं, परंतु <b>प्लैटिपस (Platypus)</b> एक ऐसा अनोखा स्तनधारी है जो <b>अंडे देता है</b> और अपने बच्चों को दूध भी पिलाता है।",
    solution_en: "<b>1. Key Fact:</b><br>• While most mammals give birth to young ones, the <b>Platypus</b> (duck-billed platypus) is an egg-laying mammal (monotreme).",
    trick_hi: "बतख जैसी चोंच वाला 'प्लैटिपस' अंडे देने वाला अनोखा स्तनधारी है!",
    trick_en: "Platypus is a mammal that lays eggs.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#92400e" text-anchor="middle">अंडे देने वाला एकमात्र प्रमुख स्तनधारी</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#b45309" text-anchor="middle">🥚 प्लैटिपस (Platypus)</text>
    </svg>`
  },

  // Q18 Target Key: B (गलफड़ों से / Gills)
  {
    id: 18,
    topic: "पशु जगत एवं जीव विज्ञान",
    question_hi: "मछलियाँ किस अंग से साँस लेती हैं?",
    question_en: "Through which organ do fishes breathe in water?",
    options_hi: ["(a) फेफड़ों से", "(b) गलफड़ों से", "(c) त्वचा से", "(d) पंखों से"],
    options_en: ["(a) Lungs", "(b) Gills", "(c) Skin", "(d) Fins"],
    answer: "(b)",
    formula_hi: "मछलियों का श्वसन अंग = गलफड़े (Gills / क्लोम)",
    formula_en: "Respiratory organ of fishes = Gills",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• मछलियाँ जल में घुली हुई ऑक्सीजन को अपने <b>गलफड़ों (Gills / क्लोम)</b> की सहायता से ग्रहण करके साँस लेती हैं।",
    solution_en: "<b>1. Key Fact:</b><br>• Fishes have specialized respiratory organs called <b>Gills</b> that extract dissolved oxygen from water.",
    trick_hi: "मछली अपने 'गलफड़ों (Gills)' से पानी में घुली ऑक्सीजन लेती है और 'पंखों (Fins)' से तैरती है।",
    trick_en: "Fishes breathe with Gills and swim with Fins.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#0369a1" text-anchor="middle">मछलियों में जलीय श्वसन का मुख्य अंग</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#0284c7" text-anchor="middle">🐟 गलफड़ों से (Gills / क्लोम)</text>
    </svg>`
  },

  // Q19 Target Key: D (उभयचर / Amphibian)
  {
    id: 19,
    topic: "पशु जगत एवं जीव विज्ञान",
    question_hi: "मेंढक किस वर्ग का जीव है?",
    question_en: "To which class of animals does a frog belong?",
    options_hi: ["(a) सरीसृप", "(b) स्तनधारी", "(c) मत्स्य", "(d) उभयचर"],
    options_en: ["(a) Reptile", "(b) Mammal", "(c) Pisces", "(d) Amphibian"],
    answer: "(d)",
    formula_hi: "जल और थल दोनों पर रहने वाले जीव = उभयचर (Amphibian)",
    formula_en: "Animals living both on land and in water = Amphibians",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• <b>मेंढक (Frog)</b> जल और स्थल (जमीन) दोनों पर जीवित रह सकता है, इसलिए यह <b>उभयचर (Amphibian)</b> वर्ग का जीव है।<br>• यह पानी में नम त्वचा से और जमीन पर फेफड़ों से साँस लेता है।",
    solution_en: "<b>1. Key Fact:</b><br>• A frog can live both in water and on land, so it belongs to the class <b>Amphibia (Amphibian)</b>.",
    trick_hi: "'उभय' का अर्थ है 'दोनों' (जल + थल) — मेंढक उभयचर है!",
    trick_en: "Amphi (Both: Land + Water) = Amphibian (Frog).",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#065f46" text-anchor="middle">जल एवं थल दोनों में निवास करने वाला जीव</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#059669" text-anchor="middle">🐸 मेंढक = उभयचर (Amphibian)</text>
    </svg>`
  },

  // Q20 Target Key: A (नम त्वचा से / Moist Skin)
  {
    id: 20,
    topic: "पशु जगत एवं जीव विज्ञान",
    question_hi: "केंचुआ किसकी सहायता से साँस लेता है?",
    question_en: "With the help of what does an earthworm breathe?",
    options_hi: ["(a) नम त्वचा से", "(b) गलफड़ों से", "(c) फेफड़ों से", "(d) श्वास नली से"],
    options_en: ["(a) Moist Skin", "(b) Gills", "(c) Lungs", "(d) Trachea"],
    answer: "(a)",
    formula_hi: "केंचुए में श्वसन (Cutaneous Respiration) = नम त्वचा से",
    formula_en: "Earthworm respiration = Through Moist Skin",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• केंचुए (Earthworm) में फेफड़े या गलफड़े नहीं होते; वह अपनी पतली और <b>नम त्वचा (Moist Skin)</b> के माध्यम से गैसों का आदान-प्रदान करके साँस लेता है।",
    solution_en: "<b>1. Key Fact:</b><br>• An earthworm breathes directly through its thin, slimy, and <b>moist skin</b>.",
    trick_hi: "किसान का मित्र 'केंचुआ' अपनी गीली/नम त्वचा से साँस लेता है।",
    trick_en: "Earthworm breathes through its moist skin.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#fdf4ff" stroke="#c026d3" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#86198f" text-anchor="middle">केंचुए (Earthworm) में श्वसन अंग</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#a21caf" text-anchor="middle">🪱 नम त्वचा से (Moist Skin)</text>
    </svg>`
  },

  // =======================================================================
  // ⚙️ 5. भौतिक विज्ञान एवं बल (Physics & Force) [Q21 - Q25]
  // =======================================================================

  // Q21 Target Key: B (न्यूटन / Newton)
  {
    id: 21,
    topic: "भौतिक विज्ञान एवं बल",
    question_hi: "बल की SI इकाई क्या है?",
    question_en: "What is the SI unit of Force?",
    options_hi: ["(a) जूल", "(b) न्यूटन", "(c) वाट", "(d) पास्कल"],
    options_en: ["(a) Joule", "(b) Newton", "(c) Watt", "(d) Pascal"],
    answer: "(b)",
    formula_hi: "बल $(F) = \\text{द्रव्यमान }(m) \\times \\text{त्वरण }(a) \\quad | \\quad \\text{SI इकाई} = \\text{न्यूटन (N)}$",
    formula_en: "Force $(F) = m \\times a \\quad | \\quad \\text{SI Unit} = \\text{Newton (N)}$",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• बल (Force) का अंतर्राष्ट्रीय मानक (SI) मात्रक <b>न्यूटन (Newton - N)</b> है।<br>• $1\\text{ न्यूटन} = 1\\text{ किग्रा} \\cdot \\text{मी/से}^2$ होता है।",
    solution_en: "<b>1. Key Fact:</b><br>• The SI unit of Force is <b>Newton (N)</b>, named after Sir Isaac Newton.<br>• $1\\text{ N} = 1\\text{ kg}\\cdot\\text{m/s}^2$.",
    trick_hi: "बल = न्यूटन | कार्य व ऊर्जा = जूल | शक्ति = वाट | दाब = पास्कल।",
    trick_en: "Force = Newton | Work & Energy = Joule | Power = Watt.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#1e40af" text-anchor="middle">बल सूत्र: F = m × a</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#2563eb" text-anchor="middle">बल की SI इकाई = न्यूटन (Newton)</text>
    </svg>`
  },

  // Q22 Target Key: C (जूल / Joule)
  {
    id: 22,
    topic: "भौतिक विज्ञान एवं बल",
    question_hi: "कार्य की SI इकाई क्या है?",
    question_en: "What is the SI unit of Work?",
    options_hi: ["(a) न्यूटन", "(b) वाट", "(c) जूल", "(d) एम्पियर"],
    options_en: ["(a) Newton", "(b) Watt", "(c) Joule", "(d) Ampere"],
    answer: "(c)",
    formula_hi: "कार्य $(W) = \\text{बल }(F) \\times \\text{विस्थापन }(d) \\quad | \\quad \\text{SI इकाई} = \\text{जूल (J)}$",
    formula_en: "Work $(W) = F \\times d \\quad | \\quad \\text{SI Unit} = \\text{Joule (J)}$",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• कार्य (Work) और ऊर्जा (Energy) दोनों की SI इकाई <b>जूल (Joule - J)</b> होती है।<br>• जब $1\\text{ न्यूटन}$ बल किसी वस्तु को $1\\text{ मीटर}$ विस्थापित करता है, तो किया गया कार्य $1\\text{ जूल}$ कहलाता है।",
    solution_en: "<b>1. Key Fact:</b><br>• The SI unit of both Work and Energy is <b>Joule (J)</b>.<br>• $1\\text{ Joule} = 1\\text{ Newton} \\times 1\\text{ meter}$.",
    trick_hi: "कार्य (Work) और ऊर्जा (Energy) दोनों की इकाई एक ही है — 'जूल (Joule)'!",
    trick_en: "Both Work and Energy are measured in Joules (J).",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#065f46" text-anchor="middle">कार्य (Work) = बल × विस्थापन</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#059669" text-anchor="middle">कार्य व ऊर्जा की SI इकाई = जूल (Joule)</text>
    </svg>`
  },

  // Q23 Target Key: A (वाट / Watt)
  {
    id: 23,
    topic: "भौतिक विज्ञान एवं बल",
    question_hi: "शक्ति की SI इकाई क्या है?",
    question_en: "What is the SI unit of Power?",
    options_hi: ["(a) वाट", "(b) जूल", "(c) न्यूटन", "(d) वोल्ट"],
    options_en: ["(a) Watt", "(b) Joule", "(c) Newton", "(d) Volt"],
    answer: "(a)",
    formula_hi: "शक्ति $(P) = \\frac{\\text{कार्य }(W)}{\\text{समय }(t)} \\quad | \\quad \\text{SI इकाई} = \\text{वाट (W)}$",
    formula_en: "Power $(P) = \\frac{\\text{Work }(W)}{\\text{Time }(t)} \\quad | \\quad \\text{SI Unit} = \\text{Watt (W)}$",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• कार्य करने की दर को शक्ति (Power) कहते हैं और इसकी SI इकाई <b>वाट (Watt - W)</b> है।<br>• $1\\text{ वाट} = 1\\text{ जूल प्रति सेकंड (J/s)}$ होता है।",
    solution_en: "<b>1. Key Fact:</b><br>• The rate of doing work is called Power, and its SI unit is <b>Watt (W)</b>.<br>• $1\\text{ Watt} = 1\\text{ Joule/second}$.",
    trick_hi: "बल्ब और मोटर की शक्ति 'वाट (Watt)' में मापी जाती है!",
    trick_en: "Power is measured in Watts (1 W = 1 J/s).",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#92400e" text-anchor="middle">शक्ति (Power) = कार्य / समय (J/s)</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#b45309" text-anchor="middle">💡 शक्ति की SI इकाई = वाट (Watt)</text>
    </svg>`
  },

  // Q24 Target Key: D (जड़त्व / Inertia)
  {
    id: 24,
    topic: "भौतिक विज्ञान एवं बल",
    question_hi: "गति में परिवर्तन का विरोध करने वाले गुण को क्या कहते हैं?",
    question_en: "What is the property of an object to resist any change in its state of motion or rest called?",
    options_hi: ["(a) संवेग", "(b) त्वरण", "(c) आवेग", "(d) जड़त्व"],
    options_en: ["(a) Momentum", "(b) Acceleration", "(c) Impulse", "(d) Inertia"],
    answer: "(d)",
    formula_hi: "न्यूटन का प्रथम गति नियम = जड़त्व का नियम (Law of Inertia)",
    formula_en: "Newton's First Law of Motion = Law of Inertia",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• किसी वस्तु का वह गुण जिसके कारण वह अपनी विराम अवस्था या एकसमान गति की अवस्था में होने वाले किसी भी परिवर्तन का विरोध करती है, <b>जड़त्व (Inertia)</b> कहलाता है।<br>• किसी वस्तु का द्रव्यमान (Mass) जितना अधिक होता है, उसका जड़त्व भी उतना ही अधिक होता है।",
    solution_en: "<b>1. Key Fact:</b><br>• <b>Inertia</b> is the natural tendency of an object to resist any change in its state of rest or uniform motion.",
    trick_hi: "बस के अचानक चलने पर पीछे झुकना 'जड़त्व (Inertia)' का ही उदाहरण है!",
    trick_en: "Resistance to change in motion = Inertia.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#eef2ff" stroke="#4f46e5" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#3730a3" text-anchor="middle">अवस्था परिवर्तन का विरोध करने वाला गुण</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#4f46e5" text-anchor="middle">जड़त्व (Inertia) — न्यूटन का प्रथम नियम</text>
    </svg>`
  },

  // Q25 Target Key: C (निर्वात में / Vacuum)
  {
    id: 25,
    topic: "भौतिक विज्ञान एवं बल",
    question_hi: "ध्वनि किस माध्यम में संचरित नहीं हो सकती?",
    question_en: "In which of the following media can sound NOT travel?",
    options_hi: ["(a) ठोस में", "(b) द्रव में", "(c) निर्वात में", "(d) गैस में"],
    options_en: ["(a) Solid", "(b) Liquid", "(c) Vacuum", "(d) Gas"],
    answer: "(c)",
    formula_hi: "ध्वनि एक यांत्रिक तरंग है — यह निर्वात (Vacuum) में गमन नहीं कर सकती",
    formula_en: "Sound is a mechanical wave — It cannot travel through Vacuum",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• ध्वनि को एक स्थान से दूसरे स्थान तक जाने के लिए किसी माध्यम (ठोस, द्रव या गैस) के कणों की आवश्यकता होती है।<br>• <b>निर्वात (Vacuum)</b> में कोई कण या हवा नहीं होती, इसलिए <b>निर्वात में ध्वनि संचरित नहीं हो सकती</b>।",
    solution_en: "<b>1. Key Fact:</b><br>• Sound requires a material medium (solid, liquid, or gas) for propagation. Since <b>Vacuum</b> has no particles, sound cannot travel through a vacuum.",
    trick_hi: "प्रकाश निर्वात में चल सकता है, लेकिन 'ध्वनि (Sound)' बिना हवा/माध्यम (निर्वात) के नहीं चल सकती!",
    trick_en: "No medium = No sound! Sound cannot travel in Vacuum.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#fef2f2" stroke="#ef4444" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#991b1b" text-anchor="middle">ध्वनि को संचरण हेतु माध्यम आवश्यक है</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#dc2626" text-anchor="middle">🔇 निर्वात में (In Vacuum) ध्वनि नहीं चलती</text>
    </svg>`
  },

  // =======================================================================
  // ☀️ 6. प्रकाश, ध्वनि एवं ऊष्मा (Light, Sound & Heat) [Q26 - Q30]
  // =======================================================================

  // Q26 Target Key: B (आभासी, सीधा और समान आकार का)
  {
    id: 26,
    topic: "प्रकाश, ध्वनि एवं ऊष्मा",
    question_hi: "समतल दर्पण में कैसा प्रतिबिंब बनता है?",
    question_en: "What type of image is formed by a plane mirror?",
    options_hi: ["(a) वास्तविक और उल्टा", "(b) आभासी, सीधा और समान आकार का", "(c) आभासी और बहुत छोटा", "(d) वास्तविक और बड़ा"],
    options_en: ["(a) Real and Inverted", "(b) Virtual, Erect and of Same Size", "(c) Virtual and Diminished", "(d) Real and Magnified"],
    answer: "(b)",
    formula_hi: "समतल दर्पण का प्रतिबिंब = आभासी (Virtual), सीधा (Erect) एवं वस्तु के बराबर आकार का",
    formula_en: "Plane Mirror Image = Virtual, Erect, and of Same Size as Object",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• घरों में चेहरा देखने के लिए प्रयुक्त <b>समतल दर्पण (Plane Mirror)</b> में सदैव <b>आभासी, सीधा और वस्तु के समान आकार का</b> प्रतिबिंब बनता है।<br>• इसमें पार्श्व परिवर्तन (Lateral Inversion - बायाँ भाग दायाँ दिखना) भी होता है।",
    solution_en: "<b>1. Key Fact:</b><br>• A <b>plane mirror</b> always forms an image that is <b>virtual, erect, and of the exact same size</b> as the object.",
    trick_hi: "घर के आईने (समतल दर्पण) में हम हमेशा सीधे और बराबर आकार के दिखते हैं!",
    trick_en: "Plane mirror = Virtual + Erect + Same Size.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#0369a1" text-anchor="middle">समतल दर्पण (Plane Mirror) की विशेषता</text>
      <text x="175" y="70" font-size="13.5" font-weight="900" fill="#0284c7" text-anchor="middle">🪞 आभासी, सीधा और समान आकार का प्रतिबिंब</text>
    </svg>`
  },

  // Q27 Target Key: A (डेसीबल / Decibel)
  {
    id: 27,
    topic: "प्रकाश, ध्वनि एवं ऊष्मा",
    question_hi: "ध्वनि की तीव्रता किस इकाई में मापी जाती है?",
    question_en: "In which unit is the intensity (loudness) of sound measured?",
    options_hi: ["(a) डेसीबल", "(b) हर्ट्ज़", "(c) डाइऑप्टर", "(d) कैंडेला"],
    options_en: ["(a) Decibel", "(b) Hertz", "(c) Dioptre", "(d) Candela"],
    answer: "(a)",
    formula_hi: "ध्वनि की तीव्रता/प्रबलता की इकाई = डेसीबल (dB)",
    formula_en: "Unit of Sound Intensity / Loudness = Decibel (dB)",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• ध्वनि की तीव्रता या प्रबलता को <b>डेसीबल (Decibel - dB)</b> में मापा जाता है।<br>• जबकि ध्वनि की आवृत्ति (Frequency) को 'हर्ट्ज़ (Hz)' में मापा जाता है।",
    solution_en: "<b>1. Key Fact:</b><br>• The loudness or intensity of sound is measured in <b>Decibels (dB)</b>.<br>• Frequency of sound is measured in Hertz (Hz).",
    trick_hi: "ध्वनि की तीव्रता (शोर) = डेसीबल (dB) | ध्वनि की आवृत्ति = हर्ट्ज़ (Hz)।",
    trick_en: "Loudness = Decibel (dB) | Frequency = Hertz (Hz).",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#065f46" text-anchor="middle">ध्वनि की तीव्रता (Sound Intensity)</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#059669" text-anchor="middle">🔊 डेसीबल (Decibel - dB)</text>
    </svg>`
  },

  // Q28 Target Key: D (चाँदी / Silver)
  {
    id: 28,
    topic: "प्रकाश, ध्वनि एवं ऊष्मा",
    question_hi: "ऊष्मा का सबसे अच्छा चालक कौन-सी धातु है?",
    question_en: "Which metal is the best conductor of heat?",
    options_hi: ["(a) लोहा", "(b) एल्युमिनियम", "(c) सीसा", "(d) चाँदी"],
    options_en: ["(a) Iron", "(b) Aluminium", "(c) Lead", "(d) Silver"],
    answer: "(d)",
    formula_hi: "ऊष्मा एवं विद्युत का सर्वोत्तम चालक धातु = चाँदी (Silver - Ag)",
    formula_en: "Best conductor of Heat and Electricity = Silver (Ag)",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• सभी धातुओं में <b>चाँदी (Silver)</b> ऊष्मा और विद्युत दोनों का <b>सबसे अच्छा चालक (Best Conductor)</b> है। चाँदी के बाद दूसरे स्थान पर ताँबा (Copper) आता है।",
    solution_en: "<b>1. Key Fact:</b><br>• <b>Silver</b> is the best conductor of both heat and electricity among all metals, followed by copper.",
    trick_hi: "चाँदी (Silver) नंबर 1 चालक है और ताँबा (Copper) नंबर 2 चालक है!",
    trick_en: "Best Conductor = 1st Silver (Ag), 2nd Copper (Cu).",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#f8fafc" stroke="#64748b" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#334155" text-anchor="middle">ऊष्मा एवं विद्युत का सर्वोत्तम चालक धातु</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#0f172a" text-anchor="middle">🥈 चाँदी (Silver - Ag)</text>
    </svg>`
  },

  // Q29 Target Key: C (विकिरण / Radiation)
  {
    id: 29,
    topic: "प्रकाश, ध्वनि एवं ऊष्मा",
    question_hi: "ऊष्मा का स्थानांतरण निर्वात में किस विधि से होता है?",
    question_en: "By which method does heat transfer take place in a vacuum?",
    options_hi: ["(a) चालन", "(b) संवहन", "(c) विकिरण", "(d) वाष्पन"],
    options_en: ["(a) Conduction", "(b) Convection", "(c) Radiation", "(d) Evaporation"],
    answer: "(c)",
    formula_hi: "बिना किसी माध्यम (निर्वात) के ऊष्मा का संचरण = विकिरण (Radiation)",
    formula_en: "Heat transfer without any medium (in vacuum) = Radiation",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• ऊष्मा के स्थानांतरण की <b>विकिरण (Radiation)</b> विधि में किसी माध्यम की आवश्यकता नहीं होती।<br>• सूर्य की ऊष्मा अंतरिक्ष के निर्वात से होकर पृथ्वी तक <b>विकिरण विधि</b> द्वारा ही पहुँचती है।",
    solution_en: "<b>1. Key Fact:</b><br>• <b>Radiation</b> is the mode of heat transfer that does not require any medium and can take place through a vacuum (e.g., heat from the Sun reaching Earth).",
    trick_hi: "ठोस में 'चालन', द्रव/गैस में 'संवहन', और निर्वात (सूर्य की धूप) में 'विकिरण'!",
    trick_en: "Solid = Conduction | Fluids = Convection | Vacuum = Radiation.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#92400e" text-anchor="middle">निर्वात में ऊष्मा का स्थानांतरण (सूर्य से पृथ्वी तक)</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#d97706" text-anchor="middle">☀️ विकिरण (Radiation)</text>
    </svg>`
  },

  // Q30 Target Key: B (100°C)
  {
    id: 30,
    topic: "प्रकाश, ध्वनि एवं ऊष्मा",
    question_hi: "पानी का सामान्य क्वथनांक कितना होता है?",
    question_en: "What is the normal boiling point of water?",
    options_hi: ["(a) 0°C", "(b) 100°C", "(c) 37°C", "(d) 4°C"],
    options_en: ["(a) 0°C", "(b) 100°C", "(c) 37°C", "(d) 4°C"],
    answer: "(b)",
    formula_hi: "पानी का हिमांक (Freezing Point) = $0^\\circ\\text{C}$ | क्वथनांक (Boiling Point) = $100^\\circ\\text{C}$",
    formula_en: "Freezing Point of Water = $0^\\circ\\text{C}$ | Boiling Point of Water = $100^\\circ\\text{C}$",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• सामान्य वायुमंडलीय दाब पर शुद्ध जल जिस तापमान पर उबलकर भाप बनने लगता है, उसे क्वथनांक कहते हैं। पानी का सामान्य क्वथनांक <b>100°C</b> होता है।<br>• पानी का हिमांक (बर्फ जमने का तापमान) <b>0°C</b> होता है।",
    solution_en: "<b>1. Key Fact:</b><br>• At standard atmospheric pressure, the normal boiling point of pure water is <b>100°C</b> (or 373.15 K).",
    trick_hi: "0°C पर पानी जमता है (हिमांक) और 100°C पर पानी उबलता है (क्वथनांक)!",
    trick_en: "0°C = Freezing Point | 100°C = Boiling Point.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#fef2f2" stroke="#ef4444" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#991b1b" text-anchor="middle">हिमांक = 0°C  |  सामान्य क्वथनांक (उबलना)</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#dc2626" text-anchor="middle">🌡️ क्वथनांक = 100°C</text>
    </svg>`
  },

  // =======================================================================
  // 🧪 7. रसायन विज्ञान (Chemistry) [Q31 - Q35]
  // =======================================================================

  // Q31 Target Key: B (NaCl)
  {
    id: 31,
    topic: "रसायन विज्ञान",
    question_hi: "साधारण नमक का रासायनिक सूत्र क्या है?",
    question_en: "What is the chemical formula of common salt?",
    options_hi: ["(a) H₂O", "(b) NaCl", "(c) CO₂", "(d) NaOH"],
    options_en: ["(a) H₂O", "(b) NaCl", "(c) CO₂", "(d) NaOH"],
    answer: "(b)",
    formula_hi: "साधारण नमक (सोडियम क्लोराइड) = $\\text{NaCl}$",
    formula_en: "Common Salt (Sodium Chloride) = $\\text{NaCl}$",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• खाने वाले साधारण नमक का रासायनिक नाम <b>सोडियम क्लोराइड (Sodium Chloride)</b> है और इसका रासायनिक सूत्र <b>NaCl</b> है।",
    solution_en: "<b>1. Key Fact:</b><br>• The chemical name of common table salt is <b>Sodium Chloride</b> and its chemical formula is <b>NaCl</b>.",
    trick_hi: "सोडियम (Na) + क्लोरीन (Cl) = साधारण नमक (NaCl)!",
    trick_en: "Sodium (Na) + Chloride (Cl) = NaCl.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#1e40af" text-anchor="middle">साधारण नमक (Sodium Chloride)</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#2563eb" text-anchor="middle">🧂 रासायनिक सूत्र = NaCl</text>
    </svg>`
  },

  // Q32 Target Key: C (Au)
  {
    id: 32,
    topic: "रसायन विज्ञान",
    question_hi: "सोने का रासायनिक प्रतीक क्या है?",
    question_en: "What is the chemical symbol of Gold?",
    options_hi: ["(a) Ag", "(b) Fe", "(c) Au", "(d) Cu"],
    options_en: ["(a) Ag", "(b) Fe", "(c) Au", "(d) Cu"],
    answer: "(c)",
    formula_hi: "सोना (Gold - लैटिन नाम: Aurum) = $\\text{Au}$",
    formula_en: "Gold (Latin: Aurum) = $\\text{Au}$",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• सोने (Gold) का लैटिन नाम 'ऑरम (Aurum)' है, इसलिए इसका रासायनिक प्रतीक <b>Au</b> होता है।<br>• चाँदी (Silver) का प्रतीक <b>Ag</b> और लोहे (Iron) का प्रतीक <b>Fe</b> होता है।",
    solution_en: "<b>1. Key Fact:</b><br>• The chemical symbol of Gold is <b>Au</b>, derived from its Latin name <i>Aurum</i>.",
    trick_hi: "सोना = Au (ऑरम) | चाँदी = Ag (अर्जेंटम) | लोहा = Fe (फेरम)।",
    trick_en: "Gold = Au | Silver = Ag | Iron = Fe.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#92400e" text-anchor="middle">सोना (Gold — लैटिन नाम: Aurum)</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#b45309" text-anchor="middle">🥇 रासायनिक प्रतीक = Au</text>
    </svg>`
  },

  // Q33 Target Key: D (Fe)
  {
    id: 33,
    topic: "रसायन विज्ञान",
    question_hi: "लोहे का रासायनिक प्रतीक क्या है?",
    question_en: "What is the chemical symbol of Iron?",
    options_hi: ["(a) Ir", "(b) Au", "(c) Ag", "(d) Fe"],
    options_en: ["(a) Ir", "(b) Au", "(c) Ag", "(d) Fe"],
    answer: "(d)",
    formula_hi: "लोहा (Iron - लैटिन नाम: Ferrum) = $\\text{Fe}$",
    formula_en: "Iron (Latin: Ferrum) = $\\text{Fe}$",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• लोहे (Iron) का लैटिन नाम 'फेरम (Ferrum)' होता है, जिस कारण इसका रासायनिक प्रतीक <b>Fe</b> है।",
    solution_en: "<b>1. Key Fact:</b><br>• The chemical symbol for Iron is <b>Fe</b>, taken from its Latin name <i>Ferrum</i>.",
    trick_hi: "फेरम (Ferrum) के प्रथम दो अक्षर 'Fe' = लोहा (Iron)!",
    trick_en: "Ferrum -> Fe = Iron.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#f1f5f9" stroke="#475569" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#334155" text-anchor="middle">लोहा (Iron — लैटिन नाम: Ferrum)</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#0f172a" text-anchor="middle">⚙️ रासायनिक प्रतीक = Fe</text>
    </svg>`
  },

  // Q34 Target Key: A (7)
  {
    id: 34,
    topic: "रसायन विज्ञान",
    question_hi: "शुद्ध जल का pH मान कितना होता है?",
    question_en: "What is the pH value of pure water?",
    options_hi: ["(a) 7", "(b) 5", "(c) 9", "(d) 0"],
    options_en: ["(a) 7", "(b) 5", "(c) 9", "(d) 0"],
    answer: "(a)",
    formula_hi: "उदासीन विलयन (शुद्ध जल) का pH मान = $7$",
    formula_en: "pH of neutral pure water = $7$",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• शुद्ध जल न तो अम्लीय होता है और न ही क्षारीय, यह <b>उदासीन (Neutral)</b> होता है। इसलिए शुद्ध जल का pH मान ठीक <b>7</b> होता है।<br>• 7 से कम pH = अम्लीय (Acidic) | 7 से अधिक pH = क्षारीय (Basic)।",
    solution_en: "<b>1. Key Fact:</b><br>• Pure water is neutral in nature, so its pH value is exactly <b>7</b>.<br>• pH < 7 is Acidic, and pH > 7 is Basic.",
    trick_hi: "pH 7 = उदासीन (शुद्ध जल) | 7 से कम = अम्ल | 7 से ज्यादा = क्षार!",
    trick_en: "pH 7 = Neutral (Pure Water).",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#065f46" text-anchor="middle">अम्ल (&lt;7)  ◀  उदासीन शुद्ध जल (7)  ▶  क्षार (&gt;7)</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#059669" text-anchor="middle">💧 शुद्ध जल का pH मान = 7</text>
    </svg>`
  },

  // Q35 Target Key: B (लाल / Red)
  {
    id: 35,
    topic: "रसायन विज्ञान",
    question_hi: "अम्ल नीले लिटमस पत्र को किस रंग में बदलता है?",
    question_en: "Into which color does an acid turn blue litmus paper?",
    options_hi: ["(a) हरा", "(b) लाल", "(c) पीला", "(d) काला"],
    options_en: ["(a) Green", "(b) Red", "(c) Yellow", "(d) Black"],
    answer: "(b)",
    formula_hi: "अम्ल (Acid) : नीला लिटमस $\\to$ लाल (Red) | क्षार (Base) : लाल लिटमस $\\to$ नीला (Blue)",
    formula_en: "Acid turns Blue litmus $\\to$ Red | Base turns Red litmus $\\to$ Blue",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• <b>अम्ल (Acid)</b> स्वाद में खट्टे होते हैं और ये <b>नीले लिटमस पत्र को लाल (Red)</b> कर देते हैं।<br>• जबकि क्षार (Base) लाल लिटमस पत्र को नीला कर देते हैं।",
    solution_en: "<b>1. Key Fact:</b><br>• Acids turn <b>blue litmus paper into red</b>, whereas bases turn red litmus paper into blue.",
    trick_hi: "शब्द याद रखें <b>'अनिल'</b>: <b>अ</b>म्ल + <b>नी</b>ला लिटमस $\\to$ <b>ल</b>ाल!",
    trick_en: "Hindi trick 'अ-नि-ल': Acid turns Blue (नीला) to Red (लाल)!",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#fef2f2" stroke="#ef4444" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#991b1b" text-anchor="middle">ट्रिक 'अनिल': अम्ल + नीला लिटमस ➔ लाल</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#dc2626" text-anchor="middle">🧪 सही उत्तर = लाल (Red)</text>
    </svg>`
  },

  // =======================================================================
  // 🪐 8. पृथ्वी एवं अंतरिक्ष विज्ञान (Earth & Space Science) [Q36 - Q40]
  // =======================================================================

  // Q36 Target Key: C (बृहस्पति / Jupiter)
  {
    id: 36,
    topic: "पृथ्वी एवं अंतरिक्ष विज्ञान",
    question_hi: "सौरमंडल का सबसे बड़ा ग्रह कौन-सा है?",
    question_en: "Which is the largest planet in our solar system?",
    options_hi: ["(a) पृथ्वी", "(b) शनि", "(c) बृहस्पति", "(d) मंगल"],
    options_en: ["(a) Earth", "(b) Saturn", "(c) Jupiter", "(d) Mars"],
    answer: "(c)",
    formula_hi: "सौरमंडल का सबसे बड़ा ग्रह = बृहस्पति (Jupiter) | सबसे छोटा ग्रह = बुध (Mercury)",
    formula_en: "Largest Planet = Jupiter | Smallest Planet = Mercury",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• हमारे सौरमंडल का आकार और द्रव्यमान में सबसे बड़ा ग्रह <b>बृहस्पति (Jupiter)</b> है। यह इतना विशाल है कि इसमें लगभग 1300 पृथ्वियाँ समा सकती हैं।",
    solution_en: "<b>1. Key Fact:</b><br>• <b>Jupiter</b> is the largest planet in our solar system by both mass and volume.",
    trick_hi: "'बृहस्पति' का अर्थ ही 'गुरु/सबसे बड़ा' है — सौरमंडल का सबसे बड़ा ग्रह!",
    trick_en: "Jupiter is the giant king of planets.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#92400e" text-anchor="middle">सौरमंडल का सबसे विशाल ग्रह</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#d97706" text-anchor="middle">🪐 बृहस्पति (Jupiter)</text>
    </svg>`
  },

  // Q37 Target Key: A (बुध / Mercury)
  {
    id: 37,
    topic: "पृथ्वी एवं अंतरिक्ष विज्ञान",
    question_hi: "सूर्य के सबसे निकट ग्रह कौन-सा है?",
    question_en: "Which planet is closest to the Sun?",
    options_hi: ["(a) बुध", "(b) शुक्र", "(c) पृथ्वी", "(d) मंगल"],
    options_en: ["(a) Mercury", "(b) Venus", "(c) Earth", "(d) Mars"],
    answer: "(a)",
    formula_hi: "सूर्य से बढ़ती दूरी का क्रम: बुध $\\to$ शुक्र $\\to$ पृथ्वी $\\to$ मंगल",
    formula_en: "Order from Sun: Mercury $\\to$ Venus $\\to$ Earth $\\to$ Mars",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• सूर्य के सबसे निकट स्थित और सौरमंडल का सबसे छोटा ग्रह <b>बुध (Mercury)</b> है।<br>• यह मात्र 88 दिनों में सूर्य की एक परिक्रमा पूरी कर लेता है।",
    solution_en: "<b>1. Key Fact:</b><br>• <b>Mercury</b> is the closest planet to the Sun and also the smallest planet in our solar system.",
    trick_hi: "सूर्य के सबसे पास 'बुध (Mercury)' और सबसे दूर 'वरुण (Neptune)' है!",
    trick_en: "Closest to Sun = Mercury | Farthest from Sun = Neptune.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#0369a1" text-anchor="middle">सूर्य से ग्रहों का क्रम: ☀️ ➔ बुध ➔ शुक्र ➔ पृथ्वी</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#0284c7" text-anchor="middle">सूर्य के सबसे निकट = बुध (Mercury)</text>
    </svg>`
  },

  // Q38 Target Key: D (मंगल / Mars)
  {
    id: 38,
    topic: "पृथ्वी एवं अंतरिक्ष विज्ञान",
    question_hi: "लाल ग्रह किसे कहा जाता है?",
    question_en: "Which planet is known as the 'Red Planet'?",
    options_hi: ["(a) शुक्र", "(b) शनि", "(c) अरुण", "(d) मंगल"],
    options_en: ["(a) Venus", "(b) Saturn", "(c) Uranus", "(d) Mars"],
    answer: "(d)",
    formula_hi: "आयरन ऑक्साइड (लौह ऑक्साइड) की अधिकता के कारण लाल ग्रह = मंगल (Mars)",
    formula_en: "Red Planet (due to Iron Oxide) = Mars",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• <b>मंगल ग्रह (Mars)</b> की मिट्टी में आयरन ऑक्साइड (Iron Oxide) की अत्यधिक मात्रा पाई जाती है, जिसके कारण यह अंतरिक्ष से लाल रंग का दिखाई देता है। इसलिए इसे <b>'लाल ग्रह'</b> कहा जाता है।",
    solution_en: "<b>1. Key Fact:</b><br>• <b>Mars</b> is called the Red Planet because its surface is covered with reddish iron oxide (rust).",
    trick_hi: "नीला ग्रह = पृथ्वी (जल के कारण) | लाल ग्रह = मंगल (आयरन ऑक्साइड के कारण)!",
    trick_en: "Blue Planet = Earth | Red Planet = Mars.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#fef2f2" stroke="#ef4444" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#991b1b" text-anchor="middle">आयरन ऑक्साइड के कारण लाल दिखने वाला ग्रह</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#dc2626" text-anchor="middle">🔴 लाल ग्रह = मंगल (Mars)</text>
    </svg>`
  },

  // Q39 Target Key: B (नाइट्रोजन / Nitrogen)
  {
    id: 39,
    topic: "पृथ्वी एवं अंतरिक्ष विज्ञान",
    question_hi: "पृथ्वी के वायुमंडल में सबसे अधिक कौन-सी गैस है?",
    question_en: "Which gas is the most abundant in the Earth's atmosphere?",
    options_hi: ["(a) ऑक्सीजन", "(b) नाइट्रोजन", "(c) कार्बन डाइऑक्साइड", "(d) आर्गन"],
    options_en: ["(a) Oxygen", "(b) Nitrogen", "(c) Carbon Dioxide", "(d) Argon"],
    answer: "(b)",
    formula_hi: "वायुमंडल संघटन: नाइट्रोजन ($78\\%$) + ऑक्सीजन ($21\\%$) + अन्य गैसें ($1\\%$)",
    formula_en: "Atmosphere Composition: Nitrogen ($78\\%$) + Oxygen ($21\\%$) + Others ($1\\%$)",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• पृथ्वी के वायुमंडल में सबसे अधिक मात्रा में पाई जाने वाली गैस <b>नाइट्रोजन (Nitrogen - $N_2$)</b> है, जो कुल वायु का लगभग <b>78%</b> भाग है।<br>• दूसरे स्थान पर ऑक्सीजन (लगभग 21%) है।",
    solution_en: "<b>1. Key Fact:</b><br>• <b>Nitrogen</b> is the most abundant gas in Earth's atmosphere, making up about <b>78%</b> of the air, while Oxygen makes up about 21%.",
    trick_hi: "हवा में नंबर 1 पर नाइट्रोजन (78%) और नंबर 2 पर ऑक्सीजन (21%) है!",
    trick_en: "Nitrogen = 78% (1st) | Oxygen = 21% (2nd).",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#065f46" text-anchor="middle">नाइट्रोजन: 78%  |  ऑक्सीजन: 21%  |  अन्य: 1%</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#059669" text-anchor="middle">सर्वाधिक गैस = नाइट्रोजन (Nitrogen)</text>
    </svg>`
  },

  // Q40 Target Key: C (नाभिकीय संलयन / Nuclear Fusion)
  {
    id: 40,
    topic: "पृथ्वी एवं अंतरिक्ष विज्ञान",
    question_hi: "सूर्य में ऊर्जा उत्पन्न होने की मुख्य प्रक्रिया क्या है?",
    question_en: "What is the main process of energy generation in the Sun?",
    options_hi: ["(a) नाभिकीय विखंडन", "(b) रासायनिक दहन", "(c) नाभिकीय संलयन", "(d) वाष्पीकरण"],
    options_en: ["(a) Nuclear Fission", "(b) Chemical Combustion", "(c) Nuclear Fusion", "(d) Evaporation"],
    answer: "(c)",
    formula_hi: "सूर्य एवं तारों की अपार ऊर्जा का स्रोत = नाभिकीय संलयन (हाइड्रोजन का हीलियम में संलयन)",
    formula_en: "Source of Solar Energy = Nuclear Fusion (Hydrogen nuclei fusing into Helium)",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• सूर्य के केंद्र में अत्यधिक ताप और दाब पर हाइड्रोजन के हल्के नाभिक आपस में जुड़कर हीलियम का भारी नाभिक बनाते हैं। इस प्रक्रिया को <b>नाभिकीय संलयन (Nuclear Fusion)</b> कहते हैं, जिससे अपार ऊर्जा और प्रकाश उत्पन्न होता है।",
    solution_en: "<b>1. Key Fact:</b><br>• Energy in the Sun and stars is produced by <b>Nuclear Fusion</b>, where hydrogen nuclei fuse together to form helium, releasing tremendous energy.",
    trick_hi: "सूर्य में हाइड्रोजन के कण जुड़ते (संलयित होते) हैं = नाभिकीय संलयन!",
    trick_en: "Sun fuses Hydrogen into Helium = Nuclear Fusion.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#92400e" text-anchor="middle">हाइड्रोजन + हाइड्रोजन ➔ हीलियम + अपार ऊर्जा</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#d97706" text-anchor="middle">☀️ नाभिकीय संलयन (Nuclear Fusion)</text>
    </svg>`
  },

  // =======================================================================
  // 🌍 9. पर्यावरण एवं प्राकृतिक संसाधन (Environment & Resources) [Q41 - Q45]
  // =======================================================================

  // Q41 Target Key: B (सूर्य की हानिकारक पराबैंगनी किरणों से)
  {
    id: 41,
    topic: "पर्यावरण एवं प्राकृतिक संसाधन",
    question_hi: "ओजोन परत हमें किससे बचाती है?",
    question_en: "From what does the Ozone layer protect us?",
    options_hi: ["(a) अम्लीय वर्षा से", "(b) सूर्य की हानिकारक पराबैंगनी किरणों से", "(c) भूकंप से", "(d) ध्वनि प्रदूषण से"],
    options_en: ["(a) Acid Rain", "(b) Harmful Ultraviolet (UV) Rays of the Sun", "(c) Earthquakes", "(d) Noise Pollution"],
    answer: "(b)",
    formula_hi: "ओजोन परत ($O_3$) = पृथ्वी का सुरक्षा कवच (UV किरणों का अवशोषण)",
    formula_en: "Ozone Layer ($O_3$) = Earth's protective shield against UV rays",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• समताप मंडल (Stratosphere) में पाई जाने वाली <b>ओजोन परत ($O_3$)</b> पृथ्वी के लिए सुरक्षा छतरी की तरह कार्य करती है और हमें <b>सूर्य की हानिकारक पराबैंगनी किरणों (Ultraviolet / UV Rays)</b> से बचाती है।",
    solution_en: "<b>1. Key Fact:</b><br>• The <b>Ozone layer ($O_3$)</b> in the stratosphere absorbs the <b>Sun's harmful Ultraviolet (UV) rays</b>, protecting living beings from skin cancer and eye damage.",
    trick_hi: "ओजोन परत ($O_3$) पृथ्वी का 'सनस्क्रीन छाता' है जो UV किरणों को रोकता है!",
    trick_en: "Ozone Layer blocks harmful UV rays from the Sun.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#1e40af" text-anchor="middle">ओजोन परत (O₃) — पृथ्वी का सुरक्षा कवच</text>
      <text x="175" y="70" font-size="12.5" font-weight="900" fill="#2563eb" text-anchor="middle">🛡️ सूर्य की हानिकारक पराबैंगनी (UV) किरणों से रक्षा</text>
    </svg>`
  },

  // Q42 Target Key: C (ग्रीनहाउस गैसों की बढ़ती मात्रा)
  {
    id: 42,
    topic: "पर्यावरण एवं प्राकृतिक संसाधन",
    question_hi: "ग्लोबल वार्मिंग का मुख्य कारण क्या है?",
    question_en: "What is the main cause of Global Warming?",
    options_hi: ["(a) वृक्षारोपण में वृद्धि", "(b) ऑक्सीजन की अधिकता", "(c) ग्रीनहाउस गैसों की बढ़ती मात्रा", "(d) नाइट्रोजन का कम होना"],
    options_en: ["(a) Increase in afforestation", "(b) Excess of oxygen", "(c) Increasing amount of greenhouse gases", "(d) Decrease in nitrogen"],
    answer: "(c)",
    formula_hi: "वैश्विक तापन (Global Warming) का मुख्य कारण = ग्रीनहाउस गैसों ($CO_2$, मीथेन) में वृद्धि",
    formula_en: "Main Cause of Global Warming = Rising Greenhouse Gases ($CO_2$, $CH_4$)",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• वायुमंडल में कार्बन डाइऑक्साइड ($CO_2$), मीथेन ($CH_4$) आदि <b>ग्रीनहाउस गैसों की बढ़ती मात्रा</b> पृथ्वी की ऊष्मा को बाहर जाने से रोकती है, जिससे पृथ्वी का औसत तापमान बढ़ रहा है। इसे ही <b>ग्लोबल वार्मिंग</b> कहते हैं।",
    solution_en: "<b>1. Key Fact:</b><br>• The <b>increasing concentration of greenhouse gases</b> (mainly Carbon Dioxide $CO_2$) traps heat in the atmosphere, causing Global Warming.",
    trick_hi: "ग्रीनहाउस गैसें ($CO_2$) गर्मी को कैद कर लेती हैं जिससे ग्लोबल वार्मिंग होती है।",
    trick_en: "Greenhouse gases trap heat -> Global Warming.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#fef2f2" stroke="#ef4444" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#991b1b" text-anchor="middle">पृथ्वी के औसत तापमान में वृद्धि (Global Warming)</text>
      <text x="175" y="70" font-size="13" font-weight="900" fill="#dc2626" text-anchor="middle">🌡️ कारण: ग्रीनहाउस गैसों (CO₂) की बढ़ती मात्रा</text>
    </svg>`
  },

  // Q43 Target Key: A (नवीकरणीय संसाधन / Renewable Resources)
  {
    id: 43,
    topic: "पर्यावरण एवं प्राकृतिक संसाधन",
    question_hi: "प्राकृतिक रूप से दोबारा प्राप्त होने वाले संसाधन क्या कहलाते हैं?",
    question_en: "What are the resources that can be replenished naturally called?",
    options_hi: ["(a) नवीकरणीय संसाधन", "(b) अनवीकरणीय संसाधन", "(c) जीवाश्म ईंधन", "(d) कृत्रिम संसाधन"],
    options_en: ["(a) Renewable Resources", "(b) Non-renewable Resources", "(c) Fossil Fuels", "(d) Artificial Resources"],
    answer: "(a)",
    formula_hi: "सौर ऊर्जा, पवन ऊर्जा एवं जल = नवीकरणीय संसाधन (Renewable Resources)",
    formula_en: "Naturally replenished resources (Solar, Wind, Water) = Renewable Resources",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• वे प्राकृतिक संसाधन जो उपयोग के बाद प्रकृति में स्वतः दोबारा उत्पन्न या नवीकृत हो जाते हैं और समाप्त नहीं होते, उन्हें <b>नवीकरणीय संसाधन (Renewable Resources)</b> कहते हैं। जैसे — सौर ऊर्जा और पवन ऊर्जा।",
    solution_en: "<b>1. Key Fact:</b><br>• Resources that are naturally replenished and inexhaustible (like solar energy, wind energy, water) are called <b>Renewable Resources</b>.",
    trick_hi: "जो बार-बार नया (नवीन) मिल सके = नवीकरणीय संसाधन (सूर्य व पवन ऊर्जा)!",
    trick_en: "Can be renewed naturally = Renewable Resources.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#065f46" text-anchor="middle">प्राकृतिक रूप से पुनः प्राप्त होने वाले संसाधन</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#059669" text-anchor="middle">♻️ नवीकरणीय संसाधन (Renewable Resources)</text>
    </svg>`
  },

  // Q44 Target Key: D (22 अप्रैल / 22 April)
  {
    id: 44,
    topic: "पर्यावरण एवं प्राकृतिक संसाधन",
    question_hi: "पृथ्वी दिवस कब मनाया जाता है?",
    question_en: "When is Earth Day celebrated every year?",
    options_hi: ["(a) 5 जून", "(b) 22 मार्च", "(c) 16 सितंबर", "(d) 22 अप्रैल"],
    options_en: ["(a) 5 June", "(b) 22 March", "(c) 16 September", "(d) 22 April"],
    answer: "(d)",
    formula_hi: "विश्व पृथ्वी दिवस (Earth Day) = 22 अप्रैल",
    formula_en: "World Earth Day = 22 April",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• पृथ्वी के पर्यावरण के संरक्षण और जागरूकता के लिए प्रतिवर्ष <b>22 अप्रैल</b> को <b>पृथ्वी दिवस (Earth Day)</b> मनाया जाता है।<br>• 22 मार्च को 'विश्व जल दिवस' और 5 जून को 'विश्व पर्यावरण दिवस' मनाया जाता है।",
    solution_en: "<b>1. Key Fact:</b><br>• <b>Earth Day</b> is celebrated annually on <b>22 April</b> across the world to support environmental protection.",
    trick_hi: "22 मार्च = जल दिवस | 22 अप्रैल = पृथ्वी दिवस | 5 जून = पर्यावरण दिवस!",
    trick_en: "22 March = Water Day | 22 April = Earth Day | 5 June = Environment Day.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#0369a1" text-anchor="middle">विश्व पृथ्वी दिवस (World Earth Day)</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#0284c7" text-anchor="middle">🌍 22 अप्रैल (22 April)</text>
    </svg>`
  },

  // Q45 Target Key: B (5 जून / 5 June)
  {
    id: 45,
    topic: "पर्यावरण एवं प्राकृतिक संसाधन",
    question_hi: "विश्व पर्यावरण दिवस कब मनाया जाता है?",
    question_en: "When is World Environment Day celebrated?",
    options_hi: ["(a) 22 अप्रैल", "(b) 5 जून", "(c) 21 जून", "(d) 1 दिसंबर"],
    options_en: ["(a) 22 April", "(b) 5 June", "(c) 21 June", "(d) 1 December"],
    answer: "(b)",
    formula_hi: "विश्व पर्यावरण दिवस (World Environment Day) = 5 जून",
    formula_en: "World Environment Day = 5 June",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• प्रकृति और पर्यावरण के संरक्षण के प्रति जागरूकता फैलाने के लिए हर वर्ष <b>5 जून</b> को <b>विश्व पर्यावरण दिवस (World Environment Day)</b> मनाया जाता है।",
    solution_en: "<b>1. Key Fact:</b><br>• <b>World Environment Day</b> is celebrated every year on <b>5 June</b> to encourage awareness and action for the protection of our environment.",
    trick_hi: "हर साल 5 जून को पेड़ लगाओ — विश्व पर्यावरण दिवस मनाओ!",
    trick_en: "World Environment Day = 5 June.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#15803d" text-anchor="middle">विश्व पर्यावरण दिवस (World Environment Day)</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#16a34a" text-anchor="middle">🌱 5 जून (5 June)</text>
    </svg>`
  },

  // =======================================================================
  // 🔬 10. वैज्ञानिक उपकरण एवं महत्वपूर्ण खोज (Instruments & Discoveries) [Q46 - Q50]
  // =======================================================================

  // Q46 Target Key: C (बैरोमीटर / Barometer)
  {
    id: 46,
    topic: "वैज्ञानिक उपकरण एवं महत्वपूर्ण खोज",
    question_hi: "वायुदाब मापने का यंत्र क्या कहलाता है?",
    question_en: "What is the instrument used to measure atmospheric pressure called?",
    options_hi: ["(a) थर्मामीटर", "(b) हाइग्रोमीटर", "(c) बैरोमीटर", "(d) लैक्टोमीटर"],
    options_en: ["(a) Thermometer", "(b) Hygrometer", "(c) Barometer", "(d) Lactometer"],
    answer: "(c)",
    formula_hi: "वायुमंडलीय दाब (Atmospheric Pressure) मापक यंत्र = बैरोमीटर (Barometer)",
    formula_en: "Instrument measuring Atmospheric Pressure = Barometer",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• पृथ्वी के वायुमंडलीय दाब (Air Pressure) को मापने वाले वैज्ञानिक यंत्र को <b>बैरोमीटर (Barometer)</b> कहते हैं।<br>• थर्मामीटर से तापमान, हाइग्रोमीटर से आर्द्रता और लैक्टोमीटर से दूध की शुद्धता मापी जाती है।",
    solution_en: "<b>1. Key Fact:</b><br>• A <b>Barometer</b> is a scientific instrument used to measure atmospheric pressure.",
    trick_hi: "वायुदाब = बैरोमीटर | तापमान = थर्मामीटर | दूध की शुद्धता = लैक्टोमीटर!",
    trick_en: "Barometer measures Barometric (Atmospheric) Pressure.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#1e40af" text-anchor="middle">वायुमंडलीय दाब (Atmospheric Pressure) मापक</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#2563eb" text-anchor="middle">🧭 बैरोमीटर (Barometer)</text>
    </svg>`
  },

  // Q47 Target Key: D (सिस्मोग्राफ / Seismograph)
  {
    id: 47,
    topic: "वैज्ञानिक उपकरण एवं महत्वपूर्ण खोज",
    question_hi: "भूकंप की तरंगों को रिकॉर्ड करने वाला यंत्र क्या कहलाता है?",
    question_en: "What is the instrument that records earthquake waves called?",
    options_hi: ["(a) बैरोमीटर", "(b) एनीमोमीटर", "(c) सोनार", "(d) सिस्मोग्राफ"],
    options_en: ["(a) Barometer", "(b) Anemometer", "(c) SONAR", "(d) Seismograph"],
    answer: "(d)",
    formula_hi: "भूकंपीय तरंगों का अभिलेखन = सिस्मोग्राफ (Seismograph)",
    formula_en: "Recording of Earthquake Seismic Waves = Seismograph",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• भूकंप आने पर उत्पन्न होने वाली भूकंपीय तरंगों (Seismic Waves) को रिकॉर्ड करने वाले उपकरण को <b>सिस्मोग्राफ (Seismograph)</b> कहते हैं।",
    solution_en: "<b>1. Key Fact:</b><br>• A <b>Seismograph</b> is the instrument used to detect and record seismic waves caused by earthquakes.",
    trick_hi: "भूकंप की तरंगों (Seismic waves) का ग्राफ बनाने वाला यंत्र = सिस्मोग्राफ!",
    trick_en: "Seismic waves are recorded by a Seismograph.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#fef2f2" stroke="#ef4444" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#991b1b" text-anchor="middle">भूकंप की तरंगों को रिकॉर्ड करने वाला यंत्र</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#dc2626" text-anchor="middle">📈 सिस्मोग्राफ (Seismograph)</text>
    </svg>`
  },

  // Q48 Target Key: A (एमीटर / Ammeter)
  {
    id: 48,
    topic: "वैज्ञानिक उपकरण एवं महत्वपूर्ण खोज",
    question_hi: "विद्युत धारा मापने का यंत्र क्या कहलाता है?",
    question_en: "What is the instrument used to measure electric current called?",
    options_hi: ["(a) एमीटर", "(b) वोल्टमीटर", "(c) गैल्वेनोमीटर", "(d) ओडोमीटर"],
    options_en: ["(a) Ammeter", "(b) Voltmeter", "(c) Galvanometer", "(d) Odometer"],
    answer: "(a)",
    formula_hi: "विद्युत धारा (Electric Current) मापक = एमीटर (Ammeter) | विभवांतर मापक = वोल्टमीटर",
    formula_en: "Electric Current Meter = Ammeter | Potential Difference Meter = Voltmeter",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• किसी विद्युत परिपथ में प्रवाहित होने वाली <b>विद्युत धारा (Electric Current)</b> को मापने वाले यंत्र को <b>एमीटर (Ammeter)</b> कहते हैं।<br>• जबकि दो बिंदुओं के बीच विद्युत विभवांतर (वोल्टेज) मापने के लिए 'वोल्टमीटर' का उपयोग होता है।",
    solution_en: "<b>1. Key Fact:</b><br>• An <b>Ammeter</b> is used to measure electric current (in Amperes) in a circuit, while a Voltmeter measures electric potential difference.",
    trick_hi: "धारा का मात्रक 'एम्पियर' है और मापने वाला यंत्र 'एमीटर (Ammeter)' है!",
    trick_en: "Ampere (Current) is measured by Ammeter.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#92400e" text-anchor="middle">परिपथ में विद्युत धारा (Electric Current) का मापन</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#b45309" text-anchor="middle">⚡ एमीटर (Ammeter)</text>
    </svg>`
  },

  // Q49 Target Key: B (अलेक्जेंडर फ्लेमिंग / Alexander Fleming)
  {
    id: 49,
    topic: "वैज्ञानिक उपकरण एवं महत्वपूर्ण खोज",
    question_hi: "पेनिसिलिन की खोज किसने की थी?",
    question_en: "Who discovered Penicillin (the first antibiotic)?",
    options_hi: ["(a) लुई पाश्चर", "(b) अलेक्जेंडर फ्लेमिंग", "(c) एडवर्ड जेनर", "(d) रॉबर्ट कोच"],
    options_en: ["(a) Louis Pasteur", "(b) Alexander Fleming", "(c) Edward Jenner", "(d) Robert Koch"],
    answer: "(b)",
    formula_hi: "विश्व की प्रथम एंटीबायोटिक औषधि (पेनिसिलिन) के खोजकर्ता = अलेक्जेंडर फ्लेमिंग (1928)",
    formula_en: "Discoverer of First Antibiotic (Penicillin) = Alexander Fleming (1928)",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• विश्व की पहली प्रतिजैविक (Antibiotic) दवा <b>पेनिसिलिन (Penicillin)</b> की खोज वर्ष 1928 में <b>सर अलेक्जेंडर फ्लेमिंग (Alexander Fleming)</b> ने की थी।<br>• चेचक के टीके की खोज 'एडवर्ड जेनर' ने की थी।",
    solution_en: "<b>1. Key Fact:</b><br>• <b>Alexander Fleming</b> discovered <b>Penicillin</b>, the world's first antibiotic medicine, in 1928.",
    trick_hi: "पेनिसिलिन (पहली एंटीबायोटिक) = अलेक्जेंडर फ्लेमिंग!",
    trick_en: "Penicillin = Alexander Fleming.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#065f46" text-anchor="middle">प्रथम एंटीबायोटिक 'पेनिसिलिन' की खोज (1928)</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#059669" text-anchor="middle">💊 अलेक्जेंडर फ्लेमिंग (Alexander Fleming)</text>
    </svg>`
  },

  // Q50 Target Key: C (अलेक्जेंडर ग्राहम बेल / Alexander Graham Bell)
  {
    id: 50,
    topic: "वैज्ञानिक उपकरण एवं महत्वपूर्ण खोज",
    question_hi: "टेलीफोन का आविष्कार किसने किया था?",
    question_en: "Who invented the Telephone?",
    options_hi: ["(a) थॉमस अल्वा एडिसन", "(b) गुग्लिल्मो मार्कोनी", "(c) अलेक्जेंडर ग्राहम बेल", "(d) जेम्स वाट"],
    options_en: ["(a) Thomas Alva Edison", "(b) Guglielmo Marconi", "(c) Alexander Graham Bell", "(d) James Watt"],
    answer: "(c)",
    formula_hi: "टेलीफोन के आविष्कारक = अलेक्जेंडर ग्राहम बेल (1876)",
    formula_en: "Inventor of Telephone = Alexander Graham Bell (1876)",
    solution_hi: "<b>1. मुख्य तथ्य:</b><br>• <b>टेलीफोन</b> का आविष्कार वर्ष 1876 में <b>अलेक्जेंडर ग्राहम बेल (Alexander Graham Bell)</b> ने किया था।<br>• विद्युत बल्ब का आविष्कार 'थॉमस अल्वा एडिसन' ने और भाप इंजन का आविष्कार 'जेम्स वाट' ने किया था।",
    solution_en: "<b>1. Key Fact:</b><br>• The <b>Telephone</b> was invented by <b>Alexander Graham Bell</b> in 1876.",
    trick_hi: "टेलीफोन में घंटी यानी 'बेल (Bell)' बजती है — आविष्कारक 'ग्राहम बेल'!",
    trick_en: "Telephone rings a 'Bell' -> Alexander Graham Bell!",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="310" height="65" rx="10" fill="#eef2ff" stroke="#4f46e5" stroke-width="1.8"/>
      <text x="175" y="46" font-size="12" font-weight="800" fill="#3730a3" text-anchor="middle">टेलीफोन का आविष्कार (1876)</text>
      <text x="175" y="70" font-size="14" font-weight="900" fill="#4f46e5" text-anchor="middle">☎️ अलेक्जेंडर ग्राहम बेल (Alexander Graham Bell)</text>
    </svg>`
  }
];

if (typeof window !== 'undefined') {
  window.questions = questions;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = questions;
}
