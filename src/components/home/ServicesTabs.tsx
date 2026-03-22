'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Layout, Smartphone, Globe, Link as LinkIcon, ArrowRight, Download, Server } from 'lucide-react';

const services = [
  { 
    id: 'ai', 
    title: 'AI Systems & Automations', 
    shortTitle: 'AI SYSTEMS',
    icon: Bot, 
    color: 'text-[#3b82f6]', 
    bgColor: 'bg-blue-400/10',
    activeBg: 'bg-[#3b82f6] text-black',
    description: 'Intelligent workflows that eliminate repetitive tasks, cut costs, and let your team focus on high-value work.',
    testimonial: "Stephen's AI automation saved us hundreds of engineering hours monthly and significantly reduced operational costs.",
    author: 'Tech Leader',
    role: 'CTO • ENTERPRISE CLIENT',
    steps: [
      { label: 'Data Input', tag: 'CSV/API' },
      { label: 'AI Processing', tag: 'ML MODEL' },
      { label: 'Automation', tag: 'TASK ENGINE' },
      { label: 'Results', tag: 'DELIVERED' }
    ]
  },
  { 
    id: 'saas', 
    title: 'Custom SaaS Platforms', 
    shortTitle: 'CUSTOM SAAS PLATFORMS',
    icon: Layout, 
    color: 'text-[#3b82f6]', 
    bgColor: 'bg-blue-400/10',
    activeBg: 'bg-[#3b82f6] text-black',
    description: 'From idea to launch, I design and develop scalable SaaS products built for growth.',
    testimonial: "Stephen transformed our vision into a production-ready SaaS platform in record time.",
    author: 'Founder',
    role: 'CEO • SAAS STARTUP',
    steps: [
      { label: 'Sign Up', tag: 'ONBOARDING' },
      { label: 'Dashboard', tag: 'USER PORTAL' },
      { label: 'Features', tag: 'CORE TOOLS' },
      { label: 'Analytics', tag: 'INSIGHTS' }
    ]
  },
  { 
    id: 'mobile', 
    title: 'iOS Apps & Mobile Solutions', 
    shortTitle: 'IOS APPS',
    icon: Smartphone, 
    color: 'text-[#ef4444]', 
    bgColor: 'bg-red-400/10',
    activeBg: 'bg-[#ef4444] text-white',
    description: 'Native mobile experiences that users love, with beautiful design and lightning-fast performance.',
    testimonial: "Our iOS app exceeded expectations with smooth performance and an intuitive interface our users rave about.",
    author: 'Product Lead',
    role: 'VP OF PRODUCT • MOBILE STARTUP',
    steps: [
      { label: 'Design', tag: 'UI/UX' },
      { label: 'Build', tag: 'SWIFT/REACT' },
      { label: 'Test', tag: 'QA' },
      { label: 'Deploy', tag: 'APP STORE' }
    ]
  },
  { 
    id: 'web', 
    title: 'Websites & Web Applications', 
    shortTitle: 'WEBSITES',
    icon: Globe, 
    color: 'text-[#eab308]', 
    bgColor: 'bg-yellow-400/10',
    activeBg: 'bg-[#eab308] text-black',
    description: 'Modern web experiences that convert visitors to customers with stunning design and SEO optimization.',
    testimonial: "Stephen delivered a website that tripled our conversion rate and positioned us as industry leaders.",
    author: 'Marketing Director',
    role: 'CMO • GROWTH COMPANY',
    steps: [
      { label: 'Design', tag: 'WIREFRAMES' },
      { label: 'Develop', tag: 'NEXT.JS' },
      { label: 'Launch', tag: 'DEPLOY' },
      { label: 'Optimize', tag: 'SEO/SPEED' }
    ]
  },
  { 
    id: 'integrations', 
    title: 'Systems Integrations', 
    shortTitle: 'SYSTEMS INTEGRATIONS',
    icon: LinkIcon, 
    color: 'text-[#22c55e]', 
    bgColor: 'bg-green-400/10',
    activeBg: 'bg-[#22c55e] text-white',
    description: 'Connect your tools seamlessly with custom APIs and integrations that make your systems work together.',
    testimonial: "Our fragmented systems now work as one unified platform, saving countless hours of manual work.",
    author: 'Operations Manager',
    role: 'COO • ENTERPRISE CLIENT',
    steps: [
      { label: 'System A', tag: 'LEGACY' },
      { label: 'API Layer', tag: 'REST/GRAPHQL' },
      { label: 'Sync Engine', tag: 'REAL-TIME' },
      { label: 'System B', tag: 'MODERN' }
    ]
  },
  { 
    id: 'enterprise', 
    title: 'Enterprise-Grade Builds', 
    shortTitle: 'ENTERPRISE BUILDS',
    icon: Server, 
    color: 'text-purple-400', 
    bgColor: 'bg-purple-400/10',
    activeBg: 'bg-purple-500 text-black',
    description: 'Robust, secure, and compliant architectures designed for scale, high availability, and mission-critical operations.',
    testimonial: "Stephen architected our entire backend infrastructure, ensuring we could handle enterprise-level traffic without a hitch.",
    author: 'Head of Engineering',
    role: 'VP ENGINEERING • FINTECH',
    steps: [
      { label: 'Architecture', tag: 'SYSTEM DESIGN' },
      { label: 'Security', tag: 'COMPLIANCE' },
      { label: 'Deployment', tag: 'CI/CD' },
      { label: 'Scaling', tag: 'KUBERNETES' }
    ]
  }
];

export function ServicesTabs() {
  const [activeTab, setActiveTab] = useState(services[0]);

  return (
    <section className="bg-[#050505] flex flex-col border-t border-white/5 relative">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505] pointer-events-none" />

      {/* Hero Header for Services */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-20 px-10 md:px-20 relative z-10"
      >
        <span className="text-gray-600 font-mono text-[10px] tracking-[0.4em] uppercase mb-8 block font-bold">Use Cases</span>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight leading-[1.05]">
          What I Build <br />
          For You
        </h2>
      </motion.div>

      {/* Tabs Header - Edge to Edge Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-6 border-t border-l border-white/5 min-h-[80px] bg-[#050505] relative z-10 w-full">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => setActiveTab(service)}
            className={`flex items-center justify-between lg:justify-center gap-4 px-6 py-5 transition-all border-b border-r border-white/5 group ${
              activeTab.id === service.id ? `${service.activeBg}` : 'text-gray-300 hover:text-white hover:bg-white/[0.03]'
            }`}
          >
            <span className={`text-[12px] md:text-[13px] font-medium tracking-wide text-left flex-1`}>
              {service.title}
            </span>
            <Download className={`w-4 h-4 shrink-0 transition-opacity ${activeTab.id === service.id ? 'text-current opacity-100' : `${service.color} opacity-70 group-hover:opacity-100`}`} />
          </button>
        ))}
      </div>

      <div className="flex-1 flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-white/5 relative z-10">
        {/* Left Side: Info */}
        <div className="lg:w-[45%] p-8 md:p-12 lg:p-16 flex flex-col relative bg-[#050505] justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
              className="mt-8 md:mt-12 space-y-6 md:space-y-8"
            >
              <h4 className={`text-xs md:text-sm font-bold tracking-[0.1em] uppercase ${activeTab.color}`}>{activeTab.title}</h4>
              
              <h2 className="text-3xl md:text-5xl font-medium text-white leading-[1.1] tracking-tight">
                {activeTab.description}
              </h2>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-6 py-3 bg-white text-black rounded-full font-bold uppercase tracking-[0.15em] text-[8px] md:text-[9px] hover:scale-105 transition-all flex items-center gap-2 group">
                  Learn More <ArrowRight className="w-3 h-3" />
                </button>
                <button className="px-6 py-3 bg-transparent border border-white/10 text-white rounded-full font-bold uppercase tracking-[0.15em] text-[8px] md:text-[9px] hover:bg-white/5 transition-all flex items-center gap-2 cursor-wait">
                  Get Started <div className="w-1.5 h-1.5 rounded-full border border-white/20 border-t-white animate-spin" />
                </button>
              </div>

              {/* Minimal Testimonial */}
              <div className="pt-6 md:pt-8 mt-2 md:mt-4 border-t border-white/5">
                 <div className="text-blue-500 text-lg md:text-xl mb-2 opacity-50 font-serif leading-none">“</div>
                 <p className="text-sm md:text-base text-gray-400 font-medium leading-relaxed mb-4">
                    {activeTab.testimonial}
                 </p>
                 <div className="text-left flex flex-col gap-1">
                    <span className="text-white font-bold text-[10px] md:text-[11px] title-case">{activeTab.author}</span>
                    <span className="text-gray-600 text-[8px] font-bold uppercase tracking-widest leading-none">{activeTab.role}</span>
                 </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Diagram */}
        <div className="lg:w-[55%] bg-[#080809] flex items-center justify-center p-8 md:p-16 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id + "-visual"}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 w-full flex justify-center py-10"
            >
              <div className="flex flex-col items-center">
                {activeTab.steps.map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="flex items-center gap-6 px-6 py-3.5 bg-[#0D0D0E] shadow-[0_4px_30px_rgba(0,0,0,0.5)] border border-white/10 rounded-full hover:border-white/20 transition-all">
                      <div className="flex items-center gap-3">
                        <div className={`w-2.5 h-2.5 rounded-full ${activeTab.activeBg.split(' ')[0]} shadow-[0_0_10px_rgba(255,255,255,0.1)]`} />
                        <span className="text-white font-semibold text-base">{step.label}</span>
                      </div>
                      <span className="text-[9px] font-mono font-bold border border-white/10 px-3 py-1 rounded-full text-gray-400 uppercase tracking-widest leading-none">
                        {step.tag}
                      </span>
                    </div>
                    {idx < activeTab.steps.length - 1 && (
                      <div className="flex flex-col items-center my-1 opacity-50">
                        <div className="w-1 h-1 rounded-full border border-gray-500" />
                        <div className="w-px h-8 bg-gray-500" />
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500 -mt-1">
                           <path d="M6 9l6 6 6-6" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Subtle Ambient Glow */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] ${activeTab.bgColor} blur-[120px] rounded-full pointer-events-none opacity-[0.05]`} />
        </div>
      </div>
    </section>
  );
}
