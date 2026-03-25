'use client';
import Link from 'next/link';
import { Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0A0A0E] border-t border-white/10 pt-24 pb-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          
          {/* Left Column (Brand + Description + Socials) */}
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#111] flex items-center justify-center border border-white/10 relative overflow-hidden">
                <span className="text-white font-bold text-lg italic z-10">S</span>
                <div className="absolute w-full h-full border-[1.5px] border-dashed border-[#38bdf8]/30 rounded animate-spin-slow pointer-events-none" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-none tracking-tight">Stephen</span>
                <span className="text-gray-500 text-[9px] font-mono tracking-widest mt-0.5 uppercase">Software Engineer</span>
              </div>
            </Link>
            
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-medium pr-10">
              Custom software development for ambitious companies.<br />
              I build AI automation, SaaS platforms, mobile apps, and<br />
              enterprise solutions that drive real business results.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Spacer for large screens */}
          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Middle Column (Services) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-[10px] tracking-[0.2em] uppercase mb-8">Services</h4>
            <ul className="space-y-4">
              {[
                { label: 'AI Systems & Automations', href: '/services/ai-systems-automations' },
                { label: 'Custom SaaS Platforms', href: '/services/custom-saas-platforms' },
                { label: 'iOS Apps & Mobile', href: '/services/ios-mobile-apps' },
                { label: 'Web Applications', href: '/services/websites-web-applications' },
                { label: 'Systems Integrations', href: '/services/systems-integrations' },
                { label: 'Enterprise Solutions', href: '/services/enterprise-builds' }
              ].map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-gray-400 hover:text-white transition-all text-sm font-medium">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column (Company) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-[10px] tracking-[0.2em] uppercase mb-8">Company</h4>
            <ul className="space-y-4">
              {[
                { label: 'About Us', href: '/company' },
                { label: 'Portfolio', href: '/portfolio' },
                { label: 'Contact', href: '/contact' },
                { label: 'Client Portal', href: '/client-portal' },
                { label: 'Schedule a Meeting', href: '/schedule', isButton: true }
              ].map((s) => (
                <li key={s.label}>
                  {s.isButton ? (
                    <Link
                      href={s.href}
                      className="inline-flex items-center justify-center rounded-full bg-white/5 border border-white/10 px-5 py-2 text-[11px] font-bold tracking-[0.2em] uppercase text-white/80 hover:bg-white/10 hover:border-white/20 transition-all w-full"
                    >
                      {s.label}
                    </Link>
                  ) : (
                    <Link href={s.href} className="text-gray-400 hover:text-white transition-all text-sm font-medium">
                      {s.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
