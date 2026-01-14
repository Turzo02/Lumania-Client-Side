import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="w-full  py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-zinc-200">
          Sculpting Space with Light
        </h1>
        <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-lg text-zinc-400">
          Discover a curated collection of minimalist and avant-garde lighting. Each piece is an intersection of art, technology, and design.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/items"
            className="
              inline-flex items-center justify-center px-6 py-3 
              text-sm font-semibold text-zinc-950 
              bg-lime-400 
              rounded-md shadow-sm 
              hover:bg-lime-300
              focus-visible:outline
              focus-visible:outline-offset-2 focus-visible:outline-lime-400
              transition-colors
            "
          >
            Explore Collection
          </Link>
          <Link
            href="/about"
            className="
              inline-flex items-center justify-center px-6 py-3 
              text-sm font-semibold text-zinc-200 
              bg-zinc-900 
              rounded-md
              hover:bg-zinc-800
              transition-colors
            "
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
