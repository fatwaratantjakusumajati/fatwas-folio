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
  const { ref: headingRef, visible: headingVisible } = useReveal<HTMLDivElement>();
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      
      <div className="container relative">
        <div ref={headingRef} className={`text-center mb-20 ${headingVisible ? "animate-fade-in" : "opacity-0"}`}>
          <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-4">Certifications</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">Verified <span className="text-primary">Credentials</span></h2>
        </div>
        <div ref={ref} className="flex flex-wrap justify-center gap-5 max-w-4xl mx-auto">
          {certs.map((c, i) => (
            <div
              key={c.name}
              className={`group relative transition-[opacity,transform,filter] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[opacity,transform,filter] ${visible ? "opacity-100 translate-y-0 scale-100 blur-0" : "opacity-0 translate-y-4 scale-[0.99] blur-[2px]"}`}
              style={{ transitionDelay: visible ? `${i * 80}ms` : "0ms" }}
            >
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
