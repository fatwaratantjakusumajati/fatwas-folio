import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "en" | "id";

type Dict = Record<string, { en: string; id: string }>;

const dict: Dict = {
  // Navbar
  "nav.projects": { en: "Projects", id: "Proyek" },
  "nav.skills": { en: "Skills", id: "Keahlian" },
  "nav.experience": { en: "Experience", id: "Pengalaman" },
  "nav.education": { en: "Education", id: "Pendidikan" },
  "nav.contact": { en: "Contact", id: "Kontak" },
  "nav.askAi": { en: "Ask AI", id: "Tanya AI" },

  // Hero
  "hero.kicker": { en: "Nice to meet you", id: "Salam kenal" },
  "hero.hello": { en: "Hello!", id: "Halo!" },
  "hero.headlineStart": { en: "I build", id: "Saya membangun" },
  "hero.headlineAi": { en: "AI systems", id: "sistem AI" },
  "hero.headlineMid": { en: "that keep", id: "untuk menjaga" },
  "hero.headlineLogistics": { en: "business", id: "bisnis" },
  "hero.headlineEnd": { en: "running.", id: "tetap berjalan." },
  "hero.lead": {
    en: "Fatwa Ratantja Kusumajati, an Informatics graduate based in Surabaya. Experienced in building AI systems, automation, web dashboards, and network infrastructure for logistics and industry.",
    id: "Fatwa Ratantja Kusumajati, lulusan Informatika yang berbasis di Surabaya. Berpengalaman membangun sistem AI, otomasi, dashboard web, dan infrastruktur jaringan untuk logistik dan industri.",
  },
  "hero.viewProjects": { en: "View projects", id: "Lihat proyek" },
  "hero.contactMe": { en: "Contact me", id: "Hubungi saya" },
  "hero.askAi": { en: "Chat with AI", id: "Tanya Chatbot AI" },
  "hero.downloadCv": { en: "Download CV", id: "Unduh CV" },
  "hero.reelTitle": { en: "AI Systems Looping Reel", id: "Video Reel Sistem AI (Looping)" },
  "hero.replayIntro": { en: "Watch Intro", id: "Putar Intro" },
  "intro.kicker": { en: "Opening Showreel · Loops Continuously", id: "Video Pembuka · Berputar Terus" },
  "intro.enter": { en: "Enter Portfolio", id: "Masuk ke Portofolio" },

  // Hero Stats
  "stat.gpaSub": { en: "GPA out of 4.00", id: "IPK dari skala 4.00" },
  "stat.sintaSub": { en: "journal publication", id: "publikasi jurnal nasional" },
  "stat.certsSub": { en: "professional certifications", id: "sertifikasi profesional" },

  // Summary Box
  "summary.badge": { en: "Summary", id: "Ringkasan" },
  "summary.lead": {
    en: "Informatics graduate focused on artificial intelligence, computer vision, automation, and network infrastructure.",
    id: "Lulusan Informatika yang berfokus pada kecerdasan buatan, computer vision, otomasi, dan infrastruktur jaringan.",
  },
  "summary.achievements": { en: "Achievements", id: "Pencapaian" },
  "summary.experience": { en: "Experience", id: "Pengalaman" },
  "summary.skills": { en: "Skills", id: "Keahlian" },

  // Projects Section 01
  "proj.kicker": { en: "01 / Projects", id: "01 / Proyek" },
  "proj.title": { en: "Deployed systems", id: "Sistem yang diimplementasikan" },
  "proj.filterAll": { en: "All systems", id: "Semua sistem" },
  "proj.filterCv": { en: "Computer vision", id: "Computer vision" },
  "proj.filterWeb": { en: "Web & automation", id: "Web & otomasi" },
  "proj.filterInfra": { en: "OCR & security", id: "OCR & keamanan" },
  "proj.askAbout": { en: "Ask AI about this", id: "Tanya AI tentang ini" },
  "proj.viewDetails": { en: "Inspect details", id: "Lihat detail" },

  // More Projects Section 02
  "more.kicker": { en: "02 / More projects", id: "02 / Proyek lainnya" },
  "more.title": { en: "Research, LLM, and safety", id: "Riset, LLM, dan keselamatan" },
  "more.kaggleLink": { en: "Kaggle Notebook", id: "Notebook Kaggle" },

  // Skills Section 03
  "skills.kicker": { en: "03 / Skills", id: "03 / Keahlian" },
  "skills.title": { en: "From sensor to report", id: "Dari sensor hingga laporan" },
  "skills.cv": { en: "AI and computer vision", id: "AI dan computer vision" },
  "skills.llm": { en: "Automation and LLM", id: "Otomasi dan LLM" },
  "skills.web": { en: "Web and dashboards", id: "Web dan dashboard" },
  "skills.infra": { en: "Infrastructure and security", id: "Infrastruktur dan keamanan" },

  // Experience Section 04
  "exp.kicker": { en: "04 / Experience", id: "04 / Pengalaman" },
  "exp.title": { en: "Work history", id: "Riwayat kerja" },

  // Education Section 05
  "edu.kicker": { en: "05 / Education", id: "05 / Pendidikan" },
  "edu.title": { en: "Education and certifications", id: "Pendidikan dan sertifikasi" },
  "edu.degree": { en: "Bachelor of Computer Science (Informatics)", id: "Sarjana Ilmu Komputer (Informatika)" },
  "edu.degreeDesc": {
    en: "UPN “Veteran” Jawa Timur, 2020 - 2025. GPA 3.76/4.00. Specialized in System Administration and Artificial Intelligence.",
    id: "UPN “Veteran” Jawa Timur, 2020 - 2025. IPK 3.76/4.00. Spesialisasi Administrasi Sistem dan Kecerdasan Buatan.",
  },
  "edu.certs": { en: "Certifications", id: "Sertifikasi" },
  "edu.highlights": { en: "Highlights", id: "Sorotan" },
  "edu.highlightsDesc": {
    en: "Ranked 12th among 32 universities at the Indonesia Esport League (PUBG Mobile), and volunteer in the 2021 Mount Semeru eruption response.",
    id: "Peringkat 12 dari 32 universitas pada Indonesia Esport League (PUBG Mobile), serta relawan tanggap darurat erupsi Gunung Semeru 2021.",
  },

  // Contact & Footer
  "contact.title": { en: "Let’s collaborate", id: "Mari berkolaborasi" },
  "contact.subtitle": {
    en: "Open to job opportunities and collaboration in AI, automation, and monitoring systems.",
    id: "Terbuka untuk peluang kerja dan kolaborasi di bidang AI, otomasi, dan sistem pemantauan.",
  },
  "footer.copy": {
    en: "© 2026 Fatwa Ratantja Kusumajati",
    id: "© 2026 Fatwa Ratantja Kusumajati",
  },
  "footer.replayIntro": {
    en: "Replay Intro",
    id: "Putar Ulang Intro",
  },

  // Chatbot
  "chat.title": { en: "Fatwa Ratantja AI Assistant", id: "Asisten AI Fatwa Ratantja" },
  "chat.subtitle": {
    en: "Personal Portfolio Q&A · Ask About Fatwa",
    id: "Tanya Jawab Portofolio · Tentang Fatwa",
  },
  "chat.welcome": {
    en: "Hi! I'm Fatwa's personal AI assistant. Ask me anything about Fatwa's background, skills, projects, work experience, education, or how to contact him.",
    id: "Halo! Saya asisten AI pribadi Fatwa. Tanyakan apa saja tentang profil, keahlian, proyek, pengalaman kerja, pendidikan, atau cara menghubungi Fatwa.",
  },
  "chat.placeholder": {
    en: "Ask anything about Fatwa...",
    id: "Tanyakan apa saja tentang Fatwa...",
  },
  "chat.sources": { en: "Retrieved context:", id: "Konteks diambil:" },
  "chat.thinking": { en: "Searching Fatwa's portfolio...", id: "Mencari di portofolio Fatwa..." },
  "chat.reset": { en: "New chat", id: "Chat baru" },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; toggle: () => void; t: (k: string) => string };
const LanguageContext = createContext<Ctx | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => (localStorage.getItem("lang") as Lang) || "en");

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);
  const toggle = () => setLangState((l) => (l === "en" ? "id" : "en"));
  const t = (k: string) => dict[k]?.[lang] ?? k;

  return <LanguageContext.Provider value={{ lang, setLang, toggle, t }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
