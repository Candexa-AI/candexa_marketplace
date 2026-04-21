import Navbar from "@/components/shared/Navbar";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans overflow-hidden">
      <Navbar />
      
      <main className="relative pt-24 pb-32 px-5">
        {/* Background Decorative Lines */}
        <div className="absolute top-0 right-0 w-[600px] h-full opacity-30 pointer-events-none select-none">
          <svg viewBox="0 0 400 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M400 100C300 150 250 300 400 450M400 150C320 200 280 320 400 480M400 200C340 250 310 340 400 510M400 250C360 300 340 360 400 540" stroke="#f26e3c" strokeWidth="0.5" strokeOpacity="0.3"/>
          </svg>
        </div>

        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <h1 className="text-[36px] sm:text-[52px] md:text-[68px] font-serif text-slate-900 leading-[1.1] mb-6 tracking-tight px-2">
            Source & Hire Talents, <span className="text-[#ff7a18]">right from your</span>
            <br className="hidden sm:block" />
            Email Inbox
          </h1>
          
          <p className="max-w-[700px] mx-auto text-[15px] sm:text-[17px] md:text-[18px] text-slate-600 leading-relaxed mb-10 md:mb-12 px-4">
            Candexa AI brings the future of work to your inbox with AI Agents that converts 
            your email to an AI-Powered ATS in one click.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 md:mb-24 px-4">
            <button className="w-full sm:w-auto bg-gradient-to-br from-[#ff7a18] to-[#e66a10] text-white px-8 py-4 rounded-xl flex items-center justify-center gap-3 font-bold text-[16px] transition-all active:scale-95">
              <span className="bg-white/20 p-1 rounded-md">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
                </svg>
              </span>
              Get Early Access
            </button>
            <button className="text-[16px] font-bold text-slate-900 flex items-center gap-2 hover:translate-x-1 transition-transform group">
              Speak with the team 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          <div className="pt-20 border-t border-gray-200/50">
            <p className="text-[13px] font-medium text-gray-500 uppercase tracking-widest mb-10">
              Research-driven and science backed innovation supported by industry leaders from
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all">
              <span className="text-[20px] font-bold text-gray-800 tracking-tighter">INSEAD</span>
              <span className="text-[20px] font-bold text-gray-800 tracking-tighter">Berkeley</span>
              <div className="flex flex-col items-start leading-none">
                <span className="text-[18px] font-bold text-gray-800">DU</span>
                <span className="text-[8px] font-medium text-gray-500">Discrimination Watch</span>
              </div>
              <span className="text-[20px] font-bold text-gray-800 tracking-tighter uppercase italic">ANTLER</span>
              <span className="text-[22px] font-bold text-gray-800 tracking-tighter">torre.ai</span>
              <span className="text-[18px] font-bold text-gray-800 tracking-tighter">SOFTBROOM <span className="text-[#ff7a18]">AI</span></span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
