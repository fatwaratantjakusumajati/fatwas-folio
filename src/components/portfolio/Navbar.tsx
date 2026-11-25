import { useState } from "react";
import { Menu, X, Moon, Sun, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "./ThemeProvider";

export const Navbar = () => {
  const { lang, toggle: toggleLang, t } = useLanguage();
  const { theme, toggle: toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#projects", label: t("nav.projects") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#experience", label: t("nav.experience") },
    { href: "#education", label: t("nav.education") },
  ];

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b-[2.5px] border-[var(--ink)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between gap-6">
        <a
          href="#home"
          className="inline-flex items-center px-4 py-1.5 rounded-xl bg-[#FACC15] text-[#16181D] font-heading font-extrabold text-base sm:text-lg tracking-tight -rotate-2 hover:rotate-0 transition-transform whitespace-nowrap shrink-0 neo-border neo-shadow-sm"
        >
          Fatwa R.
        </a>

        <nav className="hidden md:flex items-center gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-1.5 rounded-full text-sm font-heading font-semibold bg-card text-foreground border-2 border-[var(--ink)] hover:bg-[#FEF08A] hover:text-[#16181D] transition-colors whitespace-nowrap shrink-0"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={toggleLang}
            aria-label="Toggle language"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-heading font-bold bg-card text-foreground border-2 border-[var(--ink)] hover:bg-secondary transition-colors whitespace-nowrap shrink-0"
          >
            <Languages className="h-3.5 w-3.5" />
            <span>{lang.toUpperCase()}</span>
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-card text-foreground border-2 border-[var(--ink)] hover:bg-secondary transition-colors shrink-0"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <a
            href="#contact"
            className="hidden sm:inline-flex neo-btn px-4 py-1.5 text-sm bg-[#2ED47A] text-[#16181D]"
          >
            {t("nav.contact")}
          </a>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full bg-card text-foreground border-2 border-[var(--ink)]"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t-2 border-[var(--ink)] bg-background px-4 py-4">
          <div className="flex flex-col gap-2.5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-2.5 rounded-xl font-heading font-semibold text-sm bg-card text-foreground border-2 border-[var(--ink)]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="px-4 py-2.5 rounded-xl font-heading font-bold text-sm text-center bg-[#2ED47A] text-[#16181D] border-2 border-[var(--ink)]"
            >
              {t("nav.contact")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
