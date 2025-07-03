import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LandingFast - Land Your Dream Job Faster',
  description: 'Master in-demand tech skills through live classes, hands-on projects, and expert mentorship. Join thousands of successful career switchers and beginners.',
  keywords: 'tech courses, programming, full stack development, UI/UX design, digital marketing, career change, online learning',
  authors: [{ name: 'LandingFast' }],
  creator: 'LandingFast',
  publisher: 'LandingFast',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://landingfast.com'),
  openGraph: {
    title: 'LandingFast - Land Your Dream Job Faster',
    description: 'Master in-demand tech skills through live classes, hands-on projects, and expert mentorship.',
    url: 'https://landingfast.com',
    siteName: 'LandingFast',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LandingFast - Tech Education Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LandingFast - Land Your Dream Job Faster',
    description: 'Master in-demand tech skills through live classes, hands-on projects, and expert mentorship.',
    creator: '@landingfast',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}