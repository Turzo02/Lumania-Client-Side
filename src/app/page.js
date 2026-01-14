import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import FeaturesGrid from '@/components/home/FeaturesGrid';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import DesignPhilosophy from '@/components/home/DesignPhilosophy';
import CTASection from '@/components/home/CTASection';
import OurCommitment from '@/components/home/OurCommitment';

const HomePage = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <HeroSection />
      <FeaturesGrid />
      <OurCommitment />
      <DesignPhilosophy />
      <Testimonials />
      <FAQ />
      <CTASection />
    </main>
  );
};

export default HomePage;
