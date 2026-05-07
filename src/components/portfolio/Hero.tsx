import { Button } from "@/components/ui/button";
import { ArrowRight, Download, MapPin } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary/60 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Available · Surabaya, Indonesia</span>
          </div>

          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
            Fatwa Ratantja
            <br />
            <span className="text-primary">Kusumajati</span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground font-medium mb-6 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
            AI Engineer · System Administrator · Fullstack Developer
          </p>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
            Passionate about building intelligent systems and secure infrastructures that drive real-world impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
            <Button size="lg" asChild className="group">
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
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
    </section>
  );
};
