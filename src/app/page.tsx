'use client';
import { Hero } from "@/components/home/Hero";
import { SecondSection } from "@/components/home/SecondSection";
import { ServicesTabs } from "@/components/home/ServicesTabs";
import { TechStackMarquee } from "@/components/home/TechStackMarquee";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { EnterpriseReady } from "@/components/home/EnterpriseReady";
import { TrackRecord } from "@/components/home/TrackRecord";
import { CommunityMarquee } from "@/components/home/CommunityMarquee";
import { WorkWithUs } from "@/components/home/WorkWithUs";
import { CTASection } from "@/components/home/CTASection";
import { motion } from "framer-motion";

function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050505] relative">
      <Hero />
      <FadeIn><SecondSection /></FadeIn>
      <FadeIn><ServicesTabs /></FadeIn>
      <FadeIn><TechStackMarquee /></FadeIn>
      <FadeIn><WhyChooseUs /></FadeIn>
      <FadeIn><EnterpriseReady /></FadeIn>
      <FadeIn><TrackRecord /></FadeIn>
      <FadeIn><CommunityMarquee /></FadeIn>
      <FadeIn><WorkWithUs /></FadeIn>
      <FadeIn><CTASection /></FadeIn>
    </div>
  );
}

