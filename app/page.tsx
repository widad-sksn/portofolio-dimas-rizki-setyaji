"use client";
import Image from "next/image";
import Link from "next/link";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import ExperienceSection from "../components/ExperienceSection";
import EducationSection from "../components/EducationSection";
import { VicestarComments } from "../components/GtaHud";
import { PAPERS } from "../components/portfolio-data";
import { useLanguage } from "../components/LanguageContext";
import ScrollReveal from "../components/ScrollReveal";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main id="utama">
      <Hero />

      {/* 1. Tentang Saya (Dossier Profil) */}
      <section id="tentang" className="wrap section">
        <ScrollReveal>
          <div className="about-dossier">
            <div className="portrait-frame">
              <Image
                src="/images/avatar_dimas.webp"
                width={480}
                height={520}
                alt="Dimas Rizki Setyaji"
                className="portrait"
                priority
              />
            </div>

            <div>
              <span className="evidence-stamp mb-3">{t.about.stamp}</span>
              <h2>{t.about.title}</h2>
              <p className="text-xs font-mono font-bold text-[#ffe600] tracking-[0.2em] uppercase mt-1 mb-2">
                {t.about.tagline}
              </p>
              <p className="text-base md:text-lg text-[#e2d9e8] leading-relaxed mt-3">
                {t.about.p1_prefix} <strong>Dimas Rizki Setyaji</strong>{t.about.p1_rest}
              </p>
              <p className="text-sm md:text-base text-[#cfc2d7] leading-relaxed mt-3">
                {t.about.p2_1} <strong>BPTSI CSIRT Universitas ‘Aisyiyah Yogyakarta</strong>{t.about.p2_2}{" "}
                <strong>RSU Queen Latifa</strong>{t.about.p2_3}
              </p>
              <p className="text-sm md:text-base text-[#cfc2d7] leading-relaxed mt-3">
                {t.about.p3_1} <strong>HITS Yogyakarta</strong>{t.about.p3_2}
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <Link href="/design" className="cta">
                  {t.about.btn_design}
                </Link>
                <Link href="/security" className="cta-secondary">
                  {t.about.btn_security}
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 2. Rekam Jejak & Operasi */}
      <ExperienceSection />

      {/* 3. Akademik & Weaponry */}
      <EducationSection />

      {/* 4. Skill Arsenal */}
      <Skills />

      {/* 5. Karya Pilihan */}
      <section id="karya" className="wrap section">
        <ScrollReveal>
          <div className="section-head">
            <div>
              <span className="evidence-stamp mb-3">{t.works.stamp}</span>
              <h2>{t.works.title}</h2>
              <p className="text-xs font-mono font-bold text-[#ffe600] tracking-[0.2em] uppercase mt-1">
                {t.works.sub}
              </p>
            </div>
            <Link href="/design" className="view-all-link">
              {t.works.full_gallery}
            </Link>
          </div>
        </ScrollReveal>
        <Projects />
      </section>

      {/* 6. Publikasi Ilmiah & Riset */}
      <section id="riset" className="wrap section">
        <ScrollReveal>
          <div className="section-head">
            <div>
              <span className="evidence-stamp mb-3">{t.research.stamp}</span>
              <h2>{t.research.title}</h2>
              <p className="text-xs font-mono font-bold text-[#ffe600] tracking-[0.2em] uppercase mt-1">
                {t.research.sub}
              </p>
            </div>
            <Link href="/security#publications" className="view-all-link">
              {t.research.detail}
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PAPERS.map((paper, idx) => (
            <ScrollReveal key={paper.doi} delay={idx * 0.12}>
              <article className="gta-card flex flex-col justify-between h-full">
                <div>
                  <span className="text-xs font-mono font-bold text-[#ff2a85] uppercase tracking-wider block mb-2">
                    {paper.journal} · {paper.issue}
                  </span>
                  <h3 className="text-xl md:text-2xl text-white font-display mb-3">
                    <a
                      href={"https://doi.org/" + paper.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#ffe600] transition-colors"
                    >
                      {paper.title} ↗
                    </a>
                  </h3>
                  <p className="text-xs text-[#cfc2d7] mb-4">
                    {t.research.authors}: {paper.authors}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#ff2a85]/20 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#ffe600]">DOI: {paper.doi}</span>
                  <a
                    href={"https://doi.org/" + paper.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold font-mono text-[#ff2a85] hover:text-[#ffe600] transition-colors"
                  >
                    {t.research.access}
                  </a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 7. Statistik Reputasi */}
      <section className="wrap section">
        <ScrollReveal>
          <div className="section-head">
            <div>
              <span className="evidence-stamp mb-3">{t.stats.stamp}</span>
              <h2>{t.stats.title}</h2>
            </div>
          </div>
          <dl className="stats">
            <div className="stat-item">
              <dt>{t.stats.stat1}</dt>
              <dd>2×</dd>
            </div>
            <div className="stat-item">
              <dt>{t.stats.stat2}</dt>
              <dd>2025</dd>
            </div>
            <div className="stat-item">
              <dt>{t.stats.stat3}</dt>
              <dd>350+</dd>
            </div>
            <div className="stat-item">
              <dt>{t.stats.stat4}</dt>
              <dd>4+</dd>
            </div>
          </dl>
        </ScrollReveal>
      </section>

      {/* 8. Vicestar Stream Feed */}
      <ScrollReveal className="wrap pt-10 pb-6 border-t border-[#ff2a85]/20">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-mono font-bold text-[#ff2a85] tracking-widest uppercase">
            {t.vicestar.title}
          </span>
          <span className="text-xs text-[#ffe600] font-mono font-bold">{t.vicestar.watching}</span>
        </div>
        <VicestarComments />
      </ScrollReveal>
    </main>
  );
}
