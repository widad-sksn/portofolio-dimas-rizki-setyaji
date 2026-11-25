"use client";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";

export default function TrackBanner({ design = false }: { design?: boolean }) {
  const { t } = useLanguage();

  return (
    <header className={"track-banner " + (design ? "studio" : "security")}>
      <div className="hero-vi-watermark" aria-hidden="true" style={{ top: "5%", fontSize: "clamp(12rem, 25vw, 28rem)" }}>
        VI
      </div>
      <div className="track-scene" aria-hidden="true">
        <Image
          src={design ? "/images/banner-design-v2.webp" : "/images/banner-security-v2.webp"}
          alt=""
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="wrap track-copy">
        <span className="hero-hud-ticker mb-3">
          <span className="rec-dot" />
          <span>{design ? t.track.design_tag : t.track.security_tag}</span>
        </span>
        <h1 className="text-white">
          <span className="title-mask">
            <span className="highlight">{design ? t.track.design_title : t.track.security_title}</span>
          </span>
        </h1>
        <p className="text-[#cfc2d7] text-base md:text-lg max-w-xl my-4">
          {design ? t.track.design_desc : t.track.security_desc}
        </p>
        <a className="cta" href={design ? "#galeri" : "#praktik"}>
          {design ? t.track.design_cta : t.track.security_cta}
        </a>
      </div>
    </header>
  );
}
