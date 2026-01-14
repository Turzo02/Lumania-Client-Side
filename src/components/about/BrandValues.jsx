import React from 'react';
import { Gem, ShieldCheck, Leaf } from 'lucide-react';

const values = [
  {
    icon: Gem,
    name: 'Artistry First',
    description: 'We see every product as a piece of sculpture. Design and aesthetic integrity are at the heart of our curation process.',
  },
  {
    icon: ShieldCheck,
    name: 'Enduring Quality',
    description: 'Our lights are built to last generations, not just seasons. We use time-tested materials and rigorous quality control.',
  },
  {
    icon: Leaf,
    name: 'Conscious Craft',
    description: 'We are committed to responsible sourcing and supporting independent artisans and sustainable practices whenever possible.',
  },
];

const BrandValues = () => {
  return (
    <section className="w-full bg-[#0A0A0A] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-zinc-200 sm:text-4xl">Our Guiding Principles</h2>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.name} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900">
                <value.icon className="h-6 w-6 text-lime-400" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-zinc-200">{value.name}</h3>
              <p className="mt-2 text-base text-zinc-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandValues;

