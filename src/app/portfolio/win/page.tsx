'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

// Reuse images from assets
import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';

export default function WinerCaseStudyPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-[#0A0A0A] text-white selection:bg-blue-500/30 font-sans"
    >
      
      {/* Hero Section */}
      <section className="pt-48 pb-20 px-6">
        <div className="max-w-[75rem] mx-auto">
          <motion.div variants={itemVariants}>
            <Link href="/portfolio" className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-gray-500 hover:text-[#60A5FA] transition-colors mb-12">
              <ArrowLeft className="w-3.5 h-3.5" />
              BACK TO PORTFOLIO
            </Link>

            <span className="inline-block bg-[#60A5FA]/10 text-[#60A5FA] px-4 py-1 rounded-md text-[10px] uppercase font-bold tracking-widest mb-8 border border-[#60A5FA]/20">
              NON-PROFIT / WEB APPS
            </span>
            <h1 className="text-5xl md:text-[6.5rem] font-medium tracking-tighter leading-[1.1] mb-8">
              WINER: <span className="text-gray-500 italic">Women Impacting Nigeria</span>
            </h1>

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-20 pb-20 border-b border-white/5">
              <div>
                <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-3">CLIENT</p>
                <p className="text-white text-lg font-medium">WIN Organization</p>
              </div>
              <div>
                <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-3">INDUSTRY</p>
                <p className="text-white text-lg font-medium">Social Advocacy</p>
              </div>
              <div>
                <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-3">TIMELINE</p>
                <p className="text-white text-lg font-medium">2 Weeks</p>
              </div>
              <div>
                <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-3">STATUS</p>
                <p className="text-[#60A5FA] text-lg font-medium">Launched 2024</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 mb-32">
        <div className="max-w-[85rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[300px] md:h-[600px] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-white/5 shadow-2xl"
          >
            <Image src={image1} alt="WINER Platform" fill className="object-cover" priority />
          </motion.div>
        </div>
      </section>

      {/* Content Section: The Challenge */}
      <section className="px-6 py-20 bg-[#0E0E14] border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
            <div>
              <h2 className="text-3xl md:text-[2.5rem] font-medium tracking-tight leading-none sticky top-32">
                The <span className="text-gray-500">Challenge</span>
              </h2>
            </div>
            <div className="space-y-8">
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light italic">
                Women Impacting Nigeria required a digital transformation to consolidate their various initiatives into a single, high-impact platform that could correctly communicate their mission and drive social change across communities.
              </p>
              <ul className="space-y-4">
                {[
                  "Rebrand from a simple blog to a premium advocacy platform",
                  "Create a unified experience for multiple community initiatives",
                  "Enable seamless donation and volunteer registration flows",
                  "Optimize visual communication for high engagement",
                  "Build a future-proof CMS for internal impact reporting"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#60A5FA] mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-32">
        <div className="max-w-[75rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-[250px] md:h-[400px] rounded-[3rem] overflow-hidden border border-white/5">
            <Image src={image3} alt="WINER About" fill className="object-cover" />
          </div>
          <div className="relative h-[250px] md:h-[400px] rounded-[3rem] overflow-hidden border border-white/5">
            <Image src={image2} alt="WINER Updates" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Content Section: Our Solution */}
      <section className="px-6 py-32 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
            <div>
              <h2 className="text-3xl md:text-[2.5rem] font-medium tracking-tight leading-none sticky top-32">
                Our <span className="text-gray-500">Solution</span>
              </h2>
            </div>
            <div className="space-y-12">
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
                We engineered a premium web application that blends narrative-driven design with high-performance technical implementation, empowering WIN to reach thousands more across Nigeria.
              </p>

              {/* Technical Implementation details */}
              <div className="border-t border-white/10 pt-12 space-y-6">
                 {[
                   { label: "Framework", val: "Next.js specialized for non-profit SEO and high-speed loading" },
                   { label: "Architecture", val: "Scalable component-based design for long-term growth" },
                   { label: "UI Design", val: "Cinematic immersive layouts with high-resolution photography" },
                   { label: "Integrations", val: "Custom payment gateways and community management tools" },
                   { label: "Performance", val: "Lightweight assets and CDN distribution for accessibility" }
                 ].map((item, i) => (
                   <div key={i} className="flex border-b border-white/5 pb-6">
                      <p className="w-1/3 text-gray-500 text-[10px] uppercase font-bold tracking-widest">{item.label}</p>
                      <p className="w-2/3 text-gray-300 text-sm md:text-base">{item.val}</p>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Impact Section */}
      <section className="px-6 py-32 mb-20">
        <div className="max-w-[70rem] mx-auto">
          <div className="bg-[#0E0E14] border border-white/5 rounded-[3rem] md:rounded-[4rem] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full" />
            
            <div className="max-w-3xl relative z-10">
              <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-10">CLIENT IMPACT</p>
              <h3 className="text-2xl md:text-4xl font-light italic text-white leading-relaxed mb-12">
                "Zera transformed our community outreach with a portal that truly represents our mission. Our engagement rate has tripled since the launch of the new platform."
              </h3>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white font-bold">W</div>
                <div>
                  <p className="text-white font-medium">Community Director</p>
                  <p className="text-gray-500 text-sm">Women Impacting Nigeria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-40 text-center border-t border-white/5">
        <h2 className="text-4xl md:text-6xl font-medium mb-12">Ready to Build Your Product?</h2>
        <Link href="/contact" className="inline-flex items-center bg-white text-black px-10 py-4 rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-gray-200 transition-colors">
          Start Your Project <ArrowRight className="ml-3 w-4 h-4" />
        </Link>
      </section>

    </motion.div>
  );
}
