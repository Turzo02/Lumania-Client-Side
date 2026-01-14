import React from 'react';
import { ShieldCheck, Gem, Leaf } from 'lucide-react';

const commitments = [
  {
    icon: ShieldCheck,
    name: 'Uncompromising Quality',
    description: 'Every component, from the internal wiring to the external finish, is sourced and tested for longevity and performance. We stand behind our products with a 5-year warranty.',
  },
  {
    icon: Gem,
    name: 'Radical Design',
    description: 'We partner with avant-garde designers who challenge convention. Our collection is curated to include pieces you simply won’t find anywhere else.',
  },
  {
    icon: Leaf,
    name: 'Sustainable Practice',
    description: 'We prioritize recyclable materials, energy-efficient LED technology, and carbon-neutral shipping to minimize our environmental impact.',
  },
];

const OurCommitment = () => {
  return (
    <section className="w-full  py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-zinc-200 sm:text-4xl">
            A Lasting Impression
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Our commitment extends beyond light. It’s a promise of quality, design, and integrity.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
          {commitments.map((commitment) => (
            <div key={commitment.name} className="flex flex-col items-center text-center md:items-start md:text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800">
                <commitment.icon className="h-6 w-6 text-lime-400" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-8 text-zinc-200">
                {commitment.name}
              </h3>
              <p className="mt-2 text-base text-zinc-400">
                {commitment.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCommitment;

