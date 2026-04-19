import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-x-3">
            <Link href="/">
              <Image src="/candexa_logo.PNG" alt="Candexa AI" width={140} height={32} className="h-8 w-auto object-contain" />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-x-8 text-sm font-medium text-[#6B7280]">
            <Link href="#" className="hover:text-[#1A1A1A]">Products</Link>
            <Link href="#" className="hover:text-[#1A1A1A]">Industries</Link>
            <Link href="#" className="hover:text-[#1A1A1A]">Partners</Link>
            <Link href="#" className="hover:text-[#1A1A1A]">Resources</Link>
            <Link href="#" className="hover:text-[#1A1A1A]">Audit Service</Link>
          </div>

          <Link
            href="/community"
            className="bg-[#1A1A1A] hover:bg-black text-white px-6 py-2.5 rounded-2xl text-sm font-semibold transition-all"
          >
            Sign In
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 bg-[#F9FAFB]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter text-[#1A1A1A] leading-none mb-6">
            Source & Hire Talents,<br />
            right from your <span className="text-[#FF823C]">Email Inbox</span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-[#6B7280] leading-relaxed mb-12">
            Candexa AI brings the future of work to your inbox with AI Agents that converts your email 
            to an AI-Powered ATS in one click.
          </p>

          <div className="flex items-center justify-center gap-x-6 flex-wrap">
            <Link
              href="/community"
              className="group bg-[#FF823C] hover:bg-[#FF823C]/90 transition-all text-white px-10 py-4 rounded-2xl font-semibold flex items-center gap-x-3 text-lg shadow-sm"
            >
              Get Early Access
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>

            <Link
              href="#"
              className="text-[#1A1A1A] hover:text-[#FF823C] font-medium flex items-center gap-x-2 text-lg transition-colors"
            >
              Speak with the team
              <span className="text-xl">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Decorative lines */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF823C]/30 to-transparent" />
          <div className="absolute -bottom-20 left-1/2 w-[800px] h-[800px] border border-[#FF823C]/10 rounded-full -translate-x-1/2" />
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-center text-sm font-medium text-[#6B7280] mb-8 tracking-widest">
            RESEARCH-DRIVEN AND SCIENCE BACKED INNOVATION SUPPORTED BY INDUSTRY LEADERS FROM
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-10 opacity-90">
            <div className="font-semibold text-lg">INSEAD</div>
            <div className="font-semibold text-lg">Berkeley</div>
            <div className="flex items-center gap-x-2">
              <span className="font-bold text-xl">DU</span>
              <span>Discrimination Watch</span>
            </div>
            <div className="flex items-center gap-x-1.5">
              <span className="text-red-600 font-bold text-2xl">A</span>
              <span className="font-semibold">NTLER</span>
            </div>
            <div className="font-medium">torre.ai</div>
            <div className="font-medium">SOFTDROOM AI</div>
          </div>
        </div>
      </section>

      {/* Community Teaser */}
      <div className="text-center py-12 bg-[#F9FAFB]">
        <Link
          href="/community"
          className="inline-flex items-center gap-x-3 text-[#FF823C] hover:text-[#FF823C]/80 font-semibold text-lg"
        >
          Explore our Recruiter Community &rarr;
        </Link>
      </div>
    </div>
  );
}