import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Vazirmatn } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const vazirmatn = Vazirmatn({ subsets: ["arabic"], variable: "--font-persian", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  title: "خوشه | گل‌فروشی آنلاین",
  description: "گل‌های تازه، دست‌چین و طراحی‌شده برای لحظه‌های ماندگار.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fa" dir="rtl" className={`${jakarta.variable} ${vazirmatn.variable} ${playfair.variable}`}><body className="min-h-screen bg-ivory text-ink antialiased">{children}</body></html>;
}
