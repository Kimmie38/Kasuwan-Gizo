// components/TopBusinesses.jsx
import React from "react";
import BusinessCard from "../BussinessCard/page";

export default function TopBusinesses({ businesses = [] }) {
  return (
    <section className="w-full bg-gray-50 p-4 md:p-6 rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Top Businesses</h2>
        <a
          href="#"
          className="text-sm text-gray-600 hover:text-gray-800 flex items-center gap-1"
        >
          See more →
        </a>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {businesses.length > 0 ? (
          businesses.map((biz, index) => <BusinessCard key={index} {...biz} />)
        ) : (
          <p className="text-gray-500">No businesses available</p>
        )}
      </div>
    </section>
  );
}
