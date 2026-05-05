import { useEffect } from "react";
import { ThemeProvider } from "@/components/portfolio/ThemeProvider";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Certifications } from "@/components/portfolio/Certifications";
import { Organization } from "@/components/portfolio/Organization";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Fatwa Ratantja Kusumajati — AI Engineer & System Administrator";
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.name = name; document.head.appendChild(el); }
      el.content = content;
    };
    setMeta("description", "Portfolio of Fatwa Ratantja Kusumajati — AI Engineer, System Administrator, and Fullstack Developer based in Surabaya, Indonesia.");
    setMeta("keywords", "AI Engineer, System Administrator, Fullstack Developer, Surabaya, Indonesia, Machine Learning, YOLOv8, Security Onion");

    const ld = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Fatwa Ratantja Kusumajati",
      jobTitle: "AI Engineer & System Administrator",
      address: { "@type": "PostalAddress", addressLocality: "Surabaya", addressCountry: "ID" },
      alumniOf: "UPN Veteran Jawa Timur",
    };
    let script = document.getElementById("ld-json") as HTMLScriptElement | null;
    if (!script) { script = document.createElement("script"); script.id = "ld-json"; script.type = "application/ld+json"; document.head.appendChild(script); }
    script.textContent = JSON.stringify(ld);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <a href="#home" className="sr-only focus:not-sr-only">Skip to content</a>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Certifications />
          <Organization />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
