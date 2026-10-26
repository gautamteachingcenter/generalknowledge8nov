/**
 * =========================================================================
 * 🎓 GAUTAM TEACHING CENTRE (GTC) - OFFICIAL CBT QUESTION BANK
 * File: js/questions.js
 * Standard: Class 6 - 7 Level (Moderate / Normal Difficulty - New Data Set)
 * Total Questions: 40 (5 Questions Per Topic)
 * 
 * Verified Official Answer Key (40 Questions):
 * BDBCADCCAD CBCDCABCDA CBBBCDACDA CDCABBCDAD
 * 
 * Features:
 *   - Fresh Moderate Numerical Data Across All 40 Questions
 *   - Full Detailed Bilingual Step-by-Step Solutions (Hindi & English)
 *   - Scientific KaTeX Mathematical Formulas & Quick Exam Shortcuts
 *   - Custom Multi-Layered 3D/2D Vector SVG Diagrams for Every Question
 * =========================================================================
 */

const questions = [
  // =======================================================================
  // 📦 1. CUBOID (घनाभ) [Q1 - Q5]
  // =======================================================================

  // Q1 Target Key: B (Correct: 600 cm³)
  {
    id: 1,
    topic: "Cuboid",
    question_hi: "एक घनाभ की लंबाई 15 सेमी, चौड़ाई 8 सेमी और ऊंचाई 5 सेमी है। इसका आयतन (Volume) क्या होगा?",
    question_en: "The length, breadth, and height of a cuboid are 15 cm, 8 cm, and 5 cm respectively. What is its volume?",
    options_hi: ["(a) 540 सेमी³", "(b) 600 सेमी³", "(c) 480 सेमी³", "(d) 650 सेमी³"],
    options_en: ["(a) 540 cm³", "(b) 600 cm³", "(c) 480 cm³", "(d) 650 cm³"],
    answer: "(b)",
    formula_hi: "घनाभ का आयतन $(\\text{Volume}) = \\text{लंबाई }(l) \\times \\text{चौड़ाई }(b) \\times \\text{ऊंचाई }(h)$",
    formula_en: "Volume of Cuboid $(V) = \\text{Length }(l) \\times \\text{Breadth }(b) \\times \\text{Height }(h)$",
    solution_hi: "<b>1. दिया गया विवरण (Given):</b><br>• घनाभ की लंबाई $(l) = 15\\text{ सेमी}$<br>• घनाभ की चौड़ाई $(b) = 8\\text{ सेमी}$<br>• घनाभ की ऊंचाई $(h) = 5\\text{ सेमी}$<br><br><b>2. सूत्र का प्रयोग (Formula):</b><br>$$\\text{आयतन }(V) = l \\times b \\times h$$<br><br><b>3. चरणबद्ध गणना (Step-by-Step Calculation):</b><br>$$V = 15 \\times 8 \\times 5$$<br>$$V = 120 \\times 5 = \\mathbf{600\\text{ सेमी}^3}$$<br>अतः घनाभ का कुल आयतन <b>600 सेमी³</b> है।",
    solution_en: "<b>1. Given Dimensions:</b><br>• Length $(l) = 15\\text{ cm}$<br>• Breadth $(b) = 8\\text{ cm}$<br>• Height $(h) = 5\\text{ cm}$<br><br><b>2. Formula:</b><br>$$\\text{Volume }(V) = l \\times b \\times h$$<br><br><b>3. Step-by-Step Calculation:</b><br>$$V = 15 \\times 8 \\times 5$$<br>$$V = 120 \\times 5 = \\mathbf{600\\text{ cm}^3}$$<br>Hence, the volume of the cuboid is <b>600 cm³</b>.",
    trick_hi: "पहले $8 \\times 5 = 40$ करें, फिर $15 \\times 40 = 600\\text{ सेमी}^3$ बिना पेन उठाए निकालें!",
    trick_en: "Multiply $8 \\times 5 = 40$ first, then $15 \\times 40 = 600\\text{ cm}^3$ mentally!",
    diagram_svg: `<svg viewBox="0 0 360 175" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cubGradTop1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#bae6fd"/>
          <stop offset="100%" stop-color="#7dd3fc"/>
        </linearGradient>
        <linearGradient id="cubGradFront1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#e0f2fe"/>
          <stop offset="100%" stop-color="#bae6fd"/>
        </linearGradient>
        <linearGradient id="cubGradSide1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38bdf8"/>
          <stop offset="100%" stop-color="#0284c7"/>
        </linearGradient>
      </defs>
      <!-- 3D Isometric Cuboid -->
      <polygon points="55,60 205,60 250,25 100,25" fill="url(#cubGradTop1)" stroke="#0369a1" stroke-width="2" stroke-linejoin="round"/>
      <polygon points="205,60 250,25 250,105 205,140" fill="url(#cubGradSide1)" fill-opacity="0.35" stroke="#0369a1" stroke-width="2" stroke-linejoin="round"/>
      <polygon points="55,60 205,60 205,140 55,140" fill="url(#cubGradFront1)" stroke="#0369a1" stroke-width="2" stroke-linejoin="round"/>
      <!-- Internal Hidden Edges -->
      <line x1="100" y1="25" x2="100" y2="105" stroke="#0284c7" stroke-width="1.2" stroke-dasharray="4,4"/>
      <line x1="55" y1="140" x2="100" y2="105" stroke="#0284c7" stroke-width="1.2" stroke-dasharray="4,4"/>
      <line x1="100" y1="105" x2="250" y2="105" stroke="#0284c7" stroke-width="1.2" stroke-dasharray="4,4"/>
      <!-- Dimension Labels -->
      <text x="130" y="158" font-size="12.5" font-weight="900" fill="#0369a1" text-anchor="middle">लंबाई (l) = 15 cm</text>
      <text x="235" y="132" font-size="11.5" font-weight="900" fill="#0f172a">चौड़ाई (b) = 8 cm</text>
      <text x="10" y="104" font-size="11.5" font-weight="900" fill="#dc2626">h = 5 cm</text>
      <!-- Center Volume Callout -->
      <rect x="78" y="84" width="104" height="32" rx="6" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/>
      <text x="130" y="105" font-size="12" font-weight="900" fill="#0369a1" text-anchor="middle">V = 600 cm³</text>
    </svg>`
  },

  // Q2 Target Key: D (Correct: 288 cm²)
  {
    id: 2,
    topic: "Cuboid",
    question_hi: "एक घनाभ की लंबाई 12 सेमी, चौड़ाई 6 सेमी और ऊंचाई 4 सेमी है। इसका कुल पृष्ठीय क्षेत्रफल (Total Surface Area) ज्ञात कीजिए।",
    question_en: "Find the total surface area of a cuboid having length 12 cm, breadth 6 cm, and height 4 cm.",
    options_hi: ["(a) 264 सेमी²", "(b) 276 सेमी²", "(c) 312 सेमी²", "(d) 288 सेमी²"],
    options_en: ["(a) 264 cm²", "(b) 276 cm²", "(c) 312 cm²", "(d) 288 cm²"],
    answer: "(d)",
    formula_hi: "कुल पृष्ठीय क्षेत्रफल $(\\text{TSA}) = 2(lb + bh + hl)$",
    formula_en: "Total Surface Area $(\\text{TSA}) = 2(lb + bh + hl)$",
    solution_hi: "<b>1. दिया गया है (Given):</b><br>• $l = 12\\text{ सेमी}, \\quad b = 6\\text{ सेमी}, \\quad h = 4\\text{ सेमी}$<br><br><b>2. युग्मों का गुणनफल (Pairwise Products):</b><br>• $l \\times b = 12 \\times 6 = 72\\text{ सेमी}^2$<br>• $b \\times h = 6 \\times 4 = 24\\text{ सेमी}^2$<br>• $h \\times l = 4 \\times 12 = 48\\text{ सेमी}^2$<br><br><b>3. कुल पृष्ठीय क्षेत्रफल (TSA):</b><br>$$\\text{TSA} = 2(72 + 24 + 48)$$<br>$$\\text{TSA} = 2 \\times 144 = \\mathbf{288\\text{ सेमी}^2}$$",
    solution_en: "<b>1. Given Dimensions:</b><br>• $l = 12\\text{ cm}, \\quad b = 6\\text{ cm}, \\quad h = 4\\text{ cm}$<br><br><b>2. Pairwise Products:</b><br>• $l \\times b = 12 \\times 6 = 72\\text{ cm}^2$<br>• $b \\times h = 6 \\times 4 = 24\\text{ cm}^2$<br>• $h \\times l = 4 \\times 12 = 48\\text{ cm}^2$<br><br><b>3. Total Surface Area (TSA):</b><br>$$\\text{TSA} = 2(72 + 24 + 48) = 2 \\times 144 = \\mathbf{288\\text{ cm}^2}$$",
    trick_hi: "तीनों सतहों का योग $(72 + 24 + 48 = 144)$ निकालें और उसका दोगुना करें: $144 \\times 2 = 288\\text{ सेमी}^2$।",
    trick_en: "Sum the 3 unique face areas $(72 + 24 + 48 = 144)$ and double it: $2 \\times 144 = 288\\text{ cm}^2$.",
    diagram_svg: `<svg viewBox="0 0 360 170" width="100%" height="155" xmlns="http://www.w3.org/2000/svg">
      <!-- 3D Cuboid with Face Areas -->
      <polygon points="35,55 155,55 195,22 75,22" fill="#dcfce7" stroke="#16a34a" stroke-width="2" stroke-linejoin="round"/>
      <polygon points="155,55 195,22 195,95 155,128" fill="#fef3c7" stroke="#d97706" stroke-width="2" stroke-linejoin="round"/>
      <polygon points="35,55 155,55 155,128 35,128" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" stroke-linejoin="round"/>
      <text x="115" y="43" font-size="10.5" font-weight="900" fill="#15803d" text-anchor="middle">lb = 12×6 = 72</text>
      <text x="95" y="96" font-size="11" font-weight="900" fill="#0369a1" text-anchor="middle">hl = 4×12 = 48</text>
      <text x="176" y="82" font-size="9.5" font-weight="900" fill="#b45309" text-anchor="middle">bh=24</text>
      <text x="95" y="148" font-size="11.5" font-weight="800" fill="#0f172a" text-anchor="middle">l=12, b=6, h=4 cm</text>
      <!-- Summary Card -->
      <rect x="210" y="32" width="140" height="95" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.8"/>
      <text x="280" y="55" font-size="11" font-weight="900" fill="#334155" text-anchor="middle">TSA = 2(lb+bh+hl)</text>
      <text x="280" y="78" font-size="11" font-weight="800" fill="#0284c7" text-anchor="middle">= 2(72 + 24 + 48)</text>
      <text x="280" y="98" font-size="11" font-weight="800" fill="#0284c7" text-anchor="middle">= 2 × 144</text>
      <text x="280" y="118" font-size="12.5" font-weight="900" fill="#059669" text-anchor="middle">= 288 cm²</text>
    </svg>`
  },

  // Q3 Target Key: B (Correct: 6 cm)
  {
    id: 3,
    topic: "Cuboid",
    question_hi: "एक घनाभाकार बक्से का आयतन 720 सेमी³ है। यदि इसकी लंबाई 15 सेमी तथा चौड़ाई 8 सेमी हो, तो इसकी ऊंचाई क्या होगी?",
    question_en: "The volume of a cuboidal box is 720 cm³. If its length is 15 cm and breadth is 8 cm, what is its height?",
    options_hi: ["(a) 5 सेमी", "(b) 6 सेमी", "(c) 8 सेमी", "(d) 9 सेमी"],
    options_en: ["(a) 5 cm", "(b) 6 cm", "(c) 8 cm", "(d) 9 cm"],
    answer: "(b)",
    formula_hi: "ऊंचाई $(h) = \\frac{\\text{आयतन (Volume)}}{\\text{लंबाई }(l) \\times \\text{चौड़ाई }(b)}$",
    formula_en: "Height $(h) = \\frac{\\text{Volume }(V)}{\\text{Length }(l) \\times \\text{Breadth }(b)}$",
    solution_hi: "<b>1. दिया गया है (Given):</b><br>• कुल आयतन $(V) = 720\\text{ सेमी}^3$<br>• लंबाई $(l) = 15\\text{ सेमी}$ तथा चौड़ाई $(b) = 8\\text{ सेमी}$<br><br><b>2. आधार का क्षेत्रफल (Base Area):</b><br>$$\\text{आधार का क्षेत्रफल} = l \\times b = 15 \\times 8 = 120\\text{ सेमी}^2$$<br><br><b>3. ऊंचाई की गणना (Height):</b><br>$$h = \\frac{720}{120} = \\mathbf{6\\text{ सेमी}}$$",
    solution_en: "<b>1. Given Data:</b><br>• Volume $(V) = 720\\text{ cm}^3$<br>• Length $(l) = 15\\text{ cm}, \\quad$ Breadth $(b) = 8\\text{ cm}$<br><br><b>2. Base Area:</b><br>$$\\text{Base Area} = 15 \\times 8 = 120\\text{ cm}^2$$<br><br><b>3. Height Calculation:</b><br>$$h = \\frac{720}{120} = \\mathbf{6\\text{ cm}}$$",
    trick_hi: "आधार का क्षेत्रफल $15 \\times 8 = 120$। अब $720$ को $120$ से भाग दें: $720 \\div 120 = 6\\text{ सेमी}$।",
    trick_en: "Base area is $15 \\times 8 = 120$. Divide volume by base area: $720 \\div 120 = 6\\text{ cm}$.",
    diagram_svg: `<svg viewBox="0 0 360 165" width="100%" height="150" xmlns="http://www.w3.org/2000/svg">
      <!-- Cuboid with Shaded Base -->
      <polygon points="45,100 175,100 215,70 85,70" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.8"/>
      <polygon points="45,45 175,45 215,15 85,15" fill="#e0f2fe" fill-opacity="0.6" stroke="#0284c7" stroke-width="1.8"/>
      <polygon points="175,45 215,15 215,70 175,100" fill="#bae6fd" fill-opacity="0.5" stroke="#0284c7" stroke-width="1.8"/>
      <rect x="45" y="45" width="130" height="55" fill="#f0f9ff" fill-opacity="0.5" stroke="#0284c7" stroke-width="1.8"/>
      <text x="110" y="75" font-size="12" font-weight="900" fill="#0369a1" text-anchor="middle">V = 720 cm³</text>
      <text x="110" y="120" font-size="11.5" font-weight="900" fill="#15803d" text-anchor="middle">आधार = 15 × 8 = 120 cm²</text>
      <!-- Height Arrow -->
      <line x1="235" y1="15" x2="235" y2="70" stroke="#dc2626" stroke-width="2.5"/>
      <text x="292" y="48" font-size="13" font-weight="900" fill="#dc2626" text-anchor="middle">h = 720/120</text>
      <text x="292" y="68" font-size="14" font-weight="900" fill="#059669" text-anchor="middle">h = 6 cm</text>
    </svg>`
  },

  // Q4 Target Key: C (Correct: 144 sq.m)
  {
    id: 4,
    topic: "Cuboid",
    question_hi: "एक कमरे की लंबाई 10 मीटर, चौड़ाई 8 मीटर और ऊंचाई 4 मीटर है। कमरे की चारों दीवारों का क्षेत्रफल क्या होगा?",
    question_en: "A room is 10 m long, 8 m wide, and 4 m high. What is the total area of its four walls?",
    options_hi: ["(a) 120 वर्ग मीटर", "(b) 136 वर्ग मीटर", "(c) 144 वर्ग मीटर", "(d) 160 वर्ग मीटर"],
    options_en: ["(a) 120 sq.m", "(b) 136 sq.m", "(c) 144 sq.m", "(d) 160 sq.m"],
    answer: "(c)",
    formula_hi: "चारों दीवारों का क्षेत्रफल $= 2(l + b) \\times h$",
    formula_en: "Area of Four Walls $= 2(l + b) \\times h$",
    solution_hi: "<b>1. दिया गया है (Given):</b><br>• कमरे की लंबाई $(l) = 10\\text{ मी}$<br>• कमरे की चौड़ाई $(b) = 8\\text{ मी}$<br>• कमरे की ऊंचाई $(h) = 4\\text{ मी}$<br><br><b>2. सूत्र एवं गणना:</b><br>$$\\text{चारों दीवारों का क्षेत्रफल} = 2(l + b) \\times h$$<br>$$= 2(10 + 8) \\times 4$$<br>$$= 2 \\times 18 \\times 4 = 36 \\times 4 = \\mathbf{144\\text{ वर्ग मीटर}}$$",
    solution_en: "<b>1. Given Dimensions:</b><br>• Length $(l) = 10\\text{ m}, \\quad$ Breadth $(b) = 8\\text{ m}, \\quad$ Height $(h) = 4\\text{ m}$<br><br><b>2. Formula & Calculation:</b><br>$$\\text{Area of 4 Walls} = 2(l + b) \\times h$$<br>$$= 2(10 + 8) \\times 4 = 36 \\times 4 = \\mathbf{144\\text{ sq.m}}$$",
    trick_hi: "फर्श का परिमाप $= 2(10 + 8) = 36\\text{ मी}$। ऊंचाई से गुणा करें: $36 \\times 4 = 144\\text{ वर्ग मीटर}$।",
    trick_en: "Floor perimeter $= 2(10 + 8) = 36\\text{ m}$. Multiply by height: $36 \\times 4 = 144\\text{ sq.m}$.",
    diagram_svg: `<svg viewBox="0 0 360 155" width="100%" height="145" xmlns="http://www.w3.org/2000/svg">
      <!-- Unfolded 4 Walls Diagram -->
      <rect x="25" y="25" width="80" height="65" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
      <rect x="105" y="25" width="60" height="65" fill="#e0e7ff" stroke="#4f46e5" stroke-width="2"/>
      <rect x="165" y="25" width="80" height="65" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
      <rect x="245" y="25" width="60" height="65" fill="#e0e7ff" stroke="#4f46e5" stroke-width="2"/>
      <text x="65" y="62" font-size="11" font-weight="800" fill="#1e40af" text-anchor="middle">l = 10m</text>
      <text x="135" y="62" font-size="11" font-weight="800" fill="#3730a3" text-anchor="middle">b = 8m</text>
      <text x="205" y="62" font-size="11" font-weight="800" fill="#1e40af" text-anchor="middle">l = 10m</text>
      <text x="275" y="62" font-size="11" font-weight="800" fill="#3730a3" text-anchor="middle">b = 8m</text>
      <text x="332" y="62" font-size="11.5" font-weight="900" fill="#dc2626" text-anchor="middle">h=4m</text>
      <text x="165" y="115" font-size="11.5" font-weight="900" fill="#0f172a" text-anchor="middle">कुल परिमाप 2(10 + 8) = 36 m</text>
      <text x="165" y="138" font-size="13" font-weight="900" fill="#059669" text-anchor="middle">चारों दीवारों का क्षेत्रफल = 36 × 4 = 144 m²</text>
    </svg>`
  },

  // Q5 Target Key: A (Correct: 120 cm)
  {
    id: 5,
    topic: "Cuboid",
    question_hi: "एक घनाभ की लंबाई 14 सेमी, चौड़ाई 9 सेमी तथा ऊंचाई 7 सेमी है। इसके सभी 12 किनारों (Edges) की कुल लंबाई कितनी होगी?",
    question_en: "A cuboid has length 14 cm, breadth 9 cm, and height 7 cm. What is the total length of all its 12 edges?",
    options_hi: ["(a) 120 सेमी", "(b) 110 सेमी", "(c) 100 सेमी", "(d) 130 सेमी"],
    options_en: ["(a) 120 cm", "(b) 110 cm", "(c) 100 cm", "(d) 130 cm"],
    answer: "(a)",
    formula_hi: "12 किनारों की कुल लंबाई $= 4(l + b + h)$",
    formula_en: "Total Length of 12 Edges $= 4(l + b + h)$",
    solution_hi: "<b>1. अवधारणा (Concept):</b><br>एक घनाभ में 4 लंबाइयाँ $(4l)$, 4 चौड़ाइयाँ $(4b)$ और 4 ऊँचाइयाँ $(4h)$ अर्थात कुल 12 किनारे होते हैं।<br><br><b>2. चरणबद्ध गणना:</b><br>$$\\text{कुल लंबाई} = 4(l + b + h)$$<br>$$= 4(14 + 9 + 7)$$<br>$$= 4 \\times 30 = \\mathbf{120\\text{ सेमी}}$$",
    solution_en: "<b>1. Concept:</b><br>A cuboid consists of 4 lengths, 4 breadths, and 4 heights (12 edges in total).<br><br><b>2. Calculation:</b><br>$$\\text{Sum of 12 edges} = 4(l + b + h)$$<br>$$= 4(14 + 9 + 7) = 4 \\times 30 = \\mathbf{120\\text{ cm}}$$",
    trick_hi: "तीनों भुजाओं को जोड़ें $(14 + 9 + 7 = 30)$ और सीधे $4$ से गुणा करें: $30 \\times 4 = 120\\text{ सेमी}$।",
    trick_en: "Add the three dimensions $(14 + 9 + 7 = 30)$ and multiply by $4$: $30 \\times 4 = 120\\text{ cm}$.",
    diagram_svg: `<svg viewBox="0 0 360 155" width="100%" height="145" xmlns="http://www.w3.org/2000/svg">
      <!-- Wireframe Cuboid Highlighting 12 Edges -->
      <polygon points="45,55 165,55 200,25 80,25" fill="none" stroke="#0284c7" stroke-width="2.2"/>
      <polygon points="45,120 165,120 200,90 80,90" fill="none" stroke="#0284c7" stroke-width="1.8" stroke-dasharray="4,3"/>
      <line x1="45" y1="55" x2="45" y2="120" stroke="#dc2626" stroke-width="2.5"/>
      <line x1="165" y1="55" x2="165" y2="120" stroke="#dc2626" stroke-width="2.5"/>
      <line x1="200" y1="25" x2="200" y2="90" stroke="#dc2626" stroke-width="2.5"/>
      <line x1="80" y1="25" x2="80" y2="90" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="4,3"/>
      <text x="105" y="138" font-size="11.5" font-weight="900" fill="#0369a1" text-anchor="middle">l=14, b=9, h=7 cm</text>
      <!-- Formula Box -->
      <rect x="215" y="30" width="135" height="85" rx="8" fill="#fdf4ff" stroke="#c026d3" stroke-width="1.8"/>
      <text x="282" y="54" font-size="11" font-weight="900" fill="#86198f" text-anchor="middle">12 किनारे = 4(l+b+h)</text>
      <text x="282" y="76" font-size="11" font-weight="800" fill="#a21caf" text-anchor="middle">= 4(14 + 9 + 7)</text>
      <text x="282" y="100" font-size="12.5" font-weight="900" fill="#059669" text-anchor="middle">= 4 × 30 = 120 cm</text>
    </svg>`
  },

  // =======================================================================
  // 🎲 2. CUBE (घन) [Q6 - Q10]
  // =======================================================================

  // Q6 Target Key: D (Correct: 512 cm³)
  {
    id: 6,
    topic: "Cube",
    question_hi: "एक घन की प्रत्येक भुजा 8 सेमी लंबी है। इस घन का आयतन (Volume) क्या होगा?",
    question_en: "Each edge of a cube is 8 cm long. What is the volume of this cube?",
    options_hi: ["(a) 384 सेमी³", "(b) 484 सेमी³", "(c) 576 सेमी³", "(d) 512 सेमी³"],
    options_en: ["(a) 384 cm³", "(b) 484 cm³", "(c) 576 cm³", "(d) 512 cm³"],
    answer: "(d)",
    formula_hi: "घन का आयतन $(V) = (\\text{भुजा})^3 = a^3$",
    formula_en: "Volume of Cube $(V) = (\\text{side})^3 = a^3$",
    solution_hi: "<b>1. दिया गया है (Given):</b><br>• घन की प्रत्येक भुजा $(a) = 8\\text{ सेमी}$<br><br><b>2. सूत्र एवं गणना:</b><br>$$\\text{आयतन }(V) = a^3 = a \\times a \\times a$$<br>$$V = 8 \\times 8 \\times 8 = 64 \\times 8 = \\mathbf{512\\text{ सेमी}^3}$$",
    solution_en: "<b>1. Given:</b><br>• Side of the cube $(a) = 8\\text{ cm}$<br><br><b>2. Formula & Calculation:</b><br>$$\\text{Volume }(V) = a^3 = 8 \\times 8 \\times 8 = \\mathbf{512\\text{ cm}^3}$$",
    trick_hi: "8 का घन $(8^3 = 512)$ सीधे याद रखें: $8 \\times 8 = 64$, और $64 \\times 8 = 512$।",
    trick_en: "Memorize cubes from 1 to 15: $8^3 = 512\\text{ cm}^3$.",
    diagram_svg: `<svg viewBox="0 0 350 160" width="100%" height="150" xmlns="http://www.w3.org/2000/svg">
      <!-- 3D Isometric Cube -->
      <polygon points="65,55 145,55 180,22 100,22" fill="#bae6fd" stroke="#0284c7" stroke-width="2" stroke-linejoin="round"/>
      <polygon points="145,55 180,22 180,102 145,135" fill="#7dd3fc" stroke="#0284c7" stroke-width="2" stroke-linejoin="round"/>
      <polygon points="65,55 145,55 145,135 65,135" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" stroke-linejoin="round"/>
      <text x="105" y="100" font-size="13" font-weight="900" fill="#0369a1" text-anchor="middle">a = 8 cm</text>
      <text x="105" y="152" font-size="11.5" font-weight="800" fill="#0f172a" text-anchor="middle">भुजा (a) = 8 cm</text>
      <!-- Calculation Box -->
      <rect x="200" y="38" width="135" height="82" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.8"/>
      <text x="267" y="64" font-size="12" font-weight="900" fill="#065f46" text-anchor="middle">आयतन V = a³</text>
      <text x="267" y="86" font-size="11.5" font-weight="800" fill="#047857" text-anchor="middle">= 8 × 8 × 8</text>
      <text x="267" y="108" font-size="13" font-weight="900" fill="#059669" text-anchor="middle">= 512 cm³</text>
    </svg>`
  },

  // Q7 Target Key: C (Correct: 294 cm²)
  {
    id: 7,
    topic: "Cube",
    question_hi: "यदि किसी घन की एक भुजा 7 सेमी है, तो उसका कुल पृष्ठीय क्षेत्रफल (Total Surface Area) कितना होगा?",
    question_en: "If the side of a cube is 7 cm, what is its total surface area?",
    options_hi: ["(a) 245 सेमी²", "(b) 312 सेमी²", "(c) 294 सेमी²", "(d) 343 सेमी²"],
    options_en: ["(a) 245 cm²", "(b) 312 cm²", "(c) 294 cm²", "(d) 343 cm²"],
    answer: "(c)",
    formula_hi: "घन का कुल पृष्ठीय क्षेत्रफल $(\\text{TSA}) = 6a^2$",
    formula_en: "Total Surface Area of Cube $(\\text{TSA}) = 6a^2$",
    solution_hi: "<b>1. दिया गया है (Given):</b><br>• घन की भुजा $(a) = 7\\text{ सेमी}$<br><br><b>2. एक वर्गाकार फलक का क्षेत्रफल:</b><br>$$a^2 = 7 \\times 7 = 49\\text{ सेमी}^2$$<br><br><b>3. सभी 6 फलकों का कुल पृष्ठीय क्षेत्रफल:</b><br>$$\\text{TSA} = 6 \\times 49 = \\mathbf{294\\text{ सेमी}^2}$$",
    solution_en: "<b>1. Given:</b><br>• Side of cube $(a) = 7\\text{ cm}$<br><br><b>2. Area of 1 square face:</b><br>$$a^2 = 7^2 = 49\\text{ cm}^2$$<br><br><b>3. Total Surface Area of 6 faces:</b><br>$$\\text{TSA} = 6 \\times 49 = \\mathbf{294\\text{ cm}^2}$$",
    trick_hi: "$6 \\times (50 - 1) = 300 - 6 = 294\\text{ सेमी}^2$ मौखिक गणना!",
    trick_en: "Compute $6 \\times 49$ mentally as $6 \\times (50 - 1) = 300 - 6 = 294\\text{ cm}^2$.",
    diagram_svg: `<svg viewBox="0 0 350 155" width="100%" height="145" xmlns="http://www.w3.org/2000/svg">
      <!-- Cube Net (6 Squares) -->
      <g stroke="#0284c7" stroke-width="1.8" fill="#e0f2fe">
        <rect x="75" y="15" width="36" height="36"/>
        <rect x="39" y="51" width="36" height="36"/>
        <rect x="75" y="51" width="36" height="36" fill="#bae6fd"/>
        <rect x="111" y="51" width="36" height="36"/>
        <rect x="147" y="51" width="36" height="36"/>
        <rect x="75" y="87" width="36" height="36"/>
      </g>
      <text x="93" y="73" font-size="10" font-weight="900" fill="#0369a1" text-anchor="middle">49</text>
      <text x="110" y="142" font-size="11.5" font-weight="800" fill="#0f172a" text-anchor="middle">6 वर्गाकार फलक (प्रत्येक 7² = 49 cm²)</text>
      <!-- Result Box -->
      <rect x="200" y="32" width="138" height="80" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.8"/>
      <text x="269" y="58" font-size="11.5" font-weight="900" fill="#15803d" text-anchor="middle">TSA = 6 × a²</text>
      <text x="269" y="79" font-size="11.5" font-weight="800" fill="#166534" text-anchor="middle">= 6 × 7² = 6 × 49</text>
      <text x="269" y="101" font-size="13" font-weight="900" fill="#059669" text-anchor="middle">= 294 cm²</text>
    </svg>`
  },

  // Q8 Target Key: C (Correct: 9 cm)
  {
    id: 8,
    topic: "Cube",
    question_hi: "एक घन का आयतन 729 सेमी³ है। उस घन की प्रत्येक भुजा की लंबाई क्या होगी?",
    question_en: "The volume of a cube is 729 cm³. What is the length of each edge of the cube?",
    options_hi: ["(a) 7 सेमी", "(b) 8 सेमी", "(c) 9 सेमी", "(d) 11 सेमी"],
    options_en: ["(a) 7 cm", "(b) 8 cm", "(c) 9 cm", "(d) 11 cm"],
    answer: "(c)",
    formula_hi: "घन की भुजा $(a) = \\sqrt[3]{\\text{आयतन }(V)}$",
    formula_en: "Edge of Cube $(a) = \\sqrt[3]{\\text{Volume }(V)}$",
    solution_hi: "<b>1. दिया गया है (Given):</b><br>• घन का आयतन $(a^3) = 729\\text{ सेमी}^3$<br><br><b>2. घनमूल द्वारा गणना (Cube Root):</b><br>$$a = \\sqrt[3]{729}$$<br>$$729 = 9 \\times 9 \\times 9 = 9^3$$<br>$$\\therefore a = \\mathbf{9\\text{ सेमी}}$$",
    solution_en: "<b>1. Given:</b><br>• Volume of cube $(a^3) = 729\\text{ cm}^3$<br><br><b>2. Finding Cube Root:</b><br>$$a = \\sqrt[3]{729} = \\sqrt[3]{9 \\times 9 \\times 9} = \\mathbf{9\\text{ cm}}$$",
    trick_hi: "इकाई अंक 9 केवल $9^3 = 729$ में आता है, अतः भुजा $= 9\\text{ सेमी}$।",
    trick_en: "Unit digit 9 comes from $9^3 = 729$, so edge $a = 9\\text{ cm}$.",
    diagram_svg: `<svg viewBox="0 0 350 145" width="100%" height="135" xmlns="http://www.w3.org/2000/svg">
      <polygon points="55,48 130,48 160,20 85,20" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <polygon points="130,48 160,20 160,95 130,123" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
      <polygon points="55,48 130,48 130,123 55,123" fill="#fffbeb" stroke="#d97706" stroke-width="2"/>
      <text x="92" y="88" font-size="11.5" font-weight="900" fill="#b45309" text-anchor="middle">V = 729 cm³</text>
      <rect x="185" y="28" width="150" height="85" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.8"/>
      <text x="260" y="54" font-size="11.5" font-weight="900" fill="#92400e" text-anchor="middle">a = ∛729</text>
      <text x="260" y="76" font-size="11.5" font-weight="800" fill="#b45309" text-anchor="middle">= ∛(9 × 9 × 9)</text>
      <text x="260" y="100" font-size="13.5" font-weight="900" fill="#059669" text-anchor="middle">a = 9 cm</text>
    </svg>`
  },

  // Q9 Target Key: A (Correct: 144 cm²)
  {
    id: 9,
    topic: "Cube",
    question_hi: "एक घन का कुल पृष्ठीय क्षेत्रफल 216 सेमी² है। इसके पार्श्व पृष्ठ (चारों दीवारों) का क्षेत्रफल क्या होगा?",
    question_en: "The total surface area of a cube is 216 cm². What is its lateral surface area (area of 4 walls)?",
    options_hi: ["(a) 144 सेमी²", "(b) 108 सेमी²", "(c) 160 सेमी²", "(d) 180 सेमी²"],
    options_en: ["(a) 144 cm²", "(b) 108 cm²", "(c) 160 cm²", "(d) 180 cm²"],
    answer: "(a)",
    formula_hi: "$\\text{TSA} = 6a^2 \\quad | \\quad \\text{पार्श्व क्षेत्रफल (LSA)} = 4a^2$",
    formula_en: "$\\text{TSA} = 6a^2 \\quad | \\quad \\text{Lateral Surface Area (LSA)} = 4a^2$",
    solution_hi: "<b>1. एक फलक का क्षेत्रफल निकालें:</b><br>$$6a^2 = 216 \\implies a^2 = \\frac{216}{6} = 36\\text{ सेमी}^2$$<br><br><b>2. पार्श्व पृष्ठीय क्षेत्रफल (4 दीवारों का क्षेत्रफल):</b><br>$$\\text{LSA} = 4a^2 = 4 \\times 36 = \\mathbf{144\\text{ सेमी}^2}$$",
    solution_en: "<b>1. Find area of 1 face $(a^2)$:</b><br>$$6a^2 = 216 \\implies a^2 = \\frac{216}{6} = 36\\text{ cm}^2$$<br><br><b>2. Lateral Surface Area (4 walls):</b><br>$$\\text{LSA} = 4a^2 = 4 \\times 36 = \\mathbf{144\\text{ cm}^2}$$",
    trick_hi: "सीधा अनुपात लगाएं: $\\text{LSA} = \\frac{4}{6} \\times 216 = 4 \\times 36 = 144\\text{ सेमी}^2$।",
    trick_en: "Direct ratio: $\\text{LSA} = \\frac{4}{6} \\times \\text{TSA} = \\frac{4}{6} \\times 216 = 144\\text{ cm}^2$.",
    diagram_svg: `<svg viewBox="0 0 350 140" width="100%" height="130" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="25" width="145" height="85" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.8"/>
      <text x="97" y="52" font-size="11.5" font-weight="900" fill="#1e40af" text-anchor="middle">6 फलक (6a²) = 216 cm²</text>
      <text x="97" y="75" font-size="11.5" font-weight="800" fill="#1d4ed8" text-anchor="middle">1 फलक (a²) = 216 ÷ 6</text>
      <text x="97" y="96" font-size="12.5" font-weight="900" fill="#0284c7" text-anchor="middle">a² = 36 cm²</text>
      <text x="182" y="72" font-size="16" font-weight="900" fill="#64748b">➔</text>
      <rect x="198" y="25" width="135" height="85" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.8"/>
      <text x="265" y="52" font-size="11.5" font-weight="900" fill="#065f46" text-anchor="middle">4 फलक (LSA) = 4a²</text>
      <text x="265" y="75" font-size="11.5" font-weight="800" fill="#047857" text-anchor="middle">= 4 × 36</text>
      <text x="265" y="98" font-size="13" font-weight="900" fill="#059669" text-anchor="middle">= 144 cm²</text>
    </svg>`
  },

  // Q10 Target Key: D (Correct: 250 cm³)
  {
    id: 10,
    topic: "Cube",
    question_hi: "5 सेमी भुजा वाले दो घनों को आपस में सटाकर एक घनाभ बनाया गया। नए बने घनाभ का आयतन क्या होगा?",
    question_en: "Two cubes, each of edge 5 cm, are joined end-to-end to form a cuboid. What is the volume of the resulting cuboid?",
    options_hi: ["(a) 200 सेमी³", "(b) 125 सेमी³", "(c) 300 सेमी³", "(d) 250 सेमी³"],
    options_en: ["(a) 200 cm³", "(b) 125 cm³", "(c) 300 cm³", "(d) 250 cm³"],
    answer: "(d)",
    formula_hi: "नए घनाभ का आयतन $= 2 \\times a^3 \\quad (\\text{या } L \\times B \\times H)$",
    formula_en: "Volume of Resulting Cuboid $= 2 \\times a^3 \\quad (\\text{or } L \\times B \\times H)$",
    solution_hi: "<b>विधि 1 (आयतन के योग से):</b><br>• एक घन का आयतन $= 5^3 = 125\\text{ सेमी}^3$<br>• दो घनों का कुल आयतन $= 125 + 125 = \\mathbf{250\\text{ सेमी}^3}$<br><br><b>विधि 2 (घनाभ की विमाओं से):</b><br>• नई लंबाई $L = 5 + 5 = 10\\text{ सेमी}, \\quad B = 5\\text{ सेमी}, \\quad H = 5\\text{ सेमी}$<br>• आयतन $= 10 \\times 5 \\times 5 = \\mathbf{250\\text{ सेमी}^3}$",
    solution_en: "<b>Method 1 (Sum of Volumes):</b><br>• Volume of 1 cube $= 5^3 = 125\\text{ cm}^3$<br>• Volume of 2 joined cubes $= 125 \\times 2 = \\mathbf{250\\text{ cm}^3}$<br><br><b>Method 2 (Dimensions of Cuboid):</b><br>• $L = 5 + 5 = 10\\text{ cm}, \\quad B = 5\\text{ cm}, \\quad H = 5\\text{ cm}$<br>• Volume $= 10 \\times 5 \\times 5 = \\mathbf{250\\text{ cm}^3}$",
    trick_hi: "दो बराबर घनों को जोड़ने पर आयतन सीधे दोगुना हो जाता है: $125 \\times 2 = 250\\text{ सेमी}^3$।",
    trick_en: "Joining two identical cubes doubles the volume: $2 \\times 5^3 = 2 \\times 125 = 250\\text{ cm}^3$.",
    diagram_svg: `<svg viewBox="0 0 360 150" width="100%" height="140" xmlns="http://www.w3.org/2000/svg">
      <!-- Cube 1 -->
      <polygon points="45,50 115,50 140,25 70,25" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
      <rect x="45" y="50" width="70" height="60" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
      <!-- Cube 2 Joined -->
      <polygon points="115,50 185,50 210,25 140,25" fill="#7dd3fc" stroke="#0284c7" stroke-width="2"/>
      <polygon points="185,50 210,25 210,85 185,110" fill="#38bdf8" fill-opacity="0.4" stroke="#0284c7" stroke-width="2"/>
      <rect x="115" y="50" width="70" height="60" fill="#bae6fd" fill-opacity="0.6" stroke="#0284c7" stroke-width="2"/>
      <text x="80" y="84" font-size="11" font-weight="900" fill="#0369a1" text-anchor="middle">125 cm³</text>
      <text x="150" y="84" font-size="11" font-weight="900" fill="#0369a1" text-anchor="middle">125 cm³</text>
      <text x="115" y="132" font-size="11.5" font-weight="900" fill="#0f172a" text-anchor="middle">L = 5 + 5 = 10 cm, B = 5, H = 5</text>
      <!-- Total Box -->
      <rect x="225" y="38" width="122" height="68" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.8"/>
      <text x="286" y="65" font-size="11" font-weight="800" fill="#065f46" text-anchor="middle">कुल आयतन</text>
      <text x="286" y="88" font-size="13" font-weight="900" fill="#059669" text-anchor="middle">= 250 cm³</text>
    </svg>`
  },

  // =======================================================================
  // 🔺 3. TRIANGLE (त्रिभुज) [Q11 - Q15]
  // =======================================================================

  // Q11 Target Key: C (Correct: 80°)
  {
    id: 11,
    topic: "Triangle",
    question_hi: "एक त्रिभुज के तीनों कोणों का अनुपात 2 : 3 : 4 है। त्रिभुज के सबसे बड़े कोण का मान क्या होगा?",
    question_en: "The three angles of a triangle are in the ratio 2 : 3 : 4. What is the measure of the largest angle?",
    options_hi: ["(a) 60°", "(b) 70°", "(c) 80°", "(d) 90°"],
    options_en: ["(a) 60°", "(b) 70°", "(c) 80°", "(d) 90°"],
    answer: "(c)",
    formula_hi: "त्रिभुज के तीनों अंतःकोणों का योग $= 180^\\circ$",
    formula_en: "Sum of interior angles of a triangle $= 180^\\circ$",
    solution_hi: "<b>1. माना त्रिभुज के कोण:</b> $2x, \\; 3x$ और $4x$ हैं।<br><br><b>2. कोण योग गुणधर्म से:</b><br>$$2x + 3x + 4x = 180^\\circ$$<br>$$9x = 180^\\circ \\implies x = \\frac{180^\\circ}{9} = 20^\\circ$$<br><br><b>3. सबसे बड़ा कोण $(4x)$:</b><br>$$4x = 4 \\times 20^\\circ = \\mathbf{80^\\circ}$$",
    solution_en: "<b>1. Let the angles be:</b> $2x, \\; 3x,$ and $4x$.<br><br><b>2. By Angle Sum Property:</b><br>$$2x + 3x + 4x = 180^\\circ \\implies 9x = 180^\\circ \\implies x = 20^\\circ$$<br><br><b>3. Largest Angle $(4x)$:</b><br>$$4x = 4 \\times 20^\\circ = \\mathbf{80^\\circ}$$",
    trick_hi: "अनुपात का योग $= 2+3+4 = 9$। $180^\\circ \\div 9 = 20^\\circ$। सबसे बड़ा भाग $4 \\times 20^\\circ = 80^\\circ$।",
    trick_en: "Total ratio parts $= 9$. One part $= 180^\\circ \\div 9 = 20^\\circ$. Largest angle $= 4 \\times 20^\\circ = 80^\\circ$.",
    diagram_svg: `<svg viewBox="0 0 350 155" width="100%" height="145" xmlns="http://www.w3.org/2000/svg">
      <polygon points="45,125 205,125 115,22" fill="#f0fdf4" stroke="#16a34a" stroke-width="2.2" stroke-linejoin="round"/>
      <text x="115" y="48" font-size="11" font-weight="900" fill="#15803d" text-anchor="middle">2x = 40°</text>
      <text x="72" y="115" font-size="11.5" font-weight="900" fill="#dc2626">4x = 80°</text>
      <text x="165" y="115" font-size="11" font-weight="900" fill="#0369a1">3x = 60°</text>
      <rect x="220" y="32" width="120" height="82" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.6"/>
      <text x="280" y="55" font-size="11" font-weight="900" fill="#334155" text-anchor="middle">9x = 180°</text>
      <text x="280" y="76" font-size="11" font-weight="800" fill="#0284c7" text-anchor="middle">x = 20°</text>
      <text x="280" y="100" font-size="12" font-weight="900" fill="#dc2626" text-anchor="middle">4x = 80°</text>
    </svg>`
  },

  // Q12 Target Key: B (Correct: 108 cm²)
  {
    id: 12,
    topic: "Triangle",
    question_hi: "एक त्रिभुज का आधार 18 सेमी तथा संगत ऊंचाई 12 सेमी है। इस त्रिभुज का क्षेत्रफल ज्ञात कीजिए।",
    question_en: "The base of a triangle is 18 cm and its corresponding height is 12 cm. Find the area of this triangle.",
    options_hi: ["(a) 96 सेमी²", "(b) 108 सेमी²", "(c) 116 सेमी²", "(d) 216 सेमी²"],
    options_en: ["(a) 96 cm²", "(b) 108 cm²", "(c) 116 cm²", "(d) 216 cm²"],
    answer: "(b)",
    formula_hi: "त्रिभुज का क्षेत्रफल $= \\frac{1}{2} \\times \\text{आधार (Base)} \\times \\text{ऊंचाई (Height)}$",
    formula_en: "Area of Triangle $= \\frac{1}{2} \\times \\text{Base} \\times \\text{Height}$",
    solution_hi: "<b>1. दिया गया है (Given):</b><br>• आधार $(b) = 18\\text{ सेमी}$<br>• ऊंचाई $(h) = 12\\text{ सेमी}$<br><br><b>2. सूत्र से गणना:</b><br>$$\\text{क्षेत्रफल} = \\frac{1}{2} \\times 18 \\times 12$$<br>$$= 9 \\times 12 = \\mathbf{108\\text{ सेमी}^2}$$",
    solution_en: "<b>1. Given:</b><br>• Base $(b) = 18\\text{ cm}, \\quad$ Height $(h) = 12\\text{ cm}$<br><br><b>2. Calculation:</b><br>$$\\text{Area} = \\frac{1}{2} \\times 18 \\times 12 = 9 \\times 12 = \\mathbf{108\\text{ cm}^2}$$",
    trick_hi: "18 का आधा 9 करें, और $9 \\times 12 = 108\\text{ सेमी}^2$!",
    trick_en: "Take half of base $(18 \\div 2 = 9)$ and multiply by height: $9 \\times 12 = 108\\text{ cm}^2$.",
    diagram_svg: `<svg viewBox="0 0 350 155" width="100%" height="145" xmlns="http://www.w3.org/2000/svg">
      <polygon points="35,120 205,120 120,22" fill="#eff6ff" stroke="#2563eb" stroke-width="2.2" stroke-linejoin="round"/>
      <line x1="120" y1="22" x2="120" y2="120" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3"/>
      <rect x="120" y="108" width="12" height="12" fill="none" stroke="#dc2626" stroke-width="1.5"/>
      <text x="150" y="78" font-size="11.5" font-weight="900" fill="#dc2626">h = 12 cm</text>
      <text x="120" y="140" font-size="12" font-weight="900" fill="#1e40af" text-anchor="middle">आधार (Base) = 18 cm</text>
      <rect x="218" y="38" width="120" height="75" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.8"/>
      <text x="278" y="62" font-size="11" font-weight="800" fill="#065f46" text-anchor="middle">Area = ½ × 18 × 12</text>
      <text x="278" y="84" font-size="11" font-weight="800" fill="#047857" text-anchor="middle">= 9 × 12</text>
      <text x="278" y="104" font-size="13" font-weight="900" fill="#059669" text-anchor="middle">= 108 cm²</text>
    </svg>`
  },

  // Q13 Target Key: C (Correct: 24 cm)
  {
    id: 13,
    topic: "Triangle",
    question_hi: "एक समबाहु त्रिभुज (Equilateral Triangle) का परिमाप 72 सेमी है। इसकी प्रत्येक भुजा की लंबाई क्या होगी?",
    question_en: "The perimeter of an equilateral triangle is 72 cm. What is the length of each side?",
    options_hi: ["(a) 18 सेमी", "(b) 22 सेमी", "(c) 24 सेमी", "(d) 26 सेमी"],
    options_en: ["(a) 18 cm", "(b) 22 cm", "(c) 24 cm", "(d) 26 cm"],
    answer: "(c)",
    formula_hi: "समबाहु त्रिभुज का परिमाप $= 3 \\times \\text{भुजा }(a) \\implies a = \\frac{\\text{परिमाप}}{3}$",
    formula_en: "Perimeter of Equilateral Triangle $= 3a \\implies a = \\frac{\\text{Perimeter}}{3}$",
    solution_hi: "<b>1. गुणधर्म (Property):</b><br>समबाहु त्रिभुज की तीनों भुजाएँ आपस में बराबर होती हैं।<br><br><b>2. गणना:</b><br>$$3a = 72\\text{ सेमी}$$<br>$$a = \\frac{72}{3} = \\mathbf{24\\text{ सेमी}}$$",
    solution_en: "<b>1. Property:</b><br>All 3 sides of an equilateral triangle are equal in length.<br><br><b>2. Calculation:</b><br>$$3a = 72\\text{ cm} \\implies a = \\frac{72}{3} = \\mathbf{24\\text{ cm}}$$",
    trick_hi: "समबाहु त्रिभुज की भुजा निकालने के लिए परिमाप को सीधे 3 से भाग दें: $72 \\div 3 = 24\\text{ सेमी}$।",
    trick_en: "Simply divide the perimeter by 3: $72 \\div 3 = 24\\text{ cm}$.",
    diagram_svg: `<svg viewBox="0 0 350 150" width="100%" height="140" xmlns="http://www.w3.org/2000/svg">
      <polygon points="55,120 185,120 120,20" fill="#fdf4ff" stroke="#c026d3" stroke-width="2.2" stroke-linejoin="round"/>
      <text x="72" y="68" font-size="11" font-weight="900" fill="#86198f" text-anchor="middle">a = 24</text>
      <text x="168" y="68" font-size="11" font-weight="900" fill="#86198f" text-anchor="middle">a = 24</text>
      <text x="120" y="138" font-size="11.5" font-weight="900" fill="#86198f" text-anchor="middle">भुजा (a) = 24 cm</text>
      <rect x="205" y="35" width="132" height="75" rx="8" fill="#fdf4ff" stroke="#d946ef" stroke-width="1.6"/>
      <text x="271" y="58" font-size="11" font-weight="900" fill="#86198f" text-anchor="middle">3 × भुजा = 72 cm</text>
      <text x="271" y="80" font-size="11" font-weight="800" fill="#a21caf" text-anchor="middle">भुजा = 72 ÷ 3</text>
      <text x="271" y="100" font-size="13" font-weight="900" fill="#059669" text-anchor="middle">= 24 cm</text>
    </svg>`
  },

  // Q14 Target Key: D (Correct: 70°)
  {
    id: 14,
    topic: "Triangle",
    question_hi: "किसी त्रिभुज का बाह्य कोण (Exterior angle) 125° है और उसके सामने का एक अंतः सम्मुख कोण 55° है। दूसरा अंतः सम्मुख कोण क्या होगा?",
    question_en: "An exterior angle of a triangle is 125° and one of its interior opposite angles is 55°. Find the other interior opposite angle.",
    options_hi: ["(a) 60°", "(b) 65°", "(c) 75°", "(d) 70°"],
    options_en: ["(a) 60°", "(b) 65°", "(c) 75°", "(d) 70°"],
    answer: "(d)",
    formula_hi: "बाह्य कोण प्रमेय: बाह्य कोण $= \\text{दोनों अंतः सम्मुख कोणों का योग}$",
    formula_en: "Exterior Angle Theorem: $\\text{Exterior Angle} = \\text{Sum of 2 Interior Opposite Angles}$",
    solution_hi: "<b>1. दिया गया है (Given):</b><br>• बाह्य कोण $= 125^\\circ$<br>• पहला अंतः सम्मुख कोण $= 55^\\circ$<br><br><b>2. बाह्य कोण प्रमेय से:</b><br>$$55^\\circ + x = 125^\\circ$$<br>$$x = 125^\\circ - 55^\\circ = \\mathbf{70^\\circ}$$",
    solution_en: "<b>1. Given:</b><br>• Exterior angle $= 125^\\circ$, One interior opposite angle $= 55^\\circ$<br><br><b>2. By Exterior Angle Property:</b><br>$$x + 55^\\circ = 125^\\circ \\implies x = 125^\\circ - 55^\\circ = \\mathbf{70^\\circ}$$",
    trick_hi: "बाह्य कोण में से दिया गया अंतः कोण सीधे घटाएं: $125^\\circ - 55^\\circ = 70^\\circ$।",
    trick_en: "Subtract interior opposite angle from exterior angle: $125^\\circ - 55^\\circ = 70^\\circ$.",
    diagram_svg: `<svg viewBox="0 0 350 145" width="100%" height="135" xmlns="http://www.w3.org/2000/svg">
      <polygon points="40,115 190,115 125,25" fill="#f8fafc" stroke="#0284c7" stroke-width="2.2" stroke-linejoin="round"/>
      <line x1="190" y1="115" x2="295" y2="115" stroke="#0284c7" stroke-width="2.2"/>
      <text x="123" y="55" font-size="11.5" font-weight="900" fill="#0369a1" text-anchor="middle">55°</text>
      <text x="72" y="108" font-size="12" font-weight="900" fill="#059669">x = 70°</text>
      <text x="235" y="103" font-size="12.5" font-weight="900" fill="#dc2626">125° (बाह्य)</text>
      <text x="175" y="138" font-size="11.5" font-weight="900" fill="#0f172a" text-anchor="middle">x = 125° - 55° = 70°</text>
    </svg>`
  },

  // Q15 Target Key: C (Correct: 15 cm)
  {
    id: 15,
    topic: "Triangle",
    question_hi: "एक समकोण त्रिभुज में आधार 9 सेमी तथा लंब 12 सेमी है। इसके कर्ण (Hypotenuse) की लंबाई क्या होगी?",
    question_en: "In a right-angled triangle, the base is 9 cm and perpendicular height is 12 cm. What is the length of its hypotenuse?",
    options_hi: ["(a) 13 सेमी", "(b) 14 सेमी", "(c) 15 सेमी", "(d) 17 सेमी"],
    options_en: ["(a) 13 cm", "(b) 14 cm", "(c) 15 cm", "(d) 17 cm"],
    answer: "(c)",
    formula_hi: "पाइथागोरस प्रमेय: $\\text{कर्ण }(h) = \\sqrt{\\text{लंब}^2 + \\text{आधार}^2}$",
    formula_en: "Pythagoras Theorem: $\\text{Hypotenuse }(h) = \\sqrt{p^2 + b^2}$",
    solution_hi: "<b>1. दिया गया है (Given):</b><br>• आधार $(b) = 9\\text{ सेमी}$<br>• लंब $(p) = 12\\text{ सेमी}$<br><br><b>2. पाइथागोरस प्रमेय से:</b><br>$$h = \\sqrt{12^2 + 9^2} = \\sqrt{144 + 81}$$<br>$$h = \\sqrt{225} = \\mathbf{15\\text{ सेमी}}$$",
    solution_en: "<b>1. Given:</b><br>• Base $(b) = 9\\text{ cm}, \\quad$ Perpendicular $(p) = 12\\text{ cm}$<br><br><b>2. By Pythagoras Theorem:</b><br>$$h = \\sqrt{12^2 + 9^2} = \\sqrt{144 + 81} = \\sqrt{225} = \\mathbf{15\\text{ cm}}$$",
    trick_hi: "मानक पाइथागोरियन त्रिक $(3, 4, 5)$ को $3$ से गुणा करने पर $(9, 12, 15)$ बनता है! अतः कर्ण $= 15\\text{ सेमी}$।",
    trick_en: "Standard triplet $(3, 4, 5) \\times 3 = (9, 12, 15)$. So hypotenuse $= 15\\text{ cm}$.",
    diagram_svg: `<svg viewBox="0 0 350 155" width="100%" height="145" xmlns="http://www.w3.org/2000/svg">
      <polygon points="55,120 185,120 55,22" fill="#f0fdf4" stroke="#16a34a" stroke-width="2.2" stroke-linejoin="round"/>
      <rect x="55" y="106" width="14" height="14" fill="none" stroke="#16a34a" stroke-width="1.8"/>
      <text x="26" y="75" font-size="11.5" font-weight="900" fill="#0f172a" text-anchor="middle">12 cm</text>
      <text x="120" y="138" font-size="11.5" font-weight="900" fill="#0f172a" text-anchor="middle">आधार = 9 cm</text>
      <text x="142" y="64" font-size="12.5" font-weight="900" fill="#dc2626">कर्ण = 15 cm</text>
      <rect x="205" y="32" width="132" height="82" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.6"/>
      <text x="271" y="55" font-size="11" font-weight="900" fill="#334155" text-anchor="middle">h = √(12² + 9²)</text>
      <text x="271" y="77" font-size="11" font-weight="800" fill="#0284c7" text-anchor="middle">= √(144 + 81) = √225</text>
      <text x="271" y="100" font-size="13" font-weight="900" fill="#059669" text-anchor="middle">h = 15 cm</text>
    </svg>`
  },

  // =======================================================================
  // 🏷️ 4. PROFIT & LOSS (लाभ और हानि) [Q16 - Q20]
  // =======================================================================

  // Q16 Target Key: A (Correct: 20%)
  {
    id: 16,
    topic: "Profit & Loss",
    question_hi: "एक वस्तु को ₹600 में खरीदा गया और ₹720 में बेचा गया। लाभ प्रतिशत ज्ञात कीजिए।",
    question_en: "An article was purchased for ₹600 and sold for ₹720. Find the profit percentage.",
    options_hi: ["(a) 20%", "(b) 25%", "(c) 15%", "(d) 30%"],
    options_en: ["(a) 20%", "(b) 25%", "(c) 15%", "(d) 30%"],
    answer: "(a)",
    formula_hi: "लाभ $\\% = \\left(\\frac{\\text{विक्रय मूल्य} - \\text{क्रय मूल्य}}{\\text{क्रय मूल्य}}\\right) \\times 100$",
    formula_en: "Profit $\\% = \\left(\\frac{\\text{SP} - \\text{CP}}{\\text{CP}}\\right) \\times 100$",
    solution_hi: "<b>1. दिया गया है (Given):</b><br>• क्रय मूल्य $(\\text{CP}) = ₹600$<br>• विक्रय मूल्य $(\\text{SP}) = ₹720$<br><br><b>2. कुल लाभ:</b><br>$$\\text{लाभ} = 720 - 600 = ₹120$$<br><br><b>3. लाभ प्रतिशत:</b><br>$$\\text{लाभ }\\% = \\frac{120}{600} \\times 100 = \\frac{120}{6} = \\mathbf{20\\%}$$",
    solution_en: "<b>1. Given:</b><br>• Cost Price $(\\text{CP}) = ₹600, \\quad$ Selling Price $(\\text{SP}) = ₹720$<br><br><b>2. Profit:</b><br>$$\\text{Profit} = 720 - 600 = ₹120$$<br><br><b>3. Profit Percentage:</b><br>$$\\text{Profit }\\% = \\frac{120}{600} \\times 100 = \\mathbf{20\\%}$$",
    trick_hi: "$\\frac{120}{600} = \\frac{1}{5}$, और $\\frac{1}{5}$ का प्रतिशत मान सीधे $20\\%$ होता है!",
    trick_en: "$\\frac{120}{600} = \\frac{1}{5} = 20\\%$ directly!",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="25" width="95" height="55" rx="8" fill="#f1f5f9" stroke="#64748b" stroke-width="1.8"/>
      <text x="67" y="48" font-size="11" font-weight="800" fill="#475569" text-anchor="middle">क्रय मूल्य (CP)</text>
      <text x="67" y="68" font-size="13" font-weight="900" fill="#0f172a" text-anchor="middle">₹600</text>
      <text x="132" y="57" font-size="16" font-weight="900" fill="#0284c7">➔</text>
      <rect x="148" y="25" width="85" height="55" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.8"/>
      <text x="190" y="48" font-size="10.5" font-weight="800" fill="#1e40af" text-anchor="middle">लाभ (Profit)</text>
      <text x="190" y="68" font-size="12.5" font-weight="900" fill="#2563eb" text-anchor="middle">+₹120</text>
      <text x="247" y="57" font-size="16" font-weight="900" fill="#10b981">➔</text>
      <rect x="262" y="25" width="75" height="55" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.8"/>
      <text x="299" y="48" font-size="10.5" font-weight="800" fill="#065f46" text-anchor="middle">लाभ %</text>
      <text x="299" y="68" font-size="14" font-weight="900" fill="#059669" text-anchor="middle">20%</text>
    </svg>`
  },

  // Q17 Target Key: B (Correct: ₹340)
  {
    id: 17,
    topic: "Profit & Loss",
    question_hi: "एक किताब ₹400 में खरीदी गई और 15% की हानि पर बेची गई। किताब का विक्रय मूल्य (Selling Price) क्या होगा?",
    question_en: "A book was bought for ₹400 and sold at a loss of 15%. What is its selling price?",
    options_hi: ["(a) ₹320", "(b) ₹340", "(c) ₹350", "(d) ₹360"],
    options_en: ["(a) ₹320", "(b) ₹340", "(c) ₹350", "(d) ₹360"],
    answer: "(b)",
    formula_hi: "विक्रय मूल्य $(\\text{SP}) = \\text{CP} \\times \\frac{(100 - \\text{हानि }\\%)}{100}$",
    formula_en: "Selling Price $(\\text{SP}) = \\text{CP} \\times \\frac{(100 - \\text{Loss }\\%)}{100}$",
    solution_hi: "<b>1. दिया गया है (Given):</b><br>• क्रय मूल्य $(\\text{CP}) = ₹400$<br>• हानि दर $= 15\\%$<br><br><b>2. कुल हानि की राशि:</b><br>$$\\text{हानि} = 400 \\times \\frac{15}{100} = 4 \\times 15 = ₹60$$<br><br><b>3. विक्रय मूल्य (SP):</b><br>$$\\text{SP} = 400 - 60 = \\mathbf{₹340}$$",
    solution_en: "<b>1. Given:</b><br>• Cost Price $(\\text{CP}) = ₹400, \\quad$ Loss $= 15\\%$<br><br><b>2. Loss Amount:</b><br>$$\\text{Loss} = 15\\% \\text{ of } 400 = \\frac{15}{100} \\times 400 = ₹60$$<br><br><b>3. Selling Price (SP):</b><br>$$\\text{SP} = 400 - 60 = \\mathbf{₹340}$$",
    trick_hi: "₹100 पर ₹15 की हानि, तो ₹400 पर $15 \\times 4 = ₹60$ की हानि। विक्रय मूल्य $= 400 - 60 = ₹340$।",
    trick_en: "$85\\%$ of $400 = 85 \\times 4 = ₹340$.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="25" width="300" height="55" rx="8" fill="#fef2f2" stroke="#ef4444" stroke-width="1.8"/>
      <text x="175" y="48" font-size="11.5" font-weight="800" fill="#991b1b" text-anchor="middle">CP = ₹400  |  15% हानि = ₹60</text>
      <text x="175" y="70" font-size="13.5" font-weight="900" fill="#dc2626" text-anchor="middle">विक्रय मूल्य (SP) = 400 - 60 = ₹340</text>
    </svg>`
  },

  // Q18 Target Key: C (Correct: 25%)
  {
    id: 18,
    topic: "Profit & Loss",
    question_hi: "एक दुकानदार ने एक पुरानी साइकिल ₹350 में खरीदी और उसकी मरम्मत पर ₹50 खर्च किए। यदि वह उसे ₹500 में बेचता है, तो लाभ प्रतिशत क्या होगा?",
    question_en: "A shopkeeper bought an old cycle for ₹350 and spent ₹50 on its repair. If he sells it for ₹500, what is his profit percentage?",
    options_hi: ["(a) 20%", "(b) 15%", "(c) 25%", "(d) 30%"],
    options_en: ["(a) 20%", "(b) 15%", "(c) 25%", "(d) 30%"],
    answer: "(c)",
    formula_hi: "कुल प्रभावी क्रय मूल्य $= \\text{खरीद मूल्य} + \\text{मरम्मत खर्च}$",
    formula_en: "Effective Cost Price $= \\text{Purchase Price} + \\text{Repair Overhead}$",
    solution_hi: "<b>1. कुल प्रभावी क्रय मूल्य (Total CP):</b><br>$$\\text{कुल CP} = 350 + 50 = ₹400$$<br><br><b>2. शुद्ध लाभ (Net Profit):</b><br>$$\\text{लाभ} = \\text{SP} - \\text{कुल CP} = 500 - 400 = ₹100$$<br><br><b>3. लाभ प्रतिशत:</b><br>$$\\text{लाभ }\\% = \\frac{100}{400} \\times 100 = \\mathbf{25\\%}$$",
    solution_en: "<b>1. Total Effective Cost Price:</b><br>$$\\text{Total CP} = 350 + 50 = ₹400$$<br><br><b>2. Net Profit:</b><br>$$\\text{Profit} = 500 - 400 = ₹100$$<br><br><b>3. Profit Percentage:</b><br>$$\\text{Profit }\\% = \\frac{100}{400} \\times 100 = \\mathbf{25\\%}$$",
    trick_hi: "कुल लागत ₹400 पर ₹100 का लाभ यानी एक-चौथाई $(\\frac{1}{4}) = 25\\%$ लाभ!",
    trick_en: "₹100 profit on ₹400 effective cost is $\\frac{1}{4} = 25\\%$.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="22" width="145" height="60" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.8"/>
      <text x="92" y="45" font-size="11" font-weight="800" fill="#1e40af" text-anchor="middle">कुल लागत (Effective CP)</text>
      <text x="92" y="67" font-size="12.5" font-weight="900" fill="#1d4ed8" text-anchor="middle">₹350 + ₹50 = ₹400</text>
      <text x="178" y="57" font-size="16" font-weight="900" fill="#10b981">➔</text>
      <rect x="195" y="22" width="135" height="60" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.8"/>
      <text x="262" y="45" font-size="11" font-weight="800" fill="#065f46" text-anchor="middle">SP = ₹500 (लाभ ₹100)</text>
      <text x="262" y="67" font-size="13" font-weight="900" fill="#059669" text-anchor="middle">लाभ % = 25%</text>
    </svg>`
  },

  // Q19 Target Key: D (Correct: ₹800)
  {
    id: 19,
    topic: "Profit & Loss",
    question_hi: "एक घड़ी को ₹960 में बेचने पर 20% का लाभ होता है। घड़ी का क्रय मूल्य (Cost Price) क्या था?",
    question_en: "By selling a watch for ₹960, a shopkeeper gains 20%. What was the cost price of the watch?",
    options_hi: ["(a) ₹750", "(b) ₹820", "(c) ₹850", "(d) ₹800"],
    options_en: ["(a) ₹750", "(b) ₹820", "(c) ₹850", "(d) ₹800"],
    answer: "(d)",
    formula_hi: "क्रय मूल्य $(\\text{CP}) = \\frac{\\text{SP} \\times 100}{100 + \\text{लाभ }\\%}$",
    formula_en: "Cost Price $(\\text{CP}) = \\frac{\\text{SP} \\times 100}{100 + \\text{Profit }\\%}$",
    solution_hi: "<b>1. दिया गया है (Given):</b><br>• विक्रय मूल्य $(\\text{SP}) = ₹960$, लाभ $= 20\\%$<br><br><b>2. सूत्र से गणना:</b><br>$$120\\% \\text{ का मान} = ₹960$$<br>$$1\\% \\text{ का मान} = \\frac{960}{120} = ₹8$$<br>$$\\text{क्रय मूल्य }(100\\%) = 8 \\times 100 = \\mathbf{₹800}$$",
    solution_en: "<b>1. Given:</b><br>• $\\text{SP} = ₹960, \\quad \\text{Gain} = 20\\%$<br><br><b>2. Calculation:</b><br>$$120\\% \\text{ of CP} = 960 \\implies \\text{CP} = \\frac{960}{120} \\times 100 = 8 \\times 100 = \\mathbf{₹800}$$",
    trick_hi: "$960$ को $1.2$ से भाग दें ($12 \\times 8 = 96$), अतः क्रय मूल्य $= ₹800$।",
    trick_en: "Divide $960$ by $1.2$ directly: $960 \\div 1.2 = ₹800$.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="22" width="300" height="60" rx="8" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.8"/>
      <text x="175" y="46" font-size="11.5" font-weight="800" fill="#0369a1" text-anchor="middle">120% = ₹960  ➔  1% = ₹8</text>
      <text x="175" y="69" font-size="13.5" font-weight="900" fill="#059669" text-anchor="middle">क्रय मूल्य (100%) = 8 × 100 = ₹800</text>
    </svg>`
  },

  // Q20 Target Key: A (Correct: 25%)
  {
    id: 20,
    topic: "Profit & Loss",
    question_hi: "यदि 8 कॉपियों का क्रय मूल्य ₹80 है और उन्हें ₹100 में बेचा जाता है, तो कुल लाभ प्रतिशत कितना होगा?",
    question_en: "If the cost price of 8 notebooks is ₹80 and they are sold for ₹100, what is the total profit percentage?",
    options_hi: ["(a) 25%", "(b) 20%", "(c) 15%", "(d) 30%"],
    options_en: ["(a) 25%", "(b) 20%", "(c) 15%", "(d) 30%"],
    answer: "(a)",
    formula_hi: "लाभ प्रतिशत $= \\frac{\\text{कुल लाभ}}{\\text{कुल क्रय मूल्य}} \\times 100$",
    formula_en: "Profit $\\% = \\frac{\\text{Total Profit}}{\\text{Total CP}} \\times 100$",
    solution_hi: "<b>1. दिया गया है (Given):</b><br>• 8 कॉपियों का क्रय मूल्य $(\\text{CP}) = ₹80$<br>• 8 कॉपियों का विक्रय मूल्य $(\\text{SP}) = ₹100$<br><br><b>2. गणना:</b><br>$$\\text{लाभ} = 100 - 80 = ₹20$$<br>$$\\text{लाभ }\\% = \\frac{20}{80} \\times 100 = \\frac{1}{4} \\times 100 = \\mathbf{25\\%}$$",
    solution_en: "<b>1. Given:</b><br>• Total $\\text{CP} = ₹80, \\quad$ Total $\\text{SP} = ₹100$<br><br><b>2. Calculation:</b><br>$$\\text{Profit} = 100 - 80 = ₹20$$<br>$$\\text{Profit }\\% = \\frac{20}{80} \\times 100 = \\frac{1}{4} \\times 100 = \\mathbf{25\\%}$$",
    trick_hi: "₹80 पर ₹20 का लाभ यानी चौथाई हिस्सा $(\\frac{20}{80} = \\frac{1}{4}) = 25\\%$!",
    trick_en: "₹20 profit on ₹80 cost is $\\frac{20}{80} = \\frac{1}{4} = 25\\%$.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="22" width="300" height="60" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.8"/>
      <text x="175" y="46" font-size="11.5" font-weight="800" fill="#065f46" text-anchor="middle">CP = ₹80  |  SP = ₹100  |  लाभ = ₹20</text>
      <text x="175" y="69" font-size="13.5" font-weight="900" fill="#059669" text-anchor="middle">लाभ % = (20 / 80) × 100 = 25%</text>
    </svg>`
  },

  // =======================================================================
  // ➗ 5. BODMAS [Q21 - Q25]
  // =======================================================================

  // Q21 Target Key: C (Correct: 67)
  {
    id: 21,
    topic: "BODMAS",
    question_hi: "मान ज्ञात कीजिए: 96 - [50 - {45 ÷ 5 + 4 × (18 - 5 × 3)}]",
    question_en: "Evaluate: 96 - [50 - {45 ÷ 5 + 4 × (18 - 5 × 3)}]",
    options_hi: ["(a) 63", "(b) 65", "(c) 67", "(d) 71"],
    options_en: ["(a) 63", "(b) 65", "(c) 67", "(d) 71"],
    answer: "(c)",
    formula_hi: "BODMAS कोष्ठक क्रम: छोटा $( \\; ) \\to$ मझला $\\{ \\; \\} \\to$ बड़ा $[ \\; ]$",
    formula_en: "BODMAS Bracket Order: Inner $( \\; ) \\to$ Middle $\\{ \\; \\} \\to$ Outer $[ \\; ]$",
    solution_hi: "<b>चरण-दर-चरण हल (Step-by-Step):</b><br>1. <b>छोटा कोष्ठक $( \\; )$:</b> $(18 - 5 \\times 3) = 18 - 15 = 3$<br>2. <b>मझला कोष्ठक $\\{ \\; \\}$:</b> $\\{45 \\div 5 + 4 \\times 3\\} = \\{9 + 12\\} = 21$<br>3. <b>बड़ा कोष्ठक $[ \\; ]$:</b> $[50 - 21] = 29$<br>4. <b>अंतिम घटाव:</b> $96 - 29 = \\mathbf{67}$",
    solution_en: "<b>Step-by-Step Evaluation:</b><br>1. <b>Inner Bracket $( \\; )$:</b> $(18 - 5 \\times 3) = 18 - 15 = 3$<br>2. <b>Curly Braces $\\{ \\; \\}$:</b> $\\{45 \\div 5 + 4 \\times 3\\} = \\{9 + 12\\} = 21$<br>3. <b>Square Bracket $[ \\; ]$:</b> $[50 - 21] = 29$<br>4. <b>Final Result:</b> $96 - 29 = \\mathbf{67}$",
    trick_hi: "अंदर से बाहर की ओर हल करें: $(3) \\to \\{21\\} \\to [29] \\to 96 - 29 = 67$।",
    trick_en: "Resolve inside-out: $(3) \\to \\{21\\} \\to [29] \\to 96 - 29 = 67$.",
    diagram_svg: `<svg viewBox="0 0 360 115" width="100%" height="108" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="25" width="72" height="55" rx="6" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.6"/>
      <text x="51" y="47" font-size="10" font-weight="800" fill="#0369a1" text-anchor="middle">(18 - 15)</text>
      <text x="51" y="67" font-size="12.5" font-weight="900" fill="#0284c7" text-anchor="middle">= 3</text>
      <text x="96" y="55" font-size="13" font-weight="900" fill="#64748b">➔</text>
      <rect x="106" y="25" width="76" height="55" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.6"/>
      <text x="144" y="47" font-size="10" font-weight="800" fill="#1e40af" text-anchor="middle">{9 + 12}</text>
      <text x="144" y="67" font-size="12.5" font-weight="900" fill="#2563eb" text-anchor="middle">= 21</text>
      <text x="191" y="55" font-size="13" font-weight="900" fill="#64748b">➔</text>
      <rect x="201" y="25" width="68" height="55" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.6"/>
      <text x="235" y="47" font-size="10" font-weight="800" fill="#92400e" text-anchor="middle">[50 - 21]</text>
      <text x="235" y="67" font-size="12.5" font-weight="900" fill="#b45309" text-anchor="middle">= 29</text>
      <text x="278" y="55" font-size="13" font-weight="900" fill="#64748b">➔</text>
      <rect x="288" y="25" width="60" height="55" rx="6" fill="#ecfdf5" stroke="#10b981" stroke-width="1.8"/>
      <text x="318" y="47" font-size="9.5" font-weight="800" fill="#065f46" text-anchor="middle">96 - 29</text>
      <text x="318" y="67" font-size="13" font-weight="900" fill="#059669" text-anchor="middle">= 67</text>
    </svg>`
  },

  // Q22 Target Key: B (Correct: 73)
  {
    id: 22,
    topic: "BODMAS",
    question_hi: "सरल कीजिए: 120 - [22 + {30 × 2 - (56 ÷ 7 × 4 + 3)}]",
    question_en: "Simplify: 120 - [22 + {30 × 2 - (56 ÷ 7 × 4 + 3)}]",
    options_hi: ["(a) 69", "(b) 73", "(c) 77", "(d) 81"],
    options_en: ["(a) 69", "(b) 73", "(c) 77", "(d) 81"],
    answer: "(b)",
    formula_hi: "कोष्ठक के अंदर पहले भाग $(\\div)$, फिर गुणा $(\\times)$, फिर जोड़ $(+)$",
    formula_en: "Inside bracket: Division $(\\div) \\to$ Multiplication $(\\times) \\to$ Addition $(+)$",
    solution_hi: "<b>चरणबद्ध हल:</b><br>1. <b>छोटा कोष्ठक:</b> $(56 \\div 7 \\times 4 + 3) = (8 \\times 4 + 3) = 32 + 3 = 35$<br>2. <b>मझला कोष्ठक:</b> $\\{30 \\times 2 - 35\\} = \\{60 - 35\\} = 25$<br>3. <b>बड़ा कोष्ठक:</b> $[22 + 25] = 47$<br>4. <b>अंतिम मान:</b> $120 - 47 = \\mathbf{73}$",
    solution_en: "<b>Step-by-Step Solution:</b><br>1. <b>Inner Bracket:</b> $(56 \\div 7 \\times 4 + 3) = (8 \\times 4 + 3) = 35$<br>2. <b>Curly Braces:</b> $\\{60 - 35\\} = 25$<br>3. <b>Square Bracket:</b> $[22 + 25] = 47$<br>4. <b>Final Calculation:</b> $120 - 47 = \\mathbf{73}$",
    trick_hi: "छोटे कोष्ठक का मान $35$, मझले का $60-35=25$, बड़े का $22+25=47$, और $120-47 = 73$।",
    trick_en: "Inner $= 35 \\to$ Middle $= 25 \\to$ Outer $= 47 \\to 120 - 47 = 73$.",
    diagram_svg: `<svg viewBox="0 0 350 105" width="100%" height="100" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="20" width="300" height="62" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.8"/>
      <text x="175" y="44" font-size="11.5" font-weight="800" fill="#15803d" text-anchor="middle">(35) ➔ {60 - 35 = 25} ➔ [22 + 25 = 47]</text>
      <text x="175" y="68" font-size="13.5" font-weight="900" fill="#059669" text-anchor="middle">अंतिम उत्तर: 120 - 47 = 73</text>
    </svg>`
  },

  // Q23 Target Key: B (Correct: 7)
  {
    id: 23,
    topic: "BODMAS",
    question_hi: "मान निकालिए: 210 ÷ [45 - {24 ÷ 4 + (11 - 5) × 3 - 9}]",
    question_en: "Evaluate: 210 ÷ [45 - {24 ÷ 4 + (11 - 5) × 3 - 9}]",
    options_hi: ["(a) 5", "(b) 7", "(c) 8", "(d) 9"],
    options_en: ["(a) 5", "(b) 7", "(c) 8", "(d) 9"],
    answer: "(b)",
    formula_hi: "BODMAS कोष्ठक प्राथमिकता नियम",
    formula_en: "BODMAS Bracket Priority Rule",
    solution_hi: "<b>चरणबद्ध हल:</b><br>1. <b>छोटा कोष्ठक:</b> $(11 - 5) = 6$<br>2. <b>मझला कोष्ठक:</b> $\\{24 \\div 4 + 6 \\times 3 - 9\\} = \\{6 + 18 - 9\\} = 15$<br>3. <b>बड़ा कोष्ठक:</b> $[45 - 15] = 30$<br>4. <b>अंतिम भाग:</b> $210 \\div 30 = \\mathbf{7}$",
    solution_en: "<b>Step-by-Step Solution:</b><br>1. <b>Inner Bracket:</b> $(11 - 5) = 6$<br>2. <b>Curly Braces:</b> $\\{6 + 18 - 9\\} = 15$<br>3. <b>Square Bracket:</b> $[45 - 15] = 30$<br>4. <b>Final Division:</b> $210 \\div 30 = \\mathbf{7}$",
    trick_hi: "बड़े कोष्ठक का मान $30$ आता है। $210 \\div 30 = 7$।",
    trick_en: "Square bracket simplifies to $30$, and $210 \\div 30 = 7$.",
    diagram_svg: `<svg viewBox="0 0 350 105" width="100%" height="100" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="20" width="300" height="62" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.8"/>
      <text x="175" y="44" font-size="11.5" font-weight="800" fill="#1e40af" text-anchor="middle">(6) ➔ {6 + 18 - 9 = 15} ➔ [45 - 15 = 30]</text>
      <text x="175" y="68" font-size="13.5" font-weight="900" fill="#1d4ed8" text-anchor="middle">अंतिम भाग: 210 ÷ 30 = 7</text>
    </svg>`
  },

  // Q24 Target Key: B (Correct: 70)
  {
    id: 24,
    topic: "BODMAS",
    question_hi: "गणना कीजिए: 75 ÷ 5 × 3 + [60 - {4 × 7 + (36 ÷ 4 - 2)}]",
    question_en: "Compute: 75 ÷ 5 × 3 + [60 - {4 × 7 + (36 ÷ 4 - 2)}]",
    options_hi: ["(a) 65", "(b) 70", "(c) 75", "(d) 80"],
    options_en: ["(a) 65", "(b) 70", "(c) 75", "(d) 80"],
    answer: "(b)",
    formula_hi: "बायां पद $(75 \\div 5 \\times 3)$ तथा दायां कोष्ठक पद अलग-अलग हल करें",
    formula_en: "Evaluate left expression and right bracketed expression",
    solution_hi: "<b>चरणबद्ध हल:</b><br>1. <b>बायां पद:</b> $75 \\div 5 \\times 3 = 15 \\times 3 = 45$<br>2. <b>छोटा कोष्ठक:</b> $(36 \\div 4 - 2) = 9 - 2 = 7$<br>3. <b>मझला कोष्ठक:</b> $\\{4 \\times 7 + 7\\} = 28 + 7 = 35$<br>4. <b>बड़ा कोष्ठक:</b> $[60 - 35] = 25$<br>5. <b>कुल योग:</b> $45 + 25 = \\mathbf{70}$",
    solution_en: "<b>Step-by-Step Solution:</b><br>1. <b>Left Term:</b> $75 \\div 5 \\times 3 = 15 \\times 3 = 45$<br>2. <b>Inner Bracket:</b> $(9 - 2) = 7$<br>3. <b>Curly Braces:</b> $\\{28 + 7\\} = 35$<br>4. <b>Square Bracket:</b> $[60 - 35] = 25$<br>5. <b>Total Sum:</b> $45 + 25 = \\mathbf{70}$",
    trick_hi: "बायां भाग $= 45$, दायां भाग $= 25$। दोनों का योग $= 45 + 25 = 70$।",
    trick_en: "Left part $= 45$, Right bracket $= 25 \\implies 45 + 25 = 70$.",
    diagram_svg: `<svg viewBox="0 0 350 105" width="100%" height="100" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="130" height="60" rx="8" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.8"/>
      <text x="85" y="44" font-size="11" font-weight="800" fill="#0369a1" text-anchor="middle">बायां भाग: 75÷5×3</text>
      <text x="85" y="66" font-size="13" font-weight="900" fill="#0284c7" text-anchor="middle">= 45</text>
      <text x="165" y="55" font-size="16" font-weight="900" fill="#0f172a">+</text>
      <rect x="180" y="20" width="150" height="60" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.8"/>
      <text x="255" y="44" font-size="11" font-weight="800" fill="#065f46" text-anchor="middle">दायां भाग: [60 - 35] = 25</text>
      <text x="255" y="66" font-size="13" font-weight="900" fill="#059669" text-anchor="middle">कुल = 45 + 25 = 70</text>
    </svg>`
  },

  // Q25 Target Key: C (Correct: 130)
  {
    id: 25,
    topic: "BODMAS",
    question_hi: "सरल कीजिए: 150 - 5 × [48 - {20 + 3 × (24 ÷ 4 - 2)}] ÷ 4",
    question_en: "Simplify: 150 - 5 × [48 - {20 + 3 × (24 ÷ 4 - 2)}] ÷ 4",
    options_hi: ["(a) 120", "(b) 125", "(c) 130", "(d) 135"],
    options_en: ["(a) 120", "(b) 125", "(c) 130", "(d) 135"],
    answer: "(c)",
    formula_hi: "कोष्ठक हल करने के बाद गुणा और भाग करें, अंत में घटाव करें",
    formula_en: "Solve brackets first, then multiplication/division, and finally subtraction",
    solution_hi: "<b>चरणबद्ध हल:</b><br>1. <b>छोटा कोष्ठक:</b> $(24 \\div 4 - 2) = 6 - 2 = 4$<br>2. <b>मझला कोष्ठक:</b> $\\{20 + 3 \\times 4\\} = 20 + 12 = 32$<br>3. <b>बड़ा कोष्ठक:</b> $[48 - 32] = 16$<br>4. <b>गुणा एवं भाग:</b> $5 \\times 16 \\div 4 = 80 \\div 4 = 20$<br>5. <b>अंतिम घटाव:</b> $150 - 20 = \\mathbf{130}$",
    solution_en: "<b>Step-by-Step Solution:</b><br>1. <b>Inner Bracket:</b> $(6 - 2) = 4$<br>2. <b>Curly Braces:</b> $\\{20 + 12\\} = 32$<br>3. <b>Square Bracket:</b> $[48 - 32] = 16$<br>4. <b>Multiply & Divide:</b> $5 \\times 16 \\div 4 = 20$<br>5. <b>Final Result:</b> $150 - 20 = \\mathbf{130}$",
    trick_hi: "$[16] \\div 4 = 4$, फिर $5 \\times 4 = 20$, और $150 - 20 = 130$।",
    trick_en: "$5 \\times (16 \\div 4) = 20 \\implies 150 - 20 = 130$.",
    diagram_svg: `<svg viewBox="0 0 350 105" width="100%" height="100" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="20" width="300" height="62" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.8"/>
      <text x="175" y="44" font-size="11.5" font-weight="800" fill="#92400e" text-anchor="middle">150 - 5 × [16] ÷ 4  ➔  150 - 20</text>
      <text x="175" y="68" font-size="13.5" font-weight="900" fill="#059669" text-anchor="middle">अंतिम मान = 130</text>
    </svg>`
  },

  // =======================================================================
  // ⚖️ 6. EQUATION (सरल समीकरण) [Q26 - Q30]
  // =======================================================================

  // Q26 Target Key: D (Correct: 9)
  {
    id: 26,
    topic: "Equation",
    question_hi: "समीकरण को हल कीजिए: 5(x + 4) - 2x = 47. x का मान क्या होगा?",
    question_en: "Solve the equation: 5(x + 4) - 2x = 47. What is the value of x?",
    options_hi: ["(a) 6", "(b) 7", "(c) 8", "(d) 9"],
    options_en: ["(a) 6", "(b) 7", "(c) 8", "(d) 9"],
    answer: "(d)",
    formula_hi: "कोष्ठक का विस्तार करें और चर $(x)$ वाले पदों को सरल करें",
    formula_en: "Expand the bracket and combine like terms in $x$",
    solution_hi: "<b>चरणबद्ध हल:</b><br>$$5(x + 4) - 2x = 47$$<br>$$5x + 20 - 2x = 47$$<br>$$3x + 20 = 47$$<br>$$3x = 47 - 20 = 27$$<br>$$x = \\frac{27}{3} = \\mathbf{9}$$",
    solution_en: "<b>Step-by-Step Solution:</b><br>$$5x + 20 - 2x = 47$$<br>$$3x + 20 = 47 \\implies 3x = 27 \\implies x = \\frac{27}{3} = \\mathbf{9}$$",
    trick_hi: "$5x - 2x = 3x$ और $47 - 20 = 27 \\implies x = 27 \\div 3 = 9$।",
    trick_en: "$3x = 47 - 20 = 27 \\implies x = 9$.",
    diagram_svg: `<svg viewBox="0 0 350 105" width="100%" height="100" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="20" width="300" height="62" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.8"/>
      <text x="175" y="44" font-size="11.5" font-weight="800" fill="#15803d" text-anchor="middle">5x + 20 - 2x = 47  ➔  3x = 27</text>
      <text x="175" y="68" font-size="13.5" font-weight="900" fill="#059669" text-anchor="middle">x = 27 ÷ 3 = 9</text>
    </svg>`
  },

  // Q27 Target Key: A (Correct: 8)
  {
    id: 27,
    topic: "Equation",
    question_hi: "समीकरण हल कीजिए: 4(x + 3) = 44. x का मान क्या होगा?",
    question_en: "Solve the equation: 4(x + 3) = 44. What is the value of x?",
    options_hi: ["(a) 8", "(b) 7", "(c) 9", "(d) 10"],
    options_en: ["(a) 8", "(b) 7", "(c) 9", "(d) 10"],
    answer: "(a)",
    formula_hi: "दोनों पक्षों को 4 से भाग देकर सरल करें",
    formula_en: "Divide both sides by 4 and isolate $x$",
    solution_hi: "<b>चरणबद्ध हल:</b><br>$$4(x + 3) = 44$$<br>$$x + 3 = \\frac{44}{4} = 11$$<br>$$x = 11 - 3 = \\mathbf{8}$$",
    solution_en: "<b>Step-by-Step Solution:</b><br>$$x + 3 = \\frac{44}{4} = 11$$<br>$$x = 11 - 3 = \\mathbf{8}$$",
    trick_hi: "44 को 4 से भाग दें $(11)$, और 3 घटा दें: $11 - 3 = 8$।",
    trick_en: "$44 \\div 4 = 11$, then $11 - 3 = 8$.",
    diagram_svg: `<svg viewBox="0 0 350 105" width="100%" height="100" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="20" width="300" height="62" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.8"/>
      <text x="175" y="44" font-size="11.5" font-weight="800" fill="#1e40af" text-anchor="middle">x + 3 = 44 ÷ 4 = 11</text>
      <text x="175" y="68" font-size="13.5" font-weight="900" fill="#1d4ed8" text-anchor="middle">x = 11 - 3 = 8</text>
    </svg>`
  },

  // Q28 Target Key: C (Correct: 11)
  {
    id: 28,
    topic: "Equation",
    question_hi: "किसी संख्या के 4 गुने में 9 जोड़ने पर 53 प्राप्त होता है। वह संख्या क्या है?",
    question_en: "If 9 is added to 4 times a number, the result is 53. What is the number?",
    options_hi: ["(a) 9", "(b) 10", "(c) 11", "(d) 12"],
    options_en: ["(a) 9", "(b) 10", "(c) 11", "(d) 12"],
    answer: "(c)",
    formula_hi: "माना अज्ञात संख्या $x$ है: $4x + 9 = 53$",
    formula_en: "Let the unknown number be $x$: $4x + 9 = 53$",
    solution_hi: "<b>1. समीकरण निर्माण:</b><br>माना संख्या $x$ है। प्रश्नानुसार:<br>$$4x + 9 = 53$$<br><br><b>2. हल:</b><br>$$4x = 53 - 9 = 44$$<br>$$x = \\frac{44}{4} = \\mathbf{11}$$",
    solution_en: "<b>1. Forming the Equation:</b><br>$$4x + 9 = 53$$<br><br><b>2. Solving for $x$:</b><br>$$4x = 53 - 9 = 44 \\implies x = \\frac{44}{4} = \\mathbf{11}$$",
    trick_hi: "उल्टी प्रक्रिया (Reverse Operation): $53$ में से $9$ घटाएं $(44)$ और $4$ से भाग दें: $44 \\div 4 = 11$।",
    trick_en: "Reverse operations: $(53 - 9) \\div 4 = 44 \\div 4 = 11$.",
    diagram_svg: `<svg viewBox="0 0 350 105" width="100%" height="100" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="20" width="300" height="62" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.8"/>
      <text x="175" y="44" font-size="11.5" font-weight="800" fill="#065f46" text-anchor="middle">4x + 9 = 53  ➔  4x = 44</text>
      <text x="175" y="68" font-size="13.5" font-weight="900" fill="#059669" text-anchor="middle">अभीष्ट संख्या (x) = 44 ÷ 4 = 11</text>
    </svg>`
  },

  // Q29 Target Key: D (Correct: 8)
  {
    id: 29,
    topic: "Equation",
    question_hi: "समीकरण हल कीजिए: 7x - 10 = 3x + 22. x का मान क्या होगा?",
    question_en: "Solve the linear equation: 7x - 10 = 3x + 22. What is the value of x?",
    options_hi: ["(a) 6", "(b) 7", "(c) 9", "(d) 8"],
    options_en: ["(a) 6", "(b) 7", "(c) 9", "(d) 8"],
    answer: "(d)",
    formula_hi: "पक्षांतरण विधि: चर पदों को बाईं ओर तथा अचर पदों को दाईं ओर रखें",
    formula_en: "Transposition Method: Group variables on LHS and constants on RHS",
    solution_hi: "<b>चरणबद्ध हल:</b><br>$$7x - 10 = 3x + 22$$<br>$$7x - 3x = 22 + 10$$<br>$$4x = 32$$<br>$$x = \\frac{32}{4} = \\mathbf{8}$$",
    solution_en: "<b>Step-by-Step Solution:</b><br>$$7x - 3x = 22 + 10$$<br>$$4x = 32 \\implies x = \\frac{32}{4} = \\mathbf{8}$$",
    trick_hi: "$7x - 3x = 4x$ और $22 + 10 = 32 \\implies x = 32 \\div 4 = 8$।",
    trick_en: "$4x = 32 \\implies x = 8$ directly.",
    diagram_svg: `<svg viewBox="0 0 350 105" width="100%" height="100" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="20" width="300" height="62" rx="8" fill="#eef2ff" stroke="#4f46e5" stroke-width="1.8"/>
      <text x="175" y="44" font-size="11.5" font-weight="800" fill="#3730a3" text-anchor="middle">7x - 3x = 22 + 10  ➔  4x = 32</text>
      <text x="175" y="68" font-size="13.5" font-weight="900" fill="#4f46e5" text-anchor="middle">x = 32 ÷ 4 = 8</text>
    </svg>`
  },

  // Q30 Target Key: A (Correct: 12 वर्ष)
  {
    id: 30,
    topic: "Equation",
    question_hi: "एक पिता की आयु उसके पुत्र की आयु की 3 गुनी है। यदि दोनों की आयु का योग 48 वर्ष है, तो पुत्र की वर्तमान आयु क्या है?",
    question_en: "A father's age is 3 times the age of his son. If the sum of their ages is 48 years, what is the son's present age?",
    options_hi: ["(a) 12 वर्ष", "(b) 10 वर्ष", "(c) 14 वर्ष", "(d) 16 वर्ष"],
    options_en: ["(a) 12 years", "(b) 10 years", "(c) 14 years", "(d) 16 years"],
    answer: "(a)",
    formula_hi: "माना पुत्र की आयु $= x$, तब पिता की आयु $= 3x$",
    formula_en: "Let Son's age $= x$, then Father's age $= 3x$",
    solution_hi: "<b>1. समीकरण निर्माण:</b><br>• माना पुत्र की आयु $= x\\text{ वर्ष}$<br>• पिता की आयु $= 3x\\text{ वर्ष}$<br><br><b>2. प्रश्नानुसार:</b><br>$$x + 3x = 48$$<br>$$4x = 48 \\implies x = \\frac{48}{4} = \\mathbf{12\\text{ वर्ष}}$$",
    solution_en: "<b>1. Let Son's age be $x$ years:</b><br>• Father's age $= 3x$ years<br><br><b>2. According to question:</b><br>$$x + 3x = 48 \\implies 4x = 48 \\implies x = \\mathbf{12\\text{ years}}$$",
    trick_hi: "कुल भाग $= 1 + 3 = 4$। अतः पुत्र की आयु $= 48 \\div 4 = 12\\text{ वर्ष}$।",
    trick_en: "Total parts $= 1 + 3 = 4$. Son's age $= 48 \\div 4 = 12\\text{ years}$.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="22" width="300" height="62" rx="8" fill="#fdf4ff" stroke="#c026d3" stroke-width="1.8"/>
      <text x="175" y="46" font-size="11.5" font-weight="800" fill="#86198f" text-anchor="middle">पुत्र (x) + पिता (3x) = 4x = 48 वर्ष</text>
      <text x="175" y="70" font-size="13.5" font-weight="900" fill="#059669" text-anchor="middle">पुत्र की आयु (x) = 48 ÷ 4 = 12 वर्ष</text>
    </svg>`
  },

  // =======================================================================
  // 📈 7. SIMPLE INTEREST (साधारण ब्याज) [Q31 - Q35]
  // =======================================================================

  // Q31 Target Key: C (Correct: ₹1,920)
  {
    id: 31,
    topic: "Simple Interest",
    question_hi: "₹6,000 की राशि पर 8% वार्षिक दर से 4 वर्ष का साधारण ब्याज कितना होगा?",
    question_en: "What will be the simple interest on ₹6,000 at 8% per annum for 4 years?",
    options_hi: ["(a) ₹1,800", "(b) ₹1,860", "(c) ₹1,920", "(d) ₹2,040"],
    options_en: ["(a) ₹1,800", "(b) ₹1,860", "(c) ₹1,920", "(d) ₹2,040"],
    answer: "(c)",
    formula_hi: "साधारण ब्याज $(\\text{SI}) = \\frac{\\text{मूलधन }(P) \\times \\text{दर }(R) \\times \\text{समय }(T)}{100}$",
    formula_en: "Simple Interest $(\\text{SI}) = \\frac{P \\times R \\times T}{100}$",
    solution_hi: "<b>1. दिया गया है (Given):</b><br>• मूलधन $(P) = ₹6,000$<br>• ब्याज दर $(R) = 8\\%$ वार्षिक<br>• समय $(T) = 4\\text{ वर्ष}$<br><br><b>2. सूत्र से गणना:</b><br>$$\\text{SI} = \\frac{6000 \\times 8 \\times 4}{100} = 60 \\times 32 = \\mathbf{₹1,920}$$",
    solution_en: "<b>1. Given:</b><br>• $P = ₹6,000, \\quad R = 8\\%, \\quad T = 4\\text{ years}$<br><br><b>2. Calculation:</b><br>$$\\text{SI} = \\frac{6000 \\times 8 \\times 4}{100} = 60 \\times 32 = \\mathbf{₹1,920}$$",
    trick_hi: "1 वर्ष का ब्याज $= 60 \\times 8 = ₹480$। तो 4 वर्ष का ब्याज $= 480 \\times 4 = ₹1,920$।",
    trick_en: "Total percentage interest $= 8\\% \\times 4 = 32\\%$. $32 \\times 60 = ₹1,920$.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="22" width="300" height="62" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.8"/>
      <text x="175" y="46" font-size="11.5" font-weight="800" fill="#065f46" text-anchor="middle">SI = (6000 × 8 × 4) ÷ 100 = 60 × 32</text>
      <text x="175" y="70" font-size="13.5" font-weight="900" fill="#059669" text-anchor="middle">साधारण ब्याज (SI) = ₹1,920</text>
    </svg>`
  },

  // Q32 Target Key: D (Correct: ₹6,050)
  {
    id: 32,
    topic: "Simple Interest",
    question_hi: "₹5,000 की राशि 7% वार्षिक साधारण ब्याज की दर से 3 वर्ष में बढ़कर कुल कितना मिश्रधन (Amount) हो जाएगी?",
    question_en: "What will be the total amount on ₹5,000 at a simple interest rate of 7% per annum after 3 years?",
    options_hi: ["(a) ₹5,850", "(b) ₹5,950", "(c) ₹6,150", "(d) ₹6,050"],
    options_en: ["(a) ₹5,850", "(b) ₹5,950", "(c) ₹6,150", "(d) ₹6,050"],
    answer: "(d)",
    formula_hi: "मिश्रधन $(A) = \\text{मूलधन }(P) + \\text{साधारण ब्याज }(\\text{SI})$",
    formula_en: "Total Amount $(A) = \\text{Principal }(P) + \\text{Simple Interest }(\\text{SI})$",
    solution_hi: "<b>1. साधारण ब्याज (SI) निकालें:</b><br>$$\\text{SI} = \\frac{5000 \\times 7 \\times 3}{100} = 50 \\times 21 = ₹1,050$$<br><br><b>2. कुल मिश्रधन (Amount):</b><br>$$\\text{मिश्रधन }(A) = 5000 + 1050 = \\mathbf{₹6,050}$$",
    solution_en: "<b>1. Find Simple Interest (SI):</b><br>$$\\text{SI} = \\frac{5000 \\times 7 \\times 3}{100} = 50 \\times 21 = ₹1,050$$<br><br><b>2. Total Amount (A):</b><br>$$A = 5000 + 1050 = \\mathbf{₹6,050}$$",
    trick_hi: "3 वर्ष का कुल ब्याज $= 7\\% \\times 3 = 21\\%$। ₹5,000 का $21\\% = ₹1,050$। मिश्रधन $= 5000 + 1050 = ₹6,050$।",
    trick_en: "$21\\%$ of $5000 = ₹1,050$. Total Amount $= 5000 + 1050 = ₹6,050$.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="22" width="300" height="62" rx="8" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.8"/>
      <text x="175" y="46" font-size="11.5" font-weight="800" fill="#0369a1" text-anchor="middle">मूलधन ₹5,000 + ब्याज ₹1,050</text>
      <text x="175" y="70" font-size="13.5" font-weight="900" fill="#059669" text-anchor="middle">कुल मिश्रधन (Amount) = ₹6,050</text>
    </svg>`
  },

  // Q33 Target Key: C (Correct: 9%)
  {
    id: 33,
    topic: "Simple Interest",
    question_hi: "किस वार्षिक साधारण ब्याज की दर से ₹4,000 की राशि पर 4 वर्ष में ₹1,440 ब्याज मिलेगा?",
    question_en: "At what annual rate of simple interest will ₹4,000 yield ₹1,440 as interest in 4 years?",
    options_hi: ["(a) 7%", "(b) 8%", "(c) 9%", "(d) 10%"],
    options_en: ["(a) 7%", "(b) 8%", "(c) 9%", "(d) 10%"],
    answer: "(c)",
    formula_hi: "ब्याज की दर $(R) = \\frac{\\text{SI} \\times 100}{P \\times T}$",
    formula_en: "Rate of Interest $(R) = \\frac{\\text{SI} \\times 100}{P \\times T}$",
    solution_hi: "<b>1. दिया गया है (Given):</b><br>• $P = ₹4,000, \\quad T = 4\\text{ वर्ष}, \\quad \\text{SI} = ₹1,440$<br><br><b>2. सूत्र से गणना:</b><br>$$R = \\frac{1440 \\times 100}{4000 \\times 4} = \\frac{1440}{160} = \\mathbf{9\\%}$$",
    solution_en: "<b>1. Given:</b><br>• $P = ₹4,000, \\quad T = 4\\text{ years}, \\quad \\text{SI} = ₹1,440$<br><br><b>2. Calculation:</b><br>$$R = \\frac{1440 \\times 100}{4000 \\times 4} = \\frac{1440}{160} = \\mathbf{9\\%}$$",
    trick_hi: "4 वर्ष का ब्याज ₹1,440 है, तो 1 वर्ष का ब्याज $= 1440 \\div 4 = ₹360$। दर $= 360 \\div 40 = 9\\%$।",
    trick_en: "1 year interest $= 1440 \\div 4 = ₹360$. Rate $= 360 \\div 40 = 9\\%$.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="22" width="300" height="62" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.8"/>
      <text x="175" y="46" font-size="11.5" font-weight="800" fill="#065f46" text-anchor="middle">R = (1440 × 100) ÷ (4000 × 4) = 1440 ÷ 160</text>
      <text x="175" y="70" font-size="13.5" font-weight="900" fill="#059669" text-anchor="middle">वार्षिक दर (R) = 9%</text>
    </svg>`
  },

  // Q34 Target Key: A (Correct: 5 वर्ष)
  {
    id: 34,
    topic: "Simple Interest",
    question_hi: "कितने वर्षों में ₹3,500 का 6% वार्षिक दर से साधारण ब्याज ₹1,050 हो जाएगा?",
    question_en: "In how many years will the simple interest on ₹3,500 at 6% per annum become ₹1,050?",
    options_hi: ["(a) 5 वर्ष", "(b) 4 वर्ष", "(c) 6 वर्ष", "(d) 3 वर्ष"],
    options_en: ["(a) 5 years", "(b) 4 years", "(c) 6 years", "(d) 3 years"],
    answer: "(a)",
    formula_hi: "समय $(T) = \\frac{\\text{SI} \\times 100}{P \\times R}$",
    formula_en: "Time $(T) = \\frac{\\text{SI} \\times 100}{P \\times R}$",
    solution_hi: "<b>1. दिया गया है (Given):</b><br>• $P = ₹3,500, \\quad R = 6\\%, \\quad \\text{SI} = ₹1,050$<br><br><b>2. समय की गणना:</b><br>$$T = \\frac{1050 \\times 100}{3500 \\times 6} = \\frac{1050}{210} = \\mathbf{5\\text{ वर्ष}}$$",
    solution_en: "<b>1. Given:</b><br>• $P = ₹3,500, \\quad R = 6\\%, \\quad \\text{SI} = ₹1,050$<br><br><b>2. Calculation:</b><br>$$T = \\frac{1050 \\times 100}{3500 \\times 6} = \\frac{1050}{210} = \\mathbf{5\\text{ years}}$$",
    trick_hi: "1 वर्ष का ब्याज $= 35 \\times 6 = ₹210$। कुल ₹1,050 ब्याज के लिए समय $= 1050 \\div 210 = 5\\text{ वर्ष}$।",
    trick_en: "1 year interest $= 35 \\times 6 = ₹210$. Time $= 1050 \\div 210 = 5\\text{ years}$.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="22" width="300" height="62" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.8"/>
      <text x="175" y="46" font-size="11.5" font-weight="800" fill="#92400e" text-anchor="middle">1 वर्ष का ब्याज = ₹210  |  कुल ब्याज = ₹1,050</text>
      <text x="175" y="70" font-size="13.5" font-weight="900" fill="#b45309" text-anchor="middle">समय (T) = 1050 ÷ 210 = 5 वर्ष</text>
    </svg>`
  },

  // Q35 Target Key: B (Correct: 12.5%)
  {
    id: 35,
    topic: "Simple Interest",
    question_hi: "कोई धनराशि साधारण ब्याज की दर से 8 वर्ष में दोगुनी हो जाती है। ब्याज की वार्षिक दर क्या है?",
    question_en: "A sum of money doubles itself in 8 years at simple interest. What is the annual rate of interest?",
    options_hi: ["(a) 10%", "(b) 12.5%", "(c) 15%", "(d) 16%"],
    options_en: ["(a) 10%", "(b) 12.5%", "(c) 15%", "(d) 16%"],
    answer: "(b)",
    formula_hi: "धनराशि दोगुनी होने पर वार्षिक दर $(R) = \\frac{100}{T}$",
    formula_en: "When a sum doubles itself, Rate $(R) = \\frac{100}{T}$",
    solution_hi: "<b>1. अवधारणा (Concept):</b><br>माना मूलधन $(P) = ₹100$ है। दोगुना होने पर मिश्रधन $= ₹200$, अर्थात ब्याज $(\\text{SI}) = ₹100$।<br><br><b>2. दर की गणना:</b><br>$$R = \\frac{100}{8} = \\frac{25}{2} = \\mathbf{12.5\\%}$$",
    solution_en: "<b>1. Concept:</b><br>When a sum doubles, Simple Interest equals the Principal $(\\text{SI} = P)$.<br><br><b>2. Calculation:</b><br>$$R = \\frac{100}{T} = \\frac{100}{8} = \\mathbf{12.5\\%}$$",
    trick_hi: "दोगुना होने के प्रश्न में सीधे 100 में समय (8) का भाग दें: $100 \\div 8 = 12.5\\%$।",
    trick_en: "Simply divide 100 by time (8): $100 \\div 8 = 12.5\\%$.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="22" width="300" height="62" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.8"/>
      <text x="175" y="46" font-size="11.5" font-weight="800" fill="#1e40af" text-anchor="middle">मूलधन ₹100 ➔ मिश्रधन ₹200 (ब्याज = ₹100)</text>
      <text x="175" y="70" font-size="13.5" font-weight="900" fill="#1d4ed8" text-anchor="middle">दर (R) = 100 ÷ 8 = 12.5%</text>
    </svg>`
  },

  // =======================================================================
  // 🧠 8. BASIC REASONING [Q36 - Q40]
  // =======================================================================

  // Q36 Target Key: B (Correct: 64)
  {
    id: 36,
    topic: "Reasoning",
    question_hi: "दी गई संख्या श्रृंखला में अगला पद क्या होगा? 9, 16, 25, 36, 49, ?",
    question_en: "What will be the next term in the given number series? 9, 16, 25, 36, 49, ?",
    options_hi: ["(a) 60", "(b) 64", "(c) 72", "(d) 81"],
    options_en: ["(a) 60", "(b) 64", "(c) 72", "(d) 81"],
    answer: "(b)",
    formula_hi: "क्रमागत पूर्ण वर्ग संख्याओं की श्रृंखला $(n^2)$",
    formula_en: "Series of consecutive perfect squares $(n^2)$",
    solution_hi: "<b>श्रृंखला पैटर्न विश्लेषण:</b><br>• $3^2 = 9$<br>• $4^2 = 16$<br>• $5^2 = 25$<br>• $6^2 = 36$<br>• $7^2 = 49$<br>• अगला पद $= 8^2 = 8 \\times 8 = \\mathbf{64}$",
    solution_en: "<b>Series Pattern Analysis:</b><br>• $3^2 = 9, \\quad 4^2 = 16, \\quad 5^2 = 25, \\quad 6^2 = 36, \\quad 7^2 = 49$<br>• Next term $= 8^2 = \\mathbf{64}$",
    trick_hi: "यह $3, 4, 5, 6, 7$ के वर्ग हैं। अगला $8$ का वर्ग $8^2 = 64$ होगा।",
    trick_en: "Consecutive squares from $3^2$ to $7^2$; next is $8^2 = 64$.",
    diagram_svg: `<svg viewBox="0 0 360 95" width="100%" height="90" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="22" width="50" height="48" rx="6" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="35" y="51" font-size="11" font-weight="800" fill="#334155" text-anchor="middle">3²=9</text>
      <rect x="68" y="22" width="52" height="48" rx="6" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="94" y="51" font-size="11" font-weight="800" fill="#334155" text-anchor="middle">4²=16</text>
      <rect x="128" y="22" width="52" height="48" rx="6" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="154" y="51" font-size="11" font-weight="800" fill="#334155" text-anchor="middle">5²=25</text>
      <rect x="188" y="22" width="52" height="48" rx="6" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="214" y="51" font-size="11" font-weight="800" fill="#334155" text-anchor="middle">6²=36</text>
      <rect x="248" y="22" width="50" height="48" rx="6" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="273" y="51" font-size="11" font-weight="800" fill="#334155" text-anchor="middle">7²=49</text>
      <rect x="304" y="22" width="48" height="48" rx="6" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
      <text x="328" y="51" font-size="11.5" font-weight="900" fill="#059669" text-anchor="middle">8²=64</text>
    </svg>`
  },

  // Q37 Target Key: C (Correct: CPY)
  {
    id: 37,
    topic: "Reasoning",
    question_hi: "यदि किसी कूट भाषा में 'PEN' को 'QFO' लिखा जाता है, तो उसी भाषा में 'BOX' को क्या लिखा जाएगा?",
    question_en: "In a code language, if 'PEN' is written as 'QFO', how will 'BOX' be written in that code?",
    options_hi: ["(a) CQZ", "(b) DOY", "(c) CPY", "(d) CPZ"],
    options_en: ["(a) CQZ", "(b) DOY", "(c) CPY", "(d) CPZ"],
    answer: "(c)",
    formula_hi: "अंग्रेजी वर्णमाला में प्रत्येक अक्षर में $+1$ आगे बढ़ने का नियम",
    formula_en: "Forward alphabet shift rule of $+1$ for each letter",
    solution_hi: "<b>1. 'PEN' का कूट नियम:</b><br>• $P (+1) \\to Q$<br>• $E (+1) \\to F$<br>• $N (+1) \\to O$<br><br><b>2. 'BOX' के लिए समान नियम:</b><br>• $B (+1) \\to \\mathbf{C}$<br>• $O (+1) \\to \\mathbf{P}$<br>• $X (+1) \\to \\mathbf{Y}$<br>अतः सही कूट <b>CPY</b> होगा।",
    solution_en: "<b>1. Pattern in 'PEN' $\\to$ 'QFO':</b><br>Each letter shifts $+1$ forward.<br><br><b>2. Applying $+1$ to 'BOX':</b><br>• $B + 1 = \\mathbf{C}$<br>• $O + 1 = \\mathbf{P}$<br>• $X + 1 = \\mathbf{Y}$<br>Hence, 'BOX' is coded as <b>CPY</b>.",
    trick_hi: "B के बाद C, O के बाद P, और X के बाद Y आता है $\\to$ <b>CPY</b>।",
    trick_en: "Next letters of B, O, X are C, P, Y $\\to$ <b>CPY</b>.",
    diagram_svg: `<svg viewBox="0 0 350 105" width="100%" height="100" xmlns="http://www.w3.org/2000/svg">
      <rect x="35" y="20" width="280" height="62" rx="8" fill="#eef2ff" stroke="#4f46e5" stroke-width="1.8"/>
      <text x="175" y="44" font-size="12" font-weight="800" fill="#3730a3" text-anchor="middle">B (+1) ➔ C   |   O (+1) ➔ P   |   X (+1) ➔ Y</text>
      <text x="175" y="68" font-size="14" font-weight="900" fill="#059669" text-anchor="middle">BOX ➔ CPY</text>
    </svg>`
  },

  // Q38 Target Key: D (Correct: सितंबर / September)
  {
    id: 38,
    topic: "Reasoning",
    question_hi: "दिए गए चार विकल्पों में से विषम (अलग) का चयन कीजिए:",
    question_en: "Select the odd one out from the given four options:",
    options_hi: ["(a) जुलाई", "(b) अगस्त", "(c) अक्टूबर", "(d) सितंबर"],
    options_en: ["(a) July", "(b) August", "(c) October", "(d) September"],
    answer: "(d)",
    formula_hi: "महीनों में कुल दिनों की संख्या के आधार पर वर्गीकरण",
    formula_en: "Classification based on the total number of days in a month",
    solution_hi: "<b>महीनों के दिनों की तुलना:</b><br>• (a) जुलाई $= 31\\text{ दिन}$<br>• (b) अगस्त $= 31\\text{ दिन}$<br>• (c) अक्टूबर $= 31\\text{ दिन}$<br>• (d) <b>सितंबर $= 30\\text{ दिन}$</b><br><br>चूंकि सितंबर में 30 दिन होते हैं और बाकी तीनों में 31 दिन, अतः <b>(d) सितंबर</b> विषम है।",
    solution_en: "<b>Comparing days in each month:</b><br>• July $= 31\\text{ days}$<br>• August $= 31\\text{ days}$<br>• October $= 31\\text{ days}$<br>• <b>September $= 30\\text{ days}$</b><br><br>Hence, <b>September</b> is the odd one out.",
    trick_hi: "जून, नवंबर, जानिए, अप्रैल, सितंबर 30 दिन के होते हैं! बाकी 31 दिन के हैं।",
    trick_en: "Only September has 30 days; July, August, and October all have 31 days.",
    diagram_svg: `<svg viewBox="0 0 360 95" width="100%" height="90" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="22" width="78" height="48" rx="6" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/>
      <text x="51" y="50" font-size="11" font-weight="800" fill="#0369a1" text-anchor="middle">जुलाई (31)</text>
      <rect x="98" y="22" width="78" height="48" rx="6" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/>
      <text x="137" y="50" font-size="11" font-weight="800" fill="#0369a1" text-anchor="middle">अगस्त (31)</text>
      <rect x="184" y="22" width="82" height="48" rx="6" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/>
      <text x="225" y="50" font-size="11" font-weight="800" fill="#0369a1" text-anchor="middle">अक्टूबर (31)</text>
      <rect x="274" y="22" width="76" height="48" rx="6" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
      <text x="312" y="50" font-size="11" font-weight="900" fill="#dc2626" text-anchor="middle">सितंबर (30)</text>
    </svg>`
  },

  // Q39 Target Key: A (Correct: माता / Mother)
  {
    id: 39,
    topic: "Reasoning",
    question_hi: "एक लड़की ने एक महिला की ओर इशारा करते हुए कहा, 'वह मेरे भाई की माताजी हैं।' उस महिला का उस लड़की से क्या संबंध है?",
    question_en: "A girl pointed to a woman and said, 'She is the mother of my brother.' How is that woman related to the girl?",
    options_hi: ["(a) माता", "(b) बुआ", "(c) बहन", "(d) दादी"],
    options_en: ["(a) Mother", "(b) Aunt", "(c) Sister", "(d) Grandmother"],
    answer: "(a)",
    formula_hi: "रक्त संबंध (Blood Relation) विश्लेषण",
    formula_en: "Direct Family Tree Blood Relation",
    solution_hi: "<b>संबंध विश्लेषण:</b><br>• लड़की के भाई की माताजी $=$ लड़की की स्वयं की <b>माता (Mother)</b>।<br>• अतः वह महिला उस लड़की की <b>माता</b> हैं।",
    solution_en: "<b>Relation Breakdown:</b><br>• The mother of the girl's brother is the girl's own <b>Mother</b>.",
    trick_hi: "सगे भाई की माँ स्वयं की भी माँ (माता) होती हैं।",
    trick_en: "One's brother's mother is one's own Mother.",
    diagram_svg: `<svg viewBox="0 0 350 105" width="100%" height="100" xmlns="http://www.w3.org/2000/svg">
      <rect x="35" y="20" width="280" height="62" rx="8" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.8"/>
      <text x="175" y="44" font-size="11.5" font-weight="800" fill="#0369a1" text-anchor="middle">लड़की ⟷ सगा भाई ⟶ भाई की माताजी</text>
      <text x="175" y="68" font-size="13.5" font-weight="900" fill="#059669" text-anchor="middle">संबंध = माता (Mother)</text>
    </svg>`
  },

  // Q40 Target Key: D (Correct: 22वां / 22nd)
  {
    id: 40,
    topic: "Reasoning",
    question_hi: "35 छात्रों की एक पंक्ति में रोहित का स्थान बाएं से 14वां है। दाएं छोर से उसका स्थान कौन-सा होगा?",
    question_en: "In a row of 35 students, Rohit is ranked 14th from the left. What is his rank from the right end?",
    options_hi: ["(a) 20वां", "(b) 21वां", "(c) 23वां", "(d) 22वां"],
    options_en: ["(a) 20th", "(b) 21st", "(c) 23rd", "(d) 22nd"],
    answer: "(d)",
    formula_hi: "दाएं से स्थान $= (\\text{कुल छात्र} - \\text{बाएं से स्थान}) + 1$",
    formula_en: "Rank from Right $= (\\text{Total Students} - \\text{Rank from Left}) + 1$",
    solution_hi: "<b>1. दिया गया है (Given):</b><br>• पंक्ति में कुल छात्र $(N) = 35$<br>• बाएं से रोहित का स्थान $(L) = 14$<br><br><b>2. सूत्र से गणना:</b><br>$$\\text{दाएं से स्थान} = (35 - 14) + 1$$<br>$$= 21 + 1 = \\mathbf{22\\text{वां}}$$",
    solution_en: "<b>1. Given:</b><br>• Total students $= 35, \\quad$ Left rank $= 14$<br><br><b>2. Calculation:</b><br>$$\\text{Right Rank} = (35 - 14) + 1 = 21 + 1 = \\mathbf{22\\text{nd}}$$",
    trick_hi: "कुल संख्या में से बायां स्थान घटाकर 1 जोड़ें: $(35 - 14) + 1 = 21 + 1 = 22\\text{वां}$।",
    trick_en: "Subtract left rank from total and add 1: $35 - 14 + 1 = 22\\text{nd}$.",
    diagram_svg: `<svg viewBox="0 0 350 110" width="100%" height="105" xmlns="http://www.w3.org/2000/svg">
      <line x1="30" y1="45" x2="320" y2="45" stroke="#0284c7" stroke-width="3" stroke-linecap="round"/>
      <circle cx="30" cy="45" r="5" fill="#0369a1"/>
      <circle cx="145" cy="45" r="7" fill="#dc2626"/>
      <circle cx="320" cy="45" r="5" fill="#0369a1"/>
      <text x="85" y="30" font-size="11" font-weight="800" fill="#0369a1" text-anchor="middle">बाएं से: 14वां</text>
      <text x="145" y="70" font-size="11.5" font-weight="900" fill="#dc2626" text-anchor="middle">रोहित</text>
      <text x="235" y="30" font-size="11.5" font-weight="900" fill="#059669" text-anchor="middle">दाएं से: (35-14)+1 = 22वां</text>
      <text x="175" y="96" font-size="11.5" font-weight="800" fill="#0f172a" text-anchor="middle">कुल छात्र = 35</text>
    </svg>`
  }
];

if (typeof window !== 'undefined') {
  window.questions = questions;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = questions;
}