'use client';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function ProjectDetailPage() {
  return (
    <div className="min-h-screen bg-[#0E0E13] text-white pt-40 pb-32">
       <div className="max-w-7xl mx-auto px-6 text-center mb-20">
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter italic">Genesai.io</h1>
          <p className="text-gray-500 mt-8 text-xl max-w-2xl mx-auto">Building the future of genomic data processing with custom AI architectures.</p>
       </div>
       <div className="max-w-4xl mx-auto px-6">
          <div className="p-16 rounded-[4rem] border border-white/5 bg-white/[0.02]">
             <h2 className="text-3xl font-bold mb-8">The Challenge</h2>
             <p className="text-gray-400 text-lg leading-relaxed mb-12 italic">Processing terabytes of genomic data in real-time required a system built for extreme concurrency and low-latency decision making.</p>
             <h2 className="text-3xl font-bold mb-8">The Solution</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["Proprietary ML Models", "Cloud-Native Infrastructure", "Real-time Visualization", "End-to-end Security"].map((s) => (
                   <div key={s} className="flex items-center gap-3 p-6 bg-white/5 rounded-2xl border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-gray-500" />
                      <span className="font-bold text-sm">{s}</span>
                   </div>
                ))}
             </div>
          </div>
       </div>
    </div>
  );
}
