"use client";
import { motion, useReducedMotion } from "framer-motion";
import { PROFILE, getEducation } from "./portfolio-data";
import { useLanguage } from "./LanguageContext";

export default function EducationSection() {
  const reduce = useReducedMotion();
  const { locale, t } = useLanguage();
  const educationList = getEducation(locale);

  return (
    <section id="education" className="wrap section">
      <div className="section-head">
        <div>
          <span className="evidence-stamp mb-3">{t.education.stamp}</span>
          <h2>{t.education.title}</h2>
          <p className="text-xs font-mono font-bold text-[#ffe600] tracking-[0.2em] uppercase mt-1">
            {t.education.sub}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Education */}
        <div className="space-y-4">
          <h3 className="text-xl font-display text-[#ffe600] flex items-center gap-2 mb-3">
            {locale === "id" ? "Background Pendidikan" : "Educational Background"}
          </h3>
          {educationList.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={reduce ? undefined : { x: 4 }}
              className="p-5 bg-[#170a24]/80 border-l-4 border-l-[#ff2a85] border border-[#ff2a85]/30 rounded-r-lg"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono font-bold text-[#ff7a45]">{edu.period}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#ff2a85]/20 text-[#ff2a85] font-mono font-bold">
                  {locale === "id" ? "AKADEMIK" : "ACADEMIC"}
                </span>
              </div>
              <h4 className="text-lg font-bold text-white">{edu.school}</h4>
              <p className="text-sm font-medium text-[#ffe600] tracking-wide mb-2">{edu.degree}</p>
              <p className="text-xs text-[#cfc2d7] leading-relaxed">{edu.focus}</p>
            </motion.div>
          ))}
        </div>

        {/* Photography Gear & Arsenal */}
        <div className="space-y-4">
          <h3 className="text-xl font-display text-[#ff2a85] flex items-center gap-2 mb-3">
            {locale === "id" ? "Weaponry Kamera & Gear" : "Camera Weaponry & Gear"}
          </h3>
          {PROFILE.gear.map((item, idx) => (
            <motion.div
              key={idx}
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={reduce ? undefined : { x: 4 }}
              className="p-5 bg-[#170a24]/80 border-l-4 border-l-[#ffe600] border border-[#ffe600]/30 rounded-r-lg"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono font-bold text-[#ffe600]">PRIMARY GEAR #{idx + 1}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#ffe600]/20 text-[#ffe600] font-mono font-bold">
                  CREATIVE WEAPON
                </span>
              </div>
              <h4 className="text-lg font-bold text-white">{item.name}</h4>
              <p className="text-xs text-[#cfc2d7] leading-relaxed mt-1">{item.spec}</p>
            </motion.div>
          ))}

          {/* Quick Stats Banner */}
          <div className="p-4 bg-gradient-to-r from-[#2a0e3f] to-[#140620] border border-[#ff2a85]/40 rounded-lg flex items-center justify-between">
            <div>
              <p className="text-xs font-mono text-[#ff7a45] uppercase tracking-wider">
                {locale === "id" ? "LOKASI OPERASIONAL" : "OPERATIONAL BASE"}
              </p>
              <p className="text-sm font-bold text-white font-mono">{PROFILE.location}</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-mono text-[#ffe600] uppercase tracking-wider">CALL SIGN</p>
              <p className="text-sm font-bold text-[#ff2a85] font-mono">{PROFILE.callsign}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
