"use client";
import Link from "next/link";
import { LiveRecTicker, WantedStars, ViceRadioHud } from "./GtaHud";
import { useLanguage } from "./LanguageContext";

export default function SiteNav() {
  const { locale, toggleLocale, t } = useLanguage();

  return (
    <header className="site-nav">
      <div className="flex items-center gap-3 lg:gap-4 flex-wrap">
        <Link className="wordmark shrink-0" aria-label="DRS — Beranda GTA 6" href="/">
          DRS <span className="gta-vi-badge">VI</span>
        </Link>

        {/* Cockpit HUD Bar beside DRS VI */}
        <div className="hidden md:flex items-center gap-2">
          <LiveRecTicker />
          <WantedStars count={5} active={5} />
          <ViceRadioHud />
        </div>
      </div>

      <nav aria-label="Navigasi utama" className="flex items-center gap-3 md:gap-4 flex-wrap">
        <Link href="/#tentang">{t.nav.about}</Link>
        <Link href="/#experience">{t.nav.operations}</Link>
        <Link href="/#arsenal">{t.nav.arsenal}</Link>
        <Link href="/#karya">{t.nav.works}</Link>
        <Link href="/security">{t.nav.security}</Link>
        <Link href="/design">{t.nav.design}</Link>
        <a href="#contact" className="text-[#ffe600]">
          {t.nav.contact}
        </a>

        {/* GTA VI HUD Language Switcher [ID | EN] */}
        <button
          type="button"
          onClick={toggleLocale}
          className="px-2.5 py-1 rounded bg-[#170a24]/90 border border-[#ff2a85]/50 hover:border-[#ffe600] transition flex items-center gap-1 text-xs font-mono font-black tracking-widest cursor-pointer shadow-[0_0_12px_rgba(255,42,133,0.3)] ml-1"
          aria-label="Ganti Bahasa / Switch Language"
          title={locale === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
        >
          <span
            className={
              locale === "id"
                ? "text-[#ffe600] drop-shadow-[0_0_8px_rgba(255,230,0,0.9)]"
                : "text-[#7e6a8b]"
            }
          >
            ID
          </span>
          <span className="text-[#ff2a85]/70 text-[10px]">|</span>
          <span
            className={
              locale === "en"
                ? "text-[#ffe600] drop-shadow-[0_0_8px_rgba(255,230,0,0.9)]"
                : "text-[#7e6a8b]"
            }
          >
            EN
          </span>
        </button>
      </nav>
    </header>
  );
}
