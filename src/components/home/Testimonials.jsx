import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <section className="w-full bg-[#0A0A0A] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <figure className="max-w-3xl mx-auto">
          <blockquote className="text-center text-xl font-semibold leading-8 text-zinc-200 sm:text-2xl sm:leading-9">
            <p>
              “The Orbital Pendant I bought from Lumina completely transformed
              my dining room. It’s not just a lamp; it’s a piece of art. The
              quality is exceptional and the design is unlike anything you can
              find in a typical store.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <div className="mx-auto h-12 w-12 rounded-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&q=80&w=200"
                alt="Testimonial author"
                width={200}
                height={200}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <div className="text-base font-semibold text-zinc-200">
                Sarah Johnson
              </div>
              <div className="text-sm text-zinc-400">Interior Designer</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Testimonials;
