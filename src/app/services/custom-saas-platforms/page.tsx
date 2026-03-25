'use client';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { ScrollFadeIn } from '@/components/ScrollFadeIn';

export default function SaaSPlatformsPage() {
  return (
    <ScrollFadeIn className="min-h-screen bg-[#0E0E13] text-white">
      <section className="pt-40 pb-24 px-6 text-center">
        <ScrollFadeIn className="max-w-4xl mx-auto">
          <span className="text-gray-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-8 block">Service 02 / Custom SaaS</span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">Custom SaaS <br /><span className="text-gray-500 italic">Platforms</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-20">From idea to launch, we design and develop scalable SaaS products built for growth and market dominance.</p>
        </ScrollFadeIn>
      </section>
      <section className="py-32 px-6 bg-white/[0.02] border-y border-white/5">
        <ScrollFadeIn className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div><h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">Built for Scale</h2></div>
          <div className="grid grid-cols-1 gap-4">
            {["Multi-tenant Architecture", "Subscription & Billing", "Real-time Analytics", "Secure API Layers"].map((text, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-2xl border border-white/10 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-gray-400" />
                <span className="font-bold text-sm text-white">{text}</span>
              </div>
            ))}
          </div>
        </ScrollFadeIn>
      </section>
      <section className="py-32 px-6 text-center">
        <ScrollFadeIn>
          <h2 className="text-5xl md:text-7xl font-bold mb-12 italic text-white tracking-tight">Ready to launch?</h2>
          <Link href="/contact" className="inline-flex items-center bg-[#F5F6EE] text-black px-12 py-5 rounded-full text-sm font-bold tracking-[0.2em] uppercase hover:brightness-110"><ArrowRight className="mr-3 w-4 h-4 rotate-180" /> Start your project <ArrowRight className="ml-3 w-4 h-4" /></Link>
        </ScrollFadeIn>
      </section>
    </ScrollFadeIn>
  );
}
