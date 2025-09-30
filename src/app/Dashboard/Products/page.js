"use client";
import { useState } from "react";
import AddListingModal from "@/components/AddlistingModal";
import Sidebar from "@/components/sidebar";
import { Menu, Bell, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link"

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

export default function ProductsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showAddListing, setShowAddListing] = useState(false);
  const [products, setProducts] = useState(mockProducts);
  const [search, setSearch] = useState("");
  const [copied, setCopied] = useState(false);

  // ✅ Assume slug is stored for logged-in user (hardcoded for demo)
  const slug = "techbiz-solutions"; // replace with actual user.slug from backend
  const profileUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/${slug}`
      : "";

  // ✅ Clipboard function
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profileUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("❌ Failed to copy:", err);
    }
  };

  // ✅ Search filter only
  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Section */}
      <div className="flex-1 flex flex-col md:ml-64">
        {/* Topbar */}
        <header className="px-3 pt-4 sm:px-4 md:px-6 md:pt-6">
          <div className="bg-white shadow-sm rounded-xl px-3 py-3 sm:px-4 flex items-center justify-between gap-4">
            {/* Left: Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                  🔍
                </span>
                <input
                  type="text"
                  placeholder="Search Product"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 text-sm focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* Right: Icons + Profile */}
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Bell className="w-5 h-5 text-gray-600" />
              </button>

              {/* ✅ Share Business Link button */}
              <button
                onClick={handleCopy}
                className="p-2 rounded-full hover:bg-gray-100 relative"
              >
                <Share2 className="w-5 h-5 text-gray-600" />
                {copied && (
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1">
                    Copied!
                  </span>
                )}
              </button>

              {/* Profile */}
              <div className="flex items-center gap-2 bg-white shadow px-3 py-2 rounded-xl">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-medium">
                  A
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium">TechBiz Solutions</p>
                  <p className="text-xs text-gray-500">
                    IT service & Digital solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Body Content */}
        <main className="flex-1 px-4 mt-6 md:px-6 space-y-6">
          {/* Overview + Add button */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">
                Product & Service Overview
              </h2>
              <p className="text-sm text-gray-500">
                Track your marketplace performance and growth
              </p>
            </div>
            <button
              onClick={() => setShowAddListing(true)}
              className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 text-sm"
            >
              + Add New Listing
            </button>
          </div>

          {/* Section Heading */}
          <h3 className="text-md font-semibold text-gray-800">
            Products & Services
          </h3>

          {/* Products Grid inside container */}
<div className="bg-white rounded-xl shadow-sm p-4">
  {filtered.length === 0 ? (
    <p className="text-gray-500 text-center">No items found</p>
  ) : (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {filtered.map((p) => (
        <div
          key={p.id}
          className="bg-white border rounded-lg overflow-hidden flex flex-col hover:shadow transition"
        >
                <Image
          src={p.image}
          alt={p.title}
          width={400}     // required
          height={300}    // required
          className="w-full h-40 object-cover"
        />
          <div className="p-4 flex flex-col flex-1">
            <h3 className="font-semibold text-gray-800 text-base">
              {p.title}
            </h3>
            <p className="text-gray-500 text-sm flex-1">{p.desc}</p>
            <p className="text-emerald-600 font-bold mt-2 text-sm">
              ₦{p.price.toLocaleString()}
            </p>
            <p className="text-[11px] text-gray-400">{p.category}</p>
           

              <Link
                href="/services/viewmore"
                className="mt-3 bg-emerald-600 text-white rounded-md py-2 text-sm hover:bg-emerald-700 inline-block text-center"
              >
                View More
              </Link>
          </div>
        </div>
      ))}
    </div>
  )}
</div>


        </main>
      </div>

      {/* Modal */}
      <AddListingModal
        isOpen={showAddListing}
        onClose={() => setShowAddListing(false)}
        onAdded={(newItem) =>
          setProducts((prev) => [
            ...prev,
            {
              id: prev.length + 1,
              title: newItem.title,
              price: newItem.price,
              desc: newItem.desc,
              image: newItem.image,
              category: newItem.category,
            },
          ])
        }
      />
    </div>
  );
}
