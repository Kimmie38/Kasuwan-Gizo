// components/BusinessCard.jsx
import React from "react";
import Image from "next/image";

export default function BusinessCard({ logo, name, description, location }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 flex flex-col justify-between hover:shadow-md transition-all duration-300">
      {/* Logo */}
      <div className="flex justify-center">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <Image src={logo} alt={name} width={64} height={64} />
        </div>
      </div>

      {/* Text Content */}
      <div className="mt-4 flex flex-col flex-grow">
        <h3 className="text-sm font-semibold text-gray-900">{name}</h3>
        <p className="text-xs text-gray-500 mt-2 line-clamp-3">
          {description}
        </p>
      </div>

      {/* Location */}
      <p className="text-xs text-gray-400 mt-2">{location}</p>

      {/* Button */}
      <button className="mt-3 bg-emerald-100 text-emerald-700 font-medium text-xs py-2 px-3 rounded-lg w-full hover:bg-emerald-200">
        View More
      </button>
    </div>
  );
}
