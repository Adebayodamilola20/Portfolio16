'use client';
import { motion } from 'framer-motion';
import { useHasMounted } from '@/lib/hooks';

const testimonials = [
  {
    handle: "@the_ceo_james",
    message: "Stephen delivered our custom platform exactly as envisioned. The attention to detail in the architecture is unmatched.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James"
  },
  {
    handle: "@tech_lead_mj",
    message: "One of the most efficient developers I've worked with. The integration process was seamless and the code is incredibly clean.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=MJ"
  },
  {
    handle: "@startup_founder",
    message: "Scalability was our main concern, but the systems Stephen built handled our first 100k users without a single hitch.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    handle: "@creative_dir",
    message: "The animations and UI feel so premium. It's rare to find a developer with such a strong eye for design and performance.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Creative"
  },
  {
    handle: "@product_mg_k",
    message: "Highly recommend for any complex SaaS builds. Stephen is a natural problem solver who understands business needs.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kevin"
  },
  {
    handle: "@dev_expert_99",
    message: "Clean code, great documentation, and fast delivery. Exactly what you want when hiring a lead software engineer.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dev"
  },
  {
    handle: "@design_guru_v",
    message: "The project was delivered ahead of schedule and the app performance is top-notch. Truly impressive work from start to finish.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Guru"
  },
  {
    handle: "@biz_owner_alex",
    message: "Stephen transformed our legacy system into a modern, lightning-fast platform. It's been a game changer for our operations.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
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
          What people are saying
        </h2>
        <p className="text-[#9ba3af] text-sm md:text-base">
          Feedback from clients and teammates I've worked with on various projects.
        </p>
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
