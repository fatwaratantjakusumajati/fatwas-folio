import { Users, Megaphone } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

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
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="organization" className="section-padding bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Organization</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">Leadership & <span className="text-gradient">Coordination</span></h2>
        </div>
        <div ref={ref} className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {orgs.map((o, i) => (
            <div key={o.role} className={`p-6 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-elegant transition-all ${visible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: `${i * 0.15}s` }}>
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
