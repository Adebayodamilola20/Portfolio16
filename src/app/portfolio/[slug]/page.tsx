'use client';

import { use } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowLeft, ArrowRight, Github, Gauge, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { projects } from '@/data/projects';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = projects.find((p) => p.id === slug || p.link === `/portfolio/${slug}`);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-medium mb-4">Project Not Found</h1>
          <p className="text-gray-500 mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-[#60A5FA] text-[11px] font-bold tracking-[0.15em] uppercase hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const statusColors: Record<string, string> = {
    live: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    'in-development': 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    'coming-soon': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  };

  const complexityColors: Record<string, string> = {
    enterprise: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    advanced: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
    intermediate: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
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
            <Link
              href="/portfolio"
              className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-gray-500 hover:text-[#60A5FA] transition-colors mb-12"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              BACK TO PORTFOLIO
            </Link>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="inline-block bg-[#60A5FA]/10 text-[#60A5FA] px-4 py-1 rounded-md text-[10px] uppercase font-bold tracking-widest border border-[#60A5FA]/20">
                {project.categories.join(' / ')}
              </span>
              {project.status && (
                <span className={`px-4 py-1 rounded-md text-[10px] uppercase font-bold tracking-widest border ${statusColors[project.status]}`}>
                  {project.status === 'live' ? 'Live' : project.status === 'in-development' ? 'In Development' : 'Coming Soon'}
                </span>
              )}
              {project.complexity && (
                <span className={`px-4 py-1 rounded-md text-[10px] uppercase font-bold tracking-widest border flex items-center gap-1.5 ${complexityColors[project.complexity]}`}>
                  <Gauge className="w-3 h-3" />
                  {project.complexity}
                </span>
              )}
            </div>

            <h1 className="text-5xl md:text-[5rem] font-medium tracking-tighter leading-[1.1] mb-8">
              {project.title.split(' ').map((word, i) => {
                const isLastFew = i >= project.title.split(' ').length - 2;
                return (
                  <span key={i} className={isLastFew ? 'text-gray-500 italic' : ''}>
                    {word}{' '}
                  </span>
                );
              })}
            </h1>

            <p className="text-[#9CA3AF] text-[1.15rem] leading-relaxed max-w-2xl mb-12">
              {project.description}
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-16">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-white/5 text-white px-6 py-3 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                  <ExternalLink className="w-3 h-3 text-gray-500" />
                </a>
              )}
            </div>

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pb-20 border-b border-white/5">
              <div>
                <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-3">STATUS</p>
                <p className={`text-lg font-medium ${project.status === 'live' ? 'text-emerald-400' : project.status === 'in-development' ? 'text-amber-400' : 'text-blue-400'}`}>
                  {project.status === 'live' ? 'Live' : project.status === 'in-development' ? 'In Development' : 'Coming Soon'}
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-3">COMPLEXITY</p>
                <p className="text-white text-lg font-medium capitalize">{project.complexity || 'N/A'}</p>
              </div>
              <div>
                <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-3">CATEGORIES</p>
                <p className="text-white text-lg font-medium">{project.categories.length}</p>
              </div>
              <div>
                <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-3">TECHNOLOGIES</p>
                <p className="text-white text-lg font-medium">{project.technologies?.length || project.tags?.length || 0}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      {project.overview && (
        <section className="px-6 py-20 bg-[#0E0E14] border-y border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
              <div>
                <h2 className="text-3xl md:text-[2.5rem] font-medium tracking-tight leading-none sticky top-32">
                  Overview
                </h2>
              </div>
              <div>
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light italic">
                  {project.overview}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Problem Section */}
      {project.problem && (
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
              <div>
                <h2 className="text-3xl md:text-[2.5rem] font-medium tracking-tight leading-none sticky top-32">
                  The <span className="text-gray-500">Challenge</span>
                </h2>
              </div>
              <div>
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light italic">
                  {project.problem}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      {project.features && project.features.length > 0 && (
        <section className="px-6 py-32 bg-[#0E0E14] border-y border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
              <div>
                <h2 className="text-3xl md:text-[2.5rem] font-medium tracking-tight leading-none sticky top-32">
                  Key <span className="text-gray-500">Features</span>
                </h2>
              </div>
              <div className="space-y-4">
                {project.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-start gap-4 p-5 bg-white/[0.02] border border-white/5 rounded-xl hover:border-white/10 transition-colors"
                  >
                    <span className="text-[#60A5FA] font-mono text-[11px] font-bold mt-0.5 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-gray-300 text-[15px]">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Architecture Section */}
      {project.architecture && (
        <section className="px-6 py-32">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
              <div>
                <h2 className="text-3xl md:text-[2.5rem] font-medium tracking-tight leading-none sticky top-32">
                  Architecture
                </h2>
              </div>
              <div>
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
                  {project.architecture}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Technologies Section */}
      {project.technologies && project.technologies.length > 0 && (
        <section className="px-6 py-32 bg-[#0E0E14] border-t border-white/5">
          <div className="max-w-[75rem] mx-auto">
            <span className="text-gray-500 font-mono text-[10px] tracking-[0.2em] uppercase mb-6 block font-bold">
              TECHNOLOGIES
            </span>
            <h2 className="text-3xl md:text-[2.5rem] font-medium tracking-tight mb-12 text-white leading-[1.1]">
              Built with modern <span className="text-gray-500">technology</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {project.technologies.map((tech) => (
                <div
                  key={tech}
                  className="px-5 py-4 bg-[#0c0e15] border border-white/5 rounded-xl text-center text-sm text-gray-300 hover:border-white/10 transition-colors"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tags Section */}
      {project.tags && project.tags.length > 0 && (
        <section className="px-6 py-20 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <span className="text-gray-500 font-mono text-[10px] tracking-[0.2em] uppercase mb-6 block font-bold">
              TAGS
            </span>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full text-[11px] uppercase tracking-wider font-semibold bg-white/5 text-white/60 border border-white/10 hover:border-white/20 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="px-6 py-40 text-center border-t border-white/5">
        <h2 className="text-4xl md:text-6xl font-medium mb-12">Ready to Build Your Product?</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/schedule"
            className="inline-flex items-center bg-white text-black px-10 py-4 rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-gray-200 transition-colors"
          >
            Start Your Project <ArrowRight className="ml-3 w-4 h-4" />
          </Link>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/5 text-white px-8 py-4 rounded-full text-xs font-bold tracking-[0.2em] uppercase border border-white/10 hover:bg-white/10 transition-colors"
            >
              <Github className="w-4 h-4" />
              View Source
            </a>
          )}
        </div>
      </section>
    </motion.div>
  );
}
