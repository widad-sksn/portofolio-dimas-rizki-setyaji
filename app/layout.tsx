import type { Metadata } from "next";
import localFont from "next/font/local";
import { displayFace } from "./display-font";
import GtaTransition from "../components/GtaTransition";
import SiteNav from "../components/SiteNav";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import { LanguageProvider } from "../components/LanguageContext";
import "./globals.css";

const inter = localFont({
  src: "../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  variable: "--face-body",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Dimas Rizki Setyaji — Creative Designer × Cyber Security",
    template: "%s · Dimas Rizki Setyaji // GTA VI Edition",
  },
  description:
    "Portofolio Dimas Rizki Setyaji bergaya GTA 6: riset keamanan siber, infrastruktur Docker & BPJS, serta karya desain visual dan fotografi sinematik.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${displayFace.variable} ${inter.variable}`}>
      <body>
        <LanguageProvider>
          <ScrollProgress />
          <GtaTransition />
          <a className="skip" href="#utama">
            Lewati navigasi
          </a>

          {/* GTA VI Header Navigation with Integrated HUD */}
          <SiteNav />

          {children}

          {/* GTA VI Footer with Radar HUD */}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
