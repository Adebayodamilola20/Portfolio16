'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ProjectCard from '@/components/portfolio/ProjectCard';
import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import img4 from '@/assets/iimg4.png';
import img5 from '@/assets/img5.png';
import img6 from '@/assets/img6.png';

const categories = ["ALL", "SAAS", "WEB APPS", "MOBILE APPS", "AI SYSTEMS", "AUTOMATIONS", "WEBSITES"];

const projects = [
  {
    id: 'genesai',
    title: 'Genesai',
    category: 'SAAS',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
    description: 'Production-ready SaaS platform with multi-API system, agency capabilities, and real-time tracking.',
    link: '#'
  },
  {
    id: 'adapt-lab',
    title: 'The Adapt Lab',
    category: 'AI SYSTEMS',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop',
    description: 'Advanced AI system integration for research laboratories and data analysis.',
    link: '#'
  },
  {
    id: 'win',
    title: 'WINER',
    category: 'WEB APPS',
    images: [
      image1.src,
      image2.src,
      image3.src
    ],
    description: 'Women Impacting Nigeria (WIN)',
    link: '#'
  },
  {
    id: 'Proton Security',
    title: 'Proton Security',
    category: 'WEBSITES',
    images: [
      img4.src,
      img5.src,
      img6.src
    ],
    description: 'Protonn Security is a security company ',
    link: '#'
  },
  {
    id: 'novapay',
    title: 'NovaPay',
    category: 'WEB APPS',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop',
    description: 'Secure digital payment solution for modern e-commerce businesses.',
    link: '#'
  },
  {
    id: 'healthmate',
    title: 'HealthMate',
    category: 'MOBILE APPS',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1600&auto=format&fit=crop',
    description: 'Intuitive mobile application for personal health tracking and wellness management.',
    link: '#'
  },
  {
    id: 'selfie-spot',
    title: 'The Selfie Spot',
    category: 'WEBSITES',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop',
    description: 'A modern photography studio and event space platform.',
    link: '#'
  },
];

const techStack = [
  { name: 'Node.js', url: 'https://cdn.simpleicons.org/nodedotjs' },
  { name: 'DigitalOcean', url: 'https://cdn.simpleicons.org/digitalocean' },
  { name: 'MySQL', url: 'https://cdn.simpleicons.org/mysql' },
  { name: 'Prisma', url: 'https://cdn.simpleicons.org/prisma/ffffff' },
  { name: 'Stripe', url: 'https://cdn.simpleicons.org/stripe' },
  { name: 'Shopify', url: 'https://cdn.simpleicons.org/shopify' },
  { name: 'AWS', url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
  { name: 'Meta', url: 'https://cdn.simpleicons.org/meta' },
  { name: 'Sentry', url: 'https://cdn.simpleicons.org/sentry/ffffff' },
  { name: 'Notion', url: 'https://cdn.simpleicons.org/notion/ffffff' },
  { name: 'Asana', url: 'https://cdn.simpleicons.org/asana' },
  { name: 'Trello', url: 'https://cdn.simpleicons.org/trello' },
  { name: 'Figma', url: 'https://cdn.simpleicons.org/figma' },
  { name: 'Vercel', url: 'https://cdn.simpleicons.org/vercel/ffffff' },
  { name: 'Next.js', url: 'https://cdn.simpleicons.org/nextdotjs/ffffff' },
  { name: 'React', url: 'https://cdn.simpleicons.org/react' },
  { name: 'Node.js', url: 'https://cdn.simpleicons.org/nodedotjs' },
  { name: 'Python', url: 'https://cdn.simpleicons.org/python' },
  { name: 'TypeScript', url: 'https://cdn.simpleicons.org/typescript' }
];

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredProjects = activeCategory === "ALL"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-blue-500/30 font-sans">

      {/* Header Section */}
      <section className="pt-48 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
        </div>

        <div className="max-w-[70rem] mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-[#60A5FA] font-mono text-[10px] tracking-[0.2em] uppercase font-semibold mb-6 block">
              PORTFOLIO
            </span>
            <h1 className="text-5xl md:text-[5.5rem] font-medium tracking-tight mb-8 text-white leading-[1.1]">
              Engineering that <span className="text-[#60A5FA]">delivers</span>
            </h1>
            <p className="text-[#9CA3AF] text-[1.15rem] leading-relaxed max-w-2xl mx-auto mb-16">
              Custom software, AI systems, and platforms built for scale. From SaaS dashboards to mobile apps - we ship production-ready solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4 mb-20"
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-[10px] sm:text-[11px] uppercase tracking-widest font-bold transition-all duration-300 border ${activeCategory === cat
                  ? 'bg-white text-black border-white'
                  : 'bg-transparent text-[#9CA3AF] border-white/10 hover:border-white/30 hover:text-white'
                  }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Portfolio Grid */}
        <div className="max-w-[85rem] mx-auto relative z-10">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              No projects found for this category.
            </div>
          )}
        </div>
      </section>

      {/* Technical Capabilities Section */}
      <section className="relative py-32 px-6 bg-[#0B0D14] border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px]" />
        </div>

        <FadeIn className="max-w-[75rem] mx-auto relative z-10">
          <span className="text-gray-500 font-mono text-[10px] tracking-[0.2em] uppercase mb-6 block font-bold">
            TECHNICAL CAPABILITIES
          </span>
          <h2 className="text-4xl md:text-[3.25rem] font-medium tracking-tight mb-6 text-white leading-[1.1]">
            Built for scale and innovation
          </h2>
          <p className="text-[#9CA3AF] text-[1.1rem] leading-[1.6] max-w-2xl mb-20">
            Production-grade systems built with modern technologies, scalable infrastructure, and battle-tested development practices.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 md:gap-y-0">
            {/* Left Column */}
            <div className="flex flex-col gap-10">
              <div>
                <h3 className="text-xl md:text-[1.35rem] font-normal text-white mb-3">Payment Processing</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">
                  Stripe, Square, PayPal, and virtually any payment gateway for subscriptions, one-time payments, and complex billing systems.
                </p>
              </div>
              <div>
                <h3 className="text-xl md:text-[1.35rem] font-normal text-white mb-3">AI Capabilities</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">
                  OpenAI, Anthropic, Google AI, and custom models. We integrate with any AI service or build custom ML pipelines.
                </p>
              </div>
              <div>
                <h3 className="text-xl md:text-[1.35rem] font-normal text-white mb-3">Communication Systems</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">
                  Twilio, SendGrid, AWS SNS, Firebase - any SMS, email, voice, or push notification service you need.
                </p>
              </div>
              <div>
                <h3 className="text-xl md:text-[1.35rem] font-normal text-white mb-3">Business Tools</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">
                  Salesforce, HubSpot, Zapier, webhooks, and thousands of other platforms. If it has an API, we can connect it.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col border-l border-white/5 divide-y divide-white/5 -ml-4 md:ml-0 overflow-hidden rounded-xl md:rounded-none md:border-none md:divide-none">
              <div className="p-6 md:p-8 flex items-start gap-4">
                <span className="text-[#60A5FA] font-bold text-xl leading-none mt-1">:</span>
                <div>
                  <h3 className="text-lg md:text-xl font-medium text-white mb-2">Modern tech stacks</h3>
                  <p className="text-[#9CA3AF] text-[14px] leading-relaxed">
                    We work with hundreds of technologies across all platforms. These examples show our most common tech stacks.
                  </p>
                </div>
              </div>
              <div className="p-6 md:p-8 flex items-start gap-4">
                <span className="text-[#60A5FA] font-bold text-xl leading-none mt-1">:</span>
                <div>
                  <h3 className="text-lg md:text-xl font-medium text-white mb-2">Production-grade architecture</h3>
                  <p className="text-[#9CA3AF] text-[14px] leading-relaxed">
                    Scalable, secure systems built for growth and reliability from day one.
                  </p>
                </div>
              </div>
              <div className="p-6 md:p-8 flex items-start gap-4 bg-[#121621] border-l-2 border-[#60A5FA] -ml-[2px] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                <span className="text-[#60A5FA] font-bold text-xl leading-none mt-1">:</span>
                <div>
                  <h3 className="text-lg md:text-xl font-medium text-white mb-2">Custom integrations</h3>
                  <p className="text-[#9CA3AF] text-[14px] leading-relaxed">
                    Seamless connections to thousands of APIs, payment systems, and third-party platforms. These are just examples of what we commonly integrate.
                  </p>
                </div>
              </div>
              <div className="p-6 md:p-8 flex items-start gap-4">
                <span className="text-[#60A5FA] font-bold text-xl leading-none mt-1">:</span>
                <div>
                  <h3 className="text-lg md:text-xl font-medium text-white mb-2">Performance optimized</h3>
                  <p className="text-[#9CA3AF] text-[14px] leading-relaxed">
                    Fast load times, efficient databases, and CDN deployment for exceptional user experiences worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Tech Stack Marquee Section */}
      <section className="py-20 md:py-24 bg-[#0A0A0A] overflow-hidden border-t border-white/5">
        <div className="relative flex flex-col gap-6 overflow-hidden group">
          <div className="absolute left-0 top-0 w-24 md:w-56 h-full bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-24 md:w-56 h-full bg-gradient-to-l from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 50, repeat: Infinity }}
            className="flex whitespace-nowrap gap-4 w-max"
          >
            {[...techStack.slice(0, 9), ...techStack.slice(0, 9), ...techStack.slice(0, 9), ...techStack.slice(0, 9)].map((item, index) => (
              <div key={index} className="flex items-center gap-3 px-6 py-4 bg-[#0c0e15] border border-white/5 rounded-2xl flex-shrink-0 hover:bg-[#11141d] hover:border-white/10 transition-colors shadow-sm cursor-pointer">
                <img src={item.url} alt={item.name} className="w-6 h-6 object-contain" />
                <span className="text-gray-300 font-medium text-[14px] tracking-wide">{item.name}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ ease: "linear", duration: 50, repeat: Infinity }}
            className="flex whitespace-nowrap gap-4 w-max -ml-[120px]"
          >
            {[...techStack.slice(9), ...techStack.slice(9), ...techStack.slice(9), ...techStack.slice(9)].map((item, index) => (
              <div key={index} className="flex items-center gap-3 px-6 py-4 bg-[#0c0e15] border border-white/5 rounded-2xl flex-shrink-0 hover:bg-[#11141d] hover:border-white/10 transition-colors shadow-sm cursor-pointer">
                <img src={item.url} alt={item.name} className="w-6 h-6 object-contain" />
                <span className="text-gray-300 font-medium text-[14px] tracking-wide">{item.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-40 px-6 overflow-hidden bg-[#0a0c10] border-t border-white/5">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        <FadeIn className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-[3.5rem] font-medium tracking-tight mb-8 text-white">
            Ready to start your project?
          </h2>
          <p className="text-gray-400 text-[1.1rem] leading-relaxed mb-14 max-w-xl mx-auto">
            Let's build something amazing together. Get in touch to discuss your project and see how we can help bring your vision to life.
          </p>
          <Link href="/contact" className="inline-flex items-center bg-white text-black px-8 py-3.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-gray-200 transition-colors duration-300 border border-transparent shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Start your project <ArrowRight className="ml-3 w-3.5 h-3.5" strokeWidth={2.5} />
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
