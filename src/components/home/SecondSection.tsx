'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, animate } from 'framer-motion';

const stats = [
  { label: 'COMPILE', value: 100, color: 'from-blue-600 to-blue-400', icon: '=' },
  { label: 'TEST', value: 100, color: 'from-emerald-600 to-emerald-400', icon: '✓' },
  { label: 'BUILD', value: 100, color: 'from-yellow-600 to-yellow-400', icon: '↓' },
  { label: 'DEPLOY', value: 91, color: 'from-purple-600 to-purple-400', icon: '»' },
];

function StatBar({ stat }: { stat: typeof stats[0] }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "0px 0px -100px 0px" });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, stat.value, {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        if (nodeRef.current) nodeRef.current.textContent = `${Math.round(latest)}%`;
      }
    });
    return controls.stop;
  }, [isInView, stat.value]);

  return (
    <div className="flex flex-col items-center gap-4 group pt-2">
      <span 
        ref={nodeRef} 
        className={`text-[12px] md:text-[14px] font-mono font-bold ${stat.color.split(' ')[1].replace('to-', 'text-')} mb-1`}
      >
        0%
      </span>
      <div className="w-16 md:w-24 bg-white/[0.03] rounded-[20px] relative overflow-hidden flex flex-col justify-end border border-white/10 h-[280px] md:h-[350px] shadow-2xl">
         <motion.div 
           initial={{ height: "0%" }}
           whileInView={{ height: `${stat.value}%` }}
           transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
           viewport={{ once: true, amount: 0.1 }}
           className={`w-full bg-gradient-to-t ${stat.color} rounded-t-xl opacity-90 transition-opacity drop-shadow-2xl shadow-${stat.color.split('-')[1]}-500`}
         />
      </div>
      <div className="flex flex-col items-center gap-2 mt-2">
         <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sm text-gray-400 font-bold group-hover:text-white transition-all">
            {stat.icon}
         </div>
         <span className="text-[9px] md:text-[10px] font-mono font-bold tracking-[0.2em] text-gray-500 uppercase">
            {stat.label}
         </span>
      </div>
    </div>
  );
}

function Word({ word, start, end, scrollYProgress }: { word: string, start: number, end: number, scrollYProgress: any }) {
  const color = useTransform(scrollYProgress, [start, end], ["#333333", "#ffffff"]);
  return (
    <motion.span style={{ color }} className="mr-[0.25em] inline-block">
      {word}
    </motion.span>
  );
}

export function SecondSection() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "center 25%"] 
  });

  const text = "From ambitious startups to established enterprises, companies worldwide trust Stephen to build their critical software systems.";
  const words = text.split(" ");

  return (
    <section 
      ref={containerRef}
      className="py-32 md:py-40 bg-[#050505] flex flex-col lg:flex-row items-center justify-between px-10 md:px-20 gap-16 md:gap-24 overflow-hidden min-h-[90vh]"
    >
      
      {/* Meters Section */}
      <div className="flex gap-4 md:gap-8 items-end order-2 lg:order-1 w-full lg:w-auto justify-center lg:justify-start">
        {stats.map((stat, i) => (
          <StatBar key={i} stat={stat} />
        ))}
      </div>
      {/* Text Section - Word by Word reveal */}
      <div className="flex-1 space-y-8 lg:pl-10 order-1 lg:order-2 text-center lg:text-left">
        <h2 className="text-4xl md:text-5xl lg:text-[54px] font-medium leading-[1.2] tracking-tight text-white mb-6">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + (1 / words.length);
            // The hook rules require useTransform to not be nested conditionally or in callbacks.
            // Since this is inside a map which runs synchronously in render, technically React allows it,
            // but ESLint struggles. To be safe, we calculate it using an inline component or let the linter ignore it.
            // Actually, we can just map the words and render an inline component to use the hook safely.
            return (
              <Word key={i} word={word} start={start} end={end} scrollYProgress={scrollYProgress} />
            );
          })}
        </h2>
        
        <motion.p 
          style={{ opacity: useTransform(scrollYProgress, [0.8, 1], [0.2, 1]) }}
          className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed tracking-tight max-w-2xl mx-auto lg:mx-0"
        >
          Custom solutions engineered for performance, scalability, and long-term business success.
        </motion.p>
      </div>

    </section>
  );
}
