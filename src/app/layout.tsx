import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { PageTransition } from '@/components/PageTransition';
import Script from 'next/script';
import './globals.css';
import type { Metadata } from 'next';

const siteUrl = 'https://adebayostephen.com';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Adebayo Stephen',
  jobTitle: ['Software Engineer', 'AI Developer'],
  url: siteUrl,
  sameAs: [
    'https://github.com/adebayostephen',
    'https://linkedin.com/in/adebayostephen',
    'https://x.com/adebayostephen',
    siteUrl
  ],
  knowsAbout: [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Python',
    'Machine Learning',
    'AI Development',
    'Full Stack Development',
    'Mobile App Development',
    'Cloud Computing',
    'DevOps'
  ],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Self-taught Developer'
  }
};

export const metadata: Metadata = {
  title: {
    default: 'Adebayo Stephen | Software Engineer & AI Developer',
    template: '%s | Adebayo Stephen'
  },
  description: 'Software Engineer and AI Developer specializing in building scalable web applications, AI systems, and mobile apps. Available for freelance and full-time opportunities.',
  keywords: ['Adebayo Stephen', 'Software Engineer', 'AI Developer', 'Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'Python', 'Machine Learning', 'Freelance Developer'],
  authors: [{ name: 'Adebayo Stephen', url: siteUrl }],
  creator: 'Adebayo Stephen',
  publisher: 'Adebayo Stephen',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: 'JgjUJFeozkQoSSlRytyyeD3UpjIo256B3PpiAo35RG0',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Adebayo Stephen',
    title: 'Adebayo Stephen | Software Engineer & AI Developer',
    description: 'Software Engineer and AI Developer specializing in building scalable web applications, AI systems, and mobile apps.',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Adebayo Stephen - Software Engineer & AI Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@adebayostephen',
    creator: '@adebayostephen',
    title: 'Adebayo Stephen | Software Engineer & AI Developer',
    description: 'Software Engineer and AI Developer specializing in building scalable web applications, AI systems, and mobile apps.',
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
          strategy="lazyOnload"
        />
      </head>
      <body className="antialiased bg-[#050505]">
        <Navigation />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
