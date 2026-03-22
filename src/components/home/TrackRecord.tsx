'use client';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const cards = [
  {
    title: 'Home',
    href: '/',
    topLabel: 'PROJECTS DELIVERED',
    topValue: '100+',
    dots: { cols: 8, rows: 5, color: 'bg-blue-500' }
  },
  {
    title: 'About',
    href: '/company',
    topLabel: 'YEARS EXPERIENCE',
    topValue: '10+',
    dots: { cols: 15, rows: 8, color: 'bg-[#e5e5e5]' }
  },
  {
    title: 'Contact',
    href: '/contact',
    topLabel: 'FREE CONSULTATION',
    topValue: '30min',
    dots: { cols: 8, rows: 8, color: 'bg-blue-400' }
  }
];

function DotGrid({ cols, rows, color }: { cols: number, rows: number, color: string }) {
  const dots = Array.from({ length: cols * rows });
  return (
    <div 
      className="grid gap-[4px] w-max" 
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    >
      {dots.map((_, i) => (
        <div key={i} className={`w-[3px] h-[3px] rounded-full ${color}`} />
      ))}
    </div>
  );
}

export function TrackRecord() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(0); // Default first one selected

  return (
    <section className="bg-[#050505] text-white pt-32 flex flex-col">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mb-20">
        <span className="text-[#3b82f6] font-mono text-[10px] tracking-[0.2em] font-bold uppercase mb-8 block">
          Our Track Record
        </span>
        <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-[1.1]">
          100+ projects delivered.<br />
          Ready to build yours?
        </h2>
      </div>

      <div className="w-full border-t border-b border-white/10 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
        {cards.map((card, idx) => {
          const isHovered = hoveredIdx === idx;
          return (
            <Link 
              key={idx} 
              href={card.href}
              onMouseEnter={() => setHoveredIdx(idx)}
              className={`flex flex-col h-[400px] md:h-[500px] p-8 md:p-12 transition-colors duration-500 relative group ${isHovered ? 'bg-[#121212]' : 'bg-[#050505] hover:bg-[#0a0a0a]'}`}
            >
              <div className="flex justify-between items-start w-full">
                <div className="flex gap-4 font-mono text-[9px] font-bold uppercase tracking-widest text-gray-500">
                  <span>{card.topLabel}</span>
                  <span className="text-white">{card.topValue}</span>
                </div>
                
                {/* Hover Arrow Button */}
                <div className={`w-10 h-10 rounded-full bg-[#EAEBE6] text-black flex items-center justify-center transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                   <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              <div className="mt-auto flex flex-col gap-12">
                <DotGrid cols={card.dots.cols} rows={card.dots.rows} color={card.dots.color} />
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white/90 group-hover:text-white transition-colors">
                  {card.title}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
