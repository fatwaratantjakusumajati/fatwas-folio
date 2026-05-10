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

const projects: Project[] = [
  { icon: Brain, title: "Helmet Detection (YOLOv8)", desc: "Real-time workplace safety detection achieving 94% mAP50 for industrial PPE compliance.", tech: ["YOLOv8", "Python", "OpenCV", "PyTorch"], category: "AI" },
  { icon: Shield, title: "Security Onion SOC", desc: "Implemented centralized network monitoring with port mirroring for full traffic visibility.", tech: ["Security Onion", "Linux", "Suricata", "Networking"], category: "Infrastructure" },
  { icon: MessageSquare, title: "RAG Chatbot", desc: "Retrieval-Augmented Generation chatbot powered by Google Gemini API for context-aware responses.", tech: ["Gemini API", "Python", "LangChain", "Vector DB"], category: "AI" },
  { icon: Leaf, title: "Tomato Leaf Disease Classifier", desc: "CNN-based image classifier for early detection of tomato plant diseases to support agriculture.", tech: ["CNN", "TensorFlow", "Keras", "Python"], category: "AI" },
  { icon: Cpu, title: "IoT Temperature Control", desc: "Smart temperature monitoring and control system using microcontrollers and sensors.", tech: ["IoT", "Arduino", "Sensors", "C++"], category: "IoT" },
  { icon: Activity, title: "Diabetes Classification", desc: "Predictive model using XGBoost with SMOTETomek to handle class imbalance for medical data.", tech: ["XGBoost", "SMOTETomek", "scikit-learn", "Python"], category: "AI" },
  { icon: Globe, title: "TIU Company Website", desc: "Full company website with 5 modules built and delivered within 3 months.", tech: ["CodeIgniter 3", "PHP", "MySQL", "Bootstrap"], category: "Web" },
  { icon: Layout, title: "Alba Nusantara Website", desc: "Modern responsive React-based website with smooth UX and clean design.", tech: ["React", "TypeScript", "Tailwind", "Vite"], category: "Web" },
];

export const Projects = () => {
  const { ref: headingRef, visible: headingVisible } = useReveal<HTMLDivElement>();
  const { t } = useLanguage();

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
          {tech.map((t: string) => (
            <span key={t} className="text-xs px-2 py-0.5 rounded bg-secondary/80 text-secondary-foreground border border-border/50">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
