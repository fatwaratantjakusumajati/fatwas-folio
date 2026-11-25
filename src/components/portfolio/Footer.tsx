import { Play } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = ({ onReplayIntro }: { onReplayIntro?: () => void }) => {
  const { t } = useLanguage();
  return (
    <footer className="pb-12 pt-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs sm:text-sm text-muted-foreground font-medium">
        <p>{t("footer.copy")}</p>
        {onReplayIntro && (
          <button
            type="button"
            onClick={onReplayIntro}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-heading font-semibold bg-card text-foreground border border-[var(--ink)] hover:bg-[#FEF08A] hover:text-[#16181D] transition-colors cursor-pointer"
          >
            <Play className="h-3 w-3" />
            <span>{t("footer.replayIntro")}</span>
          </button>
        )}
      </div>
    </footer>
  );
};
