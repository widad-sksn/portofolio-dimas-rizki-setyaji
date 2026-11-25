"use client";
import Projects from "../../components/Projects";
import TrackBanner from "../../components/TrackBanner";
import { useLanguage } from "../../components/LanguageContext";
import ScrollReveal from "../../components/ScrollReveal";

export default function Design() {
  const { locale } = useLanguage();

  const isEn = locale === "en";

  return (
    <main id="utama">
      <TrackBanner design />

      {/* Creative Scope & Gear */}
      <section className="wrap section">
        <ScrollReveal>
          <div className="section-head">
            <div>
              <span className="evidence-stamp mb-3">VICE CITY CREATIVE OPS</span>
              <h2>{isEn ? "Creative Specialization" : "Spesialisasi Kreatif"}</h2>
            </div>
            <p className="text-sm text-[#cfc2d7] max-w-lg">
              {isEn
                ? "Transforming creative ideas from message formulation, audience visual strategy, and copywriting, to high-resolution digital and print asset production."
                : "Mengolah ide kreatif dari perumusan pesan, strategi visual target audiens, copywriting, hingga produksi aset digital dan cetak beresolusi tinggi."}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <ScrollReveal delay={0}>
            <div className="gta-card h-full">
              <span className="text-xs font-mono font-bold text-[#ff2a85] uppercase">
                {isEn ? "DOMAIN 01" : "BIDANG 01"}
              </span>
              <h3 className="text-2xl font-display text-white mt-1 mb-2">
                {isEn ? "Graphic & Print Design" : "Desain Grafis & Cetak"}
              </h3>
              <p className="text-xs text-[#cfc2d7] leading-relaxed mb-3">
                {isEn
                  ? "Promotional posters, Instagram carousels, billboards, 6x1.75m x-banners, and official event apparel designs."
                  : "Poster promosi, carousel Instagram, baliho, x-banner 6x1.75m, serta desain apparel kaos resmi."}
              </p>
              <span className="text-[11px] font-mono text-[#ffe600]">Photoshop · Illustrator · Canva</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="gta-card h-full">
              <span className="text-xs font-mono font-bold text-[#ff7a45] uppercase">
                {isEn ? "DOMAIN 02" : "BIDANG 02"}
              </span>
              <h3 className="text-2xl font-display text-white mt-1 mb-2">
                {isEn ? "UI/UX & Web Landing" : "UI/UX & Web Landing"}
              </h3>
              <p className="text-xs text-[#cfc2d7] leading-relaxed mb-3">
                {isEn
                  ? "Wireframing, mobile app prototyping (Vitalife), and responsive web portal design using Figma & WordPress."
                  : "Wireframing, prototipe aplikasi mobile (Vitalife), dan perancangan portal web responsif di Figma & WordPress."}
              </p>
              <span className="text-[11px] font-mono text-[#ffe600]">Figma · WordPress · HTML/CSS</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="gta-card h-full">
              <span className="text-xs font-mono font-bold text-[#ffe600] uppercase">
                {isEn ? "DOMAIN 03" : "BIDANG 03"}
              </span>
              <h3 className="text-2xl font-display text-white mt-1 mb-2">
                {isEn ? "Cinematic Photography" : "Fotografi Sinematik"}
              </h3>
              <p className="text-xs text-[#cfc2d7] leading-relaxed mb-3">
                {isEn
                  ? "Studio portraiture and landscape documentation utilizing Sony A6300 (Lightroom grading) and Fujifilm X-S20 (SOOC)."
                  : "Potret studio dan lanskap menggunakan Sony A6300 (Lightroom grading) dan Fujifilm X-S20 (SOOC)."}
              </p>
              <span className="text-[11px] font-mono text-[#ffe600]">Sony A6300 · Fujifilm X-S20 · Lightroom</span>
            </div>
          </ScrollReveal>
        </div>

        {/* Clients & Accounts */}
        <ScrollReveal delay={0.15}>
          <div className="p-5 bg-[#140720]/80 border border-[#ff2a85]/30 rounded-lg backdrop-blur-md">
            <p className="text-xs font-mono font-bold text-[#ffe600] uppercase tracking-wider mb-2">
              INSTITUTIONAL CLIENTS & BRAND PARTNERS
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Prodi S1 Teknologi Informasi UNISA",
                "Fakultas Sains & Teknologi UNISA",
                "S1 Bioteknologi UNISA",
                "HITS Yogyakarta",
                "RSU Queen Latifa",
                "BPTSI CSIRT UNISA",
              ].map((client) => (
                <span
                  key={client}
                  className="text-xs font-mono px-3 py-1 bg-[#220d36] text-[#e2d9e8] border border-[#ff2a85]/40 rounded"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Full Gallery */}
      <section id="galeri" className="wrap section">
        <ScrollReveal>
          <div className="section-head">
            <div>
              <span className="evidence-stamp mb-3">COMPLETE VAULT ARCHIVE</span>
              <h2>{isEn ? "Visual Works Gallery" : "Galeri Karya Visual"}</h2>
            </div>
          </div>
        </ScrollReveal>
        <Projects all />
      </section>
    </main>
  );
}
