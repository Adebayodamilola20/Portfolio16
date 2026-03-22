'use client';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FlutterMobileAppsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-blue-500/30">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A0A0A]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]" />
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[120px]" />
        </div>
        
        <div className="max-w-[70rem] mx-auto relative z-10 flex flex-col items-center text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-[#A78BFA] font-mono text-[10px] tracking-[0.2em] uppercase mb-12 block font-semibold text-purple-400"
          >
            Service 03 / Flutter & Mobile Apps
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-[5.5rem] font-normal tracking-tight mb-10 leading-[1.1] text-white"
          >
            Flutter & Mobile Apps That<br /> <span className="text-[#60A5FA]">Users Love</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#9CA3AF] text-[1.1rem] max-w-2xl mx-auto leading-relaxed mb-32"
          >
            Native performance. Seamless experience. Built for iOS, Android, and beyond with one codebase.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-[55rem] mx-auto text-left"
          >
            <p className="text-[1.25rem] leading-[1.8] text-gray-300 pb-20">
              Mobile isn't just an extension of the web - it's where your users live. At Stephen Software Studio, we design and build <strong className="text-white font-medium">high-performance Flutter applications and cross-platform mobile solutions</strong> that deliver sleek design, flawless usability, and the reliability users expect on both iOS and Android.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why It Matters / Where your customers spend their time */}
      <section className="relative py-24 px-6 bg-[#FAF9F6] border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.8 }}
          className="max-w-[70rem] mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20 items-center"
        >
          <div className="pt-2">
            <span className="text-[#60A5FA] font-mono text-[10px] tracking-[0.2em] uppercase leading-relaxed mb-8 block font-semibold">Why Mobile Matters</span>
            <h2 className="text-4xl md:text-[3.25rem] font-normal tracking-tight mb-6 leading-[1.1] text-black">
              Where your customers<br />spend their time
            </h2>
            <p className="text-base text-gray-600 max-w-md leading-[1.6]">
              A poorly built app damages trust and stalls growth. A well-crafted mobile experience builds loyalty, engagement, and revenue.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Feel native, fast, and intuitive from day one", 
              "Scale seamlessly as your user base grows",
              "Integrate smoothly with iOS and Android ecosystems",
              "Compete with the best apps in the App Store & Play Store"
            ].map((text, i) => (
              <div key={i} className="bg-white/80 p-8 rounded-xl border border-gray-200/80 flex items-start gap-3 shadow-sm hover:shadow-md transition-shadow">
                <ArrowRight className="w-4 h-4 text-blue-400 shrink-0 mt-1" strokeWidth={2.5} />
                <span className="text-[13px] text-gray-700 font-medium leading-[1.6]">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* What We Build - Flutter & Cross-Platform */}
      <section className="relative py-32 px-6 bg-[#0A0A0A]">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.8 }}
          className="max-w-[70rem] mx-auto"
        >
          <span className="text-[#A78BFA] font-mono text-[10px] tracking-[0.2em] uppercase leading-relaxed mb-8 block font-semibold">What We Build</span>
          
          <div className="mb-24">
            <h2 className="text-4xl md:text-[3.5rem] font-normal tracking-tight mb-6 text-white leading-[1.1]">
              Flutter & Cross-Platform Apps
            </h2>
            <p className="text-[#9CA3AF] text-lg leading-relaxed max-w-lg">
              From concept to App Store launch and beyond. Mobile expertise that covers every platform and use case.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16">
            <div className="flex flex-col gap-16">
              <div>
                <h3 className="text-[1.35rem] font-semibold text-white mb-3">Flutter App Development</h3>
                <p className="text-[#9CA3AF] text-[15px] leading-relaxed">
                  Premium Dart and Flutter applications that leverage the full power of cross-platform ecosystems.
                </p>
              </div>
              <div className="border-l-[2px] border-[#1e3a8a] pl-6 py-1 -ml-6">
                <h3 className="text-[1.35rem] font-semibold text-white mb-3">Mobile UX/UI Design</h3>
                <p className="text-[#9CA3AF] text-[15px] leading-relaxed">
                  Custom interfaces designed for touch, performance, and delightful user experiences.
                </p>
              </div>
              <div className="bg-[#0c1222]/50 p-6 -mx-6 rounded-2xl border border-blue-900/30">
                <h3 className="text-[1.35rem] font-semibold text-[#60A5FA] mb-3">App Store & Play Store Optimization</h3>
                <p className="text-[#9CA3AF] text-[15px] leading-relaxed">
                  Submission, compliance, metadata optimization, and ongoing store performance tracking.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-16">
              <div>
                <h3 className="text-[1.35rem] font-semibold text-white mb-3">Cross-Platform Solutions</h3>
                <p className="text-[#9CA3AF] text-[15px] leading-relaxed">
                  High-performance apps that run on iOS and Android with a shared codebase for maximum efficiency.
                </p>
              </div>
              <div>
                <h3 className="text-[1.35rem] font-semibold text-white mb-3">Native Device Integrations</h3>
                <p className="text-[#9CA3AF] text-[15px] leading-relaxed">
                  Apple Pay, Google Pay, camera access, push notifications, and deep local device API integrations.
                </p>
              </div>
              <div>
                <h3 className="text-[1.35rem] font-semibold text-white mb-3">Backend & APIs</h3>
                <p className="text-[#9CA3AF] text-[15px] leading-relaxed">
                  Cloud infrastructure, real-time sync, offline capabilities, and secure authentication.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Our Process Section */}
      <section className="relative py-32 px-6 bg-[#FAF9F6] border-y border-gray-200/50 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.8 }}
          className="max-w-[70rem] mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20 items-start"
        >
          <div className="sticky top-32">
            <span className="text-[#A78BFA] font-mono text-[10px] tracking-[0.2em] uppercase leading-relaxed mb-8 block font-semibold text-purple-400">Our Process</span>
            <h2 className="text-4xl md:text-[3.25rem] font-normal tracking-tight mb-6 leading-[1.1] text-black">
              From concept to App<br />Store success
            </h2>
            <p className="text-base text-gray-600 max-w-sm leading-[1.6]">
              A streamlined approach that delivers beautiful, high-performance mobile applications.
            </p>
          </div>

          <div className="flex flex-col relative pb-10">
            {[
              { num: "01", title: "Discovery", desc: "We define the app's purpose, target users, and core features that will drive engagement and retention.", active: false },
              { num: "02", title: "Design", desc: "We craft a seamless mobile experience with sleek, performance-optimized UI that feels native and intuitive.", active: true },
              { num: "03", title: "Development", desc: "We build with cross-platform frameworks (Flutter/Dart) to ensure iOS and Android parity depending on your goals.", active: false },
              { num: "04", title: "Testing", desc: "We rigorously test across devices, screen sizes, OS versions, and edge cases to ensure flawless performance.", active: false },
              { num: "05", title: "Launch & Support", desc: "We handle App Store & Play Store submission, monitor user feedback, and support ongoing feature updates.", active: false }
            ].map((step, i) => (
              <div key={i} className={`relative flex gap-8 p-8 transition-all duration-300 ${step.active ? 'bg-white/80 shadow-[0_4px_30px_rgba(0,0,0,0.03)] rounded-2xl border border-gray-200/50' : 'hover:bg-white/50 hover:shadow-[0_4px_20px_rgba(0,0,0,0.02)] rounded-2xl border border-transparent'} -mx-8 group`}>
                {i !== 0 && !step.active && <div className="absolute top-0 left-8 right-8 h-[1px] bg-gray-200/50 group-hover:opacity-0 transition-opacity" />}
                <span className="text-4xl md:text-5xl font-bold text-[#A78BFA]/40 mt-1 shrink-0">{step.num}</span>
                <div className="flex flex-col gap-3">
                  <h3 className="text-[1.35rem] font-semibold text-black">{step.title}</h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed max-w-md">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Technology Stack Section */}
      <section className="relative py-32 px-6 bg-[#0A0A0A]">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.8 }}
          className="max-w-[70rem] mx-auto flex flex-col items-center"
        >
          <span className="text-[#60A5FA] font-mono text-[10px] tracking-[0.2em] uppercase leading-relaxed mb-6 block font-semibold text-center mt-10">Technology Stack</span>
          <h2 className="text-4xl md:text-[3.25rem] font-normal tracking-tight mb-24 text-white text-center">
            Built with modern cross-platform tools
          </h2>

          <div className="w-full max-w-4xl mx-auto flex flex-col relative">
            {[
              {
                num: "01",
                title: "Flutter & Dart",
                badge: "PLATFORM LAYER",
                badgeColor: "text-[#60A5FA]",
                badgeBg: "bg-[#60A5FA]/10 border-[#60A5FA]/20",
                desc: "Flutter SDK • Dart • Provider • Riverpod • BLoC",
                align: "left"
              },
              {
                num: "02",
                title: "Native Development",
                badge: "ALTERNATIVE STACK",
                badgeColor: "text-orange-400",
                badgeBg: "bg-orange-400/10 border-orange-400/20",
                desc: "Swift • Kotlin • SwiftUI • Jetpack Compose",
                align: "right"
              },
              {
                num: "03",
                title: "Device Integrations",
                badge: "ECOSYSTEM APIS",
                badgeColor: "text-emerald-400",
                badgeBg: "bg-emerald-400/10 border-emerald-400/20",
                desc: "Apple Pay • Google Pay • HealthKit • Notifications • Camera",
                align: "left"
              },
              {
                num: "04",
                title: "Backend & Cloud",
                badge: "INFRASTRUCTURE",
                badgeColor: "text-purple-400",
                badgeBg: "bg-purple-400/10 border-purple-400/20",
                desc: "Firebase • AWS • Node.js • Supabase • Real-time sync",
                align: "right"
              }
            ].map((node, i) => (
              <div key={node.num} className="flex flex-col items-center w-full">
                <div className={`w-full flex ${node.align === 'left' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`flex items-center gap-6 md:gap-8 px-6 md:px-8 py-6 rounded-[20px] border border-white/[0.08] bg-[#0c1222]/40 w-full md:w-[85%] ${node.align === 'right' ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
                    <div className="w-12 h-12 shrink-0 rounded-full border border-white/10 bg-[#0c1222] flex items-center justify-center text-white font-mono text-sm shadow-[0_0_15px_rgba(255,255,255,0.03)]">
                      {node.num}
                    </div>
                    <div className="flex-1">
                      <div className={`flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3 ${node.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                        <h3 className="text-xl font-medium text-white tracking-wide">{node.title}</h3>
                        <span className={`text-[9px] font-mono tracking-[0.2em] font-bold uppercase px-3 py-1 rounded-full border ${node.badgeColor} ${node.badgeBg} self-start md:self-auto`}>
                          {node.badge}
                        </span>
                      </div>
                      <p className="text-gray-400 text-[14px]">{node.desc}</p>
                    </div>
                  </div>
                </div>
                {i !== 3 && (
                  <div className="h-16 flex items-center justify-center text-gray-500 font-light opacity-50">
                    ↓
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Proven Results Section */}
      <section className="relative py-32 px-6 bg-[#FAF9F6] border-t border-gray-200/50 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.8 }}
          className="max-w-[70rem] mx-auto relative z-10 flex flex-col items-center text-center"
        >
          <span className="text-[#60A5FA] font-mono text-[10px] tracking-[0.2em] uppercase leading-relaxed mb-6 block font-semibold">Proven Results</span>
          <h2 className="text-4xl md:text-[3.25rem] font-normal tracking-tight mb-20 leading-[1.1] text-black">
            Apps that users love and businesses grow with
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200/50 rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.03)] z-10 relative">
            {[
              { num: "1", text: "Flutter applications with thousands of downloads and 5-star reviews for performance and design" },
              { num: "2", text: "Secure, compliant apps with smooth Apple Pay, Google Pay, and in-app purchase integrations" },
              { num: "3", text: "Mobile-first platforms that became the primary growth channel for clients' businesses" }
            ].map((item, i) => (
              <div key={i} className={`bg-white/80 backdrop-blur-md p-10 flex flex-col md:flex-row items-start gap-5 text-left border-gray-200/50 ${i !== 2 ? 'border-b md:border-b-0 md:border-r' : ''}`}>
                <span className="text-xl font-medium text-[#60A5FA] font-mono leading-none mt-1">{item.num}</span>
                <p className="text-gray-600 text-[14px] leading-[1.6]">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Custom CTA Section */}
      <section className="relative py-40 px-6 overflow-hidden bg-[#FAF9F6] border-t border-gray-200/50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#eef5ed]/80 rounded-full blur-[80px]" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-[3.5rem] font-medium tracking-tight mb-6 text-black">
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-gray-600 text-[1.1rem] leading-relaxed mb-12 max-w-xl mx-auto">
            Launch a Flutter or mobile solution that stands out in the App Store and delivers measurable results.
          </p>
          <Link href="/contact" className="inline-flex items-center border border-gray-400 text-black px-8 py-3.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-colors duration-300">
            Start your project <ArrowRight className="ml-3 w-3.5 h-3.5" strokeWidth={2.5} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
