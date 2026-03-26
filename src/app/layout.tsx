import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { PageTransition } from '@/components/PageTransition';
import './globals.css';

export const metadata = {
  title: {
    default: 'Stephen Studio | Custom Software & Mobile App Development',
    template: '%s | Stephen Studio'
  },
  description: 'Stephen Studio specializes in building high-performance websites, custom SaaS platforms, and iOS mobile applications for businesses worldwide.',
  keywords: ['Stephen Studio', 'Software Engineering', 'Next.js', 'React', 'Mobile App Development', 'SaaS', 'Web Development'],
  authors: [{ name: 'Stephen Studio' }],
  creator: 'Stephen Studio',
  publisher: 'Stephen Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://stephen-studio.com',
    siteName: 'Stephen Studio',
    title: 'Stephen Studio | Custom Software & Mobile App Development',
    description: 'Custom software development, mobile apps, and scalable web solutions by Stephen Studio.',
    images: [
      {
        url: 'https://stephen-studio.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Stephen Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stephen Studio | Custom Software & Mobile App Development',
    description: 'Custom software development, mobile apps, and scalable web solutions by Stephen Studio.',
    images: ['https://stephen-studio.com/og-image.png'],
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
        <Navigation />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
