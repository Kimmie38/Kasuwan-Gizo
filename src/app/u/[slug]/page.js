"use client";
import { useState } from "react";
import Image from "next/image";

const mockProducts = [
  {
    id: 1,
    title: "10 Basket of Tomatoes",
    price: 20000,
    desc: "Freshly harvested tomatoes",
    image: "https://picsum.photos/id/1080/400/300",
    category: "Products",
  },
  {
    id: 2,
    title: "Spinach",
    price: 20000,
    desc: "Fresh spinach",
    image: "https://picsum.photos/id/292/400/300",
    category: "Products",
  },
  {
    id: 3,
    title: "Delivery Service",
    price: 5000,
    desc: "Fast same-day delivery",
    image: "https://picsum.photos/id/292/400/300",
    category: "Services",
  },
];

export default function PublicProfile({ params }) {
  const { slug } = params;
  const [products] = useState(mockProducts);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState("All");

  // Filtering logic
  const filtered = products.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      category === "All" ? true : p.category === category;
    const matchesPrice =
      priceRange === "All"
        ? true
        : priceRange === "Low"
        ? p.price < 10000
        : priceRange === "Mid"
        ? p.price >= 10000 && p.price <= 20000
        : p.price > 20000;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="px-4 pt-4 mb-6">
          <div className="bg-white shadow-sm rounded-xl px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-medium">
                {slug?.[0]?.toUpperCase() || "U"}
              </div>
              <div>
                <p className="text-sm font-medium">{slug}</p>
                <p className="text-xs text-gray-500">Business profile</p>
              </div>
            </div>
          </div>
        </header>

        {/* Section Heading */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          🛍️ Available Products
        </h2>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
          {/* Search */}
          <input
            type="text"
            placeholder="Search Product"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/3 pl-4 pr-4 py-2 rounded-full border border-gray-200 text-sm focus:ring-2 focus:ring-emerald-500"
          />

          {/* Category Filter */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full md:w-1/4 px-4 py-2 rounded-full border border-gray-200 text-sm focus:ring-2 focus:ring-emerald-500"
          >
            <option value="All">All Categories</option>
            <option value="Products">Products</option>
            <option value="Services">Services</option>
          </select>

          {/* Price Filter */}
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="w-full md:w-1/4 px-4 py-2 rounded-full border border-gray-200 text-sm focus:ring-2 focus:ring-emerald-500"
          >
            <option value="All">All Prices</option>
            <option value="Low">Below ₦10,000</option>
            <option value="Mid">₦10,000 - ₦20,000</option>
            <option value="High">Above ₦20,000</option>
          </select>
        </div>

        {/* Products */}
        {filtered.length === 0 ? (
          <p className="text-gray-500 text-center">No items found</p>
        ) : (
          <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(220px,1fr))]">
            {filtered.map((p) => (
              <div
                key={p.id}
                className="bg-white border rounded-xl overflow-hidden flex flex-col shadow-sm hover:shadow-lg hover:scale-[1.02] transition transform"
              >
                      <Image
            src={p.image}
            alt={p.title}
            width={400}          // required
            height={176}         // required (approx h-44)
            className="w-full h-44 object-cover"
          />
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-bold text-lg text-gray-900">
                    {p.title}
                  </h3>
                  <p className="text-gray-500 text-sm flex-1 mt-1">
                    {p.desc}
                  </p>
                  <p className="text-emerald-600 font-bold mt-2 text-md">
                    ₦{p.price.toLocaleString()}
                  </p>
                  <p className="text-[11px] text-gray-400 italic">
                    {p.category}
                  </p>
                  <button className="mt-3 bg-emerald-600 text-white rounded-lg py-2 text-sm font-semibold hover:bg-emerald-700 transition">
                    View More
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
