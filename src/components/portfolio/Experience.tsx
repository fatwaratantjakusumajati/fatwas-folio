import { Briefcase, MapPin, Calendar } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/contexts/LanguageContext";

export const Experience = () => {
  const { ref: headingRef, visible: headingVisible } = useReveal<HTMLDivElement>();
  const { t } = useLanguage();

  const experiences = [
    {
      company: "PT INKA (Persero)",
      role: t("exp.inka.role"),
      location: "Madiun",
      period: "2024",
      points: [t("exp.inka.p1"), t("exp.inka.p2"), t("exp.inka.p3")],
      tags: ["Security Onion", "YOLOv8", "Linux", "Networking"],
    },
    {
      company: "PT Persolkelly (Lazada Express)",
      role: t("exp.lazada.role"),
      location: "Sidoarjo",
      period: "2023",
      points: [t("exp.lazada.p1"), t("exp.lazada.p2"), t("exp.lazada.p3")],
      tags: ["Network Admin", "Troubleshooting", "Hardware"],
    },
    {
      company: "PT Terminal Intimoda Utama",
      role: t("exp.timu.role"),
      location: "Surabaya",
      period: "2022",
      points: [t("exp.timu.p1"), t("exp.timu.p2"), t("exp.timu.p3")],
      tags: ["CodeIgniter 3", "PHP", "MySQL", "Bootstrap"],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-secondary/30 relative overflow-hidden">
      
      <div className="container relative">
        <div ref={headingRef} className={`text-center mb-20 ${headingVisible ? "animate-fade-in" : "opacity-0"}`}>
          <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-4">{t("exp.kicker")}</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">{t("exp.title")} <span className="text-primary">{t("exp.title2")}</span></h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, i) => <TimelineItem key={exp.company} exp={exp} index={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  points: string[];
  tags: string[];
};

const TimelineItem = ({ exp, index }: { exp: Experience; index: number }) => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className={`relative flex md:items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
      {/* Dot */}
      <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-background md:-translate-x-1/2 z-10" />

      <div className={`pl-12 md:pl-0 md:w-1/2 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"} ${visible ? (isLeft ? "animate-fade-in-left" : "animate-fade-in-right") : "opacity-0"}`}>
        <div className="card-futuristic p-7">
          <div className={`flex flex-wrap gap-3 text-xs text-muted-foreground mb-2 ${isLeft ? "md:justify-end" : ""}`}>
            <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{exp.period}</span>
            <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{exp.location}</span>
          </div>
          <h3 className={`font-heading font-bold text-lg flex items-center gap-2 mb-1 ${isLeft ? "md:justify-end" : ""}`}>
            <Briefcase className="h-4 w-4 text-accent shrink-0" />
            {exp.role}
          </h3>
          <p className="text-accent font-medium text-sm mb-3">{exp.company}</p>
          <ul className={`space-y-2 text-sm text-muted-foreground ${isLeft ? "md:text-right" : ""}`}>
            {exp.points.map((p, i) => <li key={i}>• {p}</li>)}
          </ul>
          <div className={`flex flex-wrap gap-2 mt-4 ${isLeft ? "md:justify-end" : ""}`}>
            {exp.tags.map(tag => (
              <span key={tag} className="px-2 py-1 text-xs rounded-md bg-accent/10 text-accent border border-accent/20">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};