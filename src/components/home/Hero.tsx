'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const heroTechIcons = [
  { name: 'Flutter', url: 'https://cdn.simpleicons.org/flutter/38bdf8', shadow: 'rgba(56,189,248,0.15)' },
  { name: 'Dart', url: 'https://cdn.simpleicons.org/dart/0284c7', shadow: 'rgba(2,132,199,0.15)' },
  { name: 'Firebase', url: 'https://cdn.simpleicons.org/firebase/f59e0b', shadow: 'rgba(245,158,11,0.15)' },
  { name: 'Supabase', url: 'https://cdn.simpleicons.org/supabase/10b981', shadow: 'rgba(16,185,129,0.15)' },
  { name: 'Go', url: 'https://cdn.simpleicons.org/go/06b6d4', shadow: 'rgba(6,182,212,0.15)' },
  { name: 'React', url: 'https://cdn.simpleicons.org/react/06b6d4', shadow: 'rgba(6,182,212,0.15)' },
  { name: 'Tailwind CSS', url: 'https://cdn.simpleicons.org/tailwindcss/0ea5e9', shadow: 'rgba(14,165,233,0.15)' },
  { name: 'Swift', url: 'https://cdn.simpleicons.org/swift/f05138', shadow: 'rgba(240,81,56,0.15)' },
  { name: 'Kotlin', url: 'https://cdn.simpleicons.org/kotlin/a855f7', shadow: 'rgba(168,85,247,0.15)' },
  { name: 'Python', url: 'https://cdn.simpleicons.org/python/eab308', shadow: 'rgba(234,179,8,0.15)' },
  { name: 'Git', url: 'https://cdn.simpleicons.org/git/ef4444', shadow: 'rgba(239,68,68,0.15)' },
  { name: 'GitHub', url: 'https://cdn.simpleicons.org/github/ffffff', shadow: 'rgba(255,255,255,0.1)' },
  { name: 'Rust', url: 'https://cdn.simpleicons.org/rust/ffffff', shadow: 'rgba(255,255,255,0.1)' },
  { name: 'DotNet', url: 'https://cdn.simpleicons.org/dotnet/8b5cf6', shadow: 'rgba(139,92,246,0.15)' }
];

export function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-10 md:px-20 overflow-hidden bg-[#050505]">
      {/* Central Blue Sphere Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute inset-10 md:inset-20 border border-blue-500/5 rounded-full" />
      </div>

      <div className="w-full z-10 flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl lg:text-9xl font-medium text-white tracking-tight mb-8 leading-[0.95]"
        >
          Custom Software.<br />
          <span className="text-[#3b82f6]">Built Without Limits.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-2xl text-gray-500 mb-12 max-w-3xl leading-snug font-medium"
        >
          We design and develop powerful websites, apps, and platforms<br className="hidden md:block" /> for businesses that need more than off-the-shelf solutions.
        </motion.p>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 0.4 }}
        >
          <Link href="/contact">
            <button className="px-10 py-5 bg-[#F5F6EE] text-black rounded-full font-bold tracking-widest uppercase text-[10px] transition-all hover:scale-105 active:scale-95 flex items-center gap-3">
              Start Your Project <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Scrolling Tech Stack Bar (Replacing static bar) */}
      <div className="absolute bottom-0 left-0 w-full h-24 overflow-hidden border-t border-white/5 bg-black/40 backdrop-blur-md flex items-center">
        <div className="absolute left-0 top-0 w-24 md:w-56 h-full bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-24 md:w-56 h-full bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          animate={{ x: ["-50%", "0%"] }} 
          transition={{ ease: "linear", duration: 45, repeat: Infinity }} 
          className="flex whitespace-nowrap gap-5 w-max px-5"
        >
          {[...heroTechIcons, ...heroTechIcons, ...heroTechIcons].map((item, index) => (
            <div 
              key={index}
              style={{ boxShadow: `0 0 12px ${item.shadow}` }} 
              className="flex items-center justify-center w-[4.5rem] h-[4.5rem] bg-[#090b10] border border-white/5 rounded-[1.25rem] flex-shrink-0 hover:bg-[#11141d] hover:border-white/20 transition-all duration-300 hover:scale-105 group relative"
            >
              <img src={item.url} alt={item.name} className="w-9 h-9 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
