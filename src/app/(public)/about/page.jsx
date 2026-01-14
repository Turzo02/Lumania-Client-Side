import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import OurStory from '@/components/about/OurStory';
import BrandValues from '@/components/about/BrandValues';
import MeetTheTeam from '@/components/about/MeetTheTeam';

const AboutUsPage = () => {
  return (
    <main className="flex flex-col items-center bg-[#0A0A0A]">
      <AboutHero />
      <OurStory />
      <BrandValues />
      <MeetTheTeam />
    </main>
  );
};

export default AboutUsPage;
