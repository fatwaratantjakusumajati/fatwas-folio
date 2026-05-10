import { Brain, Shield, MessageSquare, Leaf, Cpu, Activity, Globe, Layout, type LucideIcon } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/contexts/LanguageContext";

type Project = {
  icon: LucideIcon;
  title: string;
  desc: string;
  tech: string[];
  category: string;
};

export const Projects = () => {
  const { ref: headingRef, visible: headingVisible } = useReveal<HTMLDivElement>();
  const { t } = useLanguage();

  const projects: Project[] = [
    { icon: Brain, title: t("proj.helmet.title"), desc: t("proj.helmet.desc"), tech: ["YOLOv8", "Python", "OpenCV", "PyTorch"], category: "AI" },
    { icon: Shield, title: t("proj.soc.title"), desc: t("proj.soc.desc"), tech: ["Security Onion", "Linux", "Suricata", "Networking"], category: "Infrastructure" },
    { icon: MessageSquare, title: t("proj.rag.title"), desc: t("proj.rag.desc"), tech: ["Gemini API", "Python", "LangChain", "Vector DB"], category: "AI" },
    { icon: Leaf, title: t("proj.tomato.title"), desc: t("proj.tomato.desc"), tech: ["CNN", "TensorFlow", "Keras", "Python"], category: "AI" },
    { icon: Cpu, title: t("proj.iot.title"), desc: t("proj.iot.desc"), tech: ["IoT", "Arduino", "Sensors", "C++"], category: "IoT" },
    { icon: Activity, title: t("proj.diabetes.title"), desc: t("proj.diabetes.desc"), tech: ["XGBoost", "SMOTETomek", "scikit-learn", "Python"], category: "AI" },
    { icon: Globe, title: t("proj.timu.title"), desc: t("proj.timu.desc"), tech: ["CodeIgniter 3", "PHP", "MySQL", "Bootstrap"], category: "Web" },
    { icon: Layout, title: t("proj.alba.title"), desc: t("proj.alba.desc"), tech: ["React", "TypeScript", "Tailwind", "Vite"], category: "Web" },
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="container relative">
        <div ref={headingRef} className={`text-center mb-16 ${headingVisible ? "animate-fade-in" : "opacity-0"}`}>
          <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-3">{t("proj.kicker")}</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">{t("proj.title")}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">{t("proj.subtitle")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((p, i) => <ProjectCard key={p.title} {...p} index={i} />)}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ icon: Icon, title, desc, tech, category, index }: Project & { index: number }) => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`group card-futuristic p-6 transition-[opacity,transform,filter] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[opacity,transform,filter] ${visible ? "opacity-100 translate-y-0 scale-100 blur-0" : "opacity-0 translate-y-4 scale-[0.99] blur-[2px]"}`}
      style={{ transitionDelay: visible ? `${Math.min(index * 70, 420)}ms` : "0ms" }}
    >
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-glow">
            <Icon className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-md bg-accent/10 text-accent border border-accent/20">{category}</span>
        </div>
        <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-sm text-muted-foreground mb-5 line-clamp-3 leading-relaxed">{desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {tech.map((tag: string) => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded bg-secondary/80 text-secondary-foreground border border-border/50">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};