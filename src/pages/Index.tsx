import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const Index = () => {
  const navigate = useNavigate();

  const handleReplayIntro = useCallback(() => {
    navigate("/");
  }, [navigate]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    document.title = "Fatwa Ratantja — AI Systems for Business Portfolio";
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.name = name;
        document.head.appendChild(el);
      }
      el.content = content;
    };
    setMeta(
      "description",
      "Portfolio of Fatwa Ratantja Kusumajati — Informatics graduate based in Surabaya building AI systems, computer vision, automation, web dashboards, and network infrastructure for logistics and industry.",
    );
    setMeta(
      "keywords",
      "Fatwa Ratantja Kusumajati, AI Systems, Logistics AI, Computer Vision, YOLOv8, ArUco, OCR, n8n, Gemini API, Security Onion, Surabaya",
    );

    const ld = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Fatwa Ratantja Kusumajati",
      jobTitle: "Warehouse Technology Specialist & AI Engineer",
      address: { "@type": "PostalAddress", addressLocality: "Surabaya", addressCountry: "ID" },
      alumniOf: "UPN Veteran Jawa Timur",
    };
    let script = document.getElementById("ld-json") as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = "ld-json";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(ld);
  }, []);

  return (
    <div className="relative min-h-screen animate-neo-scene-in bg-background">
      <a href="#home" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero onReplayIntro={handleReplayIntro} />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer onReplayIntro={handleReplayIntro} />
    </div>
  );
};

export default Index;

