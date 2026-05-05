import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10 dark:opacity-100" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-glow animate-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-glow animate-glow" style={{ animationDelay: "1.5s" }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{ backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm text-muted-foreground">Available for opportunities · Surabaya, Indonesia</span>
          </div>

          <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
            Fatwa Ratantja
            <br />
            <span className="text-gradient">Kusumajati</span>
          </h1>

          <p className="text-base md:text-lg text-accent font-medium mb-4 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
            AI Engineer · System Administrator · Fullstack Developer
          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
            Passionate about building <span className="text-foreground font-semibold">intelligent systems</span> and <span className="text-foreground font-semibold">secure infrastructures</span> that drive real-world impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
            <Button size="lg" asChild className="group bg-gradient-primary hover:opacity-90 transition-all shadow-elegant">
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-2">
              <a href="#contact">Contact Me</a>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <a href="/cv-fatwa-ratantja-kusumajati.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/40 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-muted-foreground/60" />
        </div>
      </div>
    </section>
  );
};
