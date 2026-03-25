'use client';
import { motion } from 'framer-motion';
import { Lock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ScrollFadeIn } from '@/components/ScrollFadeIn';

export default function ClientPortal() {
  return (
    <ScrollFadeIn className="min-h-screen bg-[#0E0E13] text-white flex items-center justify-center px-6 pt-20">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md w-full p-16 rounded-[3rem] border border-white/5 bg-white/[0.02] text-center shadow-2xl shadow-black/50">
        <div className="w-20 h-20 bg-white/[0.05] rounded-[2rem] flex items-center justify-center mx-auto mb-10 border border-white/10 text-white"><Lock className="w-10 h-10 opacity-50" /></div>
        <h1 className="text-4xl font-bold mb-6 tracking-tighter italic">Studio Portal</h1>
        <p className="text-gray-500 mb-12 leading-relaxed text-sm font-medium">Access your active environments. Restricted to Stephen Studio clients.</p>
        <div className="space-y-6">
          <input type="password" className="w-full bg-white/[0.03] border border-white/5 rounded-2xl p-6 text-white focus:outline-none focus:border-white/20 font-mono" placeholder="••••••••••••" />
          <button className="w-full bg-[#F5F6EE] text-black font-bold py-6 rounded-2xl text-[10px] tracking-[0.3em] uppercase hover:brightness-110 flex items-center justify-center gap-3">Authenticate <ArrowRight className="w-4 h-4" /></button>
        </div>
        <Link href="/schedule" className="inline-block mt-12 text-gray-500 hover:text-white transition-colors text-[10px] font-bold tracking-[0.3em] uppercase border-b border-white/5 pb-2">Contact Support</Link>
      </motion.div>
    </ScrollFadeIn>
  );
}
