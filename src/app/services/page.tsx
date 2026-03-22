'use client';
import { motion } from 'framer-motion';
import { Bot, Layout, Smartphone, Globe, Link as LinkIcon, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  { id: 'ai', title: 'AI Systems', href: '/services/ai-systems-automations', icon: Bot },
  { id: 'saas', title: 'Custom SaaS', href: '/services/custom-saas-platforms', icon: Layout },
  { id: 'mobile', title: 'iOS Apps', href: '/services/ios-mobile-apps', icon: Smartphone },
  { id: 'web', title: 'Web Apps', href: '/services/websites-web-applications', icon: Globe },
  { id: 'integrations', title: 'Integrations', href: '/services/systems-integrations', icon: LinkIcon },
  { id: 'enterprise', title: 'Enterprise', href: '/services/enterprise-builds', icon: ShieldCheck }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0E0E13] text-white pt-40 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-20">Our <span className="text-gray-500 italic">Solutions</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <Link key={s.id} href={s.href} className="group p-12 rounded-[2rem] border border-white/5 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05] transition-all">
              <s.icon className="w-12 h-12 mb-8 text-gray-500 group-hover:text-white transition-colors" />
              <h3 className="text-3xl font-bold mb-4 tracking-tight">{s.title}</h3>
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-600 group-hover:text-white flex items-center gap-2">View Solutions <ArrowRight className="w-3 h-3" /></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
