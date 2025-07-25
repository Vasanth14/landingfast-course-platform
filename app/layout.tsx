import './globals.css';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'], // pick what you actually use
});

export const metadata: Metadata = {
  title: 'LandingFast - Land Your Dream Jobs Faster',
  description:
    'Master fullstack development, UI/UX design, and digital marketing with our comprehensive online courses, workshops, and live classes.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={manrope.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
