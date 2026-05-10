import { Mail, Phone, Linkedin, Award } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/contexts/LanguageContext";

export const Contact = () => {
  const { ref: headingRef, visible: headingVisible } = useReveal<HTMLDivElement>();
  const { ref, visible } = useReveal<HTMLDivElement>();
  const { t } = useLanguage();

  const contactItems = [
    { icon: Mail, label: t("contact.email"), value: "fatwaratantja@gmail.com", href: "mailto:fatwaratantja@gmail.com" },
    { icon: Phone, label: t("contact.whatsapp"), value: "+62 812-3456-9805", href: "https://wa.me/6281234569805" },
    { icon: Linkedin, label: t("contact.linkedin"), value: "fatwaratantja", href: "https://www.linkedin.com/in/fatwaratantja/" },
    { icon: Award, label: t("contact.credly"), value: t("contact.viewBadges"), href: "https://www.credly.com/users/fatwa-ratantja/badges#credly" },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="container relative">
        <div ref={headingRef} className={`text-center mb-20 ${headingVisible ? "animate-fade-in" : "opacity-0"}`}>
          <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-4">{t("contact.kicker")}</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">{t("contact.title")} <span className="text-primary">{t("contact.title2")}</span></h2>
          <p className="text-muted-foreground mt-5 max-w-xl mx-auto leading-relaxed">{t("contact.subtitle")}</p>
        </div>

        <div ref={ref} className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto ${visible ? "animate-fade-in" : "opacity-0"}`}>
          {contactItems.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="card-futuristic flex flex-col items-center gap-3 p-6 group text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-glow">
                <c.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{c.label}</p>
                <p className="font-medium text-sm">{c.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
