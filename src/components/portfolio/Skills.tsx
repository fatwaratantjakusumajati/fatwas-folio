import { useLanguage } from "@/contexts/LanguageContext";

const skillPalette = ["bg-[#FACC15]", "bg-[#6CB4FA]", "bg-[#F78EB6]", "bg-[#2ED47A]"];

export const Skills = () => {
  const { t } = useLanguage();

  const groups = [
    {
      title: t("skills.cv"),
      items: ["YOLO", "OpenVINO", "OpenCV", "ArUco", "OCR", "CNN", "XGBoost", "PyTorch"],
    },
    {
      title: t("skills.llm"),
      items: ["n8n", "WhatsApp", "Gemini API", "RAG", "Python"],
    },
    {
      title: t("skills.web"),
      items: ["React TanStack", "Node.js", "Express.js", "TypeScript", "PHP", "MySQL", "PostgreSQL"],
    },
    {
      title: t("skills.infra"),
      items: ["RHCSA", "Security Onion", "Suricata", "GLPI"],
    },
  ];

  return (
    <section id="skills" className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="space-y-3">
          <span className="neo-pill px-4 py-1 text-xs bg-[#6CB4FA] neo-shadow-sm">
            {t("skills.kicker")}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
            {t("skills.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((grp) => (
            <div key={grp.title} className="neo-card p-6 space-y-4">
              <h3 className="font-heading text-lg font-extrabold text-foreground">{grp.title}</h3>
              <div className="flex flex-wrap gap-2">
                {grp.items.map((item, idx) => (
                  <span
                    key={item}
                    className={`neo-pill px-3 py-1 text-xs ${skillPalette[idx % skillPalette.length]}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
