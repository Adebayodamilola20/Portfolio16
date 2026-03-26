'use client';
import { motion } from 'framer-motion';

export function TrackRecordMarquee() {
  const text = "100+ PROJECTS DELIVERED. READY TO BUILD YOURS? ";
  
  return (
    <section className="py-20 md:py-32 bg-[#050505] overflow-hidden">
      <div className="relative flex overflow-hidden whitespace-nowrap border-y border-white/5 py-10 md:py-16">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap items-center"
        >
          {/* Duplicate text many times to ensure a dense, seamless flow */}
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="text-7xl md:text-9xl font-black tracking-tighter text-white uppercase px-10">
                {text}
              </span>
              <span 
                className="text-7xl md:text-9xl font-black tracking-tighter text-transparent uppercase px-10"
                style={{ WebkitTextStroke: '2px rgba(255,255,255,0.1)' }}
              >
                {text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
