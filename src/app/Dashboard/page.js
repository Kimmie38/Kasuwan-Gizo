"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  FiBell,
  FiShare2,
  FiEye,
  FiShoppingCart,
  FiMenu,
  FiFileText,
} from "react-icons/fi";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import AddListingModal from "@/components/AddlistingModal";
import Sidebar from "@/components/sidebar";
import ProductGrid from "@/components/ProductGrid";

// Overview cards
const cards = [
  {
    title: "Products and Services",
    value: "0",
    subtitle: "Active Listings",
    icon: FiShoppingCart,
  },
  {
    title: "Orders & Inquiries",
    value: "0",
    subtitle: "Pending responses",
    icon: FiShoppingCart,
  },
  {
    title: "Profile Views",
    value: "0",
    subtitle: "Monthly Traffic",
    icon: FiEye,
  },
];

// Chart data
const chartData = [
  { day: "Mon", views: 1200 },
  { day: "Tue", views: 1800 },
  { day: "Wed", views: 9000 },
  { day: "Thu", views: 3200 },
  { day: "Fri", views: 4200 },
  { day: "Sat", views: 3800 },
  { day: "Sun", views: 6200 },
];

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showAddListing, setShowAddListing] = useState(false);
  const [listings, setListings] = useState([]);
  const [copied, setCopied] = useState(false);
  const [userSlug, setUserSlug] = useState("");
  const [origin, setOrigin] = useState("");
  const router = useRouter();

  // Load slug + window origin on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedSlug = localStorage.getItem("userSlug");
      if (storedSlug) setUserSlug(storedSlug);
      setOrigin(window.location.origin);
    }
  }, []);

  const shareableLink = userSlug ? `${origin}/u/${userSlug}` : "";

  // ✅ Smart share handler
  const handleShare = async () => {
    if (!shareableLink) return;

    if (navigator.share) {
      // Mobile native share
      try {
        await navigator.share({
          title: "My Business Profile",
          text: "Check out my marketplace profile!",
          url: shareableLink,
        });
      } catch (err) {
        console.error("❌ Share cancelled or failed:", err);
      }
    } else {
      // Desktop fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(shareableLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("❌ Failed to copy:", err);
      }
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} />

      {/* Main */}
      <div className="flex-1 flex flex-col md:ml-64">
        {/* Topbar */}
        <header className="px-4 pt-4 md:px-6 md:pt-6">
          <div className="bg-white shadow-sm rounded-xl px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 flex justify-between items-center">
            {/* Left: Menu + Search */}
            <div className="flex items-center gap-2 sm:gap-3 flex-1 max-w-md">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="md:hidden text-gray-600"
              >
                <FiMenu className="w-6 h-6" />
              </button>
              <input
                type="text"
                placeholder="Search your products"
                className="flex-1 px-3 py-2 rounded-full border text-sm focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Right */}
            <div className="flex items-center space-x-3 sm:space-x-4 ml-3 sm:ml-4">
              <FiBell className="w-5 h-5 text-gray-600 cursor-pointer" />

              {/* Share icon in topbar */}
              <div
                onClick={handleShare}
                className="cursor-pointer flex items-center"
              >
                <FiShare2 className="w-5 h-5 text-gray-600" />
                {copied && (
                  <span className="ml-2 text-xs text-emerald-600 font-semibold">
                    ✅ Copied!
                  </span>
                )}
              </div>

              {/* Profile */}
              <div className="hidden sm:flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-emerald-700 shrink-0"></div>
                <div className="hidden md:block">
                  <p className="text-sm font-semibold text-gray-800">
                    TechBiz Solutions
                  </p>
                  <p className="text-xs text-gray-500">
                    IT Services & Digital Solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 px-3 sm:px-4 md:px-6 mt-4 md:mt-6">
          <div className="max-w-[950px] mx-auto">
            {/* Business Overview */}
            <section>
              <h2 className="text-lg md:text-xl font-bold mb-1">
                Business Overview
              </h2>
              <p className="text-gray-500 mb-4 text-sm md:text-base">
                Track your marketplace performance and growth
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {cards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.title}
                      className="bg-white rounded-xl shadow-sm p-4 md:p-6 flex flex-col"
                    >
                      <div className="flex justify-between mb-3 md:mb-4">
                        <p className="text-sm font-medium text-gray-500">
                          {card.title}
                        </p>
                        <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-emerald-600" />
                        </div>
                      </div>
                      <p className="text-xl md:text-2xl font-bold text-gray-800">
                        {card.value}
                      </p>
                      <p className="text-sm text-emerald-600">{card.subtitle}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Chart */}
            <section className="mt-6 md:mt-8 bg-white rounded-xl shadow-sm p-4 md:p-6">
              <div className="flex justify-between items-center mb-3 md:mb-4">
                <h2 className="text-base md:text-lg font-bold text-gray-800">
                  Weekly Views
                </h2>
                <select className="border rounded-md px-2 py-1 text-xs md:text-sm">
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>
              </div>
              <div className="w-full h-52 md:h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#10b981"
                          stopOpacity={0.2}
                        />
                        <stop
                          offset="95%"
                          stopColor="#10b981"
                          stopOpacity={0.02}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="views"
                      stroke="#059669"
                      fill="url(#grad)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </section>

            {/* Quick Actions */}
            <section className="mt-6 md:mt-8 bg-white rounded-xl shadow-sm p-4 md:p-6 mb-12">
              <h2 className="text-base md:text-lg font-bold mb-3 md:mb-4">
                Quick Actions
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {/* Add Product */}
                <button
                  onClick={() => setShowAddListing(true)}
                  className="bg-emerald-600 text-white rounded-xl p-4 md:p-6 text-left hover:shadow-md"
                >
                  <div className="flex items-center mb-2">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white/20 mr-3">
                      +
                    </span>
                    <span className="font-semibold">Add Product/Service</span>
                  </div>
                  <p className="text-sm opacity-90">List a new offer</p>
                </button>

                {/* Share Business Link */}
                <button
                  onClick={handleShare}
                  className="bg-white border rounded-xl p-4 md:p-6 text-left hover:shadow-md"
                >
                  <div className="flex items-center mb-2">
                    <FiShare2 className="w-5 h-5 text-emerald-600 mr-3" />
                    <span className="font-semibold text-gray-800">
                      {copied ? "✅ Link Copied!" : "Share Business Link"}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Get your unique marketplace URL
                  </p>
                  {shareableLink && (
                    <p className="mt-2 text-xs text-emerald-600 break-all">
                      {shareableLink}
                    </p>
                  )}
                </button>

                {/* Subscription */}
                <button className="bg-white border rounded-xl p-4 md:p-6 text-left hover:shadow-md">
                  <div className="flex items-center mb-2">
                    <FiFileText className="w-5 h-5 text-emerald-600 mr-3" />
                    <span className="font-semibold text-gray-800">
                      Subscription
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">Subscribe to begin</p>
                </button>
              </div>
            </section>

            {/* Listings Grid */}
            {listings.length > 0 && (
              <section className="mb-12">
                <h2 className="text-base md:text-lg font-bold mb-3 md:mb-4">
                  Your Listings
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {listings.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
                    >
                          <Image
                src={item.image}
                alt={item.title}
                width={400}     // ✅ required
                height={200}    // ✅ required
                className="w-full h-32 object-cover"
              />
                      <div className="p-3">
                        <h3 className="font-semibold text-gray-800 text-sm">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 text-xs">{item.desc}</p>
                        <p className="text-emerald-600 font-bold mt-1 text-sm">
                          ₦{item.price?.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </main>
      </div>

      {/* Modal */}
      <AddListingModal
        isOpen={showAddListing}
        onClose={() => setShowAddListing(false)}
        onAdded={(newItem) => {
          setShowAddListing(false);
          setListings((prev) => [...prev, newItem]);
        }}
      />
    </div>
  );
}
