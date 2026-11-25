import { useEffect, useState } from "react";
import { CheckCircle2, Code2, Cpu, ScanLine } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import fatwaAvatarSmileImg from "@/assets/images/fatwa_avatar_smile_1795569364571.jpg";

interface PortfolioEnterLoaderProps {
  open: boolean;
  onComplete: () => void;
}

const DURATION_MS = 2800;

export const PortfolioEnterLoader = ({ open, onComplete }: PortfolioEnterLoaderProps) => {
  const { lang } = useLanguage();
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (!open) {
      setProgress(0);
      setExiting(false);
      return;
    }

    let rafId = 0;
    let doneTimeout = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const raw = Math.min(1, (now - start) / DURATION_MS);
      // Smooth balanced progression so each milestone is readable
      const eased = 1 - Math.pow(1 - raw, 1.8);
      setProgress(Math.round(eased * 100));

      if (raw < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setExiting(true);
        doneTimeout = window.setTimeout(() => {
          onComplete();
        }, 260);
      }
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.clearTimeout(doneTimeout);
    };
  }, [open, onComplete]);

  if (!open) return null;

  const steps = [
    {
      threshold: 25,
      en: "Loading Computer Vision & OCR showcase...",
      id: "Memuat showcase Computer Vision & OCR...",
    },
    {
      threshold: 65,
      en: "Preparing Web, Automation & SOC systems...",
      id: "Menyiapkan sistem Web, Otomasi & SOC...",
    },
      {
      threshold: 95,
      en: "Opening Fatwa Ratantja's Portfolio...",
      id: "Membuka Portofolio Fatwa Ratantja...",
    },
  ];

  const activeStep =
    progress < 35 ? steps[0] : progress < 72 ? steps[1] : steps[2];

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={lang === "id" ? "Memuat portofolio" : "Loading portfolio"}
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0B0D12]/90 backdrop-blur-md transition-all duration-200 ${
        exiting ? "opacity-0 scale-[1.02]" : "opacity-100 scale-100 animate-neo-scene-in"
      }`}
    >
      <div className="w-full max-w-md rounded-[24px] bg-[#16181D] text-[#FEF8E7] border-[2.5px] border-[var(--ink)] shadow-[8px_8px_0_var(--ink)] p-6 sm:p-7 space-y-5">
        {/* Top Brand + Status */}
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-2 pl-1.5 pr-3.5 py-1 rounded-xl bg-[#FACC15] text-[#16181D] font-heading font-extrabold text-sm border-2 border-[#16181D]">
            <img
              src={fatwaAvatarSmileImg}
              alt="Fatwa Ratantja smiling avatar"
              className="w-6 h-6 rounded-md object-cover border border-[#16181D] animate-neo-avatar-smile"
              referrerPolicy="no-referrer"
            />
            <span>Fatwa Ratantja</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2ED47A] text-[#16181D] font-mono text-[11px] font-extrabold border-2 border-[#16181D]">
            <span className="w-2 h-2 rounded-full bg-[#16181D] animate-pulse" />
            {lang === "id" ? "MEMUAT PORTOFOLIO" : "LOADING PORTFOLIO"}
          </span>
        </div>

        {/* Kinetic 3-Module Icon Sequence */}
        <div className="flex items-center justify-center gap-3 py-2">
          {[
            { Icon: ScanLine, bg: "bg-[#FACC15]", active: progress >= 5, delay: "0ms" },
            { Icon: Cpu, bg: "bg-[#2ED47A]", active: progress >= 35, delay: "120ms" },
            { Icon: Code2, bg: "bg-[#6CB4FA]", active: progress >= 68, delay: "240ms" },
          ].map(({ Icon, bg, active, delay }, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center border-2 border-[#FEF8E7]/25 transition-all duration-300 ${
                  active
                    ? `${bg} text-[#16181D] border-[#16181D] scale-105 shadow-[3px_3px_0_#FEF8E7]`
                    : "bg-[#1E222B] text-[#FEF8E7]/45 scale-95"
                }`}
                style={{ transitionDelay: delay }}
              >
                <Icon className="w-5 h-5" />
              </div>
              {idx < 2 && (
                <div className="w-6 h-1 rounded-full bg-[#FEF8E7]/15 overflow-hidden">
                  <div
                    className="h-full bg-[#2ED47A] transition-all duration-300"
                    style={{
                      width:
                        idx === 0
                          ? progress >= 35
                            ? "100%"
                            : `${Math.min(100, progress * 3)}%`
                          : progress >= 68
                            ? "100%"
                            : `${Math.max(0, Math.min(100, (progress - 35) * 3))}%`,
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Active Step Label + Percentage */}
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-3">
            <span className="font-heading font-bold text-sm text-[#FEF8E7] truncate">
              {lang === "id" ? activeStep.id : activeStep.en}
            </span>
            <span className="font-mono text-sm font-extrabold text-[#FACC15] tabular-nums shrink-0">
              {progress}%
            </span>
          </div>

          {/* Crisp Neo-Brutalist Progress Bar */}
          <div className="h-4 w-full rounded-full bg-[#12141A] border-2 border-[#FEF8E7]/30 p-0.5 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#2ED47A] via-[#6CB4FA] to-[#FACC15] transition-[width] duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Boot Sequence Checklist */}
        <div className="rounded-xl bg-[#12141A] border border-[#FEF8E7]/15 p-3 space-y-1.5 font-mono text-[11px]">
          {steps.map((step, idx) => {
            const done = progress >= step.threshold;
            return (
              <div
                key={idx}
                className={`flex items-center gap-2 transition-colors ${
                  done ? "text-[#2ED47A]" : "text-[#FEF8E7]/50"
                }`}
              >
                <CheckCircle2
                  className={`h-3.5 w-3.5 shrink-0 transition-transform ${
                    done ? "scale-100 text-[#2ED47A]" : "scale-90 text-[#FEF8E7]/30"
                  }`}
                />
                <span className="truncate">{lang === "id" ? step.id : step.en}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
