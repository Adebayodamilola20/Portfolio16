'use client';
import { motion } from 'framer-motion';
import { useHasMounted } from '@/lib/hooks';

const testimonials = [
  {
    handle: "@orlandopedro_",
    message: "Love @supabase custom domains makes the auth so much better",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Orlando"
  },
  {
    handle: "@adm_lawson",
    message: "Love supabase edge functions. Cursor+Supabase+MCP+Docker desktop is all I need",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Adam"
  },
  {
    handle: "@xthemadgeniusx",
    message: "Lately been using Supabase over AWS/ GCP for products to save on costs and rapid builds(Vibe Code) that do not need all the Infra and the hefty costs that come with AWS/ GCP out the door.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Genius"
  },
  {
    handle: "@nerdburn",
    message: "It's fun, feels lightweight, and really quick to spin up user auth and a few tables. Almost too easy! Highly recommend.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nerd"
  },
  {
    handle: "@gokul_i",
    message: "First time running @supabase in local. It just works. Very good DX imo.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gokul"
  },
  {
    handle: "@pontusab",
    message: "I love everything about Supabase.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pontus"
  },
  {
    handle: "@patrickc",
    message: "Very impressed by @supabase's growth. For new startups, they seem to have gone from \"promising\" to \"stable and remarkably effective\".",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Patrick"
  },
  {
    handle: "@dadooos_",
    message: "Supabase is just amazing.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dado"
  }
];

// Using deterministic orders for rows to avoid hydration mismatch while maintaining visual variety
const row1 = [...testimonials];
const row2 = [...testimonials].reverse();
const row3 = [...testimonials].slice(3).concat(testimonials.slice(0, 3));

function Card({ handle, message, avatar }: typeof testimonials[0]) {
  return (
    <div className="w-[240px] md:w-[280px] bg-[#161616] border border-white/5 p-5 rounded-[1.75rem] flex flex-col shrink-0 relative transition-all duration-300 hover:border-white/10 group">
      <div className="absolute top-4 left-4 w-5 h-5 bg-black rounded-full flex items-center justify-center border border-white/10 z-10 shadow-lg">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-2 h-2 fill-white">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
        </svg>
      </div>

      <div className="flex items-center gap-2.5 mb-3.5 ml-7 relative z-10">
        <div className="w-6 h-6 rounded-full overflow-hidden border border-white/10 shrink-0">
          <img src={avatar} alt={handle} className="w-full h-full object-cover" />
        </div>
        <span className="text-white text-[12px] font-semibold tracking-tight">{handle}</span>
      </div>

      <p className="text-[#9ba3af] text-[11px] leading-[1.6] text-left whitespace-normal font-medium pl-0.5">
        {message}
      </p>
    </div>
  );
}

export function CommunityMarquee() {
  const mounted = useHasMounted();
  return (
    <section className="py-24 bg-[#0C0C0C] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-[2.75rem] font-medium text-white mb-4 tracking-tight">
          Join the community
        </h2>
        <p className="text-[#9ba3af] text-sm md:text-base mb-8">
          Discover what our community has to say about their Supabase experience.
        </p>

        <div className="flex justify-center">
          <a
            href="#"
            className="flex items-center gap-2 bg-[#1A1A1A] border border-white/5 py-1.5 px-4 rounded-lg hover:bg-[#222] transition-colors"
          >
            <div className="bg-[#5865F2]/10 p-1 rounded">
              <svg className="w-3.5 h-3.5 text-[#5865F2] fill-current" viewBox="0 0 127.14 96.36">
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.06,72.06,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.71,32.65-1.82,56.6.4,80.21a105.73,105.73,0,0,0,32.22,16.15,77.7,77.7,0,0,0,6.89-11.11,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1,105.25,105.25,0,0,0,32.22-16.15C129.58,52.41,126,28.73,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5.12-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
              </svg>
            </div>
            <span className="text-white font-medium text-[13px]">Join us on Discord</span>
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full relative z-10">
        {/* Row 1: Left to Right, Slow */}
        <div className="flex overflow-hidden">
          <motion.div
            initial={{ x: "-50%" }}
            animate={mounted ? { x: "0%" } : { x: "-50%" }}
            transition={mounted ? { duration: 160, repeat: Infinity, ease: "linear" } : { duration: 0 }}
            className="flex gap-4 w-max"
          >
            {[...row1, ...row1, ...row1, ...row1, ...row1, ...row1].map((item, i) => (
              <Card key={`r1-${i}`} {...item} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Right to Left, Slowest */}
        <div className="flex overflow-hidden">
          <motion.div
            initial={{ x: "0%" }}
            animate={mounted ? { x: "-50%" } : { x: "0%" }}
            transition={mounted ? { duration: 120, repeat: Infinity, ease: "linear" } : { duration: 0 }}
            className="flex gap-4 w-max"
          >
            {[...row2, ...row2, ...row2, ...row2, ...row2, ...row2].map((item, i) => (
              <Card key={`r2-${i}`} {...item} />
            ))}
          </motion.div>
        </div>

        {/* Row 3: Left to Right, Faster but still slow */}
        <div className="flex overflow-hidden">
          <motion.div
            initial={{ x: "-50%" }}
            animate={mounted ? { x: "0%" } : { x: "-50%" }}
            transition={mounted ? { duration: 140, repeat: Infinity, ease: "linear" } : { duration: 0 }}
            className="flex gap-4 w-max"
          >
            {[...row3, ...row3, ...row3, ...row3, ...row3, ...row3].map((item, i) => (
              <Card key={`r3-${i}`} {...item} />
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#0C0C0C] via-[#0C0C0C]/90 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#0C0C0C] via-[#0C0C0C]/90 to-transparent z-20 pointer-events-none" />
    </section>
  );
}
