'use client';
import { motion } from 'framer-motion';

const row1 = [
  { name: 'Node.js', url: 'https://cdn.simpleicons.org/nodedotjs' },
  { name: 'DigitalOcean', url: 'https://cdn.simpleicons.org/digitalocean' },
  { name: 'MySQL', url: 'https://cdn.simpleicons.org/mysql' },
  { name: 'Prisma', url: 'https://cdn.simpleicons.org/prisma/ffffff' },
  { name: 'Stripe', url: 'https://cdn.simpleicons.org/stripe' },
  { name: 'Shopify', url: 'https://cdn.simpleicons.org/shopify' },
  { name: 'AWS', url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
  { name: 'Meta', url: 'https://cdn.simpleicons.org/meta' },
  { name: 'Sentry', url: 'https://cdn.simpleicons.org/sentry/ffffff' },
];

const row2 = [
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

export function TechStackMarquee() {
  return (
    <section className="py-20 md:py-32 bg-[#050505] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="mb-14">
          <span className="text-[#3b82f6] font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-4 block font-semibold">
            Technology Stack
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.1] font-medium text-white tracking-tight max-w-2xl">
            Built with the tools<br />
            and technologies you trust.
          </h2>
        </div>
      </div>
      
      <div className="relative flex flex-col gap-5 overflow-hidden group">
        <div className="absolute left-0 top-0 w-24 md:w-56 h-full bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-24 md:w-56 h-full bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent z-10 pointer-events-none" />
        
        {/* Row 1: Top Row - Left to Right on Mobile, All screens */}
        <motion.div 
          animate={{ x: ["-50%", "0%"] }} 
          transition={{ ease: "linear", duration: 40, repeat: Infinity }} 
          className="flex whitespace-nowrap gap-5 w-max -ml-[120px]"
        >
          {[...row1, ...row1, ...row1, ...row1, ...row1].map((item, index) => (
            <div key={index} className="flex items-center justify-center w-[4.5rem] h-[4.5rem] sm:w-[5.5rem] sm:h-[5.5rem] bg-[#090b10] border border-white/5 rounded-[1.25rem] flex-shrink-0 hover:bg-[#11141d] hover:border-white/10 transition-colors">
              <img src={item.url} alt={item.name} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
            </div>
          ))}
        </motion.div>

        {/* Row 2: Lower Row - Right to Left on All screens */}
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ ease: "linear", duration: 40, repeat: Infinity }} 
          className="flex whitespace-nowrap gap-5 w-max"
        >
          {[...row2, ...row2, ...row2, ...row2, ...row2].map((item, index) => (
            <div key={index} className="flex items-center justify-center w-[4.5rem] h-[4.5rem] sm:w-[5.5rem] sm:h-[5.5rem] bg-[#090b10] border border-white/5 rounded-[1.25rem] flex-shrink-0 hover:bg-[#11141d] hover:border-white/10 transition-colors">
              <img src={item.url} alt={item.name} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
