"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 md:px-8 py-4 md:py-5">
        <Link href="/community" className="flex items-center gap-3 shrink-0">
          <Image
            src="/candexa_logo.PNG"
            alt="Candexa AI"
            width={140}
            height={32}
            className="h-8 w-auto object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-gray-500">
          <Link
            href="/community"
            className={`hover:text-gray-900 transition-colors duration-200 ${pathname === "/community" ? "text-gray-900" : ""}`}
          >
            Marketplace
          </Link>
          <Link
            href="/community/submit"
            className={`hover:text-gray-900 transition-colors duration-200 ${pathname === "/community/submit" ? "text-gray-900" : ""}`}
          >
            Submit Profile
          </Link>
        </nav>

        <Link
          href="/community/submit"
          className="bg-gray-900 hover:bg-black text-white px-5 md:px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
        >
          + List Your Agency
        </Link>
      </div>
    </header>
  );
}