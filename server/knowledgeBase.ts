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
    content: `Name: Fatwa Ratantja Kusumajati (Fatwa R.)
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
      "whatsapp",
    ],
    content: `Role: Warehouse Technology Specialist at PT Aristides Logistik Indonesia (Jun - Dec 2026, Surabaya).
Responsibilities & Impact:
- Builds computer vision systems, monitoring dashboards, and automation for a 3PL warehouse in Surabaya.
- Implemented truck and car detection, license plate OCR, and dock loading/unloading status monitoring at warehouse gates.
- Built unified OCR document reader with printable ArUco tagging linked to live warehouse zone location tracking (staging, outbound).
- Automated daily Excel reporting and real-time alert notifications via WhatsApp using n8n, and integrated an LLM chatbot (Gemini API + n8n) that lets the team generate custom warehouse incident log files in Excel format directly via WhatsApp.`,
  },
  {
    id: "exp-inka",
    title: "R&D Intern, IT Operations — PT INKA (Persero)",
    category: "Experience",
    keywords: [
      "inka",
      "kereta",
      "madiun",
      "intern",
      "magang",
      "r&d",
      "operations",
      "infrastructure",
      "security onion",
      "suricata",
      "port mirroring",
      "helmet",
      "helm",
      "yolov8",
      "2025",
      "2026",
    ],
    content: `Role: R&D Intern, IT Operations (Information Technology Department — IT Operations and Infrastructure) at PT INKA (Persero), Madiun (Nov 2025 - May 2026).
Responsibilities & Impact:
- Installed and configured Security Onion in the company data center, using port mirroring to consolidate all network traffic logs onto a single centralized server.
- Enabled real-time threat monitoring and cyber threat detection, reviewing Suricata alerts such as attempted directory traversal and external IP lookups in the Security Onion console.
- Developed a YOLOv8n safety helmet detection prototype (Ultralytics, PyTorch, OpenCV, Python), achieving 0.94 mAP50 (94%) as an automated workplace safety monitor in an industrial environment.`,
  },
  {
    id: "exp-lazada",
    title: "IT Support — Lazada Express (LEX) / PT Persolkelly",
    category: "Experience",
    keywords: [
      "lazada",
      "lex",
      "persolkelly",
      "sidoarjo",
      "it support",
      "network",
      "jaringan",
      "troubleshooting",
      "maintenance",
      "devices",
      "2025",
    ],
    content: `Role: IT Support for Lazada Express (LEX) via PT Persolkelly, Sidoarjo (Mar - Nov 2025).
Responsibilities & Impact:
- Conducted regular network monitoring for over 200 users to maintain infrastructure stability and availability.
- Maintained, configured, and troubleshot IT devices across departments, from fault identification to technical handling, keeping devices running with minimal downtime.`,
  },
  {
    id: "exp-timu",
    title: "Fullstack Web Developer — PT Terminal Intimoda Utama",
    category: "Experience & Project",
    keywords: [
      "terminal",
      "intimoda",
      "timu",
      "fullstack",
      "web",
      "website",
      "codeigniter",
      "php",
      "mysql",
      "bootstrap",
      "2024",
    ],
    content: `Role: Fullstack Web Developer at PT Terminal Intimoda Utama (TIMU), Surabaya (Aug - Dec 2024).
Project: Official website of PT Terminal Intimoda Utama (Web / 2024).
Details:
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
      "staging",
      "camera",
      "kamera",
      "vehicle",
      "tanstack",
      "react",
      "node",
      "n8n",
      "2026",
    ],
    content: `Project: Dashboard Warehouse Intelligence (Web and automation / 2026).
Tech Stack: React TanStack, Node.js, n8n.
Description: A web platform that brings staging, vehicle, and camera data into one unified console. It displays live camera status, vehicle counts by hour, latest staging events, and a 7-day alert count so teams can monitor warehouse activity without walking the floor. Includes the OCR document reader and daily reporting, connected to three detection systems via one n8n workflow.`,
  },
  {
    id: "proj-vehicle-plate-loading",
    title: "Truck & Car Gate Detection, Plate OCR, and Loading/Unloading Status (2026)",
    category: "Deployed Systems",
    keywords: [
      "vehicle",
      "kendaraan",
      "truck",
      "truk",
      "car",
      "mobil",
      "license",
      "plate",
      "plat",
      "loading",
      "unloading",
      "yolo",
      "detection",
      "deteksi",
      "bounding box",
      "n8n",
    ],
    content: `Project: Truck & car gate detection, license plate OCR, and loading/unloading status (Computer vision / 2026).
Tech Stack: YOLO, Plate OCR, Loading / Unloading status, n8n.
Description: A computer vision system that detects cars and trucks at warehouse gates and docks, reads their license plates, and monitors truck loading or unloading activity in real time. Every entry, exit, and dock state is logged per vehicle with camera location, confidence score, and bounding box coordinates, with vehicle history review and operator flagging.`,
  },
  {
    id: "proj-aruco-tracking",
    title: "Live Location Tracking with ArUco & OCR Documents (2026)",
    category: "Deployed Systems",
    keywords: [
      "aruco",
      "tracking",
      "live location",
      "lokasi",
      "ocr",
      "document",
      "item",
      "barang",
      "palet",
      "pallet",
      "zone",
      "zona",
      "staging",
      "outbound",
      "opencv",
      "alert",
      "missing",
    ],
    content: `Project: Live location tracking with ArUco & OCR documents (Computer vision + OCR / 2026).
Tech Stack: ArUco, OCR Document, Live Location Tracking, OpenCV, Alerts.
Description: Connected directly with the OCR document reader, each scanned invoice, PO, receipt, or delivery note receives a printable ArUco marker ID. Cameras then follow each tagged item's live location across warehouse zones such as staging and outbound in real time, recording first appearance, live coordinates, and raising alerts if goods go missing.`,
  },
  {
    id: "proj-whatsapp-reports",
    title: "WhatsApp LLM Chatbot & Daily Excel Reports (2026)",
    category: "Deployed Systems",
    keywords: [
      "whatsapp",
      "wa",
      "report",
      "laporan",
      "excel",
      "xlsx",
      "16:00",
      "n8n",
      "automation",
      "otomasi",
      "alert",
      "llm",
      "chatbot",
      "gemini",
      "rag",
      "incident",
      "kejadian",
      "log",
      "aristides",
    ],
    content: `Project: WhatsApp LLM chatbot & daily Excel reports (Automation & LLM / 2026) at PT Aristides Logistik Indonesia.
Tech Stack: n8n, WhatsApp, Gemini API / LLM, Excel.
Description: Automated daily reporting and interactive LLM workflow via n8n. Every day at 16:00, the system sends three Excel reports through WhatsApp (vehicle log, alert log, and warehouse summary), and real-time alerts arrive with the detection image and bounding box. In addition, an LLM chatbot integrated into the same PT Aristides Logistik Indonesia workflow lets the warehouse team query events and generate custom Excel log files of warehouse incidents on demand via WhatsApp.`,
  },
  {
    id: "proj-ocr-document-reader",
    title: "Document Reader with ArUco Tagging (2026)",
    category: "Deployed Systems",
    keywords: [
      "ocr",
      "document",
      "dokumen",
      "invoice",
      "purchase order",
      "po",
      "receipt",
      "delivery note",
      "surat jalan",
      "archive",
      "arsip",
      "aruco",
    ],
    content: `Project: Document reader with ArUco tagging (OCR / 2026).
Tech Stack: OCR, ArUco, Archive.
Description: Staff upload a photo of an invoice, purchase order, receipt, or delivery note. The OCR pipeline extracts and stores issuer, recipient, reference number, date, line items (quantity, price, total), and subtotal. The archive supports search by PO/invoice number, party name, or item, and filtering by document type and date. Each document receives a printable ArUco marker ID to tag physical goods and link them to camera tracking.`,
  },
  {
    id: "proj-alba-nusantara",
    title: "Alba Nusantara Commodity Website (2026)",
    category: "Deployed Systems",
    keywords: [
      "alba",
      "nusantara",
      "commodity",
      "komoditas",
      "react",
      "bilingual",
      "slider",
      "website",
      "web",
      "export",
      "cloves",
      "cocoa",
    ],
    content: `Project: Alba Nusantara Commodity website (Web / 2026).
Tech Stack: React.js, Bilingual, Hero slider.
Description: Company profile website for an Indonesian procurement and trading company focused on premium agricultural and natural products (essential oils, edible bird's nest, cocoa, cloves). Built with React.js, featuring a hero slider, About Us section, Products and Contact pages, and an EN/ID language switch.`,
  },
  {
    id: "proj-more-research-llm",
    title: "Research, LLM & AI Projects (Helmet Detection, SINTA 2 XGBoost, RAG Chatbot, Tomato CNN, IoT)",
    category: "More Projects & Research",
    keywords: [
      "research",
      "riset",
      "jurnal",
      "journal",
      "sinta",
      "sinta 2",
      "smotetomek",
      "xgboost",
      "diabetes",
      "rag",
      "chatbot",
      "gemini",
      "kaggle",
      "fatwa-folio",
      "tomato",
      "tomat",
      "cnn",
      "iot",
      "pic",
      "temperature",
      "suhu",
      "helmet",
      "helm",
      "yolov8n",
      "map50",
    ],
    content: `More Projects (Research, Safety, Deep Learning & IoT):
1. Safety helmet detection (Safety / 2026): YOLOv8n prototype (Ultralytics, PyTorch, OpenCV, Python) reaching 0.94 mAP50 (94%), built as an automated workplace safety monitor during the internship at PT INKA (Persero).
2. SMOTETomek + XGBoost (Research / 2024): Implementation of SMOTETomek data balancing in diabetes classification using XGBoost (scikit-learn, Python), written as a scientific paper and published in a SINTA 2 indexed national journal.
3. Tomato leaf disease (Deep learning / 2024): Convolutional Neural Network (CNN) using TensorFlow/Keras and Python classifying tomato leaf images by disease to support early plant disease detection.
4. Room temperature control (IoT / 2024): IoT system using a PIC microcontroller and temperature sensor to automatically monitor and regulate room temperature.
Note on LLM & RAG Chatbot: Fatwa also built an interactive RAG portfolio notebook on Kaggle (https://www.kaggle.com/code/fatwaratantjak/fatwa-folio) and deployed an LLM chatbot integrated with PT Aristides Logistik Indonesia's WhatsApp/n8n pipeline to generate Excel incident logs.`,
  },
  {
    id: "skills-stack",
    title: "Technical Skills & Tech Stack",
    category: "Skills",
    keywords: [
      "skill",
      "skills",
      "keahlian",
      "tech",
      "stack",
      "teknologi",
      "tools",
      "python",
      "yolo",
      "openvino",
      "opencv",
      "pytorch",
      "n8n",
      "gemini",
      "rag",
      "react",
      "tanstack",
      "node",
      "express",
      "typescript",
      "php",
      "mysql",
      "postgresql",
      "rhcsa",
      "security onion",
      "suricata",
      "glpi",
    ],
    content: `Technical Skills across 4 Core Domains:
1. AI and computer vision: YOLO, OpenVINO, OpenCV, ArUco, OCR, CNN, XGBoost, PyTorch
2. Automation and LLM: n8n, WhatsApp, Gemini API, RAG, Python
3. Web and dashboards: React TanStack, Node.js, Express.js, TypeScript, PHP, MySQL, PostgreSQL (plus CodeIgniter 3, Bootstrap, Tailwind CSS)
4. Infrastructure and security: RHCSA, Security Onion, Suricata, GLPI (plus Linux System Administration, port mirroring, network monitoring)`,
  },
  {
    id: "education-orgs-certs",
    title: "Education, Leadership (BEM FASILKOM), Certifications & Highlights",
    category: "Education & Credentials",
    keywords: [
      "education",
      "pendidikan",
      "upn",
      "veteran",
      "ipk",
      "gpa",
      "3.76",
      "bem",
      "fasilkom",
      "vice president",
      "wakil presiden",
      "advocacy",
      "advokasi",
      "organisasi",
      "organization",
      "certification",
      "sertifikasi",
      "sertifikat",
      "rhcsa",
      "ibm",
      "certiport",
      "credly",
      "semeru",
      "esport",
      "pubg",
      "iel",
      "polda",
    ],
    content: `Education: Bachelor of Computer Science (Informatics), UPN "Veteran" Jawa Timur (Aug 2020 - Jul 2025), GPA 3.76 / 4.00. Specialized in System Administration and Artificial Intelligence.
6 Professional Certifications:
1. Red Hat Certified System Administrator (RHCSA)
2. IBM Artificial Intelligence Practitioner Certificate
3. IT Specialist – Artificial Intelligence (Certiport)
4. Enterprise Design Thinking Practitioner (IBM)
5. Enterprise Design Thinking – Team Essentials for AI (IBM)
6. Python for Data Science (IBM)

Leadership & Organizational Experience (2022 - 2024):
- Vice President, BEM FASILKOM UPN "Veteran" Jawa Timur (Mar 2023 - Feb 2024): Supervised 2 departments (Social & Political, Relations & Cooperation) executing 6-10 work programs and built strategic partnerships with 10+ external institutions.
- Head of Advocacy, BEM FASILKOM UPN "Veteran" Jawa Timur (May 2022 - Feb 2023): Guided and represented 500+ students, conducted 4-6 scientific policy studies, and ran 4-6 advocacy programs.

Other Highlights:
- Ranked 12th among 32 universities at the Indonesia Esport League (IEL) national competition (PUBG Mobile).
- Humanitarian volunteer for the 2021 Mount Semeru eruption response (4 days in the field).
- Appointed university representative in an East Java higher education forum with Polda Jawa Timur.`,
  },
  {
    id: "contact-links",
    title: "Contact Information & Links",
    category: "Contact",
    keywords: [
      "contact",
      "kontak",
      "hubungi",
      "email",
      "whatsapp",
      "wa",
      "phone",
      "telepon",
      "hp",
      "linkedin",
      "github",
      "credly",
      "cv",
      "resume",
      "hire",
      "rekrut",
      "kolaborasi",
      "collaborate",
      "kaggle",
    ],
    content: `Contact & Social Links for Fatwa Ratantja Kusumajati:
- Email: fatwaratantja@gmail.com
- WhatsApp / Phone: +62 812-3456-9805 (https://wa.me/6281234569805)
- LinkedIn: https://www.linkedin.com/in/fatwaratantja/
- GitHub: https://github.com/fatwaratantjakusumajati
- Credly Badges: https://www.credly.com/users/fatwa-ratantja/badges#credly
- Kaggle RAG Portfolio Notebook: https://www.kaggle.com/code/fatwaratantjak/fatwa-folio
- Downloadable CV: /cv-fatwa-new.pdf
Availability: Open to job opportunities and collaboration in AI, automation, monitoring systems, and IT infrastructure.`,
  },
];

const SYNONYMS: Record<string, string[]> = {
  kerja: ["work", "experience", "job", "karir", "career", "pengalaman"],
  pengalaman: ["experience", "work", "intern", "magang", "job"],
  proyek: ["project", "projects", "system", "sistem", "deployed", "karya"],
  project: ["proyek", "projects", "system", "deployed"],
  keahlian: ["skill", "skills", "tech", "stack", "teknologi"],
  skill: ["keahlian", "skills", "tech", "stack"],
  sertifikasi: ["certification", "certifications", "certificate", "sertifikat", "rhcsa", "ibm", "credly"],
  pendidikan: ["education", "kuliah", "universitas", "university", "upn", "gpa", "ipk"],
  kuliah: ["education", "upn", "gpa", "ipk", "informatics"],
  ipk: ["gpa", "3.76", "education"],
  kontak: ["contact", "email", "whatsapp", "linkedin", "github", "hire"],
  hubungi: ["contact", "email", "whatsapp", "linkedin"],
  gudang: ["warehouse", "logistics", "logistik", "aristides", "aruco", "staging"],
  logistik: ["logistics", "warehouse", "gudang", "aristides", "lazada"],
  ai: ["artificial intelligence", "yolo", "cnn", "xgboost", "rag", "gemini", "ocr", "cv"],
  chatbot: ["rag", "gemini", "llm", "kaggle", "fatwa-folio"],
  keamanan: ["security", "security onion", "suricata", "soc", "network", "jaringan"],
};

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s.+_-]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1);
}

export function retrieveContext(query: string, topK = 5): KnowledgeChunk[] {
  const rawTokens = tokenize(query);
  const expandedTokens = new Set<string>(rawTokens);
  for (const token of rawTokens) {
    const syns = SYNONYMS[token];
    if (syns) {
      for (const s of syns) expandedTokens.add(s);
    }
  }

  const scored = KNOWLEDGE_BASE.map((chunk) => {
    let score = 0;
    const titleLower = chunk.title.toLowerCase();
    const contentLower = chunk.content.toLowerCase();

    for (const token of expandedTokens) {
      if (chunk.keywords.some((k) => k === token || k.includes(token) || token.includes(k))) {
        score += 4;
      }
      if (titleLower.includes(token)) {
        score += 3;
      }
      if (contentLower.includes(token)) {
        score += 1.5;
      }
    }

    // Always give a small boost to profile-overview so the assistant always knows who Fatwa is
    if (chunk.id === "profile-overview") {
      score += 1;
    }

    return { chunk, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, topK).map((s) => s.chunk);
}
