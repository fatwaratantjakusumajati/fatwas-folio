import { useLanguage } from "@/contexts/LanguageContext";

export const Experience = () => {
  const { lang, t } = useLanguage();

  const items = [
    {
      period: "Jun - Dec 2026",
      badgeBg: "bg-[#2ED47A]",
      role: "Warehouse Technology Specialist",
      description:
        lang === "id"
          ? "PT Aristides Logistik Indonesia. Membangun sistem computer vision, dashboard pemantauan, dan otomasi untuk gudang 3PL di Surabaya, meliputi deteksi kendaraan, muatan, dan staging, pelacakan barang ArUco, OCR dokumen, serta laporan WhatsApp."
          : "PT Aristides Logistik Indonesia. Builds computer vision systems, monitoring dashboards, and automation for a 3PL warehouse in Surabaya, including vehicle, cargo, and staging detection, ArUco item tracking, document OCR, and WhatsApp reporting.",
    },
    {
      period: "Nov 2025 - May 2026",
      badgeBg: "bg-[#6CB4FA]",
      role: "R&D Intern, IT Operations",
      description:
        lang === "id"
          ? "PT INKA (Persero). Menginstal dan mengkonfigurasi Security Onion dengan port mirroring untuk pemantauan keamanan jaringan di data center, serta mengembangkan prototipe deteksi helm keselamatan YOLOv8n untuk keselamatan kerja."
          : "PT INKA (Persero). Installed and configured Security Onion with port mirroring for network security monitoring in the data center, and developed a YOLOv8n safety helmet detection prototype for workplace safety.",
    },
    {
      period: "Mar - Nov 2025",
      badgeBg: "bg-[#FACC15]",
      role: "IT Support",
      description:
        lang === "id"
          ? "Lazada Express (LEX). Melakukan pemantauan jaringan rutin agar infrastruktur tetap stabil dan tersedia, serta menangani pemeliharaan dan troubleshooting perangkat dari identifikasi gangguan hingga penanganan teknis dengan downtime minimal."
          : "Lazada Express (LEX). Performed regular network monitoring to keep the infrastructure stable and available, and handled maintenance and troubleshooting, from fault identification to technical handling, to keep devices running with minimal downtime.",
    },
    {
      period: "Aug - Dec 2024",
      badgeBg: "bg-[#F78EB6]",
      role: "Fullstack Web Developer",
      description:
        lang === "id"
          ? "PT Terminal Intimoda Utama. Merancang dan mengembangkan website resmi perusahaan dengan CodeIgniter 3, PHP, MySQL, dan Bootstrap, dengan antarmuka responsif di berbagai perangkat."
          : "PT Terminal Intimoda Utama. Designed and developed the company’s official website with CodeIgniter 3, PHP, MySQL, and Bootstrap, with a responsive interface across devices.",
    },
    {
      period: "2022 - 2024",
      badgeBg: "bg-[#C4B5FD]",
      role:
        lang === "id"
          ? "Wakil Presiden dan Kepala Advokasi"
          : "Vice President and Head of Advocacy",
      description:
        lang === "id"
          ? "BEM FASILKOM UPN “Veteran” Jawa Timur. Sebagai Wakil Presiden, mengawasi 2 departemen dan membangun kemitraan dengan 10+ institusi eksternal; sebagai Kepala Advokasi, mendampingi dan mewakili 500+ mahasiswa serta merancang program advokasi."
          : "BEM FASILKOM UPN “Veteran” Jawa Timur. As Vice President, supervised 2 departments and built partnerships with 10+ external institutions; as Head of Advocacy, guided and represented 500+ students and designed advocacy programs.",
    },
  ];

  return (
    <section id="experience" className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="space-y-3">
          <span className="neo-pill px-4 py-1 text-xs bg-[#2ED47A] neo-shadow-sm">
            {t("exp.kicker")}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
            {t("exp.title")}
          </h2>
        </div>

        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={`${item.period}-${item.role}`}
              className="neo-card p-5 sm:p-6 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-7"
            >
              <div className="sm:w-44 shrink-0 pt-0.5">
                <span className={`neo-pill px-3.5 py-1 text-xs font-mono ${item.badgeBg}`}>
                  {item.period}
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-heading text-lg sm:text-xl font-extrabold text-foreground">
                  {item.role}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};