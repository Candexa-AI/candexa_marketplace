import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-10 md:pt-14 px-4 md:px-10 pb-8 text-slate-400">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[180px_1fr_1fr_1fr_1fr] gap-x-8 gap-y-10 max-w-[1200px] mx-auto mb-10">
        <div>
          <Link href="/" className="no-underline flex items-center">
            <Image 
              src="/candexa_logo.PNG" 
              alt="Candexa AI" 
              width={152}
              height={40}
              className="h-10 w-auto object-contain transition-transform hover:scale-105"
            />
          </Link>
        </div>
        
        <div className="flex flex-col">
          <h4 className="text-[14px] font-bold text-white mb-[18px] tracking-[0.2px]">Quick Links</h4>
          <ul className="list-none flex flex-col gap-[11px] p-0 m-0">
            <li><Link href="#" className="text-[13.5px] text-white/60 hover:text-[#ff7a18] transition-colors no-underline">HR Brand Card</Link></li>
            <li><Link href="#" className="text-[13.5px] text-white/60 hover:text-[#ff7a18] transition-colors no-underline">Certifications</Link></li>
            <li><Link href="#" className="text-[13.5px] text-white/60 hover:text-[#ff7a18] transition-colors no-underline">Gigs</Link></li>
            <li><Link href="/agency-marketplace" className="text-[13.5px] text-white/60 hover:text-[#ff7a18] transition-colors no-underline">Agency Marketplace</Link></li>
            <li><Link href="#" className="text-[13.5px] text-white/60 hover:text-[#ff7a18] transition-colors no-underline">Solution Marketplace</Link></li>
            <li><Link href="#" className="text-[13.5px] text-white/60 hover:text-[#ff7a18] transition-colors no-underline">Events</Link></li>
          </ul>
        </div>
        
        <div className="flex flex-col">
          <h4 className="text-[14px] font-bold text-white mb-[18px] tracking-[0.2px]">Resources</h4>
          <ul className="list-none flex flex-col gap-[11px] p-0 m-0">
            <li><Link href="#" className="text-[13.5px] text-white/60 hover:text-[#ff7a18] transition-colors no-underline">HR Resources</Link></li>
            <li><Link href="#" className="text-[13.5px] text-white/60 hover:text-[#ff7a18] transition-colors no-underline">Blogs</Link></li>
            <li><Link href="#" className="text-[13.5px] text-white/60 hover:text-[#ff7a18] transition-colors no-underline">Job Descriptions</Link></li>
            <li><Link href="#" className="text-[13.5px] text-white/60 hover:text-[#ff7a18] transition-colors no-underline">HR Glossary</Link></li>
            <li><Link href="#" className="text-[13.5px] text-white/60 hover:text-[#ff7a18] transition-colors no-underline">HR Letter Templates</Link></li>
            <li><Link href="#" className="text-[13.5px] text-white/60 hover:text-[#ff7a18] transition-colors no-underline">HR Policy Templates</Link></li>
            <li><Link href="#" className="text-[13.5px] text-white/60 hover:text-[#ff7a18] transition-colors no-underline">HR Checklists</Link></li>
            <li><Link href="#" className="text-[13.5px] text-white/60 hover:text-[#ff7a18] transition-colors no-underline">HR Tools</Link></li>
          </ul>
        </div>
        
        <div className="flex flex-col">
          <h4 className="text-[14px] font-bold text-white mb-[18px] tracking-[0.2px]">Company</h4>
          <ul className="list-none flex flex-col gap-[11px] p-0 m-0">
            <li><Link href="#" className="text-[13.5px] text-white/60 hover:text-[#ff7a18] transition-colors no-underline">Why Candexa AI?</Link></li>
            <li><Link href="#" className="text-[13.5px] text-white/60 hover:text-[#ff7a18] transition-colors no-underline">About Us</Link></li>
            <li><Link href="#" className="text-[13.5px] text-white/60 hover:text-[#ff7a18] transition-colors no-underline">Contact Us</Link></li>
            <li><Link href="#" className="text-[13.5px] text-white/60 hover:text-[#ff7a18] transition-colors no-underline">Write for Us</Link></li>
            <li><Link href="#" className="text-[13.5px] text-white/60 hover:text-[#ff7a18] transition-colors no-underline">Privacy Policy</Link></li>
            <li><Link href="#" className="text-[13.5px] text-white/60 hover:text-[#ff7a18] transition-colors no-underline">Terms & Conditions</Link></li>
          </ul>
        </div>
        
        <div className="flex flex-col">
          <h4 className="text-[14px] font-bold text-white mb-[14px]">Subscribe</h4>
          <input 
            className="w-full p-[11px_14px] border border-white/15 rounded-lg bg-white/5 text-white font-sans text-[14px] mb-[10px] focus:outline-none focus:border-[#ff7a18] placeholder:text-white/40" 
            type="email" 
            placeholder="Email" 
          />
          <button className="w-full p-[11px] bg-gradient-to-br from-[#ff7a18] to-[#e66a10] text-white font-bold border-none rounded-lg font-sans text-[14px] cursor-pointer transition-all mb-[10px]">
            Subscribe Now
          </button>
          <p className="text-[12px] text-white/45 leading-[1.5]">We only send interesting and relevant emails.</p>
          <div className="flex items-center gap-[10px] mt-[14px]">
            <span className="text-[13.5px] text-white/60">Follow Us:</span>
            <div className="w-[34px] h-[34px] rounded-lg bg-white/10 flex items-center justify-center cursor-pointer hover:bg-[#0a66c2] transition-colors text-white text-[14px] font-bold">
              in
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-slate-800 pt-[22px] max-w-[1200px] mx-auto text-[13px] text-slate-500 flex items-center">
        © 2026 <Link href="#" className="text-[#ff7a18] no-underline ml-1">Candexa AI</Link>. All rights reserved.
      </div>
    </footer>
  );
}
