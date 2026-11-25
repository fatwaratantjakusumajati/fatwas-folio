export interface KnowledgeChunk {
  id: string;
  title: string;
  category: string;
  keywords: string[];
  content: string;
}

export const KNOWLEDGE_BASE: KnowledgeChunk[] = [
  {
    id: "profile-overview",
    title: "Profile & Summary",
    category: "Overview",
    keywords: [
      "fatwa",
      "ratantja",
      "kusumajati",
      "profile",
      "about",
      "who",
      "siapa",
      "tentang",
      "profil",
      "surabaya",
      "summary",
      "ringkasan",
      "bio",
      "ai",
      "logistics",
      "logistik",
      "informatics",
      "informatika",
    ],
    content: `Name: Fatwa Ratantja Kusumajati (Fatwa Ratantja)
Location: Surabaya, Indonesia
Education: Bachelor of Computer Science (Informatics), UPN "Veteran" Jawa Timur (Aug 2020 - Jul 2025), GPA 3.76/4.00. Specialized in System Administration and Artificial Intelligence (AI).
Core Focus: Building AI systems, computer vision, automation (n8n, WhatsApp reporting), web dashboards, and network infrastructure for logistics and industry.
Headline: "I build AI systems that keep business running."
Key Metrics: 3.76 GPA out of 4.00 | SINTA 2 journal publication | 6 professional certifications.`,
  },
  {
    id: "exp-aristides",
    title: "Warehouse Technology Specialist — PT Aristides Logistik Indonesia",
    category: "Experience",
    keywords: [
      "aristides",
      "logistik",
      "logistics",
      "warehouse",
      "gudang",
      "3pl",
      "specialist",
      "2026",
      "work",
      "kerja",
      "pengalaman",
      "experience",
      "surabaya",
      "aruco",
      "ocr",
      "yolo",
      "n8n",
      "whatsapp",
      "dashboard",
    ],
    content: `Role: Warehouse Technology Specialist at PT Aristides Logistik Indonesia, Surabaya (Jun 2026 - Dec 2026).
Responsibilities & Impact:
- Implemented computer vision & AI workflows for warehouse gates and operations, including car & truck gate detection, license plate OCR, and dock loading/unloading monitoring.
- Built ArUco marker tagging connected to document OCR for live goods location tracking across warehouse zones (staging, outbound).
- Built the unified Dashboard Warehouse Intelligence platform (React TanStack, Node.js, n8n) combining live camera feeds, vehicle counts, alerts, OCR archives, and reporting.
- Automated daily 16:00 WhatsApp Excel reports (vehicle log, alert log, warehouse summary) and integrated an LLM incident-log assistant via n8n & Gemini API.`,
  },
  {
    id: "exp-inka",
    title: "R&D Intern, IT Operations (MagangHub) — PT INKA (Persero)",
    category: "Experience",
    keywords: [
      "inka",
      "kereta",
      "madiun",
      "maganghub",
      "magang",
      "intern",
      "internship",
      "security onion",
      "suricata",
      "network",
      "jaringan",
      "cyber",
      "helmet",
      "helm",
      "yolov8",
      "2025",
      "2026",
    ],
    content: `Role: R&D Intern, IT Operations (via MagangHub Program — post-graduation program, NOT a university student internship) at PT INKA (Persero) / Industri Kereta Api, Madiun (Nov 2025 - May 2026).
Responsibilities & Impact:
- Joined through the post-graduation MagangHub program in the Information Technology Department (IT Operations and Infrastructure).
- Installed and configured Security Onion in the company data center, using port mirroring to consolidate all network traffic logs onto a single centralized server.
- Enabled real-time threat monitoring and cyber threat detection, reviewing Suricata alerts such as attempted directory traversal and external IP lookups in the Security Onion console.
- Developed a YOLOv8n safety helmet detection prototype (Ultralytics, PyTorch, OpenCV, Python), achieving 0.94 mAP50 (94%) as an automated workplace safety monitor in an industrial environment.`,
  },
  {
    id: "exp-lazada",
    title: "IT Support — Lazada Express",
    category: "Experience",
    keywords: [
      "lazada",
      "express",
      "it support",
      "support",
      "glpi",
      "ticketing",
      "network",
      "cctv",
      "server",
      "sidoarjo",
      "hub",
      "2025",
      "warehouse",
    ],
    content: `Role: IT Support at Lazada Express, Sidoarjo (Mar - Nov 2025).
Responsibilities & Impact:
- Handled daily IT operations in a fast-paced e-commerce logistics hub (networks, computers, servers, printers, CCTV, and warehouse IT devices).
- Maintained 99% system uptime so sortation and delivery operations ran smoothly.
- Used GLPI ticketing to handle hardware/software troubleshooting and technical requests, achieving a 95% first-time fix rate.`,
  },
  {
    id: "exp-timu",
    title: "Fullstack Web Developer (Student Intern) — PT Terminal Intimoda Utama",
    category: "Experience & Project",
    keywords: [
      "timu",
      "terminal",
      "intimoda",
      "utama",
      "fullstack",
      "web",
      "developer",
      "codeigniter",
      "php",
      "mysql",
      "bootstrap",
      "2024",
      "magang mahasiswa",
      "student intern",
      "intern",
      "magang",
    ],
    content: `Role: Fullstack Web Developer (University Student Internship / Magang Mahasiswa) at PT Terminal Intimoda Utama (TIMU), Surabaya (Aug - Dec 2024).
Project: Official website of PT Terminal Intimoda Utama (Web / 2024).
Details:
- Completed as a university student internship while studying Informatics at UPN "Veteran" Jawa Timur.
- Designed and developed the official company website using CodeIgniter 3, PHP, MySQL, Bootstrap, HTML5, CSS, and JavaScript within a team of 2-3 members.
- Delivered 5 functional pages and modules within 3 months with a modern, responsive interface across devices.`,
  },
  {
    id: "proj-warehouse-dashboard",
    title: "Dashboard Warehouse Intelligence (2026)",
    category: "Deployed Systems",
    keywords: [
      "dashboard",
      "warehouse",
      "intelligence",
      "aristides",
      "react",
      "tanstack",
      "node",
      "n8n",
      "camera",
      "staging",
      "alert",
      "2026",
    ],
    content: `Project: Dashboard Warehouse Intelligence (Web & Automation / 2026) for PT Aristides Logistik Indonesia.
Tech Stack: React TanStack, Node.js, n8n.
Overview: A unified web platform bringing staging, vehicle, and camera data into one dashboard. Shows live camera status, vehicle counts by hour, latest staging events, and 7-day alert counts so operators monitor warehouse activity in real time without walking the floor. Connects document OCR, daily reporting, and the LLM incident-log assistant.`,
  },
  {
    id: "proj-vehicle-plate",
    title: "Truck & Car Gate Detection, Plate OCR, and Loading/Unloading Status (2026)",
    category: "Deployed Systems",
    keywords: [
      "truck",
      "truk",
      "car",
      "mobil",
      "gate",
      "gerbang",
      "plate",
      "plat",
      "pelat",
      "ocr",
      "loading",
      "unloading",
      "yolo",
      "openvino",
      "dock",
    ],
    content: `Project: Truck & car gate detection, plate OCR, and loading/unloading status (Computer Vision / 2026).
Tech Stack: YOLO, Plate OCR, Loading / Unloading dock monitoring.
Overview: Computer vision system detecting cars and trucks at warehouse gates and docks, reading license plates, and tracking truck loading/unloading states in real time. Logs entry/exit and dock state per vehicle with camera location, confidence score, bounding box, and operator flag review.`,
  },
  {
    id: "proj-aruco-ocr",
    title: "Live Location Tracking with ArUco & Document OCR (2026)",
    category: "Deployed Systems",
    keywords: [
      "aruco",
      "marker",
      "live",
      "location",
      "tracking",
      "ocr",
      "document",
      "dokumen",
      "invoice",
      "staging",
      "outbound",
      "inbound",
    ],
    content: `Project: Live location tracking with ArUco & OCR documents (Computer Vision & OCR / 2026).
Tech Stack: ArUco, OpenCV, Document OCR, Live Location Tracking.
Overview: Staff upload photos of invoices, purchase orders, receipts, or delivery notes; the OCR pipeline extracts issuer, recipient, reference number, line items, and totals into a searchable archive. Each document generates a printable ArUco marker ID so warehouse cameras track the item's live coordinates across inbound, staging, and outbound zones and raise immediate alerts if an item goes missing.`,
  },
  {
    id: "proj-whatsapp-reports",
    title: "WhatsApp LLM Chatbot & Daily Excel Reports (2026)",
    category: "Deployed Systems",
    keywords: [
      "whatsapp",
      "wa",
      "excel",
      "xlsx",
      "report",
      "laporan",
      "n8n",
      "llm",
      "chatbot",
      "gemini",
      "16:00",
      "automation",
      "otomasi",
      "kaggle",
    ],
    content: `Project: WhatsApp LLM chatbot & daily Excel reports (Automation & LLM / 2026).
Tech Stack: n8n, WhatsApp, Gemini API / LLM, Excel (.xlsx).
Overview: Sends three automated Excel reports via WhatsApp every day at 16:00 (vehicle log, alert log, and warehouse summary), plus real-time alert photos with detection bounding boxes. Integrated with a Gemini LLM chatbot in PT Aristides Logistik Indonesia's workflow so the team can query warehouse events and generate custom Excel incident logs directly via WhatsApp.`,
  },
  {
    id: "proj-alba-web",
    title: "Alba Padel Club Booking Website & Community Platform (2025)",
    category: "Deployed Systems",
    keywords: [
      "alba",
      "padel",
      "club",
      "booking",
      "court",
      "membership",
      "website",
      "2025",
    ],
    content: `Project: Alba Padel Club booking website & community platform (Web / 2025).
Tech Stack: Web Application, Booking System, Community Portal.
Overview: Full-featured website for Alba Padel Club supporting online court booking, membership signup, coaching programs, and community pages with clean responsive UX.`,
  },
  {
    id: "proj-more-research-llm",
    title: "Research, LLM & AI Projects (Helmet Detection, SINTA 2 XGBoost, RAG Chatbot, Tomato CNN, IoT)",
    category: "More Projects & Research",
    keywords: [
      "research",
      "riset",
      "sinta",
      "sinta 2",
      "journal",
      "jurnal",
      "xgboost",
      "tomato",
      "tomat",
      "cnn",
      "densenet",
      "xception",
      "rag",
      "kaggle",
      "iot",
      "pic",
      "temperature",
      "suhu",
      "helmet",
      "helm",
      "0.94",
    ],
    content: `Research & Additional Projects:
1. Workplace Safety Helmet Detection (Computer Vision / PT INKA): YOLOv8n, Ultralytics, PyTorch, OpenCV, Python — 0.94 mAP50 accuracy for automated helmet detection.
2. Public Opinion Classification on X/Twitter (SINTA 2 Journal / AI & NLP): Used XGBoost, TF-IDF, SMOTE, Python, Scikit-learn to classify public sentiment on the 2024 presidential debate across 3 classes; published in SINTA 2 national accredited journal.
3. Portfolio RAG Chatbot Notebook (LLM & RAG / Kaggle): Interactive Retrieval-Augmented Generation notebook built on Kaggle (https://www.kaggle.com/code/fatwaratantjak/fatwa-folio) using Python and Gemini API.
4. Tomato Leaf Disease Classification (Deep Learning): Compared CNN, DenseNet201, and Xception with Keras/TensorFlow; DenseNet201 achieved 82.93% accuracy across 10 disease classes.
5. Room Temperature Control (IoT): PIC microcontroller + temperature sensor in embedded C to monitor and regulate room temperature automatically.`,
  },
  {
    id: "skills-stack",
    title: "Technical Skills & Stack",
    category: "Skills",
    keywords: [
      "skill",
      "skills",
      "keahlian",
      "tech",
      "stack",
      "python",
      "react",
      "typescript",
      "node",
      "express",
      "postgres",
      "mysql",
      "php",
      "rhcsa",
      "linux",
      "docker",
      "openvino",
      "pytorch",
      "yolo",
      "n8n",
    ],
    content: `Technical Skills organized from sensor to report:
- AI & Computer Vision: YOLO, OpenVINO, OpenCV, ArUco, OCR, CNN, DenseNet201, XGBoost, PyTorch, TensorFlow, Scikit-learn.
- Automation & LLM: n8n, Gemini API, RAG (Retrieval-Augmented Generation), Python, WhatsApp API automation, Excel reporting.
- Web & Dashboards: React TanStack, TypeScript, Node.js, Express.js, PHP, CodeIgniter 3, Bootstrap, Tailwind CSS, MySQL, PostgreSQL.
- Infrastructure & Security: Red Hat Enterprise Linux (RHCSA), Security Onion, Suricata IDS, GLPI ticketing, CCTV & warehouse networks, port mirroring.`,
  },
  {
    id: "edu-certs",
    title: "Education & Certifications",
    category: "Education & Certifications",
    keywords: [
      "education",
      "pendidikan",
      "upn",
      "veteran",
      "jawa timur",
      "gpa",
      "ipk",
      "3.76",
      "certification",
      "certifications",
      "sertifikasi",
      "rhcsa",
      "red hat",
      "ibm",
      "certiport",
      "sarjana",
      "bachelor",
    ],
    content: `Education:
- Bachelor of Computer Science (Informatics), UPN "Veteran" Jawa Timur (2020 - 2025). GPA: 3.76 / 4.00. Specialization: System Administration & Artificial Intelligence.

6 Professional Certifications:
1. RHCSA (Red Hat Certified System Administrator) — Red Hat (2024 - 2027)
2. IBM AI Practitioner — IBM SkillsBuild (2024)
3. IT Specialist: Artificial Intelligence — Certiport (2024)
4. Enterprise Design Thinking Practitioner — IBM (2024)
5. Team Essentials for AI — IBM (2024)
6. Python for Data Science — IBM (2024)`,
  },
  {
    id: "org-volunteer",
    title: "Organization & Community Leadership",
    category: "Leadership & Volunteering",
    keywords: [
      "bem",
      "fasilkom",
      "vice president",
      "wakil presiden",
      "advocacy",
      "advokasi",
      "esport",
      "pubg",
      "volunteer",
      "relawan",
      "semeru",
      "organization",
      "organisasi",
    ],
    content: `Leadership & Volunteering:
- Vice President, Faculty Student Executive Board (BEM FASILKOM), UPN "Veteran" Jawa Timur.
- Head of Advocacy Department, BEM FASILKOM, UPN "Veteran" Jawa Timur.
- University Representative at the Indonesia Esport League (PUBG Mobile), national level (ranked 12th among 32 universities).
- Humanitarian Volunteer for the 2021 Mount Semeru eruption emergency response.`,
  },
  {
    id: "contact-links",
    title: "Contact Information & Links",
    category: "Contact",
    keywords: [
      "contact",
      "kontak",
      "email",
      "phone",
      "whatsapp",
      "linkedin",
      "github",
      "kaggle",
      "instagram",
      "hire",
      "hubungi",
      "cv",
      "resume",
    ],
    content: `Contact Details for Fatwa Ratantja Kusumajati:
- Email: fatwaratantja@gmail.com
- Phone / WhatsApp: +6281234569805
- Location: Surabaya, East Java, Indonesia
- LinkedIn: https://www.linkedin.com/in/fatwaratantja/
- Credly Badges: https://www.credly.com/users/fatwa-ratantja
- GitHub: https://github.com/fatwaratantja
- Kaggle (RAG Portfolio Notebook): https://www.kaggle.com/code/fatwaratantjak/fatwa-folio
- CV Download: Available directly on the portfolio site (/assets/aistudio/Fatwa_Ratantja_Kusumajati-resume_85bb5067.pdf).
- Availability: Open to full-time roles and collaboration in AI systems, computer vision, automation, fullstack dashboards, and monitoring infrastructure.`,
  },
];

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length >= 2);
}

export function retrieveContext(query: string, topK = 5): KnowledgeChunk[] {
  const tokens = tokenize(query);
  if (tokens.length === 0) {
    return KNOWLEDGE_BASE.slice(0, topK);
  }

  const scored = KNOWLEDGE_BASE.map((chunk) => {
    const titleLower = chunk.title.toLowerCase();
    const contentLower = chunk.content.toLowerCase();
    const keywordSet = new Set(chunk.keywords.map((k) => k.toLowerCase()));

    let score = 0;
    for (const token of tokens) {
      if (keywordSet.has(token)) score += 6;
      else if (chunk.keywords.some((k) => k.includes(token) || token.includes(k))) score += 3;

      if (titleLower.includes(token)) score += 4;
      if (contentLower.includes(token)) score += 1.5;
    }

    if (chunk.id === "profile-overview") score += 0.5;
    return { chunk, score };
  });

  scored.sort((a, b) => b.score - a.score);
  const top = scored.slice(0, topK).map((s) => s.chunk);

  if (!top.some((c) => c.id === "profile-overview")) {
    const overview = KNOWLEDGE_BASE.find((c) => c.id === "profile-overview");
    if (overview) {
      top[top.length - 1] = overview;
    }
  }

  return top;
}
