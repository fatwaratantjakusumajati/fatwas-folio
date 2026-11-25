import { MouseEvent, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  FileSpreadsheet,
  Loader2,
  MapPin,
  MessageSquare,
  Pause,
  Play,
  ScanLine,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import fatwaCodingImg from "@/assets/images/fatwa_coding_illustrated_1795566211105.jpg";
import fatwaAvatarSmileImg from "@/assets/images/fatwa_avatar_smile_1795569364571.jpg";

const TOTAL_DURATION = 25; // seconds per seamless loop

const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
const seg = (t: number, start: number, end: number) =>
  clamp01((t - start) / (end - start));
const easeOutCubic = (x: number) => 1 - Math.pow(1 - clamp01(x), 3);
const easeInOutCubic = (x: number) => {
  const c = clamp01(x);
  return c < 0.5 ? 4 * c * c * c : 1 - Math.pow(-2 * c + 2, 3) / 2;
};

interface ChapterMeta {
  id: string;
  tag: string;
  accent: string;
  start: number;
  end: number;
  title: { en: string; id: string };
  subtitle: { en: string; id: string };
}

const CHAPTERS: ChapterMeta[] = [
  {
    id: "intro",
    tag: "01 · Overview",
    accent: "bg-[#FACC15]",
    start: 0,
    end: 4,
    title: {
      en: "End-to-End AI & Automation Architecture",
      id: "Arsitektur AI & Otomasi Terintegrasi",
    },
    subtitle: {
      en: "Computer vision, OCR, live location tracking, LLM workflows, and network defense",
      id: "Computer vision, OCR, live tracking lokasi, workflow LLM, dan keamanan jaringan",
    },
  },
  {
    id: "vehicles",
    tag: "02 · Trucks & Cars",
    accent: "bg-[#2ED47A]",
    start: 4,
    end: 9.5,
    title: {
      en: "Truck & Car Gate Vision · Loading / Unloading",
      id: "Vision Truk & Mobil · Status Loading / Unloading",
    },
    subtitle: {
      en: "Simultaneous truck dock loading/unloading tracking and car license plate OCR",
      id: "Pemantauan status loading/unloading truk di dermaga & OCR pelat mobil di gerbang",
    },
  },
  {
    id: "aruco-ocr",
    tag: "03 · OCR + ArUco + Live Map",
    accent: "bg-[#6CB4FA]",
    start: 9.5,
    end: 15,
    title: {
      en: "OCR Document + ArUco + Live Location Tracking",
      id: "OCR Dokumen + ArUco + Live Tracking Lokasi",
    },
    subtitle: {
      en: "Document OCR mints printable ArUco tags tracked live from Inbound to Outbound",
      id: "OCR dokumen mencetak tag ArUco yang dilacak real-time dari Inbound ke Outbound",
    },
  },
  {
    id: "llm-soc",
    tag: "04 · LLM Excel & SOC",
    accent: "bg-[#C4B5FD]",
    start: 15,
    end: 20,
    title: {
      en: "WhatsApp LLM -> Excel Reports & Security Onion",
      id: "Bot LLM WhatsApp -> Excel & Security Onion",
    },
    subtitle: {
      en: "Automated 16:00 Excel dispatch via WhatsApp paired with Suricata threat monitoring",
      id: "Ekspor laporan Excel otomatis via WhatsApp dan pemantauan trafik Suricata",
    },
  },
  {
    id: "web-dev",
    tag: "05 · Web Dev",
    accent: "bg-[#F78EB6]",
    start: 20,
    end: 25,
    title: {
      en: "Fullstack Web Development & Shipped Consoles",
      id: "Pengembangan Website Fullstack & Dashboard",
    },
    subtitle: {
      en: "Custom React, TypeScript, Express & PHP platforms built for real business workflows",
      id: "Aplikasi web React, TypeScript, Express & PHP yang dirancang untuk kebutuhan bisnis",
    },
  },
];

const formatSec = (s: number) => {
  const whole = Math.floor(s) % TOTAL_DURATION;
  return `00:${whole < 10 ? `0${whole}` : whole}`;
};

interface StudioMotionFilmProps {
  fullscreen?: boolean;
  onEnter?: () => void;
  entering?: boolean;
}

export const StudioMotionFilm = ({
  fullscreen = false,
  onEnter,
  entering = false,
}: StudioMotionFilmProps) => {
  const { lang } = useLanguage();
  const [time, setTime] = useState(0);
  const [paused, setPaused] = useState(false);
  const bgCanvasRef = useRef<HTMLCanvasElement>(null);
  const lastFrameRef = useRef<number | null>(null);

  // Continuous 60fps master clock
  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || paused) {
      lastFrameRef.current = null;
      return;
    }

    let raf = 0;
    const tick = (now: number) => {
      if (lastFrameRef.current === null) lastFrameRef.current = now;
      const dt = Math.min((now - lastFrameRef.current) / 1000, 0.08);
      lastFrameRef.current = now;
      setTime((prev) => (prev + dt) % TOTAL_DURATION);
      raf = window.requestAnimationFrame(tick);
    };

    raf = window.requestAnimationFrame(tick);
    return () => {
      window.cancelAnimationFrame(raf);
      lastFrameRef.current = null;
    };
  }, [paused]);

  // High-DPI Retina animated computer screen backdrop (CRT scanlines, refresh sweep, drifting terminal stream)
  useEffect(() => {
    const canvas = bgCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = canvas.clientWidth || 960;
    const h = canvas.clientHeight || 500;
    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width = w * dpr;
      canvas.height = h * dpr;
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);

    // Soft LCD phosphor ambient glow
    const spotX = w * (0.3 + 0.4 * Math.sin((time / TOTAL_DURATION) * Math.PI * 2));
    const spotY = h * 0.48;
    const grad = ctx.createRadialGradient(spotX, spotY, 24, spotX, spotY, w * 0.72);
    grad.addColorStop(0, "rgba(108, 180, 250, 0.16)");
    grad.addColorStop(0.5, "rgba(46, 212, 122, 0.07)");
    grad.addColorStop(1, "rgba(18, 20, 26, 0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Subtle pixel matrix grid
    const spacing = 36;
    const offsetX = (time * 10) % spacing;
    const offsetY = (time * 6) % spacing;
    ctx.strokeStyle = "rgba(108, 180, 250, 0.05)";
    ctx.lineWidth = 1;
    for (let x = -spacing + offsetX; x < w + spacing; x += spacing) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = -spacing + offsetY; y < h + spacing; y += spacing) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // Horizontal CRT/LCD phosphor scanlines
    ctx.fillStyle = "rgba(255, 255, 255, 0.024)";
    for (let y = 0; y < h; y += 4) {
      ctx.fillRect(0, y, w, 1);
    }

    // Animated vertical monitor refresh beam sweep
    const beamY = ((time * 90) % (h + 160)) - 80;
    const beam = ctx.createLinearGradient(0, beamY - 40, 0, beamY + 40);
    beam.addColorStop(0, "rgba(46, 212, 122, 0)");
    beam.addColorStop(0.5, "rgba(46, 212, 122, 0.08)");
    beam.addColorStop(1, "rgba(46, 212, 122, 0)");
    ctx.fillStyle = beam;
    ctx.fillRect(0, beamY - 40, w, 80);

    // Drifting ambient terminal telemetry lines along edges
    const snippets = [
      "> sys.boot('fatwa-ratantja.os')",
      "> vision.yolo({ status: 'LIVE' })",
      "> aruco.trackZone('OUTBOUND')",
      "> ocr.parseDocument('INVOICE')",
      "> soc.suricata('ACTIVE')",
      "> ui.render('60fps')",
    ];
    ctx.font = "600 10px 'JetBrains Mono', monospace";
    snippets.forEach((line, idx) => {
      const sy = ((idx * 105 + time * 18) % (h + 40)) - 10;
      const sx = idx % 2 === 0 ? 18 : Math.max(20, w - 235);
      const alpha = 0.11 + 0.04 * Math.sin(time * 2 + idx);
      ctx.fillStyle = `rgba(108, 180, 250, ${alpha})`;
      ctx.fillText(line, sx, sy);
    });
  }, [time]);

  const activeChapter =
    CHAPTERS.find((c) => time >= c.start && time < c.end) ?? CHAPTERS[0];

  const handleScrub = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = clamp01((e.clientX - rect.left) / rect.width);
    setTime(pct * TOTAL_DURATION);
  };

  // Determine exact timeline weights for each act (with smooth 0.35s cross-dissolves)
  const act1Op =
    time < 3.6
      ? easeOutCubic(seg(time, 0, 0.5))
      : time < 4.2
        ? 1 - easeInOutCubic(seg(time, 3.6, 4.2))
        : 0;

  const act2Op =
    time >= 3.8 && time < 9.7
      ? time < 4.4
        ? easeOutCubic(seg(time, 3.8, 4.4))
        : time > 9.1
          ? 1 - easeInOutCubic(seg(time, 9.1, 9.7))
          : 1
      : 0;

  const act3Op =
    time >= 9.3 && time < 15.2
      ? time < 9.9
        ? easeOutCubic(seg(time, 9.3, 9.9))
        : time > 14.6
          ? 1 - easeInOutCubic(seg(time, 14.6, 15.2))
          : 1
      : 0;

  const act4Op =
    time >= 14.8 && time < 20.3
      ? time < 15.4
        ? easeOutCubic(seg(time, 14.8, 15.4))
        : time > 19.7
          ? 1 - easeInOutCubic(seg(time, 19.7, 20.3))
          : 1
      : 0;

  const act5Op =
    time >= 19.9
      ? time < 20.5
        ? easeOutCubic(seg(time, 19.9, 20.5))
        : time > 24.4
          ? 1 - easeInOutCubic(seg(time, 24.4, 25.0))
          : 1
      : 0;

  // Act 2 timeline variables (Truck & Car Loading/Unloading)
  const t2 = clamp01((time - 4.0) / 5.5);
  // Truck reverses smoothly into Dock Bay 01 (x: 248 -> 108), then unloads & loads cargo
  const truckSlide = easeInOutCubic(clamp01(t2 / 0.24));
  const truckX = 248 - truckSlide * 140;
  const dockPhase = t2 < 0.24 ? "APPROACHING" : t2 < 0.62 ? "UNLOADING" : "LOADING";
  const unloadT = clamp01((t2 - 0.24) / 0.38);
  const loadT = clamp01((t2 - 0.62) / 0.38);
  const dockProgress =
    dockPhase === "APPROACHING"
      ? 0
      : dockPhase === "UNLOADING"
        ? Math.round(unloadT * 100)
        : Math.round(loadT * 100);
  const unloadCount =
    dockPhase === "APPROACHING"
      ? 0
      : dockPhase === "UNLOADING"
        ? Math.min(3, Math.floor(unloadT * 3.3))
        : 3;
  const loadCount = dockPhase === "LOADING" ? Math.min(3, Math.floor(loadT * 3.3)) : 0;
  const doorOpen = easeInOutCubic(clamp01((t2 - 0.2) / 0.08));
  // Car glides smoothly through Gate Lane 02 (left -> right)
  const carX = -90 + easeInOutCubic(clamp01((t2 - 0.08) / 0.85)) * 460;
  const carScanned = carX > 140;

  // Act 3 timeline variables (OCR Document -> ArUco -> Live Location Tracking)
  const t3 = clamp01((time - 9.5) / 5.5);
  const ocrScanPct = (Math.sin(t3 * Math.PI * 3) + 1) * 50;
  const linkProgress = easeInOutCubic(clamp01((t3 - 0.1) / 0.45));
  const palletMove = easeInOutCubic(clamp01((t3 - 0.15) / 0.78));
  // Live coordinates on floorplan SVG (viewBox 340 x 210)
  const palletX = 56 + palletMove * 224;
  const palletY = 148 - Math.sin(palletMove * Math.PI) * 34 - palletMove * 76;
  const currentZone =
    palletMove < 0.33 ? "INBOUND" : palletMove < 0.7 ? "STAGING" : "OUTBOUND";

  // Act 4 timeline variables (WhatsApp LLM -> Excel & Security Onion)
  const t4 = clamp01((time - 15.0) / 5.0);
  const excelRowsVisible = Math.floor(clamp01((t4 - 0.22) / 0.55) * 4.99);

  // Act 5 timeline variables (Web Development + Shipped Web Crops)
  const t5 = clamp01((time - 20.0) / 5.0);
  const codeSample = "const app = express(); // React + TS + Postgres";
  const typedChars = Math.floor(clamp01(t5 / 0.65) * codeSample.length);
  const cropSlide1 = easeOutCubic(clamp01((t5 - 0.05) / 0.35));
  const cropSlide2 = easeOutCubic(clamp01((t5 - 0.18) / 0.35));
  const cropSlide3 = easeOutCubic(clamp01((t5 - 0.32) / 0.35));

  return (
    <div className={fullscreen ? "w-full h-full flex flex-col" : "space-y-3"}>
      {/* Main Widescreen Cinema Player Frame */}
      <div
        className={
          fullscreen
            ? "relative flex-1 flex flex-col overflow-hidden bg-[#12141A] select-none"
            : "relative overflow-hidden rounded-[24px] bg-[#12141A] border-[2.5px] border-[var(--ink)] shadow-[6px_6px_0_var(--ink)] select-none"
        }
      >
        {/* Stage Canvas */}
        <div
          className={
            fullscreen
              ? "relative flex-1 w-full overflow-y-auto sm:overflow-hidden"
              : "relative w-full aspect-[16/9] min-h-[300px] sm:min-h-[390px] max-h-[500px] overflow-hidden"
          }
        >
          <canvas
            ref={bgCanvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
          />

          {/* Top Computer Screen Window Chrome in Fullscreen, or Broadcast Tag in Inline Mode */}
          {fullscreen ? (
            <div className="relative z-30 flex items-center justify-between gap-3 px-4 py-2.5 bg-[#161922]/90 backdrop-blur-md border-b border-[#FEF8E7]/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#F78EB6] border border-[#16181D]" />
                <span className="w-3 h-3 rounded-full bg-[#FACC15] border border-[#16181D]" />
                <span className="w-3 h-3 rounded-full bg-[#2ED47A] border border-[#16181D]" />
                <img
                  src={fatwaAvatarSmileImg}
                  alt="Fatwa Ratantja smiling logo"
                  className="ml-2 w-6 h-6 rounded-md object-cover border border-[#16181D] bg-[#FACC15] animate-neo-avatar-smile shrink-0"
                  referrerPolicy="no-referrer"
                />
                <span className="font-mono text-[11px] font-semibold text-[#FEF8E7]/80 truncate">
                  fatwa-ratantja://studio.os
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#2ED47A]/15 border border-[#2ED47A]/40 font-mono text-[10px] font-bold text-[#2ED47A]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2ED47A] animate-pulse" />
                ONLINE
              </span>
            </div>
          ) : (
            <div className="absolute top-3.5 left-4 right-4 z-30 flex items-center justify-between gap-2 pointer-events-none">
              <span
                className={`px-3 py-1 rounded-full text-[11px] font-heading font-extrabold text-[#16181D] border-2 border-[#16181D] ${activeChapter.accent}`}
              >
                {activeChapter.tag}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#12141A]/90 border border-[#FEF8E7]/20 font-mono text-[11px] text-[#FEF8E7] tabular-nums">
                {formatSec(time)} / 00:{TOTAL_DURATION}
              </span>
            </div>
          )}

          {/* =============================================================== */}
          {/* ACT 1: KINETIC ARCHITECTURE INTRO (0s - 4s)                     */}
          {/* =============================================================== */}
          {act1Op > 0.01 && (
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center px-6 text-center z-10 ${
                fullscreen ? "pt-14 pb-24" : ""
              }`}
              style={{
                opacity: act1Op,
                transform: `scale(${0.96 + act1Op * 0.04})`,
              }}
            >
              <div className="space-y-3.5 max-w-2xl">
                <div className="flex justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-[#FACC15] border-[2.5px] border-[#16181D] shadow-[4px_4px_0_#2ED47A] animate-neo-avatar-smile">
                    <img
                      src={fatwaAvatarSmileImg}
                      alt="Fatwa Ratantja smiling avatar"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#FEF8E7]/25 bg-white/5 text-[#FACC15] font-mono text-xs tracking-wider">
                  FATWA RATANTJA KUSUMAJATI · SURABAYA
                </div>

                <div className="font-heading text-base sm:text-lg font-extrabold text-[#6CB4FA] tracking-wide">
                  Welcome to Fatwa&apos;s Portfolio
                </div>

                <h2 className="font-heading text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-[#FEF8E7] leading-[1.08] tracking-tight">
                  {lang === "id" ? "Sistem AI untuk" : "Production AI for"}{" "}
                  <span className="inline-block px-3 py-0.5 rounded-xl bg-[#2ED47A] text-[#16181D] border-2 border-[#16181D]">
                    {lang === "id" ? "Operasional Bisnis" : "Real Operations"}
                  </span>
                </h2>

                {/* Animated Hairline Ruler + 4 Core Pillars */}
                <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
                  {[
                    { label: "Truck & Car Dock AI", bg: "bg-[#FACC15]", at: 0.15 },
                    { label: "OCR + ArUco Live Map", bg: "bg-[#6CB4FA]", at: 0.28 },
                    { label: "WhatsApp LLM -> .xlsx", bg: "bg-[#2ED47A]", at: 0.42 },
                    { label: "Security Onion SOC", bg: "bg-[#C4B5FD]", at: 0.56 },
                    { label: "Fullstack Web Dev", bg: "bg-[#F78EB6]", at: 0.7 },
                  ].map((item) => {
                    const p = easeOutCubic(seg(time, item.at * 3, item.at * 3 + 0.6));
                    return (
                      <span
                        key={item.label}
                        className={`px-3 py-1 rounded-full text-xs font-heading font-bold text-[#16181D] border-2 border-[#16181D] ${item.bg}`}
                        style={{
                          opacity: p,
                          transform: `translate3d(0, ${(1 - p) * 14}px, 0)`,
                        }}
                      >
                        {item.label}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* =============================================================== */}
          {/* ACT 2: TRUCKS & CARS — LOADING / UNLOADING + GATE OCR (4s-9.5s) */}
          {/* =============================================================== */}
          {act2Op > 0.01 && (
            <div
              className={`absolute inset-0 px-4 sm:px-8 flex items-center justify-center z-10 ${
                fullscreen ? "pt-20 pb-24" : "pt-14 pb-5"
              }`}
              style={{ opacity: act2Op }}
            >
              <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-[1.35fr_0.95fr] gap-4 items-center">
                {/* Precision Technical Gate & Dock Schematic */}
                <div className="relative rounded-2xl bg-[#181B23] border-2 border-[#FEF8E7]/20 p-3 sm:p-4 overflow-hidden">
                  <svg
                    viewBox="0 0 460 230"
                    className="w-full h-auto block"
                    role="img"
                    aria-label="Truck loading unloading dock and car gate schematic"
                  >
                    <defs>
                      <linearGradient id="lidarBeam" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#2ED47A" stopOpacity="0" />
                        <stop offset="50%" stopColor="#2ED47A" stopOpacity="0.32" />
                        <stop offset="100%" stopColor="#2ED47A" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    {/* Dock Bay 01 Zone (Top Lane) */}
                    <rect
                      x="14"
                      y="18"
                      width="432"
                      height="92"
                      rx="10"
                      fill="#12141A"
                      stroke="rgba(254,248,231,0.16)"
                      strokeWidth="1.5"
                    />
                    {/* Dock Wall + Warehouse Shutter Doorway */}
                    <rect x="14" y="18" width="28" height="92" rx="6" fill="#FACC15" />
                    <rect x="28" y="48" width="14" height="38" rx="2" fill="#16181D" />
                    <line
                      x1="31"
                      y1="54"
                      x2="39"
                      y2="54"
                      stroke="#FEF8E7"
                      strokeWidth="1.2"
                      strokeOpacity="0.45"
                    />
                    <line
                      x1="31"
                      y1="60"
                      x2="39"
                      y2="60"
                      stroke="#FEF8E7"
                      strokeWidth="1.2"
                      strokeOpacity="0.45"
                    />

                    {/* Dock Leveler / Conveyor Ramp (connects Warehouse Doorway to Docked Trailer) */}
                    <rect
                      x="42"
                      y="79"
                      width="68"
                      height="7"
                      rx="2"
                      fill="#232836"
                      stroke="rgba(254,248,231,0.28)"
                      strokeWidth="1"
                    />
                    {[50, 62, 74, 86, 98].map((rx) => (
                      <circle
                        key={rx}
                        cx={rx}
                        cy="82.5"
                        r="1.4"
                        fill={
                          dockPhase === "UNLOADING"
                            ? "#FACC15"
                            : dockPhase === "LOADING"
                              ? "#2ED47A"
                              : "#64748B"
                        }
                      />
                    ))}

                    <text
                      x="48"
                      y="34"
                      fill="#94A3B8"
                      fontSize="9.5"
                      fontFamily="monospace"
                      fontWeight="700"
                    >
                      DOCK BAY 01 · TRUCK MONITOR
                    </text>

                    {/* Live Directional Flow Tag Above Ramp */}
                    {dockPhase !== "APPROACHING" && (
                      <g transform="translate(46, 40)">
                        <rect
                          x="0"
                          y="0"
                          width="58"
                          height="13"
                          rx="3"
                          fill={dockPhase === "UNLOADING" ? "#FACC15" : "#2ED47A"}
                        />
                        <text
                          x="29"
                          y="9.5"
                          textAnchor="middle"
                          fill="#16181D"
                          fontSize="7.5"
                          fontFamily="monospace"
                          fontWeight="800"
                        >
                          {dockPhase === "UNLOADING" ? "<<< OUT" : "IN >>>"}
                        </text>
                      </g>
                    )}

                    {/* Sweeping LiDAR Scan Plane */}
                    <rect
                      x={46 + ((time * 95) % 370)}
                      y="20"
                      width="32"
                      height="88"
                      fill="url(#lidarBeam)"
                    />

                    {/* Precision Orthographic Truck Blueprint with Cutaway Cargo Bay */}
                    <g transform={`translate(${truckX}, 44)`}>
                      <ellipse cx="72" cy="46" rx="68" ry="4" fill="rgba(0,0,0,0.45)" />
                      {/* YOLO Detection Box */}
                      <rect
                        x="-8"
                        y="-6"
                        width="162"
                        height="54"
                        rx="4"
                        fill="none"
                        stroke={dockPhase === "LOADING" ? "#2ED47A" : "#FACC15"}
                        strokeWidth="1.8"
                        strokeDasharray="6 4"
                      />
                      <rect
                        x="-8"
                        y="-20"
                        width="124"
                        height="14"
                        rx="3"
                        fill={dockPhase === "LOADING" ? "#2ED47A" : "#FACC15"}
                      />
                      <text
                        x="-3"
                        y="-10"
                        fill="#16181D"
                        fontSize="8.5"
                        fontFamily="monospace"
                        fontWeight="800"
                      >
                        TRUCK · {dockPhase}
                      </text>
                      {/* Cargo Trailer Outer Frame */}
                      <rect
                        x="0"
                        y="2"
                        width="102"
                        height="38"
                        rx="4"
                        fill="#FEF8E7"
                        stroke="#16181D"
                        strokeWidth="2"
                      />
                      {/* Cutaway Interior Cargo Bay (shows boxes inside & leaving/entering) */}
                      <rect
                        x="3"
                        y="7"
                        width="93"
                        height="28"
                        rx="2.5"
                        fill="#1A1E29"
                        stroke="#16181D"
                        strokeWidth="1.5"
                      />
                      {/* Subtle Interior Bay Ribs */}
                      <line x1="34" y1="8" x2="34" y2="34" stroke="#FEF8E7" strokeOpacity="0.12" strokeWidth="1" />
                      <line x1="65" y1="8" x2="65" y2="34" stroke="#FEF8E7" strokeOpacity="0.12" strokeWidth="1" />
                      {/* Rear Roll-Up Door (slides open when docked) */}
                      <rect
                        x="0"
                        y="7"
                        width="4.5"
                        height={28 * (1 - doorOpen)}
                        rx="1"
                        fill="#6CB4FA"
                        stroke="#16181D"
                        strokeWidth="1"
                      />
                      {/* Cab Blueprint */}
                      <path
                        d="M105 8 H134 L145 20 V40 H105 Z"
                        fill="#FACC15"
                        stroke="#16181D"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                      <rect x="122" y="13" width="14" height="10" rx="2" fill="#16181D" />
                      {/* Wheels */}
                      <circle cx="24" cy="41" r="6" fill="#16181D" stroke="#FEF8E7" strokeWidth="1.5" />
                      <circle cx="80" cy="41" r="6" fill="#16181D" stroke="#FEF8E7" strokeWidth="1.5" />
                      <circle cx="128" cy="41" r="6" fill="#16181D" stroke="#FEF8E7" strokeWidth="1.5" />
                    </g>

                    {/* Animated Cargo Crates: Exiting Truck (UNLOADING) */}
                    {dockPhase !== "LOADING" &&
                      [0, 1, 2].map((i) => {
                        const startX = truckX + 12 + i * 27;
                        const dockSlotX = 45 + i * 20;
                        const p =
                          dockPhase === "APPROACHING"
                            ? 0
                            : easeInOutCubic(clamp01((unloadT - i * 0.2) / 0.48));
                        const boxX = startX + (dockSlotX - startX) * p;
                        const liftY = p > 0.05 && p < 0.95 ? -Math.sin(p * Math.PI) * 3.5 : 0;
                        const fadeOut =
                          dockPhase === "UNLOADING" && unloadT > 0.86
                            ? 1 - clamp01((unloadT - 0.86) / 0.14)
                            : 1;
                        return (
                          <g
                            key={`unload-${i}`}
                            transform={`translate(${boxX}, ${59 + liftY})`}
                            opacity={fadeOut}
                          >
                            <rect
                              x="0"
                              y="0"
                              width="18"
                              height="16"
                              rx="2.5"
                              fill="#FACC15"
                              stroke="#16181D"
                              strokeWidth="1.5"
                            />
                            <rect x="0" y="15.5" width="18" height="3" rx="1" fill="#FDBA74" stroke="#16181D" strokeWidth="1" />
                            <line x1="4" y1="5" x2="14" y2="5" stroke="#16181D" strokeWidth="1.5" />
                            <line x1="4" y1="9.5" x2="11" y2="9.5" stroke="#16181D" strokeWidth="1.2" strokeOpacity="0.6" />
                          </g>
                        );
                      })}

                    {/* Animated Cargo Crates: Entering Truck (LOADING) */}
                    {dockPhase === "LOADING" &&
                      [0, 1, 2].map((i) => {
                        const targetX = truckX + 70 - i * 27;
                        const p = easeInOutCubic(clamp01((loadT - i * 0.2) / 0.5));
                        const boxX = 36 + (targetX - 36) * p;
                        const liftY = p > 0.05 && p < 0.95 ? -Math.sin(p * Math.PI) * 3.5 : 0;
                        const boxOp = clamp01(p * 4.5);
                        return (
                          <g
                            key={`load-${i}`}
                            transform={`translate(${boxX}, ${59 + liftY})`}
                            opacity={boxOp}
                          >
                            <rect
                              x="0"
                              y="0"
                              width="18"
                              height="16"
                              rx="2.5"
                              fill="#2ED47A"
                              stroke="#16181D"
                              strokeWidth="1.5"
                            />
                            <rect x="0" y="15.5" width="18" height="3" rx="1" fill="#6CB4FA" stroke="#16181D" strokeWidth="1" />
                            <rect x="4" y="4" width="6" height="6" rx="1" fill="#FEF8E7" stroke="#16181D" strokeWidth="0.9" />
                          </g>
                        );
                      })}

                    {/* Gate Lane 02 (Bottom Lane: Cars) */}
                    <rect
                      x="14"
                      y="124"
                      width="432"
                      height="88"
                      rx="10"
                      fill="#12141A"
                      stroke="rgba(254,248,231,0.16)"
                      strokeWidth="1.5"
                    />
                    <text
                      x="26"
                      y="142"
                      fill="#94A3B8"
                      fontSize="10"
                      fontFamily="monospace"
                      fontWeight="700"
                    >
                      GATE LANE 02 · CAR + PLATE OCR
                    </text>

                    {/* Optical Laser Gate Line */}
                    <line
                      x1="210"
                      y1="126"
                      x2="210"
                      y2="210"
                      stroke="#6CB4FA"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                    <circle cx="210" cy="134" r="4" fill="#6CB4FA" />

                    {/* Precision Orthographic Sedan Blueprint */}
                    <g transform={`translate(${carX}, 154)`}>
                      <ellipse cx="48" cy="36" rx="44" ry="3.5" fill="rgba(0,0,0,0.45)" />
                      <rect
                        x="-6"
                        y="-6"
                        width="108"
                        height="44"
                        rx="4"
                        fill="none"
                        stroke={carScanned ? "#2ED47A" : "#6CB4FA"}
                        strokeWidth="1.8"
                        strokeDasharray="5 3"
                      />
                      <rect
                        x="-6"
                        y="-19"
                        width="102"
                        height="13"
                        rx="3"
                        fill={carScanned ? "#2ED47A" : "#6CB4FA"}
                      />
                      <text
                        x="-2"
                        y="-9.5"
                        fill="#16181D"
                        fontSize="8"
                        fontFamily="monospace"
                        fontWeight="800"
                      >
                        {carScanned ? "CAR · L 1642 VI" : "CAR · SCANNING"}
                      </text>
                      <path
                        d="M4 22 L16 20 L28 6 H66 L80 18 L94 21 V32 H4 Z"
                        fill="#6CB4FA"
                        stroke="#16181D"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                      <path d="M32 9 H62 L72 18 H26 Z" fill="#16181D" />
                      <circle cx="22" cy="33" r="5.5" fill="#16181D" stroke="#FEF8E7" strokeWidth="1.5" />
                      <circle cx="76" cy="33" r="5.5" fill="#16181D" stroke="#FEF8E7" strokeWidth="1.5" />
                    </g>
                  </svg>
                </div>

                {/* Live Dock Status & Vehicle Telemetry Column */}
                <div className="space-y-3">
                  <div className="rounded-2xl bg-[#FEF8E7] text-[#16181D] border-2 border-[#16181D] p-4 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] font-bold text-[#16181D]/70">
                        DOCK BAY 01
                      </span>
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[11px] font-heading font-extrabold border border-[#16181D] ${
                          dockPhase === "LOADING"
                            ? "bg-[#2ED47A]"
                            : dockPhase === "UNLOADING"
                              ? "bg-[#FACC15]"
                              : "bg-[#6CB4FA]"
                        }`}
                      >
                        {dockPhase}
                      </span>
                    </div>
                    <div className="font-heading font-extrabold text-base">
                      Truck L 8421 UB · {dockPhase}
                    </div>
                    <div className="h-2.5 rounded-full bg-[#16181D]/15 overflow-hidden border border-[#16181D]">
                      <div
                        className={`h-full ${
                          dockPhase === "LOADING" ? "bg-[#2ED47A]" : "bg-[#FACC15]"
                        }`}
                        style={{ width: `${dockProgress}%` }}
                      />
                    </div>
                    <div className="flex justify-between font-mono text-[10px] text-[#16181D]/75 tabular-nums">
                      <span>
                        {dockPhase === "APPROACHING"
                          ? "DOCKING · 3 CRATES"
                          : dockPhase === "UNLOADING"
                            ? `OUT OF TRUCK · ${unloadCount}/3`
                            : `INTO TRUCK · ${loadCount}/3`}
                      </span>
                      <span>{dockProgress}%</span>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-[#181B23] text-[#FEF8E7] border-2 border-[#FEF8E7]/20 p-3.5 space-y-2 font-mono text-[11px]">
                    <div className="flex items-center justify-between text-[#6CB4FA]">
                      <span>CAR · GATE LANE 02</span>
                      <span>{carScanned ? "VERIFIED" : "TRACKING"}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>PLATE: L 1642 VI</span>
                      <span className="text-[#2ED47A]">96.2% OCR</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =============================================================== */}
          {/* ACT 3: OCR DOCUMENT + ARUCO + LIVE LOCATION TRACKING (9.5s-15s) */}
          {/* =============================================================== */}
          {act3Op > 0.01 && (
            <div
              className={`absolute inset-0 px-4 sm:px-8 flex items-center justify-center z-10 ${
                fullscreen ? "pt-20 pb-24" : "pt-14 pb-5"
              }`}
              style={{ opacity: act3Op }}
            >
              <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-[0.9fr_auto_1.25fr] gap-3 sm:gap-4 items-center">
                {/* Step 1: OCR Document Reader -> Mints ArUco ID */}
                <div className="relative rounded-2xl bg-[#FEF8E7] text-[#16181D] border-2 border-[#16181D] p-4 space-y-2.5 overflow-hidden">
                  {/* Moving Optical OCR Scan Bar */}
                  <div
                    className="absolute inset-x-0 h-1 bg-[#FACC15] shadow-[0_0_12px_3px_rgba(250,204,21,0.8)] pointer-events-none"
                    style={{ top: `${12 + ocrScanPct * 0.76}%` }}
                  />
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 font-heading font-extrabold text-xs">
                      <ScanLine className="h-4 w-4 text-[#16181D]" />
                      Document OCR
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#6CB4FA] border border-[#16181D] font-mono text-[10px] font-bold">
                      PO-2026-042
                    </span>
                  </div>

                  <div className="space-y-1.5 font-mono text-[10px] bg-white/80 rounded-xl border border-[#16181D]/20 p-2.5">
                    <div className="flex justify-between">
                      <span className="text-[#16181D]/60">ISSUER</span>
                      <span className="font-bold">PT ARISTIDES</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#16181D]/60">QTY</span>
                      <span className="font-bold">24 PALLETS</span>
                    </div>
                  </div>

                  {/* Embedded Minted ArUco Tag */}
                  <div className="flex items-center gap-2.5 rounded-xl bg-[#2ED47A]/25 border border-[#16181D] p-2">
                    <div className="w-9 h-9 rounded bg-[#16181D] p-1 grid grid-cols-3 gap-0.5 shrink-0">
                      <div className="bg-[#FEF8E7]" />
                      <div className="bg-[#16181D]" />
                      <div className="bg-[#FEF8E7]" />
                      <div className="bg-[#16181D]" />
                      <div className="bg-[#2ED47A]" />
                      <div className="bg-[#16181D]" />
                      <div className="bg-[#FEF8E7]" />
                      <div className="bg-[#FEF8E7]" />
                      <div className="bg-[#16181D]" />
                    </div>
                    <div>
                      <div className="font-heading font-extrabold text-xs">ArUco #42</div>
                      <div className="font-mono text-[10px]">Linked to Live Map</div>
                    </div>
                  </div>
                </div>

                {/* Unified Data Bridge Arrow */}
                <div className="hidden sm:flex flex-col items-center justify-center px-1">
                  <svg viewBox="0 0 60 28" className="w-12 h-7">
                    <line
                      x1="4"
                      y1="14"
                      x2="48"
                      y2="14"
                      stroke="#6CB4FA"
                      strokeWidth="3"
                      strokeDasharray="6 5"
                    />
                    <circle
                      cx={6 + linkProgress * 40}
                      cy="14"
                      r="5"
                      fill="#FACC15"
                    />
                    <path
                      d="M44 7 L54 14 L44 21"
                      fill="none"
                      stroke="#2ED47A"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Step 2: Live Warehouse Zone Location Map */}
                <div className="rounded-2xl bg-[#181B23] border-2 border-[#FEF8E7]/20 p-3 sm:p-4 space-y-2">
                  <div className="flex items-center justify-between text-[#FEF8E7]">
                    <span className="inline-flex items-center gap-1.5 font-heading font-extrabold text-xs">
                      <MapPin className="h-4 w-4 text-[#2ED47A]" />
                      Live Warehouse Location Tracking
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#2ED47A] text-[#16181D] font-mono text-[10px] font-bold">
                      {currentZone}
                    </span>
                  </div>

                  <svg viewBox="0 0 340 190" className="w-full h-auto block">
                    {/* Zones: Inbound -> Staging -> Outbound */}
                    <rect
                      x="10"
                      y="116"
                      width="94"
                      height="64"
                      rx="8"
                      fill="rgba(108,180,250,0.14)"
                      stroke="#6CB4FA"
                      strokeWidth="1.5"
                    />
                    <text x="20" y="134" fill="#6CB4FA" fontSize="9.5" fontFamily="monospace" fontWeight="700">
                      INBOUND
                    </text>

                    <rect
                      x="122"
                      y="62"
                      width="96"
                      height="64"
                      rx="8"
                      fill="rgba(250,204,21,0.14)"
                      stroke="#FACC15"
                      strokeWidth="1.5"
                    />
                    <text x="132" y="80" fill="#FACC15" fontSize="9.5" fontFamily="monospace" fontWeight="700">
                      STAGING
                    </text>

                    <rect
                      x="234"
                      y="14"
                      width="96"
                      height="64"
                      rx="8"
                      fill="rgba(46,212,122,0.16)"
                      stroke="#2ED47A"
                      strokeWidth="1.5"
                    />
                    <text x="244" y="32" fill="#2ED47A" fontSize="9.5" fontFamily="monospace" fontWeight="700">
                      OUTBOUND
                    </text>

                    {/* Trajectory Path */}
                    <path
                      d="M56 148 Q168 122 280 38"
                      fill="none"
                      stroke="rgba(254,248,231,0.28)"
                      strokeWidth="2"
                      strokeDasharray="5 5"
                    />

                    {/* Static tracked nodes #01, #04 */}
                    <circle cx="156" cy="104" r="5" fill="#FACC15" />
                    <text x="165" y="107" fill="#FEF8E7" fontSize="8.5" fontFamily="monospace">
                      #01
                    </text>

                    {/* Active Moving ArUco #42 Live Location Beacon */}
                    <circle
                      cx={palletX}
                      cy={palletY}
                      r={12 + ((time * 18) % 10)}
                      fill="none"
                      stroke="#2ED47A"
                      strokeWidth="1.5"
                      strokeOpacity={1 - ((time * 1.8) % 1)}
                    />
                    <circle
                      cx={palletX}
                      cy={palletY}
                      r="9"
                      fill="#2ED47A"
                      stroke="#16181D"
                      strokeWidth="2"
                    />
                    <rect
                      x={palletX - 28}
                      y={palletY - 26}
                      width="62"
                      height="14"
                      rx="3"
                      fill="#FEF8E7"
                    />
                    <text
                      x={palletX - 23}
                      y={palletY - 16}
                      fill="#16181D"
                      fontSize="8"
                      fontFamily="monospace"
                      fontWeight="800"
                    >
                      ArUco #42
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          )}

          {/* =============================================================== */}
          {/* ACT 4: WHATSAPP LLM -> EXCEL & SECURITY ONION SOC (15s - 20s)   */}
          {/* =============================================================== */}
          {act4Op > 0.01 && (
            <div
              className={`absolute inset-0 px-4 sm:px-8 flex items-center justify-center z-10 ${
                fullscreen ? "pt-20 pb-24" : "pt-14 pb-5"
              }`}
              style={{ opacity: act4Op }}
            >
              <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                {/* WhatsApp LLM -> Generated .xlsx Card */}
                <div className="rounded-2xl bg-[#FEF8E7] text-[#16181D] border-2 border-[#16181D] p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 font-heading font-extrabold text-xs">
                      <MessageSquare className="h-4 w-4 text-[#2ED47A]" />
                      WhatsApp LLM → Excel
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#6CB4FA] border border-[#16181D] font-mono text-[10px] font-bold">
                      <Sparkles className="h-3 w-3" />
                      Gemini + n8n
                    </span>
                  </div>

                  <div className="rounded-xl bg-[#2ED47A]/20 border border-[#16181D]/30 px-3 py-2 font-mono text-[11px]">
                    “Generate shift incident & gate log Excel”
                  </div>

                  <div className="rounded-xl bg-white border-2 border-[#16181D] p-2.5 space-y-1.5">
                    <div className="flex items-center justify-between font-mono text-[10px] font-bold pb-1 border-b border-[#16181D]/15">
                      <span className="inline-flex items-center gap-1">
                        <FileSpreadsheet className="h-3.5 w-3.5 text-[#16a34a]" />
                        WAREHOUSE_LOG_1600.xlsx
                      </span>
                      <span className="text-[#16a34a]">READY</span>
                    </div>
                    {[
                      "08:14 · Truck L 8421 UB · Unloading",
                      "09:04 · Truck W 8830 KT · Loading",
                      "10:21 · ArUco #42 · Outbound Tracked",
                      "16:00 · Daily WhatsApp Excel Sent",
                    ].map((row, idx) => (
                      <div
                        key={row}
                        className="font-mono text-[10px] flex items-center gap-1.5 transition-opacity"
                        style={{ opacity: idx <= excelRowsVisible ? 1 : 0.15 }}
                      >
                        <CheckCircle2 className="h-3 w-3 text-[#2ED47A] shrink-0" />
                        <span className="truncate">{row}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Security Onion & Suricata Waveform SOC */}
                <div className="rounded-2xl bg-[#181B23] text-[#FEF8E7] border-2 border-[#FEF8E7]/20 p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 font-heading font-extrabold text-xs">
                      <ShieldCheck className="h-4 w-4 text-[#C4B5FD]" />
                      Security Onion + Suricata
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#C4B5FD] text-[#16181D] font-mono text-[10px] font-bold">
                      PORT MIRROR
                    </span>
                  </div>

                  {/* Animated Traffic Oscilloscope Bars */}
                  <div className="h-24 rounded-xl bg-[#12141A] border border-[#FEF8E7]/15 px-3 flex items-end gap-1.5 pb-2">
                    {Array.from({ length: 18 }).map((_, i) => {
                      const amp =
                        24 +
                        Math.abs(Math.sin(time * 3.4 + i * 0.55)) * 58;
                      return (
                        <div
                          key={i}
                          className="flex-1 rounded-t bg-[#C4B5FD]"
                          style={{
                            height: `${amp}%`,
                            opacity: 0.45 + (i % 3) * 0.2,
                          }}
                        />
                      );
                    })}
                  </div>

                  <div className="grid grid-cols-2 gap-2 font-mono text-[10px]">
                    <div className="rounded-lg bg-[#12141A] px-2.5 py-2 border border-[#FEF8E7]/10">
                      <div className="text-[#FEF8E7]/60">INSPECTION</div>
                      <div className="font-bold text-[#2ED47A] mt-0.5">LIVE STREAM</div>
                    </div>
                    <div className="rounded-lg bg-[#12141A] px-2.5 py-2 border border-[#FEF8E7]/10">
                      <div className="text-[#FEF8E7]/60">IDS ENGINE</div>
                      <div className="font-bold text-[#C4B5FD] mt-0.5">SURICATA SOC</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =============================================================== */}
          {/* ACT 5: WEBSITE DEVELOPMENT + REAL DESIGNED WEB CROPS (20s-25s)  */}
          {/* =============================================================== */}
          {act5Op > 0.01 && (
            <div
              className={`absolute inset-0 px-4 sm:px-8 flex items-center justify-center z-10 ${
                fullscreen ? "pt-20 pb-24" : "pt-14 pb-5"
              }`}
              style={{ opacity: act5Op }}
            >
              <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-[1.05fr_1.15fr] gap-4 items-center">
                {/* Left: Animated Fatwa Coding at Dual Monitors + Live Code Terminal */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-[#FEF8E7]/25 bg-[#181B23] shadow-lg">
                  <div className="relative h-[225px] sm:h-[265px] w-full overflow-hidden">
                    <img
                      src={fatwaCodingImg}
                      alt="2D illustrated animation of Fatwa Ratantja Kusumajati coding at dual monitors"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-[50%_25%]"
                      style={{
                        transform: `scale(${1.02 + t5 * 0.06}) translate3d(${-t5 * 1.2}%, 0, 0)`,
                      }}
                    />

                    {/* Subtle Floating Tech Chips */}
                    <span
                      className="absolute top-3 left-3 z-10 px-2.5 py-0.5 rounded-full bg-[#FACC15] text-[#16181D] border border-[#16181D] font-mono text-[10px] font-bold shadow-[2px_2px_0_#000]"
                      style={{
                        transform: `translate3d(0, ${Math.sin(t5 * Math.PI * 2) * 4}px, 0) rotate(-2deg)`,
                      }}
                    >
                      {"<React />"}
                    </span>
                    <span
                      className="absolute top-3 right-3 z-10 px-2.5 py-0.5 rounded-full bg-[#6CB4FA] text-[#16181D] border border-[#16181D] font-mono text-[10px] font-bold shadow-[2px_2px_0_#000]"
                      style={{
                        transform: `translate3d(0, ${Math.cos(t5 * Math.PI * 2) * 4}px, 0) rotate(2deg)`,
                      }}
                    >
                      TypeScript
                    </span>

                    <div className="absolute inset-x-0 bottom-0 h-24 z-20 bg-gradient-to-t from-[#12141A] via-[#12141A]/85 to-transparent" />
                    <div className="absolute bottom-2.5 left-3 right-3 z-20 space-y-1.5">
                      <div className="flex items-center justify-between gap-1.5">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#F78EB6] text-[#16181D] font-heading font-extrabold text-[10px]">
                          <Code2 className="h-3 w-3" />
                          FULLSTACK DEV · FATWA RATANTJA
                        </span>
                        <span className="font-mono text-[10px] text-[#FEF8E7]/85">
                          React · TS · Node · PHP
                        </span>
                      </div>
                      <div className="rounded-lg bg-[#12141A] border border-[#2ED47A]/50 px-2.5 py-1.5 font-mono text-[10px] text-[#2ED47A] truncate">
                        {codeSample.slice(0, typedChars)}
                        <span className="inline-block w-1.5 h-3 bg-[#FACC15] ml-0.5 align-middle" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Animated Montage of Fatwa's Real Website Crops */}
                <div className="relative h-[220px] sm:h-[265px] flex flex-col justify-center gap-2.5">
                  {/* Crop 1: Warehouse Intelligence Console */}
                  <div
                    className="rounded-xl overflow-hidden border-2 border-[#FEF8E7]/25 bg-[#181B23] shadow-lg"
                    style={{
                      opacity: cropSlide1,
                      transform: `translate3d(${(1 - cropSlide1) * 28}px, 0, 0)`,
                    }}
                  >
                    <div className="px-2.5 py-1 bg-[#16181D] border-b border-white/10 flex items-center justify-between">
                      <span className="font-mono text-[9px] text-[#FACC15] font-bold">
                        01 · warehouse-intelligence.app
                      </span>
                      <span className="font-mono text-[9px] text-[#FEF8E7]/60">
                        React + n8n
                      </span>
                    </div>
                    <div className="h-16 sm:h-20 overflow-hidden">
                      <img
                        src="/projects/warehouse_dashboard.png"
                        alt="Warehouse Intelligence Dashboard crop"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top"
                        style={{
                          transform: `scale(1.06) translate3d(0, ${-t5 * 8}%, 0)`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Bottom Split: TIMU + ALBA Website Crops */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div
                      className="rounded-xl overflow-hidden border-2 border-[#FEF8E7]/25 bg-[#181B23] shadow-lg"
                      style={{
                        opacity: cropSlide2,
                        transform: `translate3d(0, ${(1 - cropSlide2) * 20}px, 0)`,
                      }}
                    >
                      <div className="px-2 py-1 bg-[#16181D] border-b border-white/10 font-mono text-[9px] text-[#6CB4FA] font-bold truncate">
                        02 · timu-logistics.web
                      </div>
                      <div className="h-20 sm:h-24 overflow-hidden">
                        <img
                          src="/projects/timu_website.png"
                          alt="PT Terminal Intimoda Utama web crop"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-top"
                          style={{
                            transform: `scale(1.08) translate3d(${-t5 * 4}%, 0, 0)`,
                          }}
                        />
                      </div>
                    </div>

                    <div
                      className="rounded-xl overflow-hidden border-2 border-[#FEF8E7]/25 bg-[#181B23] shadow-lg"
                      style={{
                        opacity: cropSlide3,
                        transform: `translate3d(0, ${(1 - cropSlide3) * 20}px, 0)`,
                      }}
                    >
                      <div className="px-2 py-1 bg-[#16181D] border-b border-white/10 font-mono text-[9px] text-[#2ED47A] font-bold truncate">
                        03 · alba-nusantara.web
                      </div>
                      <div className="h-20 sm:h-24 overflow-hidden">
                        <img
                          src="/projects/alba_website.png"
                          alt="Alba Nusantara web crop"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-top"
                          style={{
                            transform: `scale(1.08) translate3d(${t5 * 4}%, 0, 0)`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Pure Fullscreen CTA: Only floating Let's Go button inside the video */}
          {fullscreen && onEnter && (
            <div className="absolute bottom-5 sm:bottom-7 inset-x-4 z-30 flex justify-center pointer-events-none">
              <button
                type="button"
                onClick={onEnter}
                disabled={entering}
                className="pointer-events-auto inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm sm:text-base font-heading font-extrabold bg-[#FACC15] text-[#16181D] border-[2.5px] border-[#16181D] shadow-[5px_5px_0_#FEF8E7] hover:bg-[#2ED47A] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer disabled:opacity-80"
              >
                <span>Let&apos;s Go</span>
                {entering ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <ArrowRight className="h-5 w-5" />
                )}
              </button>
            </div>
          )}
        </div>

        {/* Interactive Click-to-Scrub Cinema Dock (inline mode only) */}
        {!fullscreen && (
          <div className="relative z-30 bg-[#12141A]/95 backdrop-blur-md border-t-2 border-[#FEF8E7]/15 px-4 sm:px-6 py-3 space-y-2.5">
            <div
              role="slider"
              aria-label="Seek animation timeline"
              aria-valuemin={0}
              aria-valuemax={TOTAL_DURATION}
              aria-valuenow={Math.round(time)}
              tabIndex={0}
              onClick={handleScrub}
              className="h-2 w-full rounded-full bg-white/15 overflow-hidden cursor-pointer"
            >
              <div
                className="h-full bg-[#2ED47A]"
                style={{ width: `${(time / TOTAL_DURATION) * 100}%` }}
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="min-w-0 flex-1">
                <div className="text-xs sm:text-sm font-heading font-bold text-[#FEF8E7] truncate">
                  {activeChapter.title[lang]}
                </div>
                <div className="text-[11px] text-[#FEF8E7]/70 truncate">
                  {activeChapter.subtitle[lang]}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setPaused((p) => !p)}
                aria-label={paused ? "Play animation" : "Pause animation"}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-heading font-bold bg-[#FEF8E7] text-[#16181D] border-2 border-[#16181D] hover:bg-[#6CB4FA] transition-colors cursor-pointer shrink-0"
              >
                {paused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
                <span>{paused ? "Play" : "Pause"}</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 5 Chapter Jump Controls (only rendered when embedded inline, not fullscreen) */}
      {!fullscreen && (
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {CHAPTERS.map((chap) => {
            const active = chap.id === activeChapter.id;
            return (
              <button
                key={chap.id}
                type="button"
                onClick={() => setTime(chap.start + 0.15)}
                className={`text-left px-3 py-2 rounded-xl border-2 border-[var(--ink)] transition-all cursor-pointer ${
                  active
                    ? `${chap.accent} text-[#16181D] shadow-[3px_3px_0_var(--ink)] -translate-y-0.5`
                    : "bg-card text-foreground hover:bg-secondary"
                }`}
              >
                <div className="text-[11px] font-heading font-extrabold truncate">
                  {chap.tag}
                </div>
                <div
                  className={`text-[10px] truncate mt-0.5 ${
                    active ? "text-[#16181D]/85" : "text-muted-foreground"
                  }`}
                >
                  {chap.title[lang]}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
