import { ArrowRight, Camera, Download, Play, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import fatwaFullBodyImg from "@/assets/images/fatwa_fullbody_superstar_1795568401809.jpg";

export const Hero = ({ onReplayIntro }: { onReplayIntro?: () => void }) => {
  const { lang, t } = useLanguage();

  const achievements =
    lang === "id"
      ? [
          "Sarjana Ilmu Komputer (Informatika), UPN “Veteran” Jawa Timur",
          "Penulis artikel ilmiah di jurnal nasional terakreditasi SINTA 2",
          "Wakil Presiden Badan Eksekutif Mahasiswa Fakultas (BEM FASILKOM)",
          "Kepala Departemen Advokasi, BEM FASILKOM",
          "Perwakilan universitas pada Indonesia Esport League (PUBG Mobile), tingkat nasional",
          "Relawan kemanusiaan tanggap darurat erupsi Gunung Semeru",
          "Sertifikasi: RHCSA, IBM AI Practitioner, IT Specialist: AI, Enterprise Design Thinking Practitioner, Team Essentials for AI, Python for Data Science",
        ]
      : [
          "Bachelor of Computer Science (Informatics), UPN “Veteran” Jawa Timur",
          "Author of a scientific article in a national journal indexed in SINTA 2",
          "Vice President, Faculty Student Executive Board (BEM FASILKOM)",
          "Head of Advocacy, Faculty Student Executive Board (BEM FASILKOM)",
          "University representative at the Indonesia Esport League (PUBG Mobile), national level",
          "Humanitarian volunteer, Mount Semeru eruption response",
          "Certifications: RHCSA, IBM AI Practitioner, IT Specialist: AI, Enterprise Design Thinking Practitioner, Team Essentials for AI, Python for Data Science",
        ];

  const experienceQuick = [
    {
      role: lang === "id" ? "Warehouse Technology Specialist" : "Warehouse Technology Specialist",
      meta: "PT Aristides Logistik Indonesia, Jun - Dec 2026",
    },
    {
      role: lang === "id" ? "R&D Intern, IT Operations (MagangHub)" : "R&D Intern, IT Operations (MagangHub)",
      meta: "PT INKA (Persero), Nov 2025 - May 2026",
    },
    {
      role: "IT Support",
      meta: "Lazada Express, Mar - Nov 2025",
    },
    {
      role:
        lang === "id"
          ? "Fullstack Web Developer (Magang Mahasiswa)"
          : "Fullstack Web Developer (Student Intern)",
      meta: "PT Terminal Intimoda Utama, Aug - Dec 2024",
    },
  ];

  const summarySkillGroups = [
    {
      label: t("skills.cv"),
      items: [
        { name: "YOLO", bg: "bg-[#FACC15]" },
        { name: "OpenVINO", bg: "bg-[#6CB4FA]" },
        { name: "OpenCV", bg: "bg-[#F78EB6]" },
        { name: "ArUco", bg: "bg-[#2ED47A]" },
        { name: "OCR", bg: "bg-[#FACC15]" },
        { name: "CNN", bg: "bg-[#6CB4FA]" },
        { name: "XGBoost", bg: "bg-[#F78EB6]" },
        { name: "PyTorch", bg: "bg-[#2ED47A]" },
      ],
    },
    {
      label: t("skills.llm"),
      items: [
        { name: "n8n", bg: "bg-[#F78EB6]" },
        { name: "Gemini API", bg: "bg-[#6CB4FA]" },
        { name: "RAG", bg: "bg-[#FACC15]" },
        { name: "Python", bg: "bg-[#2ED47A]" },
      ],
    },
    {
      label: t("skills.web"),
      items: [
        { name: "React TanStack", bg: "bg-[#FACC15]" },
        { name: "Node.js", bg: "bg-[#6CB4FA]" },
        { name: "Express.js", bg: "bg-[#F78EB6]" },
        { name: "TypeScript", bg: "bg-[#2ED47A]" },
        { name: "PHP", bg: "bg-[#FACC15]" },
        { name: "MySQL", bg: "bg-[#6CB4FA]" },
        { name: "PostgreSQL", bg: "bg-[#F78EB6]" },
      ],
    },
    {
      label: t("skills.infra"),
      items: [
        { name: "RHCSA", bg: "bg-[#FACC15]" },
        { name: "Security Onion", bg: "bg-[#6CB4FA]" },
        { name: "Suricata", bg: "bg-[#F78EB6]" },
        { name: "GLPI", bg: "bg-[#2ED47A]" },
      ],
    },
  ];

  return (
    <section id="home" className="pt-10 pb-14 sm:pt-14 sm:pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Hero Split */}
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <span className="neo-pill px-4 py-1 text-xs bg-[#6CB4FA] neo-shadow-sm">
              {t("hero.kicker")}
            </span>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.12] tracking-tight text-foreground">
              {t("hero.headlineStart")}{" "}
              <span className="inline-block px-3.5 py-0.5 mx-0.5 rounded-2xl bg-[#2ED47A] text-[#16181D] border-[2.5px] border-[var(--ink)] shadow-[3px_3px_0_var(--ink)] -rotate-1">
                {t("hero.headlineAi")}
              </span>{" "}
              {t("hero.headlineMid")}{" "}
              <span className="inline-block px-3.5 py-0.5 mx-0.5 rounded-2xl bg-[#F78EB6] text-[#16181D] border-[2.5px] border-[var(--ink)] shadow-[3px_3px_0_var(--ink)] rotate-1">
                {t("hero.headlineLogistics")}
              </span>{" "}
              {t("hero.headlineEnd")}
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              {t("hero.lead")}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#projects"
                className="neo-btn px-6 py-2.5 text-sm bg-[#FACC15] text-[#16181D] gap-2"
              >
                <span>{t("hero.viewProjects")}</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="neo-btn px-6 py-2.5 text-sm bg-card text-foreground"
              >
                {t("hero.contactMe")}
              </a>

              <a
                href="/cv-fatwa-new.pdf"
                download
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-heading font-semibold text-foreground hover:underline whitespace-nowrap shrink-0"
              >
                <Download className="h-4 w-4" />
                <span>{t("hero.downloadCv")}</span>
              </a>

              {onReplayIntro && (
                <button
                  type="button"
                  onClick={onReplayIntro}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-heading font-semibold text-foreground hover:underline whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Play className="h-4 w-4" />
                  <span>{t("hero.replayIntro")}</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Cute Full-Body Animated Character Illustration */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative p-4 sm:p-5 group">
              {/* Outer dashed frame */}
              <div className="absolute inset-0 rounded-[36px] border-[2.5px] border-dashed border-[var(--ink)] opacity-70 pointer-events-none" />

              {/* Speech bubble Hello! */}
              <div className="absolute top-2 left-1 sm:-left-2 z-20 px-4 py-1.5 rounded-2xl bg-card text-foreground font-heading font-bold text-sm border-2 border-[var(--ink)] neo-shadow-sm -rotate-3 animate-neo-pop-spring">
                {t("hero.hello")}
              </div>

              {/* Star accent */}
              <div
                aria-hidden="true"
                className="absolute top-1 right-2 z-20 w-10 h-10 flex items-center justify-center text-[#FACC15] drop-shadow-[2px_2px_0_var(--ink)] animate-neo-float"
              >
                <Star className="w-8 h-8 fill-[#FACC15] stroke-[var(--ink)] stroke-[2.2]" />
              </div>

              {/* Full-body animated character showcase */}
              <div className="relative w-[240px] sm:w-[275px] lg:w-[300px] aspect-[3/4] rounded-[28px] overflow-hidden bg-[#7DD3FC] border-[3px] border-[var(--ink)] shadow-[6px_6px_0_var(--ink)]">
                <img
                  src={fatwaFullBodyImg}
                  alt="Cute full-body animated character of Fatwa Ratantja Kusumajati"
                  className="w-full h-full object-contain object-bottom animate-neo-float transition-transform duration-300 group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
              </div>

              {/* Camera icon accent */}
              <div
                aria-hidden="true"
                className="absolute bottom-2 right-1 z-20 px-3 py-2 rounded-xl bg-[#FACC15] text-[#16181D] border-2 border-[var(--ink)] neo-shadow-sm rotate-6"
              >
                <Camera className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* 3 Stat Cards Row matching PDF Page 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          <div className="rounded-[22px] bg-[#FACC15] text-[#16181D] border-[2.5px] border-[var(--ink)] shadow-[5px_5px_0_var(--ink)] p-6 text-center">
            <div className="font-heading text-3xl sm:text-4xl font-extrabold tabular-nums">3.76</div>
            <div className="text-sm font-medium mt-1">{t("stat.gpaSub")}</div>
          </div>

          <div className="rounded-[22px] bg-[#6CB4FA] text-[#16181D] border-[2.5px] border-[var(--ink)] shadow-[5px_5px_0_var(--ink)] p-6 text-center">
            <div className="font-heading text-3xl sm:text-4xl font-extrabold">SINTA 2</div>
            <div className="text-sm font-medium mt-1">{t("stat.sintaSub")}</div>
          </div>

          <div className="rounded-[22px] bg-[#F78EB6] text-[#16181D] border-[2.5px] border-[var(--ink)] shadow-[5px_5px_0_var(--ink)] p-6 text-center">
            <div className="font-heading text-3xl sm:text-4xl font-extrabold tabular-nums">6</div>
            <div className="text-sm font-medium mt-1">{t("stat.certsSub")}</div>
          </div>
        </div>

        {/* Summary Card matching PDF Page 1 bottom */}
        <div className="neo-card p-6 sm:p-8 space-y-6">
          <div className="space-y-3">
            <span className="neo-pill px-4 py-1 text-xs bg-[#FDBA74] neo-shadow-sm">
              {t("summary.badge")}
            </span>
            <p className="text-base sm:text-lg font-medium text-foreground">
              {t("summary.lead")}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 pt-2 border-t-2 border-dashed border-[var(--ink)]/20">
            {/* Achievements */}
            <div className="space-y-3">
              <span className="neo-pill px-3.5 py-1 text-xs bg-[#FACC15]">
                {t("summary.achievements")}
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-foreground/90 leading-relaxed list-disc pl-4">
                {achievements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Experience */}
            <div className="space-y-3">
              <span className="neo-pill px-3.5 py-1 text-xs bg-[#2ED47A]">
                {t("summary.experience")}
              </span>
              <ul className="space-y-3 text-xs sm:text-sm">
                {experienceQuick.map((exp) => (
                  <li key={exp.role} className="leading-snug">
                    <div className="font-heading font-bold text-foreground">• {exp.role}</div>
                    <div className="text-muted-foreground pl-3">{exp.meta}</div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div className="space-y-3">
              <span className="neo-pill px-3.5 py-1 text-xs bg-[#6CB4FA]">
                {t("summary.skills")}
              </span>
              <div className="space-y-3">
                {summarySkillGroups.map((grp) => (
                  <div key={grp.label} className="space-y-1.5">
                    <div className="text-xs font-heading font-bold text-muted-foreground">
                      {grp.label}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {grp.items.map((skill) => (
                        <span
                          key={skill.name}
                          className={`px-2.5 py-0.5 text-[11px] font-heading font-semibold rounded-full border-[1.5px] border-[#16181D] text-[#16181D] ${skill.bg}`}
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
