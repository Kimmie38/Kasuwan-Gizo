"use client";
import React from "react";
import Image from "next/image";

export default function ProductGrid({ products }) {
  if (!products || products.length === 0) {
    return <p className="text-gray-500 text-center">No items found</p>;
  }

  return (
    <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(180px,1fr))]">
      {products.map((p) => (
        <div
          key={p.id}
          className="bg-white border rounded-lg overflow-hidden flex flex-col hover:shadow transition"
        >
          <Image
            src={p.image}
            alt={p.title}
            width={400}       // ✅ required
            height={112}      // ~h-28 (112px)
            className="w-full h-28 object-cover"
          />
          <div className="p-3 flex flex-col flex-1">
            <h3 className="font-semibold text-gray-800 text-sm">{p.title}</h3>
            <p className="text-gray-500 text-xs flex-1">{p.desc}</p>
            <p className="text-emerald-600 font-bold mt-1 text-sm">
              ₦{p.price.toLocaleString()}
            </p>
            <p className="text-[10px] text-gray-400">{p.category}</p>
            <button className="mt-2 bg-emerald-600 text-white rounded-md py-1 text-sm hover:bg-emerald-700">
              View More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
