"use client";

import Image from "next/image";
import { Star } from "lucide-react";

export default function ProductCard({ product }) {
  if (!product) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-4 text-gray-500 text-center">
        No product data
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col w-full">
      {/* Product Image */}
      <div className="relative w-full h-40">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-100 text-gray-400">
            No image
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-3 flex flex-col flex-1">
        <h3 className="text-sm font-semibold text-gray-800 truncate">
          {product.name}
        </h3>

        <div className="flex items-center text-xs text-gray-500 mt-1">
          <Star className="h-4 w-4 text-yellow-400 mr-1" />
          <span>
            {product.rating} ({product.reviews})
          </span>
        </div>

        <p className="text-xs text-gray-500 mt-1 line-clamp-2">
          {product.description}
        </p>

        <p className="text-xs text-gray-400 mt-1">{product.location}</p>

        <p className="text-base font-semibold text-gray-900 mt-2">
          ₦{Number(product.price).toLocaleString()}
        </p>

        <button className="mt-auto bg-green-100 text-green-700 rounded-lg py-2 text-sm font-medium hover:bg-green-200 transition">
          View More →
        </button>
      </div>
    </div>
  );
}
