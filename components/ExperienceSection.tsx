"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { getExperiences, getAchievements } from "./portfolio-data";
import { MissionPassedBanner } from "./GtaHud";
import { useLanguage } from "./LanguageContext";

export default function ExperienceSection() {
  const [filter, setFilter] = useState<string>("all");
  const reduce = useReducedMotion();
  const { locale, t } = useLanguage();

  const experiences = getExperiences(locale);
  const achievements = getAchievements(locale);

  const filtered = filter === "all" ? experiences : experiences.filter((e) => e.type === filter);

  const categories = [
    { id: "all", label: t.experience.all },
    { id: "security", label: t.experience.security },
    { id: "it", label: t.experience.it },
    { id: "leadership", label: t.experience.leadership },
    { id: "design", label: t.experience.design },
  ];

  return (
    <section id="experience" className="wrap section">
      <div className="section-head">
        <div>
          <span className="evidence-stamp mb-3">{t.experience.stamp}</span>
          <h2>{t.experience.title}</h2>
          <p className="text-xs font-mono font-bold text-[#ffe600] tracking-[0.2em] uppercase mt-1">
            {t.experience.sub}
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-3 py-1.5 text-xs uppercase tracking-wider font-bold rounded border transition-all ${
                filter === cat.id
                  ? "bg-gradient-to-r from-[#ff2a85] to-[#ffe600] text-[#110515] border-transparent shadow-[0_0_15px_rgba(255,42,133,0.5)]"
                  : "bg-[#180a26]/80 text-[#e2d9e8] border-[#ff2a85]/30 hover:border-[#ffe600] hover:text-[#ffe600]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((item, idx) => (
          <motion.article
            key={item.role + idx}
            initial={reduce ? undefined : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.55,
              delay: (idx % 2) * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={reduce ? undefined : { y: -4 }}
            className="gta-card flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
                <span className="text-xs font-mono font-bold text-[#ffe600] tracking-wider uppercase">
                  {item.period}
                </span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#ff2a85]/20 text-[#ff2a85] border border-[#ff2a85]/40 font-mono">
                  {item.badge}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl text-white font-display mb-1">{item.role}</h3>
              <p className="text-sm font-medium text-[#ff7a45] tracking-wide mb-3">{item.organization}</p>
              <p className="text-sm text-[#d4c7dc] leading-relaxed mb-4">{item.description}</p>

              {item.highlights && item.highlights.length > 0 && (
                <ul className="space-y-1.5 mb-4 pl-0 list-none">
                  {item.highlights.map((hl, hIdx) => (
                    <li key={hIdx} className="text-xs text-[#cfc2d7] flex items-start gap-2">
                      <span className="text-[#ffe600] font-bold">▶</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {item.tools && (
              <div className="pt-3 border-t border-[#ff2a85]/20 flex flex-wrap gap-1.5">
                {item.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-[11px] px-2 py-0.5 rounded bg-[#09040e] border border-[#ff2a85]/30 text-[#ffe600] font-mono"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            )}
          </motion.article>
        ))}
      </div>

      <MissionPassedBanner
        title={locale === "id" ? "NASIONAL & PRESTASI" : "NATIONAL HONORS"}
        subtitle={locale === "id" ? "2x SILVER MEDAL · GEMASTIK FINALIST" : "2x SILVER MEDAL · GEMASTIK FINALIST"}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {achievements.map((ach, i) => (
          <motion.div
            key={i}
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.5,
              delay: i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={reduce ? undefined : { y: -4 }}
            className="p-4 bg-[#140822]/90 border border-[#ff2a85]/30 rounded-lg relative overflow-hidden backdrop-blur-md"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-[#ff7a45] font-bold">{ach.year}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#ffe600]/20 text-[#ffe600] border border-[#ffe600]/40 font-bold font-mono">
                {ach.level}
              </span>
            </div>
            <h4 className="text-lg font-display text-white mb-1">{ach.title}</h4>
            <p className="text-xs font-bold text-[#ff2a85] mb-2">{ach.category}</p>
            <p className="text-xs text-[#c9bcd2] leading-relaxed">{ach.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
