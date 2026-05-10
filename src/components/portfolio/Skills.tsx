import { Code, Brain, Server, Globe } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/contexts/LanguageContext";

export const Skills = () => {
  const { ref: headingRef, visible: headingVisible } = useReveal<HTMLDivElement>();
  const { ref, visible } = useReveal<HTMLDivElement>();
  const { t } = useLanguage();

  const groups = [
    { icon: Code, title: t("skills.programming"), items: ["Python", "PHP", "JavaScript"] },
    { icon: Brain, title: t("skills.ai"), items: ["Machine Learning", "Computer Vision", "XGBoost", "CNN", "YOLO"] },
    { icon: Server, title: t("skills.infra"), items: ["Linux", "System Administration", "Network Monitoring", "Security Onion"] },
    { icon: Globe, title: t("skills.web"), items: ["CodeIgniter 3", "MySQL", "Bootstrap", "HTML", "CSS"] },
  ];

  return (
    <section id="skills" className="section-padding bg-secondary/30 relative overflow-hidden">
      
      <div className="container relative">
        <div ref={headingRef} className={`text-center mb-20 ${headingVisible ? "animate-fade-in" : "opacity-0"}`}>
          <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-4">{t("skills.kicker")}</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">{t("skills.title")} <span className="text-primary">{t("skills.title2")}</span></h2>
        </div>
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((g, i) => (
            <div
              key={g.title}
              className={`card-futuristic p-6 transition-[opacity,transform,filter] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[opacity,transform,filter] ${visible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-4 blur-[2px]"}`}
              style={{ transitionDelay: visible ? `${i * 80}ms` : "0ms" }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 shadow-glow">
                <g.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold mb-4 text-lg">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map(item => (
                  <span key={item} className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:-translate-y-0.5">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
