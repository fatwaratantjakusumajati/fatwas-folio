import { useState } from "react";
import { ArrowUpRight, ExternalLink, MessageSquareText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useChatbot } from "@/contexts/ChatbotContext";
import { ProjectPreview, PreviewId } from "./ProjectPreviews";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type DeployedCategory = "all" | "cv" | "web" | "infra";

interface DeployedProject {
  id: PreviewId;
  badge: { en: string; id: string };
  badgeBg: string;
  filterKey: Exclude<DeployedCategory, "all">;
  title: { en: string; id: string };
  description: { en: string; id: string };
  tags: { label: string; bg: string }[];
  hasChatbotAction?: boolean;
}

const deployedProjects: DeployedProject[] = [
  {
    id: "warehouse-dashboard",
    badge: { en: "Web and automation / 2026", id: "Web dan otomasi / 2026" },
    badgeBg: "bg-[#FACC15]",
    filterKey: "web",
    title: {
      en: "Dashboard Warehouse Intelligence",
      id: "Dashboard Warehouse Intelligence",
    },
    description: {
      en: "A web platform built for PT Aristides Logistik Indonesia that brings staging, vehicle, and camera data into one place. It shows live camera status, vehicle counts by hour, and the latest staging events together with an alert count for the last 7 days, so the team can follow warehouse activity without walking the floor. The document reader, daily reporting, and LLM incident-log assistant connect through the same platform.",
      id: "Platform web untuk PT Aristides Logistik Indonesia yang menyatukan data staging, kendaraan, dan kamera dalam satu tempat. Menampilkan status kamera langsung, jumlah kendaraan per jam, event staging terbaru, serta jumlah alert 7 hari terakhir agar tim memantau aktivitas gudang secara real-time. Pembaca dokumen OCR, laporan harian, dan asisten LLM terhubung pada ekosistem yang sama.",
    },
    tags: [
      { label: "React TanStack", bg: "bg-[#FACC15]" },
      { label: "Node.js", bg: "bg-[#6CB4FA]" },
      { label: "n8n", bg: "bg-[#F78EB6]" },
    ],
  },
  {
    id: "vehicle-plate",
    badge: { en: "Computer vision / 2026", id: "Computer vision / 2026" },
    badgeBg: "bg-[#2ED47A]",
    filterKey: "cv",
    title: {
      en: "Truck & car gate detection, plate OCR, and loading/unloading status",
      id: "Deteksi truk & mobil, pelat nomor, dan status loading/unloading",
    },
    description: {
      en: "A computer vision system that detects cars and trucks at warehouse gates and docks, reads their license plates, and monitors truck loading or unloading activity in real time. Every entry, exit, and dock state is logged per vehicle with camera location, confidence score, and bounding box, with vehicle history review and operator flagging.",
      id: "Sistem computer vision yang mendeteksi mobil dan truk di gerbang serta area dermaga gudang, membaca pelat nomor, dan memantau status aktivitas loading atau unloading truk secara real time. Setiap keluar-masuk dan status dermaga dicatat per kendaraan lengkap dengan lokasi kamera, skor kepercayaan, bounding box, serta tombol flag operator.",
    },
    tags: [
      { label: "YOLO", bg: "bg-[#FACC15]" },
      { label: "Plate OCR", bg: "bg-[#6CB4FA]" },
      { label: "Loading / Unloading", bg: "bg-[#F78EB6]" },
    ],
  },
  {
    id: "aruco-tracking",
    badge: { en: "Computer vision / 2026", id: "Computer vision / 2026" },
    badgeBg: "bg-[#6CB4FA]",
    filterKey: "cv",
    title: {
      en: "Live location tracking with ArUco & OCR documents",
      id: "Live tracking lokasi dengan ArUco & dokumen OCR",
    },
    description: {
      en: "Connected directly with the OCR document reader, every tagged item carries a printable ArUco marker ID so cameras track its live location across warehouse zones such as staging and outbound in real time. The system records first appearance, live zone coordinates, and last update, raising an alert immediately if an item disappears.",
      id: "Terhubung langsung dengan sistem OCR dokumen, setiap barang membawa ID marker ArUco siap cetak sehingga kamera melacak lokasi langsungnya antar zona gudang seperti staging dan outbound secara real time. Sistem mencatat waktu masuk zona, koordinat posisi live, dan memicu alert jika barang hilang.",
    },
    tags: [
      { label: "ArUco", bg: "bg-[#FACC15]" },
      { label: "Live Tracking", bg: "bg-[#6CB4FA]" },
      { label: "Document Link", bg: "bg-[#F78EB6]" },
    ],
  },
  {
    id: "whatsapp-reports",
    badge: { en: "Automation & LLM / 2026", id: "Otomasi & LLM / 2026" },
    badgeBg: "bg-[#2ED47A]",
    filterKey: "web",
    title: {
      en: "WhatsApp LLM chatbot & daily Excel reports",
      id: "Chatbot LLM WhatsApp & laporan Excel harian",
    },
    description: {
      en: "Every day at 16:00 the system sends three Excel reports through WhatsApp: the vehicle log, the alert log, and a warehouse summary, while alerts arrive with the detection image and bounding box. In addition, an LLM-powered chatbot integrated into the same PT Aristides Logistik Indonesia workflow lets the team query warehouse incidents and generate custom Excel log files directly via WhatsApp using n8n and Gemini API.",
      id: "Setiap hari pukul 16:00 sistem mengirim tiga laporan Excel melalui WhatsApp (log kendaraan, log alert, dan ringkasan gudang), sementara alert disertai gambar deteksi dan bounding box. Di ekosistem PT Aristides Logistik Indonesia yang sama, sistem ini juga dilengkapi chatbot LLM berbasis Gemini API & n8n untuk menanyakan kejadian gudang serta membuat file log kejadian dalam format Excel langsung via WhatsApp.",
    },
    tags: [
      { label: "n8n", bg: "bg-[#FACC15]" },
      { label: "WhatsApp", bg: "bg-[#6CB4FA]" },
      { label: "Gemini API / LLM", bg: "bg-[#F78EB6]" },
      { label: "Excel", bg: "bg-[#2ED47A]" },
    ],
    hasChatbotAction: true,
  },
  {
    id: "ocr-reader",
    badge: { en: "OCR + ArUco / 2026", id: "OCR + ArUco / 2026" },
    badgeBg: "bg-[#F78EB6]",
    filterKey: "infra",
    title: {
      en: "Document OCR & ArUco live-tracking tagging",
      id: "OCR dokumen & penanda ArUco untuk live tracking",
    },
    description: {
      en: "Staff upload a photo of an invoice, purchase order, receipt, or delivery note. The OCR pipeline extracts issuer, recipient, reference number, line items, and totals into a searchable archive. Each document generates a printable ArUco marker ID linked to the live location tracking cameras across warehouse zones.",
      id: "Staf mengunggah foto invoice, purchase order, kwitansi, atau surat jalan. Pipeline OCR mengekstrak penerbit, penerima, nomor referensi, item, dan total ke arsip yang mudah dicari. Setiap dokumen menghasilkan ID marker ArUco siap cetak yang terhubung ke kamera live tracking lokasi di zona gudang.",
    },
    tags: [
      { label: "OCR", bg: "bg-[#FACC15]" },
      { label: "ArUco", bg: "bg-[#6CB4FA]" },
      { label: "Live Location", bg: "bg-[#F78EB6]" },
    ],
  },
  {
    id: "security-onion",
    badge: { en: "Network security / PT INKA", id: "Keamanan jaringan / PT INKA" },
    badgeBg: "bg-[#C4B5FD]",
    filterKey: "infra",
    title: {
      en: "Security Onion in the data center",
      id: "Security Onion di data center",
    },
    description: {
      en: "Installed and configured Security Onion in the PT INKA (Persero) data center during the MagangHub program, using port mirroring to consolidate all network traffic logs on a single server. Enabled real-time threat monitoring and Suricata alerts in the Security Onion console.",
      id: "Menginstal dan mengkonfigurasi Security Onion di data center PT INKA (Persero) saat mengikuti program MagangHub menggunakan port mirroring untuk mengkonsolidasikan seluruh log lalu lintas jaringan ke satu server dan memantau alert Suricata secara real-time.",
    },
    tags: [
      { label: "Security Onion", bg: "bg-[#FACC15]" },
      { label: "Suricata", bg: "bg-[#6CB4FA]" },
      { label: "GLPI", bg: "bg-[#F78EB6]" },
    ],
  },
  {
    id: "timu-web",
    badge: { en: "Web / 2024", id: "Web / 2024" },
    badgeBg: "bg-[#FDBA74]",
    filterKey: "web",
    title: {
      en: "Official website of PT Terminal Intimoda Utama",
      id: "Website resmi PT Terminal Intimoda Utama",
    },
    description: {
      en: "The official company website built during a university student internship at PT Terminal Intimoda Utama using CodeIgniter 3, PHP, MySQL, and Bootstrap. It delivers 5 pages and modules with a modern, responsive interface across devices.",
      id: "Website resmi perusahaan yang dibangun saat magang mahasiswa di PT Terminal Intimoda Utama menggunakan CodeIgniter 3, PHP, MySQL, dan Bootstrap. Menghadirkan 5 halaman dan modul dengan antarmuka responsif di berbagai perangkat.",
    },
    tags: [
      { label: "CodeIgniter 3", bg: "bg-[#FACC15]" },
      { label: "PHP", bg: "bg-[#6CB4FA]" },
      { label: "MySQL", bg: "bg-[#F78EB6]" },
    ],
  },
  {
    id: "alba-web",
    badge: { en: "Web / 2026", id: "Web / 2026" },
    badgeBg: "bg-[#FACC15]",
    filterKey: "web",
    title: {
      en: "Alba Nusantara Commodity website",
      id: "Website Alba Nusantara Commodity",
    },
    description: {
      en: "Company profile website for an Indonesian procurement and trading company focused on premium agricultural and natural products such as essential oils, edible bird’s nest, cocoa, and cloves. Built with React.js, it includes a hero slider, an About Us section, Products and Contact pages, and a language switch.",
      id: "Website profil perusahaan pengadaan dan perdagangan komoditas unggulan Indonesia (minyak atsiri, sarang burung walet, kakao, cengkeh). Dibangun dengan React.js, dilengkapi hero slider, bagian Tentang Kami, halaman Produk dan Kontak, serta fitur ganti bahasa.",
    },
    tags: [
      { label: "React.js", bg: "bg-[#FACC15]" },
      { label: "Bilingual", bg: "bg-[#6CB4FA]" },
      { label: "Hero slider", bg: "bg-[#F78EB6]" },
    ],
  },
];

interface MoreProject {
  id: string;
  badge: { en: string; id: string };
  cardBg: string;
  title: { en: string; id: string };
  description: { en: string; id: string };
  tools: string[];
}

const moreProjects: MoreProject[] = [
  {
    id: "helmet",
    badge: { en: "Safety / 2026", id: "Keselamatan / 2026" },
    cardBg: "bg-[#DCFCE7]",
    title: { en: "Safety helmet detection", id: "Deteksi helm keselamatan" },
    description: {
      en: "A YOLOv8n prototype that reached 0.94 mAP50, built as an automated safety monitor for an industrial workplace during the MagangHub program at PT INKA (Persero).",
      id: "Prototipe YOLOv8n yang mencapai 0.94 mAP50, dibangun sebagai pemantau keselamatan kerja otomatis di lingkungan industri selama mengikuti program MagangHub di PT INKA (Persero).",
    },
    tools: ["YOLOv8n", "Ultralytics", "PyTorch", "OpenCV", "Python"],
  },
  {
    id: "smote-xgboost",
    badge: { en: "Research / 2024", id: "Riset / 2024" },
    cardBg: "bg-[#DBEAFE]",
    title: { en: "SMOTETomek + XGBoost", id: "SMOTETomek + XGBoost" },
    description: {
      en: "Implementation of the SMOTETomek data balancing technique in diabetes classification using the XGBoost algorithm, written up as a scientific paper and published in a SINTA 2 journal.",
      id: "Implementasi teknik penyeimbangan data SMOTETomek pada klasifikasi diabetes menggunakan algoritma XGBoost, ditulis sebagai artikel ilmiah dan terbit di jurnal SINTA 2.",
    },
    tools: ["XGBoost", "SMOTETomek", "scikit-learn", "Python"],
  },
  {
    id: "tomato-cnn",
    badge: { en: "Deep learning / 2024", id: "Deep learning / 2024" },
    cardBg: "bg-[#EDE9FE]",
    title: { en: "Tomato leaf disease", id: "Penyakit daun tomat" },
    description: {
      en: "A convolutional neural network (CNN) that classifies tomato leaf images by disease, built as a deep learning project to support early detection of plant diseases.",
      id: "Convolutional Neural Network (CNN) yang mengklasifikasikan citra daun tomat berdasarkan penyakitnya untuk mendukung deteksi dini penyakit tanaman.",
    },
    tools: ["CNN", "TensorFlow", "Keras", "Python"],
  },
  {
    id: "iot-temp",
    badge: { en: "IoT / 2024", id: "IoT / 2024" },
    cardBg: "bg-[#FFEDD5]",
    title: { en: "Room temperature control", id: "Kontrol suhu ruangan" },
    description: {
      en: "An IoT project that uses a PIC microcontroller and a temperature sensor to monitor and regulate room temperature automatically.",
      id: "Proyek IoT yang menggunakan mikrokontroler PIC dan sensor suhu untuk memantau serta mengatur suhu ruangan secara otomatis.",
    },
    tools: ["PIC Microcontroller", "Temperature Sensor", "C / Embedded"],
  },
];

export const Projects = () => {
  const { lang, t } = useLanguage();
  const { openChat } = useChatbot();
  const [filter, setFilter] = useState<DeployedCategory>("all");
  const [selected, setSelected] = useState<DeployedProject | null>(null);

  const visibleDeployed =
    filter === "all"
      ? deployedProjects
      : deployedProjects.filter((p) => p.filterKey === filter);

  const filterButtons: { key: DeployedCategory; label: string }[] = [
    { key: "all", label: t("proj.filterAll") },
    { key: "cv", label: t("proj.filterCv") },
    { key: "web", label: t("proj.filterWeb") },
    { key: "infra", label: t("proj.filterInfra") },
  ];

  return (
    <>
      {/* 01 / Projects */}
      <section id="projects" className="py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-3">
              <span className="neo-pill px-4 py-1 text-xs bg-[#F78EB6] neo-shadow-sm">
                {t("proj.kicker")}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
                {t("proj.title")}
              </h2>
            </div>

            {/* Interactive Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {filterButtons.map((btn) => {
                const active = filter === btn.key;
                return (
                  <button
                    key={btn.key}
                    type="button"
                    onClick={() => setFilter(btn.key)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-heading font-bold border-2 border-[var(--ink)] transition-colors whitespace-nowrap shrink-0 ${
                      active
                        ? "bg-[#16181D] text-white dark:bg-[#FACC15] dark:text-[#16181D]"
                        : "bg-card text-foreground hover:bg-[#FEF08A] hover:text-[#16181D]"
                    }`}
                  >
                    {btn.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-7">
            {visibleDeployed.map((project, idx) => {
              const mediaFirst = idx % 2 === 0;
              return (
                <article
                  key={project.id}
                  className="neo-card neo-card-hover p-6 sm:p-8 grid lg:grid-cols-2 gap-7 items-center"
                >
                  <div className={mediaFirst ? "order-1" : "order-1 lg:order-2"}>
                    <ProjectPreview id={project.id} />
                  </div>

                  <div className={`space-y-4 ${mediaFirst ? "order-2" : "order-2 lg:order-1"}`}>
                    <span className={`neo-pill px-3.5 py-1 text-xs ${project.badgeBg}`}>
                      {project.badge[lang]}
                    </span>

                    <h3 className="font-heading text-2xl sm:text-[26px] font-extrabold text-foreground leading-snug">
                      {project.title[lang]}
                    </h3>

                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {project.description[lang]}
                    </p>

                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag.label}
                          className={`neo-pill px-3 py-0.5 text-xs ${tag.bg}`}
                        >
                          {tag.label}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 flex flex-wrap gap-2.5">
                      <button
                        type="button"
                        onClick={() => setSelected(project)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-heading font-bold bg-secondary text-foreground border-2 border-[var(--ink)] hover:bg-[#FEF08A] hover:text-[#16181D] transition-colors"
                      >
                        <span>{t("proj.viewDetails")}</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          openChat(
                            lang === "id"
                              ? `Jelaskan lebih detail tentang proyek "${project.title.en}" dan teknologi yang digunakan.`
                              : `Tell me more about the "${project.title.en}" project and its architecture.`,
                          )
                        }
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-heading font-bold bg-card text-foreground border-2 border-[var(--ink)] hover:bg-[#6CB4FA] hover:text-[#16181D] transition-colors"
                      >
                        <MessageSquareText className="h-3.5 w-3.5" />
                        <span>{t("proj.askAbout")}</span>
                      </button>

                      {project.hasChatbotAction && (
                        <a
                          href="https://www.kaggle.com/code/fatwaratantjak/fatwa-folio"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-heading font-bold bg-[#FACC15] text-[#16181D] border-2 border-[var(--ink)] hover:bg-[#2ED47A] transition-colors"
                        >
                          <span>{t("more.kaggleLink")}</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 02 / More projects */}
      <section id="more-projects" className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="space-y-3">
            <span className="neo-pill px-4 py-1 text-xs bg-[#FACC15] neo-shadow-sm">
              {t("more.kicker")}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
              {t("more.title")}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {moreProjects.map((item) => (
              <div
                key={item.id}
                className={`rounded-[22px] ${item.cardBg} text-[#16181D] border-[2.5px] border-[var(--ink)] shadow-[5px_5px_0_var(--ink)] p-6 flex flex-col justify-between gap-4 hover:-translate-y-0.5 transition-transform`}
              >
                <div className="space-y-3">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-heading font-bold bg-white text-[#16181D] border-2 border-[#16181D]">
                    {item.badge[lang]}
                  </span>
                  <h3 className="font-heading text-xl font-extrabold">{item.title[lang]}</h3>
                  <p className="text-sm text-[#16181D]/85 leading-relaxed">
                    {item.description[lang]}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.tools.map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-heading font-semibold bg-white/90 text-[#16181D] border border-[#16181D]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Dialog */}
      <Dialog open={Boolean(selected)} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-3xl bg-card text-foreground border-[2.5px] border-[var(--ink)] shadow-[6px_6px_0_var(--ink)] rounded-[22px] max-h-[90vh] overflow-y-auto">
          {selected && (
            <>
              <DialogHeader className="space-y-2 text-left">
                <div>
                  <span className={`neo-pill px-3.5 py-0.5 text-xs ${selected.badgeBg}`}>
                    {selected.badge[lang]}
                  </span>
                </div>
                <DialogTitle className="font-heading text-2xl font-extrabold">
                  {selected.title[lang]}
                </DialogTitle>
                <DialogDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed pt-1">
                  {selected.description[lang]}
                </DialogDescription>
              </DialogHeader>

              <div className="my-2">
                <ProjectPreview id={selected.id} />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {selected.tags.map((tag) => (
                    <span key={tag.label} className={`neo-pill px-3 py-0.5 text-xs ${tag.bg}`}>
                      {tag.label}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const title = selected.title.en;
                    setSelected(null);
                    openChat(
                      lang === "id"
                        ? `Ceritakan detail teknis dari proyek "${title}".`
                        : `Explain the technical implementation of "${title}".`,
                    );
                  }}
                  className="neo-btn px-4 py-2 text-xs bg-[#2ED47A] text-[#16181D] gap-1.5"
                >
                  <MessageSquareText className="h-3.5 w-3.5" />
                  <span>{t("proj.askAbout")}</span>
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};