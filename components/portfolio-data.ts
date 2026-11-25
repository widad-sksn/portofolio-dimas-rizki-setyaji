export type Locale = "id" | "en";

export interface ProjectItem {
  name: string;
  type: string;
  image: string;
  tag?: string;
  desc?: string;
}

export interface PaperItem {
  title: string;
  authors: string;
  journal: string;
  issue: string;
  doi: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  type: "security" | "it" | "leadership" | "design";
  badge: string;
  description: string;
  highlights: string[];
  tools?: string[];
}

export interface AchievementItem {
  title: string;
  category: string;
  year: string;
  level: string;
  badge: string;
  description: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  focus: string;
}

export interface SkillTier {
  category: string;
  tier: string;
  stars: number;
  tag: string;
  color: string;
  items: string[];
}

export const PROFILE = {
  name: "Dimas Rizki Setyaji",
  callsign: "DRS // SyntaxError335",
  title: "Creative Designer × Cyber Security",
  sub: "Specialist in Information Systems, Incident Response & Visual Direction",
  location: "Vice City Sector · Yogyakarta & Gresik, ID",
  bio: {
    id: "Praktisi TI dan Desainer Visual dengan rekam jejak multidisiplin: operasi respon insiden keamanan siber (CSIRT), arsitektur deployment infrastruktur rumah sakit berbasis Docker & BPJS, riset forensik digital NIST, serta perancangan 350+ aset kampanye visual dan UI/UX.",
    en: "IT practitioner and Visual Designer with a multidisciplinary track record: cyber security incident response operations (CSIRT), Docker & BPJS healthcare infrastructure deployment, NIST digital forensics research, and 350+ visual campaign assets & UI/UX designs.",
  },
  contact: {
    email: "dimasrizkisetyaji@gmail.com",
    phone: "0822-3444-1456",
    github: "https://github.com/Sholis986g",
    linkedin: "https://linkedin.com/in/dimas-rizki-setyaji",
    instagram: "https://instagram.com/dimrizji",
  },
  education: [
    {
      school: "Universitas 'Aisyiyah Yogyakarta",
      degree: "S1 Teknologi Informasi (Bachelor of IT)",
      period: "2022 — 2026",
      focus: {
        id: "Sistem Informasi, Keamanan Siber, Database SQL, Arsitektur Aplikasi & Jaringan",
        en: "Information Systems, Cyber Security, SQL Databases, Application Architecture & Networks",
      },
    },
    {
      school: "SMKN 1 Cerme Gresik",
      degree: "Jurusan Multimedia",
      period: "2019 — 2022",
      focus: {
        id: "Desain Grafis, Fotografi, Ilustrasi Vector, Videografi & Audio Editing",
        en: "Graphic Design, Photography, Vector Illustration, Videography & Audio Editing",
      },
    },
  ],
  gear: [
    { name: "Sony A6300", spec: "Cinematic portrait, Lightroom & Photoshop custom color grading" },
    { name: "Fujifilm X-S20", spec: "Natural SOOC (Straight Out Of Camera) film simulation aesthetics" },
  ],
};

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: "Medali Perak (Juara 2)",
    category: "Software Application Development",
    year: "2024",
    level: "Nasional",
    badge: "MISSION PASSED",
    description: "Rakornas AST PTMA Yogyakarta — Inovasi pengembangan sistem aplikasi perangkat lunak.",
  },
  {
    title: "Medali Perak (Juara 2)",
    category: "Software Application Development",
    year: "2023",
    level: "Nasional",
    badge: "MISSION PASSED",
    description: "Rakornas AST PTMA Bukittinggi — Kompetisi pengembangan aplikasi inovatif tingkat nasional.",
  },
  {
    title: "Finalis / Peserta Gemastik XVIII",
    category: "Cyber Security (CTF)",
    year: "2025",
    level: "Nasional",
    badge: "CTF CHALLENGER",
    description: "Puspresnas Kemendikbudristek — Tantangan Capture The Flag, analisis celah keamanan, dan kriptografi.",
  },
  {
    title: "Peserta Gemastik XV & XVI",
    category: "UI/UX Design",
    year: "2022 — 2023",
    level: "Nasional",
    badge: "UI/UX CONTENDER",
    description: "Puspresnas Kemendikbudristek — Perancangan produk digital inovatif dan user experience.",
  },
];

const ACHIEVEMENTS_EN: AchievementItem[] = [
  {
    title: "Silver Medal (2nd Place)",
    category: "Software Application Development",
    year: "2024",
    level: "National",
    badge: "MISSION PASSED",
    description: "National Meeting of AST PTMA Yogyakarta — Software application development innovation.",
  },
  {
    title: "Silver Medal (2nd Place)",
    category: "Software Application Development",
    year: "2023",
    level: "National",
    badge: "MISSION PASSED",
    description: "National Meeting of AST PTMA Bukittinggi — National software innovation competition.",
  },
  {
    title: "Finalist / Contestant Gemastik XVIII",
    category: "Cyber Security (CTF)",
    year: "2025",
    level: "National",
    badge: "CTF CHALLENGER",
    description: "National Achievement Center Puspresnas — Capture The Flag challenges, vulnerability analysis, and cryptography.",
  },
  {
    title: "Contestant Gemastik XV & XVI",
    category: "UI/UX Design",
    year: "2022 — 2023",
    level: "National",
    badge: "UI/UX CONTENDER",
    description: "National Achievement Center Puspresnas — Digital product innovation and user experience design.",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Tim Operasi Keamanan Siber & Analis Insiden",
    organization: "BPTSI CSIRT · Universitas 'Aisyiyah Yogyakarta",
    period: "Mar 2024 — Agu 2026",
    type: "security",
    badge: "LEONIDA SECURITY",
    description:
      "Mendukung operasi pemantauan keamanan, analisis insiden siber, evaluasi kerentanan sistem, serta penyusunan dokumentasi teknis remediasi.",
    highlights: [
      "Monitoring log & deteksi aktivitas anomali pada infrastruktur kampus",
      "Investigasi bukti serangan digital dan analisis forensik artefak sistem",
      "Penyusunan Standard Operating Procedure (SOP) tindak lanjut insiden",
    ],
    tools: ["Linux", "Wireshark", "MITRE ATT&CK", "NIST SP 800-86", "Incident Response"],
  },
  {
    role: "System Architecture & DevOps Support",
    organization: "RSU Queen Latifa Yogyakarta · Sistem Antrian & BPJS",
    period: "Okt 2024 — Jan 2025",
    type: "it",
    badge: "SYS ARCHITECT",
    description:
      "Merancang arsitektur micro-services antrian online rumah sakit yang terintegrasi langsung dengan API Bridging BPJS Kesehatan berbasis Docker container.",
    highlights: [
      "Deployment multi-container Docker untuk skalabilitas dan isolasi dependensi",
      "Integrasi bridging endpoint web service BPJS Kesehatan & database MySQL",
      "Optimalisasi ketersediaan layanan dan konfigurasi server Linux produksi",
    ],
    tools: ["Docker", "Linux", "MySQL", "BPJS Bridging API", "Git", "DevOps"],
  },
  {
    role: "Gubernur BEM Fakultas Sains & Teknologi",
    organization: "BEM FST · Universitas 'Aisyiyah Yogyakarta",
    period: "2025 — 2026",
    type: "leadership",
    badge: "HIGH COMMAND",
    description:
      "Memimpin eksekutif mahasiswa tingkat fakultas membawahi berbagai divisi kerja, koordinasi lintas institusi, serta advokasi mahasiswa.",
    highlights: [
      "Mengorkestrasi program strategis sains dan teknologi lintas prodi",
      "Manajemen komunikasi dengan dekanat, stakeholder kampus, dan organisasi eksternal",
    ],
    tools: ["Strategic Leadership", "Public Relations", "Crisis Management"],
  },
  {
    role: "Ketua Himpunan Mahasiswa Teknologi Informasi",
    organization: "ITECH · Universitas 'Aisyiyah Yogyakarta",
    period: "2024 — 2025",
    type: "leadership",
    badge: "DIVISION CHIEF",
    description:
      "Memimpin organisasi kemahasiswaan ITECH (Teknologi Informasi), menginisiasi workshop teknis, kompetisi internal, dan pengembangan kapasitas mahasiswa.",
    highlights: [
      "Penyelenggaraan bootcamp pemrograman, keamanan siber, dan desain produk",
      "Peningkatan partisipasi mahasiswa dalam ajang kompetisi nasional seperti Gemastik",
    ],
    tools: ["Organization Ops", "Event Direction", "Team Mentoring"],
  },
  {
    role: "Koordinator Kurikulum Komunitas Cyber Security",
    organization: "Komunitas Mpu Gandrinx",
    period: "2024 — 2025",
    type: "security",
    badge: "CYBER CADRE",
    description:
      "Menyusun silabus pembelajaran etika peretasan, latihan Capture Flag (CTF), reverse engineering, dan pengenalan forensik digital.",
    highlights: [
      "Penyusunan modul latihan web exploitation, cryptography, dan forensics",
      "Fasilitasi simulasi uji penetrasi sistem secara legal dan etis",
    ],
    tools: ["CTF Challenges", "Security Syllabus", "Pentest Fundamentals"],
  },
  {
    role: "Digital Marketing, Creative Visual & Web Specialist",
    organization: "HITS Yogyakarta & Institutional Clients",
    period: "2022 — Sekarang",
    type: "design",
    badge: "MEDIA PRODUCER",
    description:
      "Mengelola strategi konten, kampanye promosi digital PMB, produksi 350+ aset visual, materi cetak (banner/apparel), serta maintenance portal web WordPress.",
    highlights: [
      "Klien utama: Prodi TI, Fakultas Sains & Teknologi, dan S1 Bioteknologi UNISA",
      "Perancangan visual konsisten untuk Meta Ads, feed Instagram, dan publikasi resmi",
      "Pengembangan dan pemeliharaan landing page berbasis WordPress dan HTML/CSS",
    ],
    tools: ["Photoshop", "Illustrator", "Figma", "WordPress", "Meta Ads", "Canva"],
  },
];

const EXPERIENCES_EN: ExperienceItem[] = [
  {
    role: "Cyber Security Operations Team & Incident Analyst",
    organization: "BPTSI CSIRT · Universitas 'Aisyiyah Yogyakarta",
    period: "Mar 2024 — Aug 2026",
    type: "security",
    badge: "LEONIDA SECURITY",
    description:
      "Supported security monitoring operations, cyber incident triage, system vulnerability assessments, and technical remediation SOP drafting.",
    highlights: [
      "Log monitoring & anomaly detection across campus server infrastructure",
      "Digital attack evidence investigation and system artifact forensic analysis",
      "Formulation of incident response Standard Operating Procedures (SOP)",
    ],
    tools: ["Linux", "Wireshark", "MITRE ATT&CK", "NIST SP 800-86", "Incident Response"],
  },
  {
    role: "System Architecture & DevOps Support",
    organization: "RSU Queen Latifa Yogyakarta · Queue System & BPJS",
    period: "Oct 2024 — Jan 2025",
    type: "it",
    badge: "SYS ARCHITECT",
    description:
      "Architected hospital online queue micro-services integrated with BPJS Health Bridging API running on Docker containers.",
    highlights: [
      "Multi-container Docker deployment for scalability and dependency isolation",
      "Bridging integration with BPJS Health web services & MySQL databases",
      "Service uptime optimization and production Linux server administration",
    ],
    tools: ["Docker", "Linux", "MySQL", "BPJS Bridging API", "Git", "DevOps"],
  },
  {
    role: "Governor of BEM Faculty of Science & Technology",
    organization: "BEM FST · Universitas 'Aisyiyah Yogyakarta",
    period: "2025 — 2026",
    type: "leadership",
    badge: "HIGH COMMAND",
    description:
      "Led student faculty executive board directing multiple divisions, cross-institutional collaborations, and student advocacy.",
    highlights: [
      "Orchestrated cross-departmental science & technology strategic programs",
      "Liaison with university deanery, campus stakeholders, and external organizations",
    ],
    tools: ["Strategic Leadership", "Public Relations", "Crisis Management"],
  },
  {
    role: "President of Information Technology Student Association",
    organization: "ITECH · Universitas 'Aisyiyah Yogyakarta",
    period: "2024 — 2025",
    type: "leadership",
    badge: "DIVISION CHIEF",
    description:
      "Led IT student association (ITECH), organized technical workshops, internal hackathons, and student competency development.",
    highlights: [
      "Conducted bootcamps in programming, cyber security, and product design",
      "Increased student participation in national competitions like Gemastik",
    ],
    tools: ["Organization Ops", "Event Direction", "Team Mentoring"],
  },
  {
    role: "Curriculum Coordinator for Cyber Security Community",
    organization: "Mpu Gandrinx Cyber Community",
    period: "2024 — 2025",
    type: "security",
    badge: "CYBER CADRE",
    description:
      "Developed curriculum for ethical hacking, Capture The Flag (CTF) training, reverse engineering, and digital forensics.",
    highlights: [
      "Authored practice modules on web exploitation, cryptography, and forensics",
      "Facilitated ethical and legal penetration testing simulations",
    ],
    tools: ["CTF Challenges", "Security Syllabus", "Pentest Fundamentals"],
  },
  {
    role: "Digital Marketing, Creative Visual & Web Specialist",
    organization: "HITS Yogyakarta & Institutional Clients",
    period: "2022 — Present",
    type: "design",
    badge: "MEDIA PRODUCER",
    description:
      "Managed content strategy, digital admission campaigns, 350+ visual asset production, print media (banners/apparel), and WordPress portal maintenance.",
    highlights: [
      "Key clients: IT Dept, Faculty of Science & Tech, and UNISA Biotechnology",
      "Consistent visual design for Meta Ads, Instagram feeds, and official publications",
      "Developed and maintained WordPress and HTML/CSS landing pages",
    ],
    tools: ["Photoshop", "Illustrator", "Figma", "WordPress", "Meta Ads", "Canva"],
  },
];

export const PAPERS: PaperItem[] = [
  {
    title: "Digital Forensic Analysis of Keylogger Attack Evidence on Websites Using NIST Method",
    authors: "Arizona Firdonsyah & Dimas Rizki Setyaji",
    journal: "Prisma Sains: Jurnal Pengkajian Ilmu dan Pembelajaran MIPA",
    issue: "Vol. 14 No. 2 · April 2026",
    doi: "10.33394/j-ps.v14i2.19919",
  },
  {
    title: "Perancangan Arsitektur Sistem Antrian Online Terintegrasi BPJS di RSU Queen Latifa Berbasis Docker",
    authors: "Dimas Rizki Setyaji & Danur Wijayanto",
    journal: "Jurnal Teknik Mesin, Industri, Elektro dan Informatika (JTMEI)",
    issue: "Vol. 4 No. 2 · 2025",
    doi: "10.55606/jtmei.v4i2.4890",
  },
];

export const SKILL_TIERS: SkillTier[] = [
  {
    category: "Cyber Security & Forensik",
    tier: "5 STARS WANTED",
    stars: 5,
    tag: "SPECIAL OPS",
    color: "#ff2a85",
    items: [
      "Analisis Bukti Forensik Digital (NIST SP 800-86)",
      "MITRE ATT&CK Framework Mapping",
      "Incident Response & Investigasi Serangan",
      "Wireshark & Network Packet Inspection",
      "Web Security (Fileless Malware / DB Injection)",
      "Capture The Flag (CTF) Problem Solving",
    ],
  },
  {
    category: "Infrastruktur, DevOps & IT",
    tier: "4 STARS WANTED",
    stars: 4,
    tag: "SYS OPS",
    color: "#ff6e3a",
    items: [
      "Docker Containerization & Multi-Service Orchestration",
      "Linux Server Administration (Ubuntu/Debian)",
      "Integrasi Web Service BPJS Kesehatan (Bridging)",
      "Database MySQL / SQL Schema & Validation",
      "PHP & Laravel Web Framework",
      "Git Version Control & Deployment Workflows",
    ],
  },
  {
    category: "Desain Grafis & Creative Direction",
    tier: "5 STARS WANTED",
    stars: 5,
    tag: "VICE ART",
    color: "#ffe600",
    items: [
      "Identitas Visual & Kampanye Digital Branding",
      "Figma UI/UX Prototyping & Design Systems",
      "Adobe Photoshop (Manipulasi & Color Grading)",
      "Adobe Illustrator (Vektor & Layout Cetak)",
      "Desain Produksi Cetak (X-Banner, Billboard, Apparel)",
      "Fotografi Cinematic (Sony A6300 & Fuji X-S20)",
    ],
  },
];

const SKILL_TIERS_EN: SkillTier[] = [
  {
    category: "Cyber Security & Forensics",
    tier: "5 STARS WANTED",
    stars: 5,
    tag: "SPECIAL OPS",
    color: "#ff2a85",
    items: [
      "Digital Forensics Evidence Analysis (NIST SP 800-86)",
      "MITRE ATT&CK Framework Mapping",
      "Incident Response & Attack Investigation",
      "Wireshark & Network Packet Inspection",
      "Web Security (Fileless Malware / DB Injection)",
      "Capture The Flag (CTF) Problem Solving",
    ],
  },
  {
    category: "Infrastructure, DevOps & IT",
    tier: "4 STARS WANTED",
    stars: 4,
    tag: "SYS OPS",
    color: "#ff6e3a",
    items: [
      "Docker Containerization & Multi-Service Orchestration",
      "Linux Server Administration (Ubuntu/Debian)",
      "BPJS Health Web Service Integration (Bridging)",
      "MySQL Database / SQL Schema & Validation",
      "PHP & Laravel Web Framework",
      "Git Version Control & Deployment Workflows",
    ],
  },
  {
    category: "Graphic Design & Creative Direction",
    tier: "5 STARS WANTED",
    stars: 5,
    tag: "VICE ART",
    color: "#ffe600",
    items: [
      "Visual Identity & Digital Campaign Branding",
      "Figma UI/UX Prototyping & Design Systems",
      "Adobe Photoshop (Manipulation & Color Grading)",
      "Adobe Illustrator (Vector & Print Layout)",
      "Print Production Design (Banners, Billboards, Apparel)",
      "Cinematic Photography (Sony A6300 & Fuji X-S20)",
    ],
  },
];

export function getExperiences(locale: Locale): ExperienceItem[] {
  return locale === "en" ? EXPERIENCES_EN : EXPERIENCES;
}

export function getAchievements(locale: Locale): AchievementItem[] {
  return locale === "en" ? ACHIEVEMENTS_EN : ACHIEVEMENTS;
}

export function getSkillTiers(locale: Locale): SkillTier[] {
  return locale === "en" ? SKILL_TIERS_EN : SKILL_TIERS;
}

export function getEducation(locale: Locale) {
  return PROFILE.education.map((item) => ({
    school: item.school,
    degree: item.degree,
    period: item.period,
    focus: item.focus[locale],
  }));
}
