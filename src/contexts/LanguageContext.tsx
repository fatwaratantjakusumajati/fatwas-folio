import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Lang = "en" | "id";

type Dict = Record<string, { en: string; id: string }>;

const dict: Dict = {
  // Navbar
  "nav.about": { en: "About", id: "Tentang" },
  "nav.experience": { en: "Experience", id: "Pengalaman" },
  "nav.projects": { en: "Projects", id: "Proyek" },
  "nav.skills": { en: "Skills", id: "Keahlian" },
  "nav.certifications": { en: "Certifications", id: "Sertifikasi" },
  "nav.contact": { en: "Contact", id: "Kontak" },

  // Hero
  "hero.available": { en: "Available · Surabaya, Indonesia", id: "Tersedia · Surabaya, Indonesia" },
  "hero.role": { en: "AI Engineer · System Administrator · Fullstack Developer", id: "AI Engineer · System Administrator · Fullstack Developer" },
  "hero.tagline": {
    en: "Passionate about building intelligent systems and secure infrastructures that drive real-world impact.",
    id: "Bersemangat membangun sistem cerdas dan infrastruktur aman yang memberi dampak nyata.",
  },
  "hero.viewProjects": { en: "View Projects", id: "Lihat Proyek" },
  "hero.contactMe": { en: "Contact Me", id: "Hubungi Saya" },
  "hero.downloadCv": { en: "Download CV", id: "Unduh CV" },

  // About
  "about.kicker": { en: "About Me", id: "Tentang Saya" },
  "about.title1": { en: "Bridging", id: "Menjembatani" },
  "about.title2": { en: "and", id: "dan" },
  "about.titleAi": { en: "AI", id: "AI" },
  "about.titleInfra": { en: "Infrastructure", id: "Infrastruktur" },
  "about.p1": {
    en: "I'm an Informatics graduate from UPN \"Veteran\" Jawa Timur with a GPA of 3.76, specializing in Artificial Intelligence and System Administration.",
    id: "Saya lulusan Informatika UPN \"Veteran\" Jawa Timur dengan IPK 3.76, dengan spesialisasi Kecerdasan Buatan dan Administrasi Sistem.",
  },
  "about.p2": {
    en: "My journey spans hands-on experience in network infrastructure, cybersecurity monitoring, and AI development — from deploying SOCs with Security Onion to training computer vision models for safety compliance.",
    id: "Perjalanan saya mencakup pengalaman langsung di infrastruktur jaringan, pemantauan keamanan siber, dan pengembangan AI — mulai dari mengimplementasikan SOC dengan Security Onion hingga melatih model computer vision untuk kepatuhan keselamatan kerja.",
  },
  "about.adaptive": { en: "Adaptive", id: "Adaptif" },
  "about.analytical": { en: "Analytical", id: "Analitis" },
  "about.leadership": { en: "Leadership", id: "Kepemimpinan" },
  "about.aiTitle": { en: "AI Engineering", id: "AI Engineering" },
  "about.aiDesc": { en: "Computer vision, NLP, and ML model deployment", id: "Computer vision, NLP, dan deployment model ML" },
  "about.infraTitle": { en: "Infrastructure", id: "Infrastruktur" },
  "about.infraDesc": { en: "Linux servers, network security, SOC operations", id: "Server Linux, keamanan jaringan, operasi SOC" },
  "about.fsTitle": { en: "Fullstack Dev", id: "Fullstack Dev" },
  "about.fsDesc": { en: "Web applications with PHP, JS, React", id: "Aplikasi web dengan PHP, JS, React" },
  "about.learnTitle": { en: "Continuous Learning", id: "Belajar Berkelanjutan" },
  "about.learnDesc": { en: "5 industry certifications & growing", id: "5 sertifikasi industri & terus bertambah" },
  "about.statProjects": { en: "Projects", id: "Proyek" },
  "about.statCerts": { en: "Certifications", id: "Sertifikasi" },
  "about.statInternships": { en: "Internships", id: "Magang" },
  "about.statGpa": { en: "GPA × 100", id: "IPK × 100" },

  // Experience
  "exp.kicker": { en: "Experience", id: "Pengalaman" },
  "exp.title": { en: "Professional", id: "Perjalanan" },
  "exp.title2": { en: "Journey", id: "Profesional" },

  // Projects
  "proj.kicker": { en: "Projects", id: "Proyek" },
  "proj.title": { en: "Featured Work", id: "Karya Unggulan" },
  "proj.subtitle": {
    en: "A selection of projects spanning AI, infrastructure, IoT, and web development.",
    id: "Pilihan proyek di bidang AI, infrastruktur, IoT, dan pengembangan web.",
  },

  // Skills
  "skills.kicker": { en: "Skills", id: "Keahlian" },
  "skills.title": { en: "Tech", id: "Tumpukan" },
  "skills.title2": { en: "Stack", id: "Teknologi" },
  "skills.programming": { en: "Programming", id: "Pemrograman" },
  "skills.ai": { en: "AI / Data", id: "AI / Data" },
  "skills.infra": { en: "Infrastructure", id: "Infrastruktur" },
  "skills.web": { en: "Web Development", id: "Pengembangan Web" },

  // Certifications
  "cert.kicker": { en: "Certifications", id: "Sertifikasi" },
  "cert.title": { en: "Verified", id: "Kredensial" },
  "cert.title2": { en: "Credentials", id: "Terverifikasi" },

  // Organization
  "org.kicker": { en: "Organization", id: "Organisasi" },
  "org.title": { en: "Leadership &", id: "Kepemimpinan &" },
  "org.title2": { en: "Coordination", id: "Koordinasi" },

  // Contact
  "contact.kicker": { en: "Contact", id: "Kontak" },
  "contact.title": { en: "Let's", id: "Mari" },
  "contact.title2": { en: "Connect", id: "Terhubung" },
  "contact.subtitle": {
    en: "Open to opportunities in AI, IT Infrastructure, and Software Engineering.",
    id: "Terbuka untuk peluang di bidang AI, Infrastruktur IT, dan Software Engineering.",
  },
  "contact.email": { en: "Email", id: "Email" },
  "contact.whatsapp": { en: "WhatsApp", id: "WhatsApp" },
  "contact.linkedin": { en: "LinkedIn", id: "LinkedIn" },
  "contact.credly": { en: "Credly", id: "Credly" },
  "contact.viewBadges": { en: "View Badges", id: "Lihat Badge" },

  // Footer
  "footer.rights": { en: "All rights reserved.", id: "Semua hak dilindungi." },
  "footer.built": { en: "Built with React + Tailwind · Surabaya, Indonesia", id: "Dibangun dengan React + Tailwind · Surabaya, Indonesia" },
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
  const toggle = () => setLangState(l => (l === "en" ? "id" : "en"));
  const t = (k: string) => dict[k]?.[lang] ?? k;

  return <LanguageContext.Provider value={{ lang, setLang, toggle, t }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
