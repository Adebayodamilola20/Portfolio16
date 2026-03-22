'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function WorkWithUs() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative py-32 md:py-48 bg-[#EAEBE6] overflow-hidden text-black border-b border-black/10"
    >
      {/* Texture Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.5] pointer-events-none mix-blend-multiply" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='1' height='1' fill='%23000' fill-opacity='0.15'/%3E%3C/svg%3E")` }} 
      />

      {/* Abstract Glowing Wave Simulation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-end justify-center mix-blend-screen opacity-70">
        <div className="w-[150%] h-[70%] absolute -bottom-[20%] blur-[80px] bg-gradient-to-t from-white/90 via-sky-100/50 to-transparent rounded-[100%]" />
        <div className="w-[100%] h-[50%] absolute -bottom-[10%] left-[-10%] blur-[100px] bg-cyan-100/40 rounded-[100%] transform -rotate-12" />
        <div className="w-[100%] h-[40%] absolute -bottom-[10%] right-[-10%] blur-[90px] bg-white/80 rounded-[100%] transform rotate-12" />
      </div>
      
      {/* Additional Dot Wave Overlay for the sci-fi look */}
      <div 
        className="absolute inset-x-0 bottom-0 h-1/2 opacity-[0.15] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxjaXJjbGUgY3g9IjEiIGN5PSIxIiByPSIxIiBmaWxsPSIjMDAwIi8+PC9zdmc+')] [mask-image:radial-gradient(ellipse_at_bottom,black_20%,transparent_70%)] pointer-events-none" 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <span className="text-[#f97316] font-mono text-[10px] tracking-[0.2em] font-bold uppercase mb-8 block">
          Work With Us
        </span>
        <h2 className="text-5xl md:text-[5rem] lg:text-[6rem] leading-[1.05] font-light tracking-tight mb-8 text-[#111]">
          Talented developers.<br />
          Innovative solutions. Real impact.
        </h2>
        <p className="text-gray-900 text-lg md:text-xl font-medium max-w-2xl mb-12 leading-relaxed">
          Join our team of engineers and designers building<br className="hidden md:block" />
          cutting-edge software solutions for clients worldwide.
        </p>

        <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 border border-black/30 bg-[#F4F3ED] rounded-full font-mono text-[10px] font-bold uppercase tracking-[0.15em] hover:bg-black hover:text-white transition-all group shadow-sm">
          Get In Touch
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      </div>
    </motion.section>
  );
}
