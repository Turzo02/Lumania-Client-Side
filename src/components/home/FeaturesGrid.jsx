import React from 'react';
import { Award, Package, Cable } from 'lucide-react';

const features = [
  {
    name: 'Curated Designs',
    description: 'Only the most unique and high-quality pieces from global artisans make it into our collection.',
    icon: Award,
  },
  {
    name: 'Durable Materials',
    description: 'Constructed from industrial-grade materials like brushed steel, carbon fiber, and hand-blown glass.',
    icon: Package,
  },
  {
    name: 'Modern Technology',
    description: 'Featuring glare-free LEDs, touch-sensitive dimming, and smart home compatibility in select models.',
    icon: Cable,
  },
];

const FeaturesGrid = () => {
  return (
    <section className="w-full bg-zinc-900 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-zinc-200 sm:text-4xl">
            Why Choose Lumina?
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            We focus on three pillars: exceptional design, lasting quality, and innovative function.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-lime-400">
                <feature.icon className="h-6 w-6 text-zinc-950" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-8 text-zinc-200">
                {feature.name}
              </h3>
              <p className="mt-2 text-base text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
