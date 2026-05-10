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
  "hero.role": { en: "AI Engineer · IT Infrastructure · Fullstack Developer", id: "AI Engineer · IT Infrastructure · Fullstack Developer" },
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
  "about.aiDesc": { en: "Computer vision, NLP, LLM, and ML model deployment", id: "Computer vision, NLP, LLM, dan deployment model ML" },
  "about.infraTitle": { en: "Infrastructure", id: "Infrastruktur" },
  "about.infraDesc": { en: "Linux servers, network security, SOC operations", id: "Server Linux, keamanan jaringan, operasi SOC" },
  "about.fsTitle": { en: "Fullstack Dev", id: "Fullstack Dev" },
  "about.fsDesc": { en: "Web applications with PHP, JS, React, Laravel, CodeIgniter, HTML, CSS", id: "Aplikasi web dengan PHP, JS, React, Laravel, CodeIgniter, HTML, CSS" },
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

// Experience - PT INKA
"exp.inka.role": { en: "IT R&D Intern", id: "Magang IT R&D" },
"exp.inka.p1": { en: "Implemented Security Onion for centralized network monitoring and SOC operations", id: "Mengimplementasikan Security Onion untuk pemantauan jaringan terpusat dan operasi SOC" },
"exp.inka.p2": { en: "Configured port mirroring on managed switches for full traffic logging and threat analysis", id: "Mengkonfigurasi port mirroring pada switch terkelola untuk pencatatan traffic lengkap dan analisis ancaman" },
"exp.inka.p3": { en: "Built a YOLOv8 helmet detection system achieving 94% mAP50 for workplace safety compliance", id: "Membangun sistem deteksi helm YOLOv8 dengan akurasi 94% mAP50 untuk kepatuhan keselamatan kerja" },

// Experience - Lazada
"exp.lazada.role": { en: "IT Support", id: "IT Support" },
"exp.lazada.p1": { en: "Managed network infrastructure supporting daily active users", id: "Mengelola infrastruktur jaringan untuk pengguna aktif harian" },
"exp.lazada.p2": { en: "Maintained, configured, and troubleshot IT devices across multiple departments", id: "Memelihara, mengkonfigurasi, dan troubleshoot perangkat IT di berbagai departemen" },
"exp.lazada.p3": { en: "Ensured high uptime and rapid resolution of hardware/software issues", id: "Memastikan uptime tinggi dan penyelesaian cepat masalah hardware/software" },

// Experience - Terminal Intimoda
"exp.timu.role": { en: "Fullstack Developer", id: "Fullstack Developer" },
"exp.timu.p1": { en: "Developed the official company website using CodeIgniter 3 framework", id: "Mengembangkan website resmi perusahaan menggunakan framework CodeIgniter 3" },
"exp.timu.p2": { en: "Delivered 5 functional modules within 3 months on schedule", id: "Menyelesaikan 5 modul fungsional dalam 3 bulan sesuai jadwal" },
"exp.timu.p3": { en: "Implemented MySQL database design and Bootstrap responsive UI", id: "Mengimplementasikan desain database MySQL dan UI responsif dengan Bootstrap" },

  // Projects
  "proj.kicker": { en: "Projects", id: "Proyek" },
  "proj.title": { en: "Featured Work", id: "Karya Unggulan" },
  "proj.subtitle": {
    en: "A selection of projects spanning AI, infrastructure, IoT, and web development.",
    id: "Pilihan proyek di bidang AI, infrastruktur, IoT, dan pengembangan web.",
  },
  "proj.helmet.title": { en: "Helmet Detection (YOLOv8)", id: "Deteksi Helm (YOLOv8)" },
  "proj.helmet.desc": { en: "Real-time workplace safety detection achieving 94% mAP50 for industrial PPE compliance.", id: "Deteksi keselamatan kerja real-time dengan akurasi 94% mAP50 untuk kepatuhan APD industri." },
  "proj.soc.title": { en: "Security Onion SOC", id: "SOC Security Onion" },
  "proj.soc.desc": { en: "Implemented centralized network monitoring with port mirroring for full traffic visibility.", id: "Mengimplementasikan pemantauan jaringan terpusat dengan port mirroring untuk visibilitas traffic penuh." },
  "proj.rag.title": { en: "RAG Chatbot", id: "Chatbot RAG" },
  "proj.rag.desc": { en: "Retrieval-Augmented Generation chatbot powered by Google Gemini API for context-aware responses.", id: "Chatbot berbasis RAG menggunakan Google Gemini API untuk respons yang kontekstual." },
  "proj.tomato.title": { en: "Tomato Leaf Disease Classifier", id: "Klasifikasi Penyakit Daun Tomat" },
  "proj.tomato.desc": { en: "CNN-based image classifier for early detection of tomato plant diseases to support agriculture.", id: "Klasifikasi gambar berbasis CNN untuk deteksi dini penyakit tanaman tomat guna mendukung pertanian." },
  "proj.iot.title": { en: "IoT Temperature Control", id: "Kontrol Suhu IoT" },
  "proj.iot.desc": { en: "Smart temperature monitoring and control system using microcontrollers and sensors.", id: "Sistem pemantauan dan kontrol suhu cerdas menggunakan mikrokontroler dan sensor." },
  "proj.diabetes.title": { en: "Diabetes Classification", id: "Klasifikasi Diabetes" },
  "proj.diabetes.desc": { en: "Predictive model using XGBoost with SMOTETomek to handle class imbalance for medical data.", id: "Model prediktif menggunakan XGBoost dengan SMOTETomek untuk menangani ketidakseimbangan kelas pada data medis." },
  "proj.timu.title": { en: "TIMU Company Website", id: "Website Perusahaan TIMU" },
  "proj.timu.desc": { en: "Full company website with 5 modules built and delivered within 3 months.", id: "Website perusahaan lengkap dengan 5 modul yang dibangun dan diselesaikan dalam 3 bulan." },
  "proj.alba.title": { en: "Alba Nusantara Website", id: "Website Alba Nusantara" },
  "proj.alba.desc": { en: "Modern responsive React-based website with smooth UX and clean design.", id: "Website berbasis React yang modern dan responsif dengan UX halus dan desain bersih." },

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
  "org.vp.role": { en: "Vice President", id: "Wakil Presiden" },
  "org.vp.desc": { en: "Led organizational strategy alongside the President; coordinated cross-departmental programs and represented student aspirations at the faculty level.", id: "Memimpin strategi organisasi bersama Presiden; mengkoordinasikan program lintas departemen dan mewakili aspirasi mahasiswa di tingkat fakultas." },
  "org.adv.role": { en: "Head of Advocacy", id: "Kepala Advokasi" },
  "org.adv.desc": { en: "Directed the advocacy department to address student concerns, mediate with faculty leadership, and run awareness campaigns on academic policies.", id: "Memimpin departemen advokasi untuk menangani keluhan mahasiswa, mediasi dengan pimpinan fakultas, dan menjalankan kampanye kesadaran tentang kebijakan akademik." },

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
