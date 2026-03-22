'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function EnterpriseBuildsPage() {
  return (
    <div className="min-h-screen bg-[#0E0E13] text-white">
      <section className="pt-40 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-gray-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-8 block">Service 06 / Enterprise</span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">Enterprise-Grade <br /><span className="text-gray-500 italic">Builds</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-20 font-medium">Mission-critical systems built for security, compliance, and enterprise-scale performance.</p>
        </div>
      </section>
      <section className="py-32 px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-bold mb-12 italic text-white tracking-tight">Ready for enterprise scale?</h2>
        <Link href="/contact" className="inline-flex items-center bg-[#F5F6EE] text-black px-12 py-5 rounded-full text-sm font-bold tracking-[0.2em] uppercase hover:brightness-110">Start your project <ArrowRight className="ml-3 w-4 h-4" /></Link>
      </section>
    </div>
  );
}
