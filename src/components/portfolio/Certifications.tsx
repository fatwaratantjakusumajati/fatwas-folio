import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const certs = [
  { name: "RHCSA", bg: "bg-[#FACC15]" },
  { name: "IBM AI Practitioner", bg: "bg-[#6CB4FA]" },
  { name: "IT Specialist: AI", bg: "bg-[#F78EB6]" },
  { name: "Design Thinking", bg: "bg-[#2ED47A]" },
  { name: "Team Essentials for AI", bg: "bg-[#FACC15]" },
  { name: "Python for Data Science", bg: "bg-[#6CB4FA]" },
];

export const Certifications = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="space-y-3">
          <span className="neo-pill px-4 py-1 text-xs bg-[#C4B5FD] neo-shadow-sm">
            {t("edu.kicker")}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
            {t("edu.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {/* Education Card */}
          <div className="neo-card p-6 space-y-3">
            <h3 className="font-heading text-lg sm:text-xl font-extrabold text-foreground leading-snug">
              {t("edu.degree")}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("edu.degreeDesc")}
            </p>
          </div>

          {/* Certifications Card */}
          <div className="neo-card p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="font-heading text-lg sm:text-xl font-extrabold text-foreground">
                {t("edu.certs")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {certs.map((cert) => (
                  <span key={cert.name} className={`neo-pill px-3 py-1 text-xs ${cert.bg}`}>
                    {cert.name}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="https://www.credly.com/users/fatwa-ratantja/badges#credly"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-foreground hover:underline pt-1"
            >
              <span>Credly Badges</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Highlights Card */}
          <div className="neo-card p-6 space-y-3">
            <h3 className="font-heading text-lg sm:text-xl font-extrabold text-foreground">
              {t("edu.highlights")}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("edu.highlightsDesc")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
