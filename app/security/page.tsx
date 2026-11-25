"use client";
import TrackBanner from "../../components/TrackBanner";
import { PAPERS } from "../../components/portfolio-data";
import { WantedStars } from "../../components/GtaHud";
import { useLanguage } from "../../components/LanguageContext";
import ScrollReveal from "../../components/ScrollReveal";

export default function Security() {
  const { locale } = useLanguage();
  const isEn = locale === "en";

  const practice = [
    {
      title: isEn ? "Incident Response & CSIRT Ops" : "Respons Insiden & CSIRT Ops",
      experience: isEn
        ? "BPTSI CSIRT · Universitas 'Aisyiyah Yogyakarta (2024–2026)"
        : "BPTSI CSIRT · Universitas ‘Aisyiyah Yogyakarta (2024–2026)",
      text: isEn
        ? "Supporting security monitoring, cyber incident analysis, web system vulnerability evaluation, and technical mitigation documentation with the BPTSI team."
        : "Mendukung pemantauan keamanan, analisis insiden siber, evaluasi kerentanan sistem web, dan penyusunan dokumentasi teknis mitigasi bersama tim BPTSI.",
      tools: ["Linux", "Wireshark", "Log Analysis", "MITRE ATT&CK", isEn ? "Incident Docs" : "Dokumentasi Insiden"],
    },
    {
      title: isEn ? "Digital Forensics of Web Attacks" : "Forensik Digital Serangan Web",
      experience: isEn
        ? "Keylogger Attack Evidence Analysis via NIST SP 800-86"
        : "Riset Bukti Serangan Keylogger Berbasis Metode NIST",
      text: isEn
        ? "Investigating fileless malware artifacts injected into WordPress wp_options database tables. Mapping attack chains from Initial Access to Exfiltration based on NIST SP 800-86."
        : "Menginvestigasi artefak fileless malware yang diinjeksi pada tabel wp_options database WordPress. Memetakan rantai serangan dari Initial Access hingga Exfiltration berdasarkan NIST SP 800-86.",
      tools: ["NIST SP 800-86", "WordPress Security", "MITRE ATT&CK", "Database Forensics"],
    },
    {
      title: isEn ? "Systems Architecture & DevOps" : "Arsitektur Layanan & DevOps",
      experience: isEn
        ? "BPJS Integrated Queue System · RSU Queen Latifa"
        : "Sistem Antrian Terintegrasi BPJS · RSU Queen Latifa",
      text: isEn
        ? "Designing Docker-based micro-services architecture for hospital queue reliability and scalability directly connected to BPJS Health web services."
        : "Merancang arsitektur micro-services berbasis Docker untuk keandalan dan skalabilitas sistem antrian rumah sakit yang terhubung langsung dengan web service BPJS Kesehatan.",
      tools: ["Docker", "Linux Ubuntu", "Git", "MySQL", "BPJS Bridging API"],
    },
  ];

  const bootcamps = [
    {
      name: "Sibermuda.idn",
      track: "Cyber Security Attacker",
      year: "2025",
      desc: isEn
        ? "Studied penetration testing foundations, web attack vectors, vulnerability analysis, and ethical hacking methodologies."
        : "Mempelajari konsep dasar penetration testing, metodologi serangan web, eksplorasi celah keamanan, dan etika peretasan.",
    },
    {
      name: "IDCamp",
      track: "DevOps Engineer",
      year: "2024",
      desc: isEn
        ? "In-depth CI/CD pipelines, containerized application orchestration, modern infrastructure, and deployment automation."
        : "Pendalaman alur CI/CD, kontainerisasi aplikasi, infrastruktur modern, dan deployment automation.",
    },
    {
      name: "Dicoding Indonesia",
      track: "Cyber Security Fundamentals",
      year: "2024",
      desc: isEn
        ? "Foundational computer networking, data encryption, the CIA triad, and system security posture."
        : "Prinsip dasar jaringan komputer, enkripsi data, CIA triad, dan postur keamanan sistem.",
    },
  ];

  return (
    <main id="utama">
      <TrackBanner />

      {/* Security Status HUD */}
      <section className="wrap pt-8 pb-4">
        <ScrollReveal>
          <div className="p-4 bg-[#140822]/90 border border-[#ff2a85]/40 rounded-lg flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="rec-dot" />
              <span className="text-xs font-mono font-bold text-[#ffe600] uppercase tracking-wider">
                DEFCON LEVEL // CSIRT READY
              </span>
            </div>
            <WantedStars count={5} active={5} />
          </div>
        </ScrollReveal>
      </section>

      {/* Bidang Praktik */}
      <section id="praktik" className="wrap section">
        <ScrollReveal>
          <div className="section-head">
            <div>
              <span className="evidence-stamp mb-3">CYBER INVESTIGATION & INFRASTRUCTURE</span>
              <h2>{isEn ? "Expertise & Practice Areas" : "Keahlian & Bidang Praktik"}</h2>
            </div>
            <p className="text-sm text-[#cfc2d7] max-w-md">
              {isEn
                ? "Focusing on system reliability, data integrity, and infrastructure resilience against potential cyber threats."
                : "Fokus pada keandalan sistem, integritas data, dan ketahanan infrastruktur dari potensi insiden keamanan siber."}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {practice.map((item, idx) => (
            <ScrollReveal key={item.title} delay={idx * 0.1}>
              <article className="gta-card flex flex-col justify-between h-full">
                <div>
                  <span className="text-xs font-mono font-bold text-[#ff2a85] uppercase tracking-wider block mb-2">
                    {item.experience}
                  </span>
                  <h3 className="text-2xl text-white font-display mb-3">{item.title}</h3>
                  <p className="text-sm text-[#d4c7dc] leading-relaxed mb-4">{item.text}</p>
                </div>

                <div className="pt-3 border-t border-[#ff2a85]/20">
                  <ul className="tool-tags">
                    {item.tools.map((tool) => (
                      <li key={tool}>{tool}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Training & Bootcamps */}
      <section className="wrap section">
        <ScrollReveal>
          <div className="section-head">
            <div>
              <span className="evidence-stamp mb-3">SECURITY CREDENTIALS</span>
              <h2>{isEn ? "Verified Training & Bootcamps" : "Pelatihan & Bootcamp"}</h2>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bootcamps.map((b, idx) => (
            <ScrollReveal key={b.name} delay={idx * 0.1}>
              <div className="gta-card h-full">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-[#ffe600]">{b.year}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#ff2a85]/20 text-[#ff2a85] font-mono font-bold">
                    TRAINING
                  </span>
                </div>
                <h3 className="text-xl font-display text-white mb-1">{b.name}</h3>
                <p className="text-sm font-bold text-[#ff7a45] mb-2">{b.track}</p>
                <p className="text-xs text-[#cfc2d7] leading-relaxed">{b.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="wrap section">
        <ScrollReveal>
          <div className="section-head">
            <div>
              <span className="evidence-stamp mb-3">PEER-REVIEWED SCIENTIFIC JOURNALS</span>
              <h2>{isEn ? "Scientific Research Publications" : "Publikasi Riset Ilmiah"}</h2>
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          {PAPERS.map((p, idx) => (
            <ScrollReveal key={p.doi} delay={idx * 0.1}>
              <article className="gta-card">
                <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                  <span className="text-xs font-mono font-bold text-[#ff7a45] uppercase">
                    {p.journal} · {p.issue}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#ffe600]/20 text-[#ffe600] font-bold">
                    VERIFIED DOI
                  </span>
                </div>
                <h3 className="text-2xl text-white font-display mb-2">
                  <a
                    href={"https://doi.org/" + p.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#ffe600] transition-colors"
                  >
                    {p.title} ↗
                  </a>
                </h3>
                <p className="text-sm text-[#cfc2d7] mb-3">
                  {isEn ? "Authors" : "Penulis"}: {p.authors}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-[#ff2a85]/20">
                  <a
                    href={"https://doi.org/" + p.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono font-bold text-[#ff2a85] hover:text-[#ffe600]"
                  >
                    {isEn ? "Open DOI" : "Buka DOI"}: {p.doi} ↗
                  </a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
}
