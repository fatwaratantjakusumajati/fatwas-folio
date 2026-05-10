import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-border py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Fatwa Ratantja Kusumajati. {t("footer.rights")}</p>
        <p>{t("footer.built")}</p>
      </div>
    </footer>
  );
};
