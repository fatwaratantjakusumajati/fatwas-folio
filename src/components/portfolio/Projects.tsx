import { Brain, Shield, MessageSquare, Leaf, Cpu, Activity, Globe, Layout } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const projects = [
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
  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-glow opacity-50 pointer-events-none" />
      <div className="container relative">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Projects</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">Featured <span className="text-gradient">Work</span></h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">A selection of projects spanning AI, infrastructure, IoT, and web development.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((p, i) => <ProjectCard key={p.title} {...p} index={i} />)}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ icon: Icon, title, desc, tech, category, index }: any) => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`group relative p-6 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-elegant transition-all hover:-translate-y-2 overflow-hidden ${visible ? "animate-scale-in" : "opacity-0"}`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform">
            <Icon className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xs px-2 py-1 rounded-md bg-accent/10 text-accent border border-accent/20">{category}</span>
        </div>
        <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {tech.map((t: string) => (
            <span key={t} className="text-xs px-2 py-0.5 rounded bg-secondary text-secondary-foreground">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
