"use client";
import { motion, useReducedMotion } from "framer-motion";
import { getSkillTiers } from "./portfolio-data";
import { useLanguage } from "./LanguageContext";

export default function Skills() {
  const reduce = useReducedMotion();
  const { locale, t } = useLanguage();
  const tiers = getSkillTiers(locale);

  return (
    <section id="arsenal" className="wrap section">
      <div className="section-head">
        <div>
          <span className="evidence-stamp mb-3">{t.skills.stamp}</span>
          <h2>{t.skills.title}</h2>
          <p className="text-xs font-mono font-bold text-[#ffe600] tracking-[0.2em] uppercase mt-1">
            {t.skills.sub}
          </p>
        </div>
        <p className="text-sm text-[#cbb8d4] max-w-md">
          {t.skills.desc}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier, idx) => (
          <motion.article
            key={tier.category}
            initial={reduce ? undefined : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.6,
              delay: idx * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="gta-card flex flex-col justify-between"
            whileHover={reduce ? undefined : { y: -5 }}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span
                  className="text-xs font-mono font-black px-2 py-0.5 rounded tracking-wider uppercase"
                  style={{
                    backgroundColor: `${tier.color}22`,
                    color: tier.color,
                    border: `1px solid ${tier.color}55`,
                  }}
                >
                  {tier.tag}
                </span>
                <div className="flex gap-1 text-[#ffe600] text-sm" title={`Level ${tier.stars} Stars`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < tier.stars
                          ? "text-[#ffe600] drop-shadow-[0_0_8px_rgba(255,230,0,0.8)]"
                          : "text-[#341b42]"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-2xl text-white font-display mb-4">{tier.category}</h3>

              <ul className="space-y-2.5 mb-6 pl-0 list-none">
                {tier.items.map((item, i) => (
                  <li key={i} className="text-xs text-[#dfd4e6] flex items-start gap-2">
                    <span className="text-[#ff2a85] font-bold">»</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-[#ff2a85]/20 flex items-center justify-between">
              <span className="text-[11px] font-mono font-bold text-[#ff7a45] uppercase tracking-wider">
                {tier.tier}
              </span>
              <span className="text-xs text-[#ffe600] font-mono font-bold">READY // 100%</span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
