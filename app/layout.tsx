import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import ChatBot from "@/components/shared/ChatBot";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
});

export const metadata: Metadata = {
  title: "Candexa Market Place",
  description: "Search Trusted Recruitment & HR Agencies Worldwide. Find the right hiring, staffing, and HR partners — faster, smarter, and globally.",
  icons: [{ url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} ${dmSerifDisplay.variable} font-sans antialiased text-[#1a2e22] bg-white min-h-screen overflow-x-hidden`}>
        {children}
        <ChatBot />
      </body>
    </html>
  );
}