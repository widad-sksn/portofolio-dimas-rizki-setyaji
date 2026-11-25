import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio Desain & Fotografi",
  description: "Koleksi karya desain grafis, identitas visual, kampanye digital, dan fotografi Dimas Rizki Setyaji.",
};

export default function DesignLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
