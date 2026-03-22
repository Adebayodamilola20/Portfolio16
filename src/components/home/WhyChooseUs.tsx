'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const accordionItems = [
  {
    id: '01',
    title: 'Full-Stack Expertise',
    description: 'From responsive frontends to scalable backends, mobile apps to cloud infrastructure - I handle every layer of your software stack.'
  },
  {
    id: '02',
    title: 'Transparent Development',
    description: 'Stay in the loop with real-time updates, clear timelines, and open communication channels throughout the entire project lifecycle.'
  },
  {
    id: '03',
    title: 'Production-Ready Code',
    description: 'I deliver robust, scalable, and secure code that is fully tested and optimized for enterprise-grade performance.'
  },
  {
    id: '04',
    title: 'Rapid Deployment',
    description: 'Accelerate your time-to-market with my streamlined CI/CD pipelines and efficient release processes.'
  },
  {
    id: '05',
    title: 'Ongoing Support',
    description: 'My commitment doesn\'t end at launch. I provide continuous maintenance, monitoring, and iterative improvements.'
  },
  {
    id: '06',
    title: 'Complete Code Ownership',
    description: 'You retain 100% ownership of your intellectual property, including all source code and project assets.'
  }
];

export function WhyChooseUs() {
  const [openId, setOpenId] = useState<string | null>('01');

  const leftItems = accordionItems.slice(0, 3);
  const rightItems = accordionItems.slice(3, 6);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const renderAccordionColumn = (items: typeof accordionItems) => (
    <div className="flex flex-col">
      {items.map((item) => (
        <div key={item.id} className="border-b border-white/5 last:border-b-0">
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full py-8 flex items-center justify-between text-left group"
          >
            <div className="flex items-center gap-10">
              <span className="text-[10px] font-mono font-semibold text-gray-600 group-hover:text-gray-400 transition-colors">
                {item.id}
              </span>
              <span className="text-lg font-medium text-white group-hover:text-gray-300 transition-colors">
                {item.title}
              </span>
            </div>
            <motion.div
              animate={{ rotate: openId === item.id ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </motion.div>
          </button>
          
          <AnimatePresence>
            {openId === item.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pl-[4.5rem] pr-6 pb-8 text-gray-400 text-sm md:text-base leading-relaxed">
                  {item.description}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-16 md:py-20 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12">
          <div className="flex flex-col justify-between">
            <div className="mb-12 md:mb-16">
              <span className="text-[#3b82f6] font-mono text-[10px] tracking-[0.2em] uppercase font-bold block mb-6">
                Why Companies Choose Me
              </span>
              <h2 className="text-4xl md:text-[2.75rem] font-medium text-white tracking-tight leading-[1.15]">
                Built for your success.<br />
                Designed for growth.
              </h2>
            </div>
            
            {renderAccordionColumn(leftItems)}
          </div>
          
          <div className="flex flex-col md:pt-[150px]">
            {renderAccordionColumn(rightItems)}
          </div>
        </div>

      </div>
    </section>
  );
}
