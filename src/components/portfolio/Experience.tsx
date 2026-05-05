import { Briefcase, MapPin, Calendar } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const experiences = [
  {
    company: "PT INKA (Persero)",
    role: "IT R&D Intern",
    location: "Madiun",
    period: "2024",
    points: [
      "Implemented Security Onion for centralized network monitoring and SOC operations",
      "Configured port mirroring on managed switches for full traffic logging and threat analysis",
      "Built a YOLOv8 helmet detection system achieving 94% mAP50 for workplace safety compliance",
    ],
    tags: ["Security Onion", "YOLOv8", "Linux", "Networking"],
  },
  {
    company: "PT Persolkelly (Lazada Express)",
    role: "IT Support",
    location: "Surabaya",
    period: "2023",
    points: [
      "Managed network infrastructure supporting 200+ daily active users",
      "Maintained, configured, and troubleshot IT devices across multiple departments",
      "Ensured high uptime and rapid resolution of hardware/software issues",
    ],
    tags: ["Network Admin", "Troubleshooting", "Hardware"],
  },
  {
    company: "PT Terminal Intimoda Utama",
    role: "Fullstack Developer",
    location: "Surabaya",
    period: "2022",
    points: [
      "Developed the official company website using CodeIgniter 3 framework",
      "Delivered 5 functional modules within 3 months on schedule",
      "Implemented MySQL database design and Bootstrap responsive UI",
    ],
    tags: ["CodeIgniter 3", "PHP", "MySQL", "Bootstrap"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/30 relative">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Experience</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">Professional <span className="text-gradient">Journey</span></h2>
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

const TimelineItem = ({ exp, index }: { exp: typeof experiences[0]; index: number }) => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className={`relative flex md:items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
      {/* Dot */}
      <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-accent ring-4 ring-background shadow-glow md:-translate-x-1/2 z-10" />

      <div className={`pl-12 md:pl-0 md:w-1/2 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"} ${visible ? (isLeft ? "animate-fade-in-left" : "animate-fade-in-right") : "opacity-0"}`}>
        <div className="p-6 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-elegant transition-all">
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
            {exp.tags.map(t => (
              <span key={t} className="px-2 py-1 text-xs rounded-md bg-accent/10 text-accent border border-accent/20">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
