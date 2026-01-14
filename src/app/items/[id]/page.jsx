import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import items from '../../../../data/items.json'; 
import { Star, Zap, Scale, Thermometer } from 'lucide-react'; 

const ItemDetailsPage = async ({ params }) => {
  const { id } = await params;


  const item = items.find((p) => p.id === parseInt(id));

  if (!item) {
    notFound();
  }

  return (
    <main className="bg-[#0A0A0A] min-h-screen py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column: Image Gallery */}
          <div className="flex items-start justify-center">
            <div className="relative h-96 w-full lg:h-125 rounded-lg overflow-hidden border border-zinc-800">
              <Image
                src={item.imageUrl}
                alt={item.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                loading='eager'
              />
            </div>
          </div>

          {/* Right Column: Product Details */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-lime-400">
              {item.category}
            </p>
            <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tighter text-zinc-200">
              {item.name}
            </h1>

            <div className="mt-4 flex items-center gap-4">
              <div className="flex items-center gap-1 text-yellow-400">
                <Star size={20} fill="currentColor" />
                <span className="text-lg font-bold text-zinc-200">{item.rating}</span>
              </div>
              <span className="text-zinc-500">|</span>
              <p className="text-4xl font-bold text-zinc-200">${item.price.toFixed(2)}</p>
            </div>
            
            <p className="mt-6 text-base text-zinc-400 leading-relaxed">
              {item.description}
            </p>

            <div className="mt-8">
              <button className="w-full px-8 py-4 rounded-lg bg-lime-400 text-zinc-950 font-bold hover:bg-lime-300 transition-colors">
                Add to Cart
              </button>
            </div>

            {/* Specifications Section */}
            <div className="mt-12 pt-8 border-t border-zinc-800">
              <h2 className="text-xl font-semibold text-zinc-200">Specifications</h2>
              <dl className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                <div className="flex gap-3">
                  <Zap size={20} className="text-zinc-500 mt-1 shrink-0"/>
                  <div >
                    <dt className="font-medium text-zinc-400">Material</dt>
                    <dd className="text-zinc-200">{item.specs.material}</dd>
                  </div>
                </div>
                 <div className="flex gap-3">
                  <Scale size={20} className="text-zinc-500 mt-1 shrink-0"/>
                  <div>
                    <dt className="font-medium text-zinc-400">Dimensions</dt>
                    <dd className="text-zinc-200">{item.specs.dimensions}</dd>
                  </div>
                </div>
                 <div className="flex gap-3">
                  <Thermometer size={20} className="text-zinc-500 mt-1 shrink-0"/>
                  <div>
                    <dt className="font-medium text-zinc-400">Color Temp</dt>
                    <dd className="text-zinc-200">{item.specs.colorTemp}</dd>
                  </div>
                </div>
                 <div className="flex gap-3">
                  <Zap size={20} className="text-zinc-500 mt-1 shrink-0"/>
                  <div>
                    <dt className="font-medium text-zinc-400">Lumens</dt>
                    <dd className="text-zinc-200">{item.specs.lumens}</dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ItemDetailsPage;

