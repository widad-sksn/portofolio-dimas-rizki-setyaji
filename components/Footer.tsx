"use client";
import { useLanguage } from "./LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact">
      <div className="wrap">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
          <div>
            <span className="evidence-stamp mb-3">{t.footer.stamp}</span>
            <h2>{t.footer.title}</h2>
            <p className="text-sm md:text-base text-[#cfc2d7] max-w-md mt-2">
              {t.footer.desc}
            </p>
            <a className="email" href="mailto:dimasrizkisetyaji@gmail.com">
              dimasrizkisetyaji@gmail.com ↗
            </a>
            <div className="text-xs font-mono text-[#ffe600] flex items-center gap-3">
              <span>COMM: +62 822-3444-1456</span>
              <span>{t.footer.base}</span>
            </div>
          </div>

          {/* Minimap Radar Simulation */}
          <div className="flex flex-col items-center gap-2">
            <div className="footer-radar" aria-hidden="true">
              <div className="radar-sweep" />
              <span className="text-[10px] font-mono font-bold text-[#ffe600] z-10">DRS</span>
            </div>
            <span className="text-[10px] font-mono text-[#ff2a85] tracking-widest uppercase">
              {t.footer.radar}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#ff2a85]/20">
          <div className="footer-links">
            <a href="https://github.com/Sholis986g" target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
            <a href="https://linkedin.com/in/dimas-rizki-setyaji" target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
            <a href="https://instagram.com/dimrizji" target="_blank" rel="noopener noreferrer">
              Instagram ↗
            </a>
          </div>
          <small className="text-[#9f8ea8] text-xs font-mono">
            {t.footer.copy}
          </small>
        </div>
      </div>
    </footer>
  );
}
