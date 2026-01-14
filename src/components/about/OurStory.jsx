import React from 'react';
import Image from 'next/image';

const OurStory = () => {
  return (
    <section className="w-full bg-zinc-900 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
          
          {/* Image - Placed first for better mobile layout (image on top) */}
          <div className="order-last lg:order-first h-96 w-full lg:h-[500px] rounded-lg overflow-hidden">
             <Image
                src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=800"
                alt="A workshop with glowing light bulbs"
                width={800}
                height={1000}
                className="h-full w-full object-cover"
              />
          </div>

          {/* Text Content */}
          <div className="text-left">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-lime-400">Our Story</h2>
            <p className="mt-4 text-3xl font-bold tracking-tighter text-zinc-200 sm:text-4xl">
              From a small workshop to a global curator.
            </p>
            <p className="mt-6 text-base text-zinc-400">
              Founded in 2021, Lumina began as a passion project by a small group of designers frustrated with the generic, mass-produced lighting that filled the market. We started by crafting a few bespoke pieces for local clients.
            </p>
             <p className="mt-4 text-base text-zinc-400">
              The response was overwhelming. It became clear that others shared our desire for unique, high-quality lighting that could serve as a centerpiece. Today, we have expanded our vision to curate and commission works from like-minded artisans around the world, but our core mission remains the same: to make exceptional design accessible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
