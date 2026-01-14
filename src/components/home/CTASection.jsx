import React from 'react';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-7xl bg-lime-400 px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tighter text-zinc-950 sm:text-4xl">
          Ready to Illuminate Your Space?
        </h2>
        <p className="mt-4 text-lg text-zinc-800">
          Browse our full collection and find the perfect statement piece for your home or project.
        </p>
        <div className="mt-8">
          <Link
            href="/items"
            className="
              inline-flex items-center justify-center px-8 py-4 
              text-base font-semibold text-zinc-200 
              bg-[#0A0A0A]
              rounded-md shadow-sm 
              hover:bg-zinc-800
              focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]
              transition-colors
            "
          >
            Shop All Lighting
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
