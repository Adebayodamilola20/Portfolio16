'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, useInView, animate } from 'framer-motion';

function Counter({ from, to, duration = 2.5, delay = 0, suffix = '+' }: { from: number, to: number, duration?: number, delay?: number, suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "0px" });

  useEffect(() => {
    if (!isInView || !nodeRef.current) return;
    const controls = animate(from, to, {
      duration,
      delay,
      ease: "easeOut",
      onUpdate(value) {
        if (nodeRef.current) {
          nodeRef.current.textContent = value.toFixed(0) + suffix;
        }
      }
    });
    return () => controls.stop();
  }, [from, to, duration, delay, isInView, suffix]);

  return <span ref={nodeRef}>{from}{suffix}</span>;
}

const sections = [
  { id: 'developer', title: 'The Developer' },
  { id: 'problem', title: 'The Problem' },
  { id: 'approach', title: 'My Approach' },
  { id: 'build', title: 'What I Build' },
  { id: 'philosophy', title: 'Philosophy' },
  { id: 'projects', title: 'Projects' },
  { id: 'goal', title: 'My Goal' },
  { id: 'lets-build', title: "Let's Build" },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const dropDownItem = {
  hidden: { opacity: 0, y: -30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" as any } 
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" as any } 
  }
};

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState('developer');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120; // Accounts for header spacing
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0E0E13] text-white pt-32 pb-32 selection:bg-[#0080FF]/30">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Top Header Section with Staggered Drop */}
        <motion.div 
          className="mb-24"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* 1. Tag */}
          <motion.div variants={dropDownItem} className="flex items-center gap-3 text-[#0080FF] mb-12">
             <div className="w-2 h-2 rotate-45 bg-[#0080FF]" />
             <span className="text-[10.5px] font-bold tracking-[0.2em] uppercase">About Us</span>
          </motion.div>

          {/* 2. Hero Image */}
          <motion.div variants={dropDownItem} className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-12 relative">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80" 
              alt="Software Engineering Workspace" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-[#0E0E13]/20 mix-blend-overlay" />
          </motion.div>

          {/* 3. Stats Row with CountUp */}
          <motion.div variants={dropDownItem} className="flex flex-wrap items-center gap-10 md:gap-16 text-[13px] md:text-sm text-gray-400 font-medium">
            <div><span className="text-[#0080FF] font-bold text-base md:text-lg mr-1.5"><Counter from={1} to={4} delay={0.6} /></span> years of experience</div>
            <div className="h-4 w-px bg-white/10 hidden md:block" />
            <div><span className="text-[#0080FF] font-bold text-base md:text-lg mr-1.5"><Counter from={1} to={7} delay={0.7} /></span> projects delivered</div>
            <div className="flex-1" />
            <div className="hidden md:block"><span className="text-[#0080FF] font-bold text-base md:text-lg mr-1.5"><Counter from={50} to={95} delay={0.8} /></span> Lighthouse scores</div>
          </motion.div>
        </motion.div>

        {/* Main Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
          
          {/* Left Content Column */}
          <div className="lg:col-span-8 space-y-36 pb-32">
            {/* Intro */}
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px" }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-medium tracking-tight leading-[1.1] mb-12 max-w-[800px] flex flex-wrap gap-x-3 gap-y-1">
                {"Engineering the Software That Powers Modern Businesses.".split(" ").map((word, i) => (
                  <motion.span key={i} variants={dropDownItem} className="inline-block">
                    {word}
                  </motion.span>
                ))}
              </h1>
              <div className="space-y-6 text-gray-400 text-lg leading-[1.8] max-w-[720px]">
                <p>
                  I am a specialized software engineer and designer focused on building custom platforms, applications, and intelligent systems for companies that require more than off-the-shelf tools.
                </p>
                <p>
                  I partner with founders, startups, and growing businesses to develop software that solves real operational problems, scales with demand, and supports long-term growth.
                </p>
              </div>
              <div className="mt-12 pl-6 border-l-[3px] border-[#0080FF]">
                <p className="text-[12.5px] font-bold tracking-[0.25em] uppercase text-gray-400">
                  YOUR VISION. MY CODE. NO LIMITS.
                </p>
              </div>
            </motion.div>

            {/* Section 1: The Developer */}
            <section id="developer" className="scroll-mt-32">
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px" }}>
                <div className="text-[#0080FF] text-[10.5px] font-bold tracking-[0.2em] uppercase mb-6">About Me</div>
                <h2 className="text-[28px] md:text-[32px] font-medium mb-8 tracking-tight">AI Systems & Product Development</h2>
                <div className="space-y-6 text-gray-400 text-lg leading-[1.8] max-w-[720px]">
                  <p>
                    I build intelligent applications powered by Python and retrieval workflows. My AI projects use a vector search engine to find relevant context, then generate clear answers.
                  </p>
                  <p>
                    I design great user experiences too, often pairing a Flutter frontend with reliable APIs. On the AI side, I make the system smarter with LangChain—so responses are more accurate, more relevant, and easier to use.
                  </p>
                  <ul className="space-y-3 mt-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#0080FF] rounded-full shrink-0 mt-2" />
                      Engineered a CLI pipeline to automate repeatable tasks and speed up development.
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#0080FF] rounded-full shrink-0 mt-2" />
                      Led development of <span className="text-white font-medium">ReloExpress</span>, a logistics and relocation app.
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#0080FF] rounded-full shrink-0 mt-2" />
                      Collaborated on <span className="text-white font-medium">Ojawaja</span> (App Store & Play Store), a community platform that helps people meet based on current CGPA profiles from Caleb University (up to 4.1).
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#0080FF] rounded-full shrink-0 mt-2" />
                      Automated data preprocessing and experiment tracking in Python, and built fast, RESTful services using FastAPI.
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#0080FF] rounded-full shrink-0 mt-2" />
                      Developed a voice-enabled AI assistant where users can speak, and the AI replies with voice responses.
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#0080FF] rounded-full shrink-0 mt-2" />
                      Earned certificates in Networking and Fundamentals from my school.
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#0080FF] rounded-full shrink-0 mt-2" />
                      Integrated GPS-tracking features into a recent bike/courier delivery app to support real-time location updates.
                    </li>
                  </ul>
                </div>
              </motion.div>
            </section>

            {/* Section 2: Our Approach */}
            <section id="approach" className="scroll-mt-32">
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px" }}>
                <div className="text-[#0080FF] text-[10.5px] font-bold tracking-[0.2em] uppercase mb-6">Who I Work With</div>
                <h2 className="text-[28px] md:text-[32px] font-medium mb-8 tracking-tight">The Type of Projects I Take On</h2>
                <p className="text-gray-400 text-lg leading-[1.8] max-w-[720px] mb-8">
                  I work best with companies that need serious software solutions. Typical projects include:
                </p>
                <ul className="space-y-4 text-gray-400 text-lg max-w-[720px] mb-8">
                  <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-[#0080FF] rounded-full shrink-0" /> SaaS platforms</li>
                  <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-[#0080FF] rounded-full shrink-0" /> Operational automation systems</li>
                  <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-[#0080FF] rounded-full shrink-0" /> Business management platforms</li>
                  <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-[#0080FF] rounded-full shrink-0" /> Custom dashboards and internal tools</li>
                  <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-[#0080FF] rounded-full shrink-0" /> AI-driven workflow systems</li>
                  <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-[#0080FF] rounded-full shrink-0" /> Complex web and mobile applications</li>
                </ul>
                <p className="text-gray-400 text-lg leading-[1.8] max-w-[720px]">
                  If a business relies heavily on software to operate or grow, I design and build the systems that make that possible.
                </p>
              </motion.div>
            </section>

            {/* Section 3: What We Build */}
            <section id="build" className="scroll-mt-32">
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px" }}>
                <div className="text-[#0080FF] text-[10.5px] font-bold tracking-[0.2em] uppercase mb-6">What I Build</div>
                <h2 className="text-[28px] md:text-[32px] font-medium mb-8 tracking-tight">Architected for Scale</h2>
                <div className="space-y-6 text-gray-400 text-lg leading-[1.8] max-w-[720px]">
                  <p>I don&apos;t just write code; I architect systems. Every platform I build is designed with the future in mind, ensuring it can handle increased traffic, complex data models, and evolving business requirements.</p>
                  <p>By leveraging modern frameworks and cloud-native architectures, I deliver high-performance solutions that are secure, reliable, and fundamentally scalable from day one.</p>
                </div>
              </motion.div>
            </section>

            {/* Section 4: Philosophy */}
            <section id="philosophy" className="scroll-mt-32">
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px" }}>
                <div className="text-[#0080FF] text-[10.5px] font-bold tracking-[0.2em] uppercase mb-6">Philosophy</div>
                <h2 className="text-[28px] md:text-[32px] font-medium mb-8 tracking-tight">Performance Over Everything</h2>
                <div className="space-y-6 text-gray-400 text-lg leading-[1.8] max-w-[720px]">
                  <p>My philosophy is rooted in engineering excellence. I believe that speed, accessibility, and clean architecture are not optional add-ons—they are the baseline for any professional software product.</p>
                  <p>I adhere to rigorous testing standards and best practices, ensuring that the software I ship is not just visually stunning, but functionally flawless.</p>
                </div>
              </motion.div>
            </section>

            {/* Section 5: The Problem */}
            <section id="problem" className="scroll-mt-32">
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px" }}>
                <div className="text-[#0080FF] text-[10.5px] font-bold tracking-[0.2em] uppercase mb-6">The Problem</div>
                <h2 className="text-[28px] md:text-[32px] font-medium mb-8 tracking-tight">The Problem With Most Software Projects</h2>
                <div className="space-y-6 text-gray-400 text-lg leading-[1.8] max-w-[720px]">
                  <p>Many businesses eventually hit the limits of the tools they rely on.</p>
                  <p>Templates become restrictive. Plugins conflict with each other. Third-party platforms force workflows that don&apos;t match how the company actually operates.</p>
                  <p>As businesses grow, these limitations often lead to inefficiencies, technical debt, and expensive rebuilds.</p>
                </div>
                <div className="mt-10 pl-6 border-l-[3px] border-[#0080FF]">
                  <p className="text-xl text-white font-medium">
                    Software should adapt to the business, not the other way around.
                  </p>
                </div>
              </motion.div>
            </section>

            {/* Section 6: Projects */}
            <section id="projects" className="scroll-mt-32">
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px" }}>
                <div className="text-[#0080FF] text-[10.5px] font-bold tracking-[0.2em] uppercase mb-6">Projects</div>
                <h2 className="text-[28px] md:text-[32px] font-medium mb-8 tracking-tight">Delivering Results</h2>
                <div className="space-y-6 text-gray-400 text-lg leading-[1.8] max-w-[720px]">
                  <p>Over the years, I have delivered 7+ successful projects ranging from zero-to-one MVP builds for startups to complex enterprise integrations for established corporations.</p>
                  <p>My portfolio reflects my commitment to quality, demonstrating consistent performance in diverse industries such as fintech, healthcare, and e-commerce.</p>
                </div>
              </motion.div>
            </section>

            {/* Section 7: Our Goal */}
            <section id="goal" className="scroll-mt-32">
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px" }}>
                <div className="text-[#0080FF] text-[10.5px] font-bold tracking-[0.2em] uppercase mb-6">My Goal</div>
                <div className="mt-8 pl-6 border-l-[3px] border-[#0080FF]">
                  <p className="text-xl md:text-2xl text-white font-medium leading-relaxed max-w-[650px]">
                    Build software that works exactly the way the business needs it to. Not software that forces the business to change how it operates.
                  </p>
                </div>
              </motion.div>
            </section>

            {/* Section 8: Let's Build */}
            <section id="lets-build" className="scroll-mt-32">
               <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px" }}>
                <h2 className="text-[28px] md:text-[32px] font-medium mb-8 tracking-tight">Let&apos;s Build Something <span className="text-[#0080FF]">Powerful</span></h2>
                <div className="space-y-10 text-gray-400 text-lg leading-[1.8] max-w-[720px]">
                  <p>If you&apos;re planning to launch a platform, automate operations, or develop a custom software system for your business, I am ready to help.</p>
                  <Link href="/schedule" className="inline-flex rounded-full bg-white text-black px-8 py-4 font-bold text-xs tracking-widest items-center gap-3 hover:bg-gray-200 transition-colors uppercase w-max">
                     START A PROJECT WITH ME <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </section>
          </div>

          {/* Right Sidebar (Sticky Table of Contents) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="hidden lg:block lg:col-span-4 relative"
          >
            <div className="sticky top-32 flex flex-col items-center pt-8">
              
              {/* Logo and CTA */}
              <div className="flex flex-col items-center mb-16">
                <div className="flex flex-col items-center gap-2 mb-8">
                  <div className="w-14 h-14 rounded bg-[#111] flex items-center justify-center border border-white/10 relative overflow-hidden">
                    <span className="text-white font-bold text-2xl italic z-10">S</span>
                    <div className="absolute w-full h-full border-[1.5px] border-dashed border-[#38bdf8]/30 rounded animate-spin-slow pointer-events-none" />
                    <div className="absolute inset-x-0 h-[1px] bg-[#38bdf8]/50 top-1/2 pointer-events-none" />
                    <div className="absolute inset-y-0 w-[1px] bg-[#38bdf8]/50 left-1/2 pointer-events-none" />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-white font-bold text-2xl leading-none tracking-tight">Stephen</span>
                    <span className="text-gray-500 text-[9px] uppercase tracking-widest font-bold mt-1.5">Software Engineer</span>
                  </div>
                </div>
                
                <p className="text-white font-bold text-base mb-6 text-center">Ready to build software that works?</p>
                <Link href="/schedule" className="rounded-full bg-white text-black px-7 py-3 font-bold text-[11px] tracking-widest flex items-center gap-2 hover:bg-gray-200 transition-all uppercase whitespace-nowrap">
                  START A PROJECT WITH ME <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* ToC List */}
              <nav className="flex flex-col gap-4 w-[240px]">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="flex items-center gap-4 text-sm font-medium transition-all duration-300 text-left group"
                  >
                    <div 
                      className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors duration-300 ${
                        activeSection === section.id ? 'bg-[#0080FF]' : 'bg-gray-800 group-hover:bg-gray-600'
                      }`} 
                    />
                    <span 
                      className={`transition-colors duration-300 ${
                        activeSection === section.id ? 'text-[#0080FF]' : 'text-gray-500 group-hover:text-gray-300'
                      }`}
                    >
                      {section.title}
                    </span>
                  </button>
                ))}
              </nav>

            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
