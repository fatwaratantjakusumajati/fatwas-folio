import { Brain, Shield, Code2, GraduationCap, Users, Lightbulb, Zap } from "lucide-react";
import { useReveal, useCounter } from "@/hooks/useReveal";

const stats = [
  { value: 8, suffix: "+", label: "Projects" },
  { value: 5, suffix: "", label: "Certifications" },
  { value: 3, suffix: "", label: "Internships" },
  { value: 376, suffix: "", label: "GPA × 100", display: "3.76" },
];

const StatItem = ({ value, suffix, label, display, start }: { value: number; suffix: string; label: string; display?: string; start: boolean }) => {
  const c = useCounter(value, 1800, start);
  return (
    <div className="text-center">
      <div className="font-heading text-3xl md:text-4xl font-bold text-gradient">
        {display ? (start ? display : "0") : c}{suffix}
      </div>
      <div className="text-xs md:text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
};

export const About = () => {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] bg-gradient-glow opacity-50 pointer-events-none animate-blob" />
      <div className="container relative">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={visible ? "animate-fade-in-left" : "opacity-0"}>
            <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-4">About Me</p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.1]">
              Bridging <span className="text-primary">AI</span> and <span className="text-primary">Infrastructure</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm an Informatics graduate from <span className="text-foreground font-semibold">UPN "Veteran" Jawa Timur</span> with a GPA of <span className="text-foreground font-semibold">3.76</span>, specializing in Artificial Intelligence and System Administration.
              </p>
              <p>
                My journey spans hands-on experience in <span className="text-foreground">network infrastructure</span>, <span className="text-foreground">cybersecurity monitoring</span>, and <span className="text-foreground">AI development</span> — from deploying SOCs with Security Onion to training computer vision models for safety compliance.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-8">
              {[
                { icon: Zap, label: "Adaptive" },
                { icon: Lightbulb, label: "Analytical" },
                { icon: Users, label: "Leadership" },
              ].map((h) => (
                <div key={h.label} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border hover:border-accent/50 hover:shadow-card transition-all">
                  <h.icon className="h-5 w-5 text-accent" />
                  <span className="text-xs font-medium">{h.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`grid grid-cols-2 gap-4 ${visible ? "animate-fade-in-right" : "opacity-0"}`}>
            {[
              { icon: Brain, title: "AI Engineering", desc: "Computer vision, NLP, and ML model deployment" },
              { icon: Shield, title: "Infrastructure", desc: "Linux servers, network security, SOC operations" },
              { icon: Code2, title: "Fullstack Dev", desc: "Web applications with PHP, JS, React" },
              { icon: GraduationCap, title: "Continuous Learning", desc: "5 industry certifications & growing" },
            ].map((item, i) => (
              <div key={item.title} className="group card-futuristic p-6" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-glow">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}

            <div className="col-span-2 grid grid-cols-4 gap-4 p-6 rounded-2xl bg-gradient-primary text-primary-foreground shadow-elegant">
              {stats.map(s => <StatItem key={s.label} {...s} start={visible} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
