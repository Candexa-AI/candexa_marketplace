import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';

export default function CommunityLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-x-3">
            <Image src="/candexa_logo.PNG" alt="Candexa AI" width={140} height={32} className="h-8 w-auto object-contain" />
            <span className="ml-2 text-sm font-medium px-4 py-1.5 bg-orange-100 text-[#FF823C] rounded-3xl">
              Community
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-x-8 text-sm font-medium text-[#6B7280]">
            <Link href="/community" className="hover:text-[#1A1A1A] transition-colors">Marketplace</Link>
            <Link href="/community/submit" className="hover:text-[#1A1A1A] transition-colors">Submit Profile</Link>
          </nav>

          <Link
            href="/"
            className="bg-[#1A1A1A] hover:bg-black text-white px-6 py-2.5 rounded-2xl text-sm font-semibold transition-all"
          >
            Back to Home
          </Link>
        </div>
      </header>
      {children}
    </div>
  );
}