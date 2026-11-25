import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lab Security & Operasi IT",
  description: "Riset forensik digital NIST, respons insiden CSIRT, dan arsitektur infrastruktur Docker Dimas Rizki Setyaji.",
};

export default function SecurityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
