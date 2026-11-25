import { Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const contactButtons = [
  {
    label: "Email",
    href: "mailto:fatwaratantja@gmail.com",
    bg: "bg-white text-[#16181D]",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/fatwaratantja/",
    bg: "bg-[#FACC15] text-[#16181D]",
  },
  {
    label: "GitHub",
    href: "https://github.com/fatwaratantjakusumajati",
    bg: "bg-[#F78EB6] text-[#16181D]",
  },
  {
    label: "Credly",
    href: "https://www.credly.com/users/fatwa-ratantja/badges#credly",
    bg: "bg-[#6CB4FA] text-[#16181D]",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/6281234569805",
    bg: "bg-[#FDBA74] text-[#16181D]",
  },
  {
    label: "Kaggle",
    href: "https://www.kaggle.com/code/fatwaratantjak/fatwa-folio",
    bg: "bg-[#C4B5FD] text-[#16181D]",
  },
];

export const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="pt-10 pb-12 sm:pt-14 sm:pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-[28px] bg-[#2ED47A] text-[#16181D] border-[2.5px] border-[var(--ink)] shadow-[6px_6px_0_var(--ink)] px-6 py-12 sm:px-12 sm:py-16 text-center space-y-5">
          <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white border-2 border-[#16181D] mx-auto">
            <Mail className="h-5 w-5 text-[#16181D]" />
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#16181D]">
            {t("contact.title")}
          </h2>

          <p className="text-sm sm:text-base font-medium text-[#16181D]/90 max-w-md mx-auto leading-relaxed">
            {t("contact.subtitle")}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {contactButtons.map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                target={btn.href.startsWith("http") ? "_blank" : undefined}
                rel={btn.href.startsWith("http") ? "noreferrer" : undefined}
                className={`neo-btn px-5 py-2 text-sm ${btn.bg}`}
              >
                {btn.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
