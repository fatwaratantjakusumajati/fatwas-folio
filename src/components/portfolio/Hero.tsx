import { Button } from "@/components/ui/button";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import profileImg from "@/assets/profile.jpg";

export const Hero = () => {
  const { t } = useLanguage();
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
          <div className="max-w-3xl text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary/60 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{t("hero.available")}</span>
            </div>

            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
              Fatwa Ratantja
              <br />
              <span className="text-primary">Kusumajati</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground font-medium mb-6 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
              {t("hero.role")}
            </p>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
              {t("hero.tagline")}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
              <Button size="lg" asChild className="group">
                <a href="#projects">
                  {t("hero.viewProjects")}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">{t("hero.contactMe")}</a>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <a href="/cv-fatwa-new.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  {t("hero.downloadCv")}
                </a>
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center animate-fade-in" style={{ animationDelay: "0.15s", opacity: 0 }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-pulse" />
              <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-elegant ring-2 ring-accent/20">
                <img
                  src={profileImg}
                  alt="Fatwa Ratantja Kusumajati"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
