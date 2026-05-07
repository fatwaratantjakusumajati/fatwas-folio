import { Code, Brain, Server, Globe } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const groups = [
  { icon: Code, title: "Programming", items: ["Python", "PHP", "JavaScript"] },
  { icon: Brain, title: "AI / Data", items: ["Machine Learning", "Computer Vision", "XGBoost", "CNN", "YOLO"] },
  { icon: Server, title: "Infrastructure", items: ["Linux", "System Administration", "Network Monitoring", "Security Onion"] },
  { icon: Globe, title: "Web Development", items: ["CodeIgniter 3", "MySQL", "Bootstrap", "HTML", "CSS"] },
];

export const Skills = () => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="skills" className="section-padding bg-secondary/30 relative overflow-hidden">
      
      <div className="container relative">
        <div className="text-center mb-20">
          <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-4">Skills</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">Tech <span className="text-primary">Stack</span></h2>
        </div>
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((g, i) => (
            <div key={g.title} className={`card-futuristic p-6 ${visible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: `${i * 0.1}s` }}>
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
