'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const servicesList = [
  { num: '01', name: 'AI Systems & Automations', href: '/services/ai-systems-automations' },
  { num: '02', name: 'Custom SaaS Platforms', href: '/services/custom-saas-platforms' },
  { num: '03', name: 'iOS Apps & Mobile Solutions', href: '/services/ios-mobile-apps' },
  { num: '04', name: 'Websites & Web Applications', href: '/services/websites-web-applications' },
  { num: '05', name: 'Systems Integrations', href: '/services/systems-integrations' },
  { num: '06', name: 'Enterprise-Grade Builds', href: '/services/enterprise-builds' },
];

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl py-4' : 'bg-transparent py-8'}`}>
      <div className="w-full px-6 md:px-10 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          <div className="w-8 h-8 rounded bg-[#111] flex items-center justify-center border border-white/10 relative overflow-hidden">
            <span className="text-white font-bold text-lg italic z-10">S</span>
            <div className="absolute w-full h-full border-[1.5px] border-dashed border-[#38bdf8]/30 rounded animate-spin-slow pointer-events-none" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg tracking-tight leading-none">Stephen</span>
            <span className="text-gray-500 text-[8px] uppercase tracking-widest font-bold mt-1">Software Engineer</span>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-10">
          <Link href="/" className={`text-[10px] font-bold tracking-[0.2em] uppercase ${pathname === '/' ? 'text-white underline underline-offset-8 decoration-blue-500' : 'text-gray-400 hover:text-white'}`}>Home</Link>
          <div
            className="relative py-4"
            onMouseEnter={() => setIsServicesHovered(true)}
            onMouseLeave={() => setIsServicesHovered(false)}
          >
            <Link href="/services" className={`text-[10px] flex items-center gap-1 font-bold tracking-[0.2em] uppercase pb-2 ${pathname.startsWith('/services') ? 'text-white border-b-2 border-blue-500' : 'text-gray-400 hover:text-white border-b-2 border-transparent'}`}>
              Services
              <svg className={`w-3 h-3 transition-transform duration-300 ${isServicesHovered ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            <AnimatePresence>
              {isServicesHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-[80%] -left-8 pt-4 w-80 z-50"
                >
                  <div className="bg-[#04060D] border border-slate-800/50 rounded-xl py-2 shadow-2xl overflow-hidden backdrop-blur-3xl min-w-[340px]">
                    {servicesList.map((service) => {
                      const isActive = pathname === service.href;
                      return (
                        <Link
                          key={service.num}
                          href={service.href}
                          className={`flex items-center justify-between px-6 py-[14px] transition-colors group ${
                            isActive ? 'bg-[#0f172a]' : 'hover:bg-[#0f172a]'
                          }`}
                          onClick={() => setIsServicesHovered(false)}
                        >
                          <div className="flex items-center gap-5">
                            <span className="text-slate-500 font-mono text-xs">{service.num}</span>
                            <span className={`text-[15px] font-medium tracking-wide ${isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                              {service.name}
                            </span>
                          </div>
                          <svg className={`w-4 h-4 text-blue-500 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link href="/portfolio" className={`text-[10px] font-bold tracking-[0.2em] uppercase ${pathname === '/portfolio' ? 'text-white' : 'text-gray-400 hover:text-white'}`}>Portfolio</Link>
          <Link href="/about" className={`text-[10px] font-bold tracking-[0.2em] uppercase ${pathname === '/about' ? 'text-white' : 'text-gray-400 hover:text-white'}`}>About</Link>
          <Link href="/contact" className={`text-[10px] font-bold tracking-[0.2em] uppercase ${pathname === '/contact' ? 'text-white' : 'text-gray-400 hover:text-white'}`}>Contact</Link>
        </nav>
        <Link href="/contact" className="hidden lg:flex bg-[#F5F6EE] text-black px-8 py-3 rounded-full text-[10px] font-bold tracking-[0.1em] uppercase shadow-lg shadow-white/5 hover:bg-white transition-colors">START YOUR PROJECT <span className="ml-2">→</span></Link>
        <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden text-white hover:text-gray-300">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[100] bg-[#090b10] flex flex-col pt-6 px-6 pb-10 overflow-y-auto"
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between mb-12">
              <Link href="/" className="flex items-center gap-4" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="w-8 h-8 rounded bg-[#111] flex items-center justify-center border border-white/10 relative overflow-hidden">
                  <span className="text-white font-bold text-lg italic z-10">S</span>
                  <div className="absolute w-full h-full border-[1.5px] border-dashed border-[#38bdf8]/30 rounded animate-spin-slow pointer-events-none" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-lg tracking-tight leading-none">Stephen</span>
                  <span className="text-gray-500 text-[8px] uppercase tracking-widest font-bold mt-1">Software Engineer</span>
                </div>
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-gray-300">
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Mobile Links */}
            <div className="flex flex-col gap-6 flex-1">
              <Link href="/" className={`text-base font-medium py-3 px-4 rounded-xl ${pathname === '/' ? 'bg-[#0f172a] text-white' : 'text-gray-300'}`} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              
              <div className="flex flex-col gap-2 px-1">
                <span className="text-base font-medium text-white px-3 py-2">Services</span>
                <div className="flex flex-col gap-1">
                  {servicesList.map(service => (
                    <Link key={service.num} href={service.href} className={`flex items-center gap-4 py-3 px-4 rounded-xl ${pathname === service.href ? 'bg-[#0f172a]' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
                      <span className="text-slate-500 font-mono text-xs w-5">{service.num}</span>
                      <span className={`text-sm tracking-wide font-medium ${pathname === service.href ? 'text-white' : 'text-gray-400'}`}>{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/portfolio" className={`text-base font-medium py-3 px-4 rounded-xl ${pathname === '/portfolio' ? 'bg-[#0f172a] text-white' : 'text-gray-300'}`} onClick={() => setIsMobileMenuOpen(false)}>Portfolio</Link>
              <Link href="/about" className={`text-base font-medium py-3 px-4 rounded-xl ${pathname === '/about' ? 'bg-[#0f172a] text-white' : 'text-gray-300'}`} onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              <Link href="/contact" className={`text-base font-medium py-3 px-4 rounded-xl ${pathname === '/contact' ? 'bg-[#0f172a] text-white' : 'text-gray-300'}`} onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            </div>

            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full mt-10 bg-[#F5F6EE] text-black py-4 rounded-full text-[11px] font-bold tracking-[0.1em] uppercase shadow-lg shadow-white/5 flex items-center justify-center gap-3">
              START YOUR PROJECT <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
