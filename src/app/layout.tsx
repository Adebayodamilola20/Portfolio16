import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { PageTransition } from '@/components/PageTransition';
import './globals.css';
import type { Metadata } from 'next';

const siteUrl = 'https://stephentechstudio.vercel.app';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Adebayo Stephen',
  url: siteUrl,
  jobTitle: 'AI Backend & Full Stack Developer',
  brand: {
    '@type': 'Brand',
    name: 'Stephen Tech Studio'
  },
  knowsAbout: [
    'AI agents',
    'FastAPI',
    'LangChain',
    'Flutter',
    'Full Stack Development',
    'Firebase'
  ],
  sameAs: [
    'https://github.com/Adebayodamilola20',
    'https://www.linkedin.com/in/stephen-adebayo-68126a340'
  ]
};

export const metadata: Metadata = {
  title: {
    default: 'Adebayo Stephen | Stephen Tech Studio — AI Backend & Full Stack Developer',
    template: '%s | Stephen Tech Studio'
  },
  description: 'Software Engineer and AI Developer specializing in building scalable web applications, AI systems, and mobile apps. Available for freelance and full-time opportunities.',
  keywords: ['Stephen Tech Studio', 'Adebayo Stephen', 'Software Engineer', 'AI Developer', 'AI Backend Developer', 'Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'Python', 'Machine Learning', 'Freelance Developer'],
  authors: [{ name: 'Adebayo Stephen', url: siteUrl }],
  creator: 'Adebayo Stephen',
  publisher: 'Adebayo Stephen',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  verification: {
    google: 'JgjUJFeozkQoSSlRytyyeD3UpjIo256B3PpiAo35RG0',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Stephen Tech Studio',
    title: 'Adebayo Stephen | Stephen Tech Studio — AI Backend & Full Stack Developer',
    description: 'Software Engineer and AI Developer specializing in building scalable web applications, AI systems, and mobile apps.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@DamilolaAd80758',
    creator: '@DamilolaAd80758',
    title: 'Adebayo Stephen | Stephen Tech Studio — AI Backend & Full Stack Developer',
    description: 'Software Engineer and AI Developer specializing in building scalable web applications, AI systems, and mobile apps.',
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
      <body className="antialiased bg-[#050505]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, '\\u003c'),
          }}
        />
        <Navigation />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
