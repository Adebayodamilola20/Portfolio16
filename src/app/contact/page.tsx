'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const projectTypes = [
  "SaaS Platform",
  "FinTech Solution",
  "Mobile App",
  "Web Application",
  "AI & Automation",
  "Custom Software"
];

const budgets = [
  "₦200k - ₦500k",
  "₦500k - ₦1M",
  "₦1M - ₦1.5M",
  "₦1.5M - ₦2M+"
];

const timelines = [
  "Less than 1 month",
  "1 - 2 months",
  "2 - 3 months",
  "3+ months"
];

const slideVariants: any = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 50 : -50,
    opacity: 0,
    transition: {
      duration: 0.15,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

const staggerForm = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const formItem = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as any } }
};

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  
  const [formData, setFormData] = useState({
    projectType: '',
    budget: '',
    timeline: '',
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  });

  const nextStep = () => {
    if (step < 4) {
      setDirection(1);
      setStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setDirection(-1);
      setStep(prev => prev - 1);
    }
  };

  const isStepValid = () => {
    if (step === 1) return formData.projectType !== '';
    if (step === 2) return formData.budget !== '';
    if (step === 3) return formData.timeline !== '';
    if (step === 4) return formData.name !== '' && formData.email !== '' && formData.phone !== '' && formData.message !== '';
    return false;
  };

  const updateData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 overflow-hidden flex flex-col justify-center">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        {/* Header */}
        <div className="text-left mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-medium tracking-tight mb-4"
          >
            Let's build <span className="text-blue-500 italic">together.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl font-medium"
          >
            Tell us about your vision, and we'll help you bring it to life.
          </motion.p>
        </div>

        {/* Custom Progress Stepper */}
        <div className="flex items-center justify-between w-[240px] md:w-[320px] mb-12 relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-white/5 rounded-full" />
          <motion.div 
            className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"
            initial={{ width: "0%" }}
            animate={{ width: `${((step - 1) / 3) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          {[1, 2, 3, 4].map((num) => (
            <div 
              key={num} 
              className={`relative z-10 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-[10px] md:text-xs transition-all duration-500
                ${step >= num 
                  ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] border border-blue-400' 
                  : 'bg-[#050505] text-gray-600 border border-white/10'}`}
            >
              {num}
            </div>
          ))}
        </div>

        {/* Wizard Forms with Animation Container */}
        <div className="relative w-full overflow-hidden min-h-[400px] flex flex-col">
           
           <AnimatePresence custom={direction} mode="wait">
             
             {step === 1 && (
               <motion.div
                 key="step1"
                 custom={direction}
                 variants={slideVariants}
                 initial="enter"
                 animate="center"
                 exit="exit"
                 className="flex-1 flex flex-col"
               >
                 <h2 className="text-2xl md:text-3xl font-medium mb-8">What would you like to build?</h2>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                   {projectTypes.map((type) => (
                     <button
                       key={type}
                       onClick={() => updateData('projectType', type)}
                       className={`p-6 rounded-2xl border transition-all duration-300 text-left flex items-center justify-start h-24
                         ${formData.projectType === type 
                           ? 'bg-white text-black border-white shadow-[0_0_30px_rgba(255,255,255,0.15)] scale-[1.02]' 
                           : 'bg-white/[0.02] text-gray-400 border-white/5 hover:bg-white/[0.05] hover:border-white/20'}`}
                     >
                       <span className={`font-bold text-sm md:text-base ${formData.projectType === type ? 'text-black' : 'text-gray-300'}`}>
                         {type}
                       </span>
                     </button>
                   ))}
                 </div>
               </motion.div>
             )}

             {step === 2 && (
               <motion.div
                 key="step2"
                 custom={direction}
                 variants={slideVariants}
                 initial="enter"
                 animate="center"
                 exit="exit"
                 className="flex-1 flex flex-col"
               >
                 <h2 className="text-2xl md:text-3xl font-medium mb-8">What is your allocated budget?</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {budgets.map((budget) => (
                     <button
                       key={budget}
                       onClick={() => updateData('budget', budget)}
                       className={`p-6 rounded-2xl border transition-all duration-300 text-left h-24 flex items-center justify-center
                         ${formData.budget === budget 
                           ? 'bg-white text-black border-white shadow-[0_0_30px_rgba(255,255,255,0.15)] scale-[1.02]' 
                           : 'bg-white/[0.02] text-gray-400 border-white/5 hover:bg-white/[0.05] hover:border-white/20'}`}
                     >
                       <span className={`font-mono font-bold text-lg md:text-xl tracking-wide ${formData.budget === budget ? 'text-black' : 'text-white'}`}>
                         {budget}
                       </span>
                     </button>
                   ))}
                 </div>
               </motion.div>
             )}

             {step === 3 && (
               <motion.div
                 key="step3"
                 custom={direction}
                 variants={slideVariants}
                 initial="enter"
                 animate="center"
                 exit="exit"
                 className="flex-1 flex flex-col"
               >
                 <h2 className="text-2xl md:text-3xl font-medium mb-8">How quickly do you need this delivered?</h2>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   {timelines.map((time) => (
                     <button
                       key={time}
                       onClick={() => updateData('timeline', time)}
                       className={`p-6 rounded-2xl border transition-all duration-300 text-left h-24 flex items-center justify-center
                         ${formData.timeline === time 
                           ? 'bg-white text-black border-white shadow-[0_0_30px_rgba(255,255,255,0.15)] scale-[1.02]' 
                           : 'bg-white/[0.02] text-gray-400 border-white/5 hover:bg-white/[0.05] hover:border-white/20'}`}
                     >
                       <span className={`font-bold text-base md:text-lg ${formData.timeline === time ? 'text-black' : 'text-gray-200'}`}>
                         {time}
                       </span>
                     </button>
                   ))}
                 </div>
               </motion.div>
             )}

             {step === 4 && (
               <motion.div
                 key="step4"
                 custom={direction}
                 variants={slideVariants}
                 initial="enter"
                 animate="center"
                 exit="exit"
                 className="flex-1 flex flex-col"
               >
                 <h2 className="text-2xl md:text-3xl font-medium mb-8">Final Details</h2>
                 <motion.div 
                   variants={staggerForm}
                   initial="hidden"
                   animate="visible"
                   className="space-y-6"
                 >
                   <motion.div variants={formItem} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-2">Name *</label>
                       <input 
                         type="text" 
                         value={formData.name}
                         onChange={(e) => updateData('name', e.target.value)}
                         className="w-full bg-white/[0.03] border border-white/5 rounded-2xl p-5 focus:outline-none focus:border-blue-500/50 focus:bg-white/5 transition-all text-white placeholder-gray-600 font-medium" 
                         placeholder="John Doe" 
                       />
                     </div>
                     <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-2">Email *</label>
                       <input 
                         type="email" 
                         value={formData.email}
                         onChange={(e) => updateData('email', e.target.value)}
                         className="w-full bg-white/[0.03] border border-white/5 rounded-2xl p-5 focus:outline-none focus:border-blue-500/50 focus:bg-white/5 transition-all text-white placeholder-gray-600 font-medium" 
                         placeholder="john@example.com" 
                       />
                     </div>
                   </motion.div>

                   <motion.div variants={formItem} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-2">Phone Number *</label>
                       <input 
                         type="tel" 
                         value={formData.phone}
                         onChange={(e) => updateData('phone', e.target.value)}
                         className="w-full bg-white/[0.03] border border-white/5 rounded-2xl p-5 focus:outline-none focus:border-blue-500/50 focus:bg-white/5 transition-all text-white placeholder-gray-600 font-medium" 
                         placeholder="+234 800 000 0000" 
                       />
                     </div>
                     <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-2">Company (Optional)</label>
                       <input 
                         type="text" 
                         value={formData.company}
                         onChange={(e) => updateData('company', e.target.value)}
                         className="w-full bg-white/[0.03] border border-white/5 rounded-2xl p-5 focus:outline-none focus:border-blue-500/50 focus:bg-white/5 transition-all text-white placeholder-gray-600 font-medium" 
                         placeholder="Acme Corp" 
                       />
                     </div>
                   </motion.div>

                   <motion.div variants={formItem} className="space-y-2">
                     <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-2">Tell us more about the project *</label>
                     <textarea 
                       value={formData.message}
                       onChange={(e) => updateData('message', e.target.value)}
                       className="w-full bg-white/[0.03] border border-white/5 rounded-2xl p-5 h-32 focus:outline-none focus:border-blue-500/50 focus:bg-white/5 transition-all text-white placeholder-gray-600 font-medium resize-none" 
                       placeholder="Briefly describe your goals..." 
                     />
                   </motion.div>
                 </motion.div>

                 <motion.div 
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.8 }}
                   className="mt-8 flex flex-col items-center justify-center p-6 bg-blue-900/10 border border-blue-500/20 rounded-2xl"
                 >
                   <p className="text-gray-400 text-sm font-medium mb-3">Prefer to speak directly with an expert?</p>
                   <a 
                     href="#" 
                     className="text-white hover:text-blue-400 border border-white/10 hover:border-blue-500/50 bg-[#050505] px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all"
                   >
                     Schedule a Discovery Call
                   </a>
                 </motion.div>
               </motion.div>
             )}

           </AnimatePresence>

           {/* Navigation Controls */}
           <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
             {step > 1 ? (
               <button 
                 onClick={prevStep}
                 className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-bold text-xs uppercase tracking-widest px-4 py-3"
               >
                 <ArrowLeft className="w-4 h-4" /> Back
               </button>
             ) : (
               <div /> // Placeholder for spacing
             )}
             
             <button
               onClick={nextStep}
               disabled={!isStepValid()}
               className={`px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] md:text-xs transition-all flex items-center gap-3
                 ${isStepValid() 
                   ? 'bg-white text-black hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]' 
                   : 'bg-white/5 text-white/30 cursor-not-allowed border border-white/5'}`}
             >
               {step === 4 ? 'Submit Project Request' : 'Next Step'} 
               {step !== 4 && <ArrowRight className="w-4 h-4" />}
             </button>
           </div>

        </div>
      </div>
    </div>
  );
}
