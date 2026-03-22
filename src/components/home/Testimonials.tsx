'use client';
import { motion } from 'framer-motion';

const testimonials = [
  { quote: "The technical precision delivered transformed our vision into a production-ready platform faster than we thought possible.", author: "Enterprise Client", role: "Strategic Partner" },
  { quote: "A track record of building performant, scalable software that consistently exceeds enterprise standards.", author: "Executive Leadership", role: "Global Enterprise" },
];

export function Testimonials() {
  return (
    <section className="py-40 px-6 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-24 text-left">
          <span className="text-gray-600 font-mono text-[10px] tracking-[0.4em] uppercase mb-4 block font-bold">Feedback</span>
          <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9]">Trusted by the <br /> <span className="text-gray-500 italic">next generation</span> of innovators.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div key={i} className="p-16 border border-white/5 rounded-[3rem] bg-white/[0.02] backdrop-blur-sm relative group hover:border-white/10 transition-colors duration-500">
              <div className="text-gray-800 mb-12 text-7xl font-serif italic">"</div>
              <p className="text-gray-400 text-2xl md:text-3xl font-bold tracking-tight mb-12 italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex flex-col border-t border-white/5 pt-10">
                <span className="text-white font-bold tracking-tight text-xl">{t.author}</span>
                <span className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.3em] font-mono mt-2">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
