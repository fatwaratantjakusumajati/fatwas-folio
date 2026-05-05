import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10 dark:opacity-100" />

      {/* Animated blobs */}
      <div className="absolute top-1/4 -left-32 w-[28rem] h-[28rem] bg-gradient-glow animate-blob" />
      <div className="absolute bottom-1/4 -right-32 w-[28rem] h-[28rem] bg-gradient-glow animate-blob" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] bg-gradient-glow opacity-60 animate-glow" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-bg" />

      {/* Scan line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in relative">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-pulse-ring" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm text-muted-foreground">Available for opportunities · Surabaya, Indonesia</span>
          </div>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.05] animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
            Fatwa Ratantja
            <br />
            <span className="text-gradient-animated">Kusumajati</span>
          </h1>

          <p className="text-base md:text-lg text-accent font-medium mb-6 tracking-wide uppercase animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <span className="opacity-60">/</span> AI Engineer <span className="opacity-40 mx-2">·</span> System Administrator <span className="opacity-40 mx-2">·</span> Fullstack Developer <span className="opacity-60">/</span>
          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
            Passionate about building <span className="text-foreground font-semibold">intelligent systems</span> and <span className="text-foreground font-semibold">secure infrastructures</span> that drive real-world impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
            <Button size="lg" asChild className="group bg-gradient-primary hover:opacity-90 transition-all shadow-elegant relative overflow-hidden">
              <a href="#projects">
                <span className="relative z-10">View Projects</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform relative z-10" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-2 border-accent/40 hover:border-accent hover:bg-accent/10">
              <a href="#contact">Contact Me</a>
            </Button>
            <Button size="lg" variant="ghost" asChild className="hover:bg-accent/10">
              <a href="/cv-fatwa-ratantja-kusumajati.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-accent/40 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-accent/80" />
        </div>
      </div>
    </section>
  );
};
