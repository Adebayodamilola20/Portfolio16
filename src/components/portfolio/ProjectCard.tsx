'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

interface Project {
  id: string;
  title: string;
  category: string;
  image?: string | StaticImageData;
  images?: (string | StaticImageData)[];
  description?: string;
  link?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const images = project.images || (project.image ? [project.image] : []);
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    if (!hasMultipleImages) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds slideshow

    return () => clearInterval(interval);
  }, [hasMultipleImages, images.length]);

  const cardContent = (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, type: "spring", bounce: 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-[#0f111a] border border-white/5 rounded-2xl md:rounded-3xl overflow-hidden group flex flex-col shadow-lg cursor-pointer relative"
    >
      {/* Project Card Container - Normal 4:3 Aspect Ratio */}
      <div className="relative aspect-[4/3] bg-gray-900 overflow-hidden shrink-0 group">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={images[currentImageIndex]}
              alt={project.title}
              fill
              className={`object-cover group-hover:scale-105 transition-transform duration-700 ease-out`}
              priority={currentImageIndex === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Bottom Overlay Content (Show only on hover) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-[#0A0C10]/40 to-transparent flex flex-col justify-end p-8 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
          <div className="relative z-10 transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
            <span className="text-[#60A5FA] text-[10px] uppercase font-bold tracking-[0.2em] block mb-3 leading-none italic">
              {project.category}
            </span>
            <h3 className="text-white text-2xl md:text-3xl font-medium tracking-tight mb-4 group-hover:text-[#60A5FA] transition-colors">
              {project.title}
            </h3>
            <p className="text-[#9CA3AF] text-[14px] md:text-[15px] leading-relaxed mb-8 max-w-[95%] font-light">
              {project.description}
            </p>
            {project.link && (
              <div className="flex items-center gap-2 text-[#60A5FA] text-[12px] font-bold tracking-[0.15em] group/link py-1">
                <span className="uppercase">View Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
              </div>
            )}
          </div>
        </div>
        
        {/* Slideshow Indicators (Subtle even when not hovered) */}
        {hasMultipleImages && (
          <div className="absolute top-6 right-6 flex gap-1.5 z-20 transition-opacity duration-300">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`h-0.5 rounded-full transition-all duration-300 ${
                  currentImageIndex === idx ? 'w-4 bg-[#60A5FA]' : 'w-1 bg-white/20'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );

  if (project.link && project.link !== '#') {
    return (
      <Link href={project.link}>
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
