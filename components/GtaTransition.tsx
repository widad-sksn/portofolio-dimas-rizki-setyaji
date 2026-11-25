"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function GtaTransition() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [routeTransition, setRouteTransition] = useState(false);

  // Initial site entrance animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  // Page change transition
  useEffect(() => {
    // Skip on first load
    if (loading) return;
    setRouteTransition(true);
    const timer = setTimeout(() => {
      setRouteTransition(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [pathname, loading]);

  return (
    <>
      {/* 1. Initial Site Load Splash (GTA VI Cinematic Entrance) */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="gta-intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[9999] bg-[#09040e] flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden"
          >
            {/* Top and Bottom Letterbox Bars */}
            <motion.div
              initial={{ height: "50vh" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.75, ease: [0.65, 0, 0.35, 1], delay: 0.15 }}
              className="absolute top-0 inset-x-0 bg-black z-20"
            />
            <motion.div
              initial={{ height: "50vh" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.75, ease: [0.65, 0, 0.35, 1], delay: 0.15 }}
              className="absolute bottom-0 inset-x-0 bg-black z-20"
            />

            {/* Central Watermark & Content */}
            <div className="relative z-30 text-center px-4">
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.15, opacity: 0 }}
                transition={{ duration: 0.55 }}
                className="flex flex-col items-center gap-3"
              >
                <h1 className="text-5xl md:text-8xl font-display uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a85] via-[#ff7a45] to-[#ffe600] drop-shadow-[0_0_35px_rgba(255,42,133,0.6)]">
                  PORTOFOLIO
                </h1>

                {/* Animated GTA 5-Star Wanted Sequence */}
                <div className="flex items-center gap-2 my-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0.15, scale: 0.75 }}
                      animate={{
                        opacity: [0.2, 1, 0.3, 1],
                        scale: [0.8, 1.25, 0.9, 1],
                        color: ["#2d113a", "#ffe600", "#ff7a45", "#ffe600"],
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        repeatType: "mirror",
                        delay: i * 0.16,
                        ease: "easeInOut",
                      }}
                      className="text-2xl md:text-3xl font-bold drop-shadow-[0_0_12px_rgba(255,230,0,0.85)]"
                    >
                      ★
                    </motion.span>
                  ))}
                </div>

                <span className="text-sm md:text-base font-mono font-bold text-[#ffe600] tracking-[0.25em] uppercase drop-shadow-[0_0_10px_rgba(255,230,0,0.4)]">
                  DIMAS RIZKI SETYAJI
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Route Change Satellite Sweep Animation */}
      <AnimatePresence>
        {routeTransition && (
          <motion.div
            key={`route-${pathname}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9990] pointer-events-none flex items-center justify-center overflow-hidden"
          >
            {/* Horizontal scanline laser sweep */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: [0, 1, 0] }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-[#09040e]/85 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-[#ff2a85]/40 to-transparent blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.05, opacity: 0 }}
              className="relative z-10 px-6 py-3 bg-[#13071d]/90 border border-[#ff2a85] rounded shadow-[0_0_30px_rgba(255,42,133,0.5)] text-center font-mono"
            >
              <span className="text-[10px] text-[#ff7a45] uppercase tracking-widest block font-bold">
                FREQUENCY SWITCH // SECTOR
              </span>
              <span className="text-sm font-black text-[#ffe600] uppercase tracking-wider font-display">
                {pathname === "/" ? "VICE CITY MAIN" : pathname.replace("/", "").toUpperCase()}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
