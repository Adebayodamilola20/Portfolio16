'use client';
import { Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ScrollFadeIn } from '@/components/ScrollFadeIn';

export default function WebAppsPage() {
  return (
    <ScrollFadeIn className="min-h-screen bg-[#0E0E13] text-white">
      <section className="pt-40 pb-24 px-6 text-center">
        <ScrollFadeIn className="max-w-4xl mx-auto">
          <span className="text-gray-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-8 block">Service 04 / Web Apps</span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">Websites & Web <br /><span className="text-gray-500 italic">Applications</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-20 font-medium">Modern web experiences that convert visitors to customers with stunning design and SEO optimization.</p>
        </ScrollFadeIn>
      </section>
      <section className="py-32 px-6 text-center">
        <ScrollFadeIn>
          <h2 className="text-5xl md:text-7xl font-bold mb-12 italic text-white tracking-tight">Ready to grow online?</h2>
          <Link href="/schedule" className="inline-flex items-center bg-[#F5F6EE] text-black px-12 py-5 rounded-full text-sm font-bold tracking-[0.2em] uppercase hover:brightness-110">Start your project <ArrowRight className="ml-3 w-4 h-4" /></Link>
        </ScrollFadeIn>
      </section>
    </ScrollFadeIn>
  );
}
