'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Bot, Cpu, Workflow, Sparkles, Shield, ShieldCheck, Code, Cog, ExternalLink, Github, Gauge, Smartphone } from 'lucide-react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

interface Project {
  id: string;
  title: string;
  categories: string[];
  image?: string | StaticImageData;
  images?: (string | StaticImageData)[];
  description?: string;
  tags?: string[];
  status?: 'live' | 'in-development' | 'coming-soon';
  complexity?: 'enterprise' | 'advanced' | 'intermediate';
  github?: string;
  link?: string;
}

interface ProjectCardProps {
  project: Project;
}

const categoryIcons: Record<string, React.ReactNode> = {
  'AUTONOMOUS SYSTEMS': <Bot className="w-14 h-14 md:w-16 md:h-16" />,
  'AI AGENTS': <Bot className="w-14 h-14 md:w-16 md:h-16" />,
  'AI / AUTOMATION': <Workflow className="w-14 h-14 md:w-16 md:h-16" />,
  'AI SYSTEMS': <Cpu className="w-14 h-14 md:w-16 md:h-16" />,
  AUTOMATIONS: <Sparkles className="w-14 h-14 md:w-16 md:h-16" />,
  'DEVELOPER TOOLS': <Code className="w-14 h-14 md:w-16 md:h-16" />,
  'SECURITY SYSTEMS': <ShieldCheck className="w-14 h-14 md:w-16 md:h-16" />,
  'CYBERSECURITY': <Shield className="w-14 h-14 md:w-16 md:h-16" />,
  ROBOTICS: <Cog className="w-14 h-14 md:w-16 md:h-16" />,
  'MOBILE APPS': <Smartphone className="w-14 h-14 md:w-16 md:h-16" />,
  'AI CHAT': <Smartphone className="w-14 h-14 md:w-16 md:h-16" />,
  'BUSINESS INTELLIGENCE': <Cog className="w-14 h-14 md:w-16 md:h-16" />,
  'REAL ESTATE': <Cog className="w-14 h-14 md:w-16 md:h-16" />,
  LOGISTICS: <Cog className="w-14 h-14 md:w-16 md:h-16" />,
};

function PlaceholderVisual({ project }: { project: Project }) {
  const primaryCategory = project.categories[0] || 'AI SYSTEMS';
  const isMobile = project.categories.includes('MOBILE APPS') || primaryCategory === 'MOBILE APPS' || primaryCategory === 'AI CHAT';
  const icon = categoryIcons[primaryCategory] || <Cpu className="w-14 h-14 md:w-16 md:h-16" />;

  if (isMobile) {
    return (
      <div className="absolute inset-0 bg-[#0c0e15]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Phone mockup */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Phone body */}
            <div className="w-[120px] md:w-[140px] h-[220px] md:h-[260px] bg-[#1a1d2e] rounded-[24px] md:rounded-[28px] border-2 border-white/10 shadow-2xl relative overflow-hidden">
              {/* Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-2.5 bg-black rounded-full" />

              {/* Screen content */}
              <div className="absolute inset-3 mt-4 rounded-[14px] bg-gradient-to-b from-[#252840] to-[#1a1d2e] overflow-hidden">
                {/* Status bar */}
                <div className="flex items-center justify-between px-3 pt-2 pb-1">
                  <span className="text-[6px] text-white/40">9:41</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-1.5 rounded-sm bg-white/30" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                  </div>
                </div>

                {/* App content lines */}
                <div className="px-3 space-y-2 mt-2">
                  <div className="w-16 h-2 bg-white/10 rounded-full" />
                  <div className="flex gap-2 mt-3">
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10" />
                    <div className="flex-1 space-y-1.5">
                      <div className="w-full h-1.5 bg-white/8 rounded-full" />
                      <div className="w-3/4 h-1.5 bg-white/5 rounded-full" />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10" />
                    <div className="flex-1 space-y-1.5">
                      <div className="w-full h-1.5 bg-white/8 rounded-full" />
                      <div className="w-2/3 h-1.5 bg-white/5 rounded-full" />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10" />
                    <div className="flex-1 space-y-1.5">
                      <div className="w-full h-1.5 bg-white/8 rounded-full" />
                      <div className="w-4/5 h-1.5 bg-white/5 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Bottom nav */}
                <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-4">
                  <div className="w-5 h-5 rounded-full bg-white/10" />
                  <div className="w-5 h-5 rounded-full bg-[#60A5FA]/30 border border-[#60A5FA]/50" />
                  <div className="w-5 h-5 rounded-full bg-white/10" />
                </div>
              </div>

              {/* Home indicator */}
              <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-10 h-1 bg-white/20 rounded-full" />
            </div>

            {/* Glow behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#60A5FA]/5 blur-[40px] rounded-full" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 bg-[#0c0e15]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 flex items-center justify-center text-white/10">
        {icon}
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status?: string }) {
  if (!status || status === 'live') return null;
  const label = status === 'in-development' ? 'In Development' : 'Coming Soon';
  const colors =
    status === 'in-development'
      ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
      : 'bg-blue-500/20 text-blue-300 border-blue-500/30';
  return (
    <span className={`absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-[9px] sm:text-[10px] uppercase tracking-widest font-bold border ${colors}`}>
      {label}
    </span>
  );
}

function ComplexityBadge({ complexity }: { complexity?: string }) {
  if (!complexity) return null;
  const label = complexity.charAt(0).toUpperCase() + complexity.slice(1);
  const colors: Record<string, string> = {
    enterprise: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    advanced: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
    intermediate: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  };
  return (
    <span className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-[9px] sm:text-[10px] uppercase tracking-widest font-bold border flex items-center gap-1.5 ${colors[complexity] || colors.intermediate}`}>
      <Gauge className="w-3 h-3" />
      {label}
    </span>
  );
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [indicatorImageIndex, setIndicatorImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const images = project.images || (project.image ? [project.image] : []);
  const hasImages = images.length > 0;
  const hasMultipleImages = images.length > 1;

  const IMAGE_CROSSFADE_DURATION_MS = 1000;

  useEffect(() => {
    if (!hasMultipleImages) return;
    let indicatorTimeoutId: number | undefined;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const next = (prev + 1) % images.length;
        indicatorTimeoutId = window.setTimeout(() => setIndicatorImageIndex(next), IMAGE_CROSSFADE_DURATION_MS);
        return next;
      });
    }, 4000);
    return () => {
      clearInterval(interval);
      if (indicatorTimeoutId) window.clearTimeout(indicatorTimeoutId);
    };
  }, [hasMultipleImages, images.length]);

  const hasDetailLink = project.link && project.link !== '#';

  const cardContent = (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, type: 'spring', bounce: 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-[#0f111a] border border-white/5 rounded-2xl md:rounded-3xl overflow-hidden group flex flex-col shadow-lg cursor-pointer relative hover:border-white/10 transition-colors duration-300"
    >
      <div className="relative aspect-[4/3] bg-gray-900 overflow-hidden shrink-0 group">
        <StatusBadge status={project.status} />
        <ComplexityBadge complexity={project.complexity} />

        {hasImages ? (
          <>
            <AnimatePresence mode="sync">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={images[currentImageIndex]}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority={currentImageIndex === 0}
                />
              </motion.div>
            </AnimatePresence>
            {hasMultipleImages && (
              <div className="absolute top-6 right-6 flex gap-1.5 z-20 transition-opacity duration-300">
                {images.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-0.5 rounded-full transition-all duration-300 ${
                      indicatorImageIndex === idx ? 'w-4 bg-[#60A5FA]' : 'w-1 bg-white/20'
                    }`}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <PlaceholderVisual project={project} />
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-[#0A0C10]/60 to-transparent flex flex-col justify-end p-8 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
          <div className="relative z-10 transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[#60A5FA] text-[10px] uppercase font-bold tracking-[0.2em] italic">
                {project.categories[0]}
              </span>
              {project.status === 'live' && (
                <span className="flex items-center gap-1 text-emerald-400 text-[9px] uppercase font-bold tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live
                </span>
              )}
            </div>
            <h3 className="text-white text-2xl md:text-3xl font-medium tracking-tight mb-3 group-hover:text-[#60A5FA] transition-colors">
              {project.title}
            </h3>
            <p className="text-[#9CA3AF] text-[14px] md:text-[15px] leading-relaxed mb-5 max-w-[95%] font-light line-clamp-3">
              {project.description}
            </p>

            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-full text-[8px] uppercase tracking-wider font-semibold bg-white/5 text-white/50 border border-white/10">
                    {tag}
                  </span>
                ))}
                {project.tags.length > 4 && (
                  <span className="px-2 py-0.5 rounded-full text-[8px] uppercase tracking-wider font-semibold bg-white/5 text-white/40">
                    +{project.tags.length - 4}
                  </span>
                )}
              </div>
            )}

            <div className="flex items-center gap-4">
              {hasDetailLink && (
                <div className="flex items-center gap-2 text-[#60A5FA] text-[11px] font-bold tracking-[0.15em] group/link">
                  <span className="uppercase">View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                </div>
              )}
              {project.github && (
                <div className="flex items-center gap-1.5 text-white/40 text-[11px] font-bold tracking-[0.15em] hover:text-white/70 transition-colors">
                  <Github className="w-3.5 h-3.5" />
                  <span className="uppercase">GitHub</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  if (hasDetailLink) {
    return <Link href={project.link!}>{cardContent}</Link>;
  }

  if (project.github) {
    return (
      <a href={project.github} target="_blank" rel="noopener noreferrer">
        {cardContent}
      </a>
    );
  }

  return cardContent;
}
