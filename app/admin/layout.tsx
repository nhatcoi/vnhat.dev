import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "../globals.css";

const font = Space_Grotesk({ subsets: ["latin", "vietnamese"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={font.variable}>
      <body className="admin">{children}</body>
    </html>
  );
}
