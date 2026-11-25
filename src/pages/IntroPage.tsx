import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StudioMotionFilm } from "@/components/portfolio/StudioMotionFilm";
import { PortfolioEnterLoader } from "@/components/portfolio/PortfolioEnterLoader";

const IntroPage = () => {
  const navigate = useNavigate();
  const [isEntering, setIsEntering] = useState(false);

  useEffect(() => {
    document.title = "Fatwa Ratantja — AI Systems for Business";
  }, []);

  const enterPortfolio = useCallback(() => {
    if (isEntering) return;
    setIsEntering(true);
  }, [isEntering]);

  const handleLoaderComplete = useCallback(() => {
    navigate("/portfolio");
  }, [navigate]);

  return (
    <div className="relative w-screen h-[100dvh] overflow-hidden bg-[#090B10] p-2 sm:p-4 flex flex-col items-center justify-center">
      {/* Subtle ambient backlight behind monitor */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(108,180,250,0.16),rgba(46,212,122,0.08)_40%,transparent_72%)]"
      />

      <PortfolioEnterLoader open={isEntering} onComplete={handleLoaderComplete} />

      {/* Realistic Computer Monitor Frame */}
      <div className="relative z-10 w-full h-full max-w-[1440px] rounded-[22px] sm:rounded-[30px] bg-[#181C24] border-[3px] sm:border-[4px] border-[#2A303D] shadow-[0_24px_80px_rgba(0,0,0,0.75)] p-2 sm:p-3 flex flex-col overflow-hidden">
        {/* Inner LCD Display Screen */}
        <div className="relative flex-1 rounded-[14px] sm:rounded-[20px] overflow-hidden border-2 border-[#0E1117] bg-[#12141A]">
          <StudioMotionFilm fullscreen onEnter={enterPortfolio} entering={isEntering} />
        </div>

        {/* Sleek Monitor Chin with Power LED */}
        <div className="shrink-0 pt-2 pb-0.5 px-3 flex items-center justify-between text-[10px] font-mono text-[#94A3B8]">
          <span className="tracking-widest uppercase font-semibold">
            FATWA RATANTJA · STUDIO DISPLAY
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#2ED47A] shadow-[0_0_8px_#2ED47A] animate-pulse" />
            <span>PWR</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
