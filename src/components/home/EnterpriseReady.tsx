'use client';
import { motion } from 'framer-motion';
import { Shield, Sparkle, ShieldCheck, Box, Zap, Code, Clock, TreePine, Home, Activity } from 'lucide-react';

const features = [
  { 
    icon: ShieldCheck, 
    title: 'Enterprise-\nGrade Security', 
    desc: 'SOC-2 and HIPAA-ready implementations with bank-level encryption, secure authentication, role-based access control, and comprehensive audit trails.' 
  },
  { 
    icon: Box, 
    title: 'Scalable\nInfrastructure', 
    desc: 'Built to handle millions of users and transactions. Auto-scaling cloud architecture, load balancing, CDN delivery, and optimized database queries ensure peak performance.' 
  },
  { 
    icon: Zap, 
    title: 'Performance\nGuaranteed', 
    desc: '95+ Lighthouse scores, sub-2-second load times, and optimized mobile experiences. Comprehensive performance monitoring and continuous optimization.' 
  },
  { 
    icon: Code, 
    title: 'Production-\nReady Code', 
    desc: 'Clean, documented, and thoroughly tested codebase with 90%+ test coverage, automated CI/CD pipelines, comprehensive logging, and error monitoring.' 
  },
  { 
    icon: Clock, 
    title: '24/7 Support &\nMonitoring', 
    desc: 'Real-time uptime monitoring, automated alerts, incident response, and dedicated support channels. 99.9% uptime SLA with rapid issue resolution.' 
  }
];

const industries = [
  { name: 'SaaS / Tech', Icon: () => <span className="w-6 h-6 border border-black rounded-[4px] flex items-center justify-center font-bold text-sm">Y</span> },
  { name: 'Insurance', Icon: ShieldCheck },
  { name: 'Healthcare', Icon: Activity },
  { name: 'Financial Services', Icon: TreePine },
  { name: 'Real Estate', Icon: Home }
];

export function EnterpriseReady() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-[#EAEBE6] overflow-hidden text-black border-y border-black/5">
      {/* Texture Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.6] pointer-events-none mix-blend-multiply" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='1' height='1' fill='%23000' fill-opacity='0.15'/%3E%3C/svg%3E")` 
        }} 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-24 md:mb-32"
        >
          <span className="text-[#3b82f6] font-mono text-[10px] tracking-[0.2em] font-bold uppercase mb-8 block">
            Enterprise-Ready
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight flex flex-wrap items-center gap-x-4 gap-y-4">
            <span>Reliable.</span>
            <Shield className="w-10 h-10 md:w-14 md:h-14 stroke-1 opacity-60" />
            <span>Scalable.</span>
            <Sparkle className="w-10 h-10 md:w-14 md:h-14 stroke-1 opacity-60" />
            <span>Secure.</span>
          </h2>
        </motion.div>

        {/* Vertical List */}
        <div className="flex flex-col mb-32">
          {features.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col md:flex-row gap-6 md:gap-16 py-12 border-b border-black/10 last:border-b-0 group"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 md:w-20 md:h-16 flex items-center justify-center bg-blue-500/5 border border-blue-500/20 rounded-xl flex-shrink-0 group-hover:bg-blue-500/10 transition-colors">
                <item.icon className="w-6 h-6 md:w-8 md:h-8 text-blue-500 stroke-[1.5]" />
              </div>
              
              {/* Title Content */}
              <div className="md:w-64 flex-shrink-0">
                <h3 className="text-xl md:text-2xl font-semibold leading-snug whitespace-pre-wrap tracking-tight">
                  {item.title}
                </h3>
              </div>
              
              {/* Description Content */}
              <div className="flex-1">
                <p className="text-gray-600 text-[15px] md:text-base leading-relaxed tracking-wide font-medium">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee Section strictly spanning edge to edge! */}
      <div className="relative z-10 w-full pt-16 border-t border-black/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10">
          <span className="text-black/50 font-mono text-[9px] font-bold tracking-[0.1em] uppercase block">
            Trusted Across Industries
          </span>
        </div>

        {/* Left-to-Right Animated Marquee */}
        <motion.div 
          animate={{ x: ["-50%", "0%"] }} 
          transition={{ ease: "linear", duration: 30, repeat: Infinity }} 
          className="flex whitespace-nowrap gap-16 md:gap-32 w-max items-center"
        >
          {[...industries, ...industries, ...industries, ...industries].map((ind, idx) => (
             <div key={idx} className="flex items-center gap-4 text-black opacity-80 hover:opacity-100 transition-opacity whitespace-nowrap">
                <ind.Icon className="w-6 h-6 stroke-[1.5]" />
                <span className="font-semibold text-lg md:text-xl tracking-tight">{ind.name}</span>
             </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
