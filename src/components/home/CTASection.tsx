'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="relative py-40 md:py-64 bg-[#050505] flex items-center justify-center overflow-hidden border-t border-white/5">
      {/* Cosmic Background Simulation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center mix-blend-screen">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15)_0%,rgba(5,5,5,1)_60%)] opacity-80" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-[radial-gradient(ellipse_at_center,rgba(125,211,252,0.1)_0%,transparent_50%)] opacity-60" />
        
        {/* Glow Lines simulating cosmic energy */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/20 to-transparent transform rotate-12 blur-[2px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent transform -rotate-12 blur-[2px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-12">
          <span className="text-white">Let's Build </span>
          <span className="text-[#38bdf8]">Smarter, Faster, Better.</span>
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          <Link 
            href="/contact" 
            className="flex items-center justify-center gap-2 px-8 py-3.5 bg-[#F5F6EE] text-black rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all transform active:scale-95"
          >
            Start Your Project <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link 
            href="/portfolio" 
            className="flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent border border-white/20 text-white rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] hover:bg-white/5 transition-all transform active:scale-95"
          >
            View Our Portfolio <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
