import React from 'react';
import ItemCard from '@/components/items/ItemCard';
import items from '../../../data/items.json'; 


const ItemsPage = () => {
  return (
    <main className="bg-[#0A0A0A] min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-200">
            The Collection
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-zinc-400">
            Explore our curated selection of minimalist and avant-garde lighting, designed to transform any space.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ItemsPage;
