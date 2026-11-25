import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StudioMotionFilm } from "@/components/portfolio/StudioMotionFilm";
import { PortfolioEnterLoader } from "@/components/portfolio/PortfolioEnterLoader";

const IntroPage = () => {
  const navigate = useNavigate();
  const [isEntering, setIsEntering] = useState(false);

  useEffect(() => {
    document.title = "Fatwa R. — AI Systems for Business";
  }, []);

  const enterPortfolio = useCallback(() => {
    if (isEntering) return;
    setIsEntering(true);
  }, [isEntering]);

  const handleLoaderComplete = useCallback(() => {
    navigate("/portfolio");
  }, [navigate]);

  return (
    <div className="relative w-screen h-[100dvh] overflow-hidden bg-[#12141A]">
      <PortfolioEnterLoader open={isEntering} onComplete={handleLoaderComplete} />
      <StudioMotionFilm fullscreen onEnter={enterPortfolio} entering={isEntering} />
    </div>
  );
};

export default IntroPage;
