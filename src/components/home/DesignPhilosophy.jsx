import React from 'react';
import Image from 'next/image';
import { Lightbulb, Blend } from 'lucide-react';

const DesignPhilosophy = () => {
  return (
    <section className="w-full bg-zinc-900 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
          
          {/* Text Content */}
          <div className="text-left">
            <h2 className="text-3xl font-bold tracking-tighter text-zinc-200 sm:text-4xl">
              Where Form Meets Function
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Our philosophy is simple: a light fixture should do more than just illuminate a room. It should define the space, create an atmosphere, and exist as a piece of sculpture in its own right.
            </p>
            <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                    <Lightbulb className="h-6 w-6 text-lime-400 shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-zinc-200">Intentional Design</h3>
                        <p className="text-zinc-400">Every curve and angle is deliberate, ensuring the final piece is both beautiful and purposeful.</p>
                    </div>
                </div>
                 <div className="flex gap-4">
                    <Blend className="h-6 w-6 text-lime-400 shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-zinc-200">Honest Materials</h3>
                        <p className="text-zinc-400">We celebrate the raw beauty of materials like brass, concrete, and aluminum, letting their texture and character shine.</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Image */}
          <div className="h-96 w-full lg:h-125 rounded-lg overflow-hidden">
             <Image
                src="https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&q=80&w=800"
                alt="Stylized light fixture in a modern room"
                width={800}
                height={1000}
                className="h-full w-full object-cover"
                loading='eager'
              />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignPhilosophy;
