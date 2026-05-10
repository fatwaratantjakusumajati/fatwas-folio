import { Users, Megaphone } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const orgs = [
  {
    icon: Users,
    role: "Vice President",
    org: "BEM FASILKOM UPN \"Veteran\" Jawa Timur",
    desc: "Led organizational strategy alongside the President; coordinated cross-departmental programs and represented student aspirations at the faculty level.",
  },
  {
    icon: Megaphone,
    role: "Head of Advocacy",
    org: "BEM FASILKOM UPN \"Veteran\" Jawa Timur",
    desc: "Directed the advocacy department to address student concerns, mediate with faculty leadership, and run awareness campaigns on academic policies.",
  },
];

export const Organization = () => {
  const { ref: headingRef, visible: headingVisible } = useReveal<HTMLDivElement>();
  const { ref, visible } = useReveal<HTMLDivElement>();
  const { t } = useLanguage();
  return (
    <section id="organization" className="section-padding bg-secondary/30">
      <div className="container">
        <div ref={headingRef} className={`text-center mb-16 ${headingVisible ? "animate-fade-in" : "opacity-0"}`}>
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">{t("org.kicker")}</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">{t("org.title")} <span className="text-gradient">{t("org.title2")}</span></h2>
        </div>
        <div ref={ref} className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {orgs.map((o, i) => (
            <div
              key={o.role}
              className={`p-6 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-elegant transition-[opacity,transform,filter,border-color,box-shadow] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[opacity,transform,filter] ${visible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-4 blur-[2px]"}`}
              style={{ transitionDelay: visible ? `${i * 90}ms` : "0ms" }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                <o.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-1">{o.role}</h3>
              <p className="text-accent text-sm font-medium mb-3">{o.org}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
