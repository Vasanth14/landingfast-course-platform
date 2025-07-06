import Hero from '@/components/sections/Hero';
import Navigation from '@/components/navigation/Navigation';
import Courses from '@/components/sections/Courses';
import TechStack from '@/components/sections/TechStack';
import LearningFormats from '@/components/sections/LearningFormats';
import CareerPaths from '@/components/sections/CareerPaths';
import EmailCapture from '@/components/sections/EmailCapture';
import Motivation from '@/components/sections/Motivation';
import Blog from '@/components/sections/Blog';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/navigation/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Courses />
      <TechStack />
      <LearningFormats />
      <CareerPaths />
      <EmailCapture />
      <Motivation />
      <Testimonials />
      <Blog />
      <CTA />
      <Footer />
    </main>
  );
}