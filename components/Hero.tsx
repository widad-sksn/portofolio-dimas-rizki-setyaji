"use client";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "./LanguageContext";

const scenes = [
  { label: "Pesisir Vice", image: "pesisir", position: "65% center", sector: "SECTOR 01 // BEACHFRONT" },
  { label: "Leonida Portrait", image: "photo_fuji_portrait_1", position: "center 38%", sector: "SECTOR 02 // DOWNTOWN" },
  { label: "Trace Truth", image: "poster_talkshow_trace_the_truth", position: "center 30%", sector: "SECTOR 03 // INTEL" },
];

export default function Hero() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const drift = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const scene = scenes[active];

  return (
    <section ref={ref} className="hero">
      {/* Giant GTA VI Roman Numeral Watermark */}
      <div className="hero-vi-watermark" aria-hidden="true">
        VI
      </div>

      {/* Hero background image with framer-motion transition */}
      <motion.div aria-hidden="true" className="hero-art" style={{ y: reduce ? 0 : drift }}>
        <AnimatePresence initial={false}>
          <motion.div
            className="scene-layer"
            key={scene.image}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.65 }}
          >
            <Image
              src={"/images/" + scene.image + ".webp"}
              alt=""
              fill
              priority={active === 0}
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: scene.position }}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <div className="hero-shade" />

      {/* GTA VI Main Character (MC) Artwork */}
      <div
        className="absolute right-0 md:right-[2%] lg:right-[6%] bottom-4 md:bottom-12 lg:bottom-16 z-1 pointer-events-none h-[72vh] md:h-[94vh] lg:h-[102vh] max-h-[960px] w-auto aspect-[520/850] select-none flex items-end justify-end"
        aria-hidden="true"
      >
        <Image
          src="/images/mc_dimas.png"
          alt="Dimas Rizki Setyaji — GTA VI Protagonist"
          width={650}
          height={980}
          priority
          className="h-full w-auto object-contain object-bottom scale-x-[-1] filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)] drop-shadow-[0_0_25px_rgba(255,42,133,0.35)]"
        />
      </div>

      <div className="hero-copy wrap w-full">
        {/* Name Title with GTA 6 Gradient & Faulty Neon Flicker */}
        <h1>
          <span className="title-mask">
            <span className="neon-broken-sign">DIMAS RIZKI</span>
          </span>
          <span className="title-mask">
            <span className="text-white drop-shadow-[0_4px_25px_rgba(255,255,255,0.4)]">SETYAJI</span>
          </span>
        </h1>

        {/* Subheadline in Sleek Thin Modern Font */}
        <div className="text-base md:text-xl font-medium tracking-[0.16em] text-[#ffe600] uppercase my-3 drop-shadow-[0_0_10px_rgba(255,230,0,0.3)]">
          {t.hero.role}
        </div>

        <p className="mt-2 mb-6">
          <span className="text-sm md:text-base text-[#cfc2d7] leading-relaxed block max-w-2xl">
            {t.hero.bio}
          </span>
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-8">
          <a className="cta" href="#karya">
            {t.hero.explore} <span aria-hidden="true">↓</span>
          </a>
          <a className="cta-secondary" href="#experience">
            {t.hero.dossier} <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Interactive GTA VI Scene Selector HUD */}
        <div className="pt-4 border-t border-[#ff2a85]/30 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-mono font-bold text-[#9f8ea8] uppercase tracking-wider">
              {t.hero.atmosphere}
            </span>
            <span className="text-[11px] font-mono font-black text-[#ff7a45] uppercase tracking-[0.16em] bg-[#170a24]/90 px-2.5 py-1 border border-[#ff7a45]/40 rounded">
              {scene.sector}
            </span>
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Pilih visual latar belakang">
            {scenes.map((item, i) => {
              const isSelected = i === active;
              return (
                <button
                  type="button"
                  key={item.image}
                  aria-pressed={isSelected}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs font-mono font-bold transition duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-gradient-to-r from-[#ff2a85] to-[#ff7a45] text-black shadow-[0_0_15px_rgba(255,42,133,0.6)]"
                      : "bg-[#170a24]/90 text-[#e2d9e8] border border-[#ff2a85]/30 hover:border-[#ffe600]"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-black" : "bg-[#ff2a85]"}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
