import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const ItemCard = ({ item }) => {
  return (
    <div className="flex flex-col bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 h-full">
      {/* Image Container */}
      <div className="relative h-64 w-full bg-zinc-900">
        {item.imageUrl ? (
          <Image
            src={item.imageUrl}
            alt={item.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
            loading="eager"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <span className="text-zinc-500">No Image Available</span>
          </div>
        )}
      </div>
      {/* Content Container */}
      <div className="flex flex-col p-6 grow">
        <p className="text-sm font-medium text-zinc-400">{item.category}</p>
        <h3 className="mt-1 text-xl font-semibold text-zinc-200">
          {item.name}
        </h3>
        <div className="mt-4 grow" /> {/* Spacer */}
        <div className="flex items-center justify-between mt-4">
          <p className="text-2xl font-bold text-lime-400">
            ${item.price.toFixed(2)}
          </p>
          <Link
            href={`/items/${item.id}`}
            className="
              inline-flex items-center gap-2 px-4 py-2 
              text-sm font-bold text-zinc-200 
              bg-zinc-800 
              rounded-md
              hover:bg-zinc-700
              hover:text-lime-400
              transition-colors
            "
          >
            View
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
