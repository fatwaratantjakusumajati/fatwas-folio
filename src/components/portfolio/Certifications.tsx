import { Award } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const certs = [
  { name: "RHCSA", org: "Red Hat", color: "from-red-500 to-orange-500" },
  { name: "IBM AI Practitioner", org: "IBM", color: "from-blue-600 to-blue-400" },
  { name: "IT Specialist – AI", org: "Certiport", color: "from-purple-600 to-pink-500" },
  { name: "Enterprise Design Thinking", org: "IBM", color: "from-cyan-500 to-blue-500" },
  { name: "Python for Data Science", org: "IBM", color: "from-yellow-500 to-amber-500" },
];

export const Certifications = () => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="container relative">
        <div className="text-center mb-20">
          <p className="text-accent font-semibold text-xs uppercase tracking-[0.3em] mb-4">— Certifications —</p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold">Verified <span className="text-gradient-animated">Credentials</span></h2>
        </div>
        <div ref={ref} className="flex flex-wrap justify-center gap-5 max-w-4xl mx-auto">
          {certs.map((c, i) => (
            <div key={c.name} className={`group relative ${visible ? "animate-scale-in" : "opacity-0"}`} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="card-futuristic flex items-center gap-3 px-5 py-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center shadow-card group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-sm">{c.name}</p>
                  <p className="text-xs text-muted-foreground">{c.org}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
