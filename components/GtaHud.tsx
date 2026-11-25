"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./LanguageContext";

// Web Audio API retro synth sound helper
function playSfx(type: "star" | "click" | "siren") {
  if (typeof window === "undefined") return;
  try {
    const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    const now = ctx.currentTime;
    if (type === "star") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.15);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      osc.start(now);
      osc.stop(now + 0.18);
    } else if (type === "click") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.08);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === "siren") {
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.linearRampToValueAtTime(780, now + 0.2);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc.start(now);
      osc.stop(now + 0.25);
    }
  } catch {
    // AudioContext blocked or unsupported, silent fallback
  }
}

const DISPATCH_MESSAGES: Record<number, string> = {
  1: "VCPD: PATROL UNIT MONITORING SECTOR",
  2: "VCPD: SQUAD CARS DISPATCHED TO LOCATION",
  3: "VCPD: S.W.A.T. TACTICAL SUPPORT DEPLOYED",
  4: "VCPD: N.O.O.S.E. AIR HELICOPTER ENGAGED",
  5: "VCPD: MAXIMUM 5-STAR MILITARY LOCKDOWN",
};

export function WantedStars({ count = 5, active = 5 }: { count?: number; active?: number }) {
  const [stars, setStars] = useState(active);
  const [alertText, setAlertText] = useState("");
  const [flash, setFlash] = useState(false);

  const handleStarClick = (idx: number) => {
    const newLevel = idx + 1;
    setStars(newLevel);
    setAlertText(DISPATCH_MESSAGES[newLevel] || "WANTED LEVEL UPDATED");
    setFlash(true);
    playSfx(newLevel >= 4 ? "siren" : "star");
    setTimeout(() => setFlash(false), 800);
  };

  return (
    <div className="relative inline-flex flex-col gap-1">
      <div
        className={`flex items-center gap-2 px-3 py-1.5 rounded transition-colors duration-200 ${
          flash ? "bg-[#ff1c48]/30 border border-[#ff1c48]" : "bg-[#170a24]/90 border border-[#ff2a85]/35"
        }`}
        role="status"
        aria-label={`Wanted Level ${stars} dari ${count} bintang`}
      >
        <span className="text-[11px] uppercase font-mono font-black tracking-widest text-[#ffe600]">
          WANTED
        </span>
        <div className="flex gap-1">
          {Array.from({ length: count }).map((_, i) => {
            const isLit = i < stars;
            return (
              <button
                key={i}
                type="button"
                onClick={() => handleStarClick(i)}
                title={`Klik untuk ubah Wanted Level ${i + 1} Bintang`}
                className={`text-base transition-all duration-150 transform hover:scale-135 focus:outline-none cursor-pointer ${
                  isLit
                    ? "text-[#ffe600] drop-shadow-[0_0_8px_rgba(255,230,0,0.85)] animate-pulse"
                    : "text-[#341b42] hover:text-[#ff7a45]"
                }`}
              >
                ★
              </button>
            );
          })}
        </div>
        <span className="text-[10px] font-mono text-[#ff7a45] font-bold ml-1">
          L{stars}
        </span>
      </div>

      <AnimatePresence>
        {alertText && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute -bottom-6 left-0 text-[10px] font-mono font-black text-[#ff2a85] tracking-wider whitespace-nowrap drop-shadow-[0_0_8px_rgba(255,42,133,0.8)] pointer-events-none"
          >
            {alertText}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function LiveRecTicker() {
  const [time, setTime] = useState("00:00:00");
  const [fps, setFps] = useState(60);

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      const diff = Math.floor((Date.now() - start) / 1000);
      const h = String(Math.floor(diff / 3600)).padStart(2, "0");
      const m = String(Math.floor((diff % 3600) / 60)).padStart(2, "0");
      const s = String(diff % 60).padStart(2, "0");
      setTime(`${h}:${m}:${s}`);
      setFps(59 + Math.floor(Math.random() * 2));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-[#170a24]/90 border border-[#ff2a85]/35 rounded text-xs font-mono font-bold select-none text-[#ffe600]">
      <span className="rec-dot" />
      <span>REC · {time}</span>
      <span className="text-[#ff2a85]">●</span>
      <span className="text-[#e2d9e8]">4K // {fps} FPS</span>
    </div>
  );
}

// Interactive Radio / Ambient Synth Player
export function ViceRadioHud() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [stationIdx, setStationIdx] = useState(0);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  const stations = [
    { name: "VICE WAVE 104.5", genre: "SYNTHWAVE // RETRO", freq: 220 },
    { name: "FLASH FM LEONIDA", genre: "80s POP // HIGHWAY", freq: 277.18 },
    { name: "CYBER CSIRT RADIO", genre: "DARK TECHNO // INTEL", freq: 164.81 },
  ];

  const toggleRadio = () => {
    if (isPlaying) {
      if (gainRef.current) {
        gainRef.current.gain.exponentialRampToValueAtTime(0.001, (audioCtxRef.current?.currentTime || 0) + 0.3);
        setTimeout(() => {
          oscRef.current?.stop();
          setIsPlaying(false);
        }, 300);
      } else {
        setIsPlaying(false);
      }
    } else {
      try {
        const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
        audioCtxRef.current = ctx;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(stations[stationIdx].freq, ctx.currentTime);
        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 0.5);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        oscRef.current = osc;
        gainRef.current = gain;
        setIsPlaying(true);
        playSfx("click");
      } catch {
        setIsPlaying(false);
      }
    }
  };

  const nextStation = () => {
    playSfx("click");
    const next = (stationIdx + 1) % stations.length;
    setStationIdx(next);
    if (isPlaying && oscRef.current && audioCtxRef.current) {
      oscRef.current.frequency.setValueAtTime(stations[next].freq, audioCtxRef.current.currentTime);
    }
  };

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#170a24]/90 border border-[#ff2a85]/35 rounded backdrop-blur-md">
      <button
        type="button"
        onClick={toggleRadio}
        className="flex items-center gap-2 text-xs font-mono font-bold text-white hover:text-[#ffe600] transition cursor-pointer"
        title="Nyalakan Radio / Suara Ambient GTA VI"
      >
        <span
          className={`w-2 h-2 rounded-full ${
            isPlaying ? "bg-[#00f0ff] animate-ping" : "bg-[#ff2a85]"
          }`}
        />
        <span>{isPlaying ? "RADIO ON" : "RADIO OFF"}</span>
      </button>

      <span className="text-[#ff2a85] text-xs">|</span>

      <button
        type="button"
        onClick={nextStation}
        className="text-[11px] font-mono text-[#ffe600] hover:text-[#ff7a45] transition cursor-pointer font-bold"
        title="Ganti Stasiun Radio"
      >
        {stations[stationIdx].name} ↻
      </button>
    </div>
  );
}

export function MissionPassedBanner({
  title = "MISSION PASSED",
  subtitle = "RESPECT +",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="p-6 bg-gradient-to-r from-[#190826]/90 via-[#2d0e3a]/90 to-[#190826]/90 border-2 border-[#ffe600]/80 rounded-lg shadow-[0_0_35px_rgba(255,230,0,0.35)] text-center relative overflow-hidden my-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ffe600]/10 via-transparent to-transparent pointer-events-none" />
      <span className="text-xs uppercase tracking-[0.3em] text-[#ff7a45] font-mono font-bold block mb-1">
        ACHIEVEMENT UNLOCKED
      </span>
      <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#ffe600] font-display uppercase drop-shadow-[0_2px_15px_rgba(255,230,0,0.6)]">
        {title}
      </h3>
      <p className="text-xl md:text-2xl font-black text-[#ff2a85] font-display uppercase tracking-widest mt-1 drop-shadow-[0_0_12px_rgba(255,42,133,0.8)]">
        {subtitle}
      </p>
    </motion.div>
  );
}

export function VicestarComments() {
  const { locale, t } = useLanguage();
  const [likes, setLikes] = useState([1420, 894, 2150]);

  const commentsId = [
    { user: "@vice_dev", text: "Infrastruktur BPJS + Docker clean dan reliable.", badge: "LEONIDA" },
    { user: "@security_ops", text: "Forensik NIST keyloggernya komprehensif dan solid.", badge: "CSIRT" },
    { user: "@yky_designer", text: "Visual kampanye PMB estetik dan konsisten.", badge: "STUDIO" },
  ];

  const commentsEn = [
    { user: "@vice_dev", text: "BPJS + Docker infrastructure is ultra clean and reliable.", badge: "LEONIDA" },
    { user: "@security_ops", text: "NIST keylogger forensics analysis is comprehensive and rock solid.", badge: "CSIRT" },
    { user: "@yky_designer", text: "Visual admission campaigns are sleek and consistent.", badge: "STUDIO" },
  ];

  const comments = locale === "en" ? commentsEn : commentsId;

  const handleLike = (index: number) => {
    playSfx("click");
    setLikes((prev) => {
      const copy = [...prev];
      copy[index] += 1;
      return copy;
    });
  };

  return (
    <div className="space-y-2 my-4">
      <div className="flex items-center justify-between text-xs font-mono text-[#ff7a45] uppercase tracking-wider mb-2">
        <span>{t.vicestar.title}</span>
        <span className="text-[#ffe600]">{t.vicestar.action}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {comments.map((c, i) => (
          <div
            key={i}
            className="flex items-center justify-between gap-3 p-3 bg-[#170a24]/80 border border-[#ff2a85]/30 rounded-lg backdrop-blur-md shadow-[0_0_15px_rgba(255,42,133,0.15)] transition hover:border-[#ff2a85]"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ff2a85] to-[#ffe600] flex items-center justify-center font-bold text-xs text-[#0a0410] shrink-0">
                {c.user[1].toUpperCase()}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#ffe600] truncate">{c.user}</span>
                  <span className="text-[10px] px-1.5 py-0.2 bg-[#ff2a85]/20 text-[#ff2a85] border border-[#ff2a85]/40 rounded font-mono">
                    {c.badge}
                  </span>
                </div>
                <p className="text-xs text-[#e2d9e8] truncate">{c.text}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleLike(i)}
              className="px-2 py-1 bg-[#ff2a85]/20 hover:bg-[#ff2a85]/40 text-[#ffe600] border border-[#ff2a85]/40 rounded text-xs font-mono font-bold transition transform active:scale-90 cursor-pointer shrink-0"
              title={locale === "en" ? "Send Respect" : "Kirim Respect"}
            >
              +{likes[i]}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
