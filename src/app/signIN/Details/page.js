"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";

export default function BusinessInfo() {
  const router = useRouter();
  const [businessName, setBusinessName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [businessPhone, setBusinessPhone] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const handleNext = async (e) => {
    e.preventDefault();

    if (!businessName || !businessPhone || !category || !location || !password) {
      alert("Please fill all required fields.");
      return;
    }

    const businessData = {
      businessName,
      businessEmail,
      businessPhone,
      businessCategory: category,
      businessLocation: location,
      password, 
    };

    console.log("➡️ Sending business info:", businessData);

    setLoading(true);
    try {
      const res = await fetch(
        "https://kasuwa-gizo-backend.onrender.com/kasuwa/businessinfo",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(businessData),
        }
      );

      const data = await res.json();
      console.log("📩 Backend response:", data);

      if (res.ok && data.success) {
        console.log("✅ Business info saved:", data);
        router.push("/signIN/Socials");
      } else {
        console.error("❌ Error saving business info:", data);
        alert(data.message || "Failed to save business info.");
      }
    } catch (err) {
      console.error("❌ Network error:", err);
      alert("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Go back to previous screen
  const handlePrevious = () => router.back();

  // Get user location
  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setLocation(`${latitude.toFixed(5)}, ${longitude.toFixed(5)}`);
        },
        () => alert("Unable to fetch location. Please allow access.")
      );
    } else alert("Geolocation is not supported by your browser.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
      bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#4c1d95] animate-gradient px-4">

      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 md:p-10">
        <h1 className="text-3xl font-bold text-center mb-2 text-black">
          Create Account
        </h1>
        <p className="text-gray-500 text-center mb-8 text-sm md:text-base">
          Get started by setting up your business info.
        </p>

        {/* Stepper */}
        <div className="flex justify-center items-center space-x-6 mb-8">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-500 text-white font-bold">
              <AiOutlineCheck className="text-lg" />
            </div>
            <p className="text-xs mt-2 font-medium text-black">
              Personal Info
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-500 text-white font-bold">
              2
            </div>
            <p className="text-xs mt-2 text-emerald-500 font-medium">
              Business Info
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-emerald-500 text-emerald-500 font-bold">
              3
            </div>
            <p className="text-xs mt-2 text-emerald-500">Socials</p>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleNext}>
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Business Name
            </label>
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="Business Name"
              className="w-full px-4 py-3 rounded-md border border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Business Email
            </label>
            <input
              type="email"
              value={businessEmail}
              onChange={(e) => setBusinessEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md border border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Business Phone Number
            </label>
            <input
              type="text"
              value={businessPhone}
              onChange={(e) => setBusinessPhone(e.target.value)}
              placeholder="+234 8078562309"
              className="w-full px-4 py-3 rounded-md border border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>

          {/* Business Category */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Business Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
              required
            >
              <option value="">Select</option>
              <option value="Fashion">Fashion & Tailoring</option>
              <option value="Food">Food & Catering</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Retail">Retail & Trading</option>
              <option value="Tech">Tech & IT Services</option>
              <option value="Logistics">Logistics & Transport</option>
              <option value="Beauty">Beauty & Personal Care</option>
              <option value="Education">Education & Training</option>
              <option value="Construction">Construction</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Media">Media & Entertainment</option>
              <option value="Finance">Finance & Consultancy</option>
              <option value="Handicrafts">Handicrafts & Art</option>
              <option value="Automobile">Automobile Services</option>
              <option value="Cleaning">Cleaning & Laundry</option>
              <option value="Event">Event Planning</option>
              <option value="Printing">Printing & Publishing</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Business Location */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Business Location
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Jos, Plateau State"
              className="w-full px-4 py-3 rounded-md border border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
            <button
              type="button"
              onClick={handleGetLocation}
              className="mt-2 text-emerald-600 text-sm hover:underline"
            >
              📍 Use current location
            </button>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter a strong password"
              className="w-full px-4 py-3 rounded-md border border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={handlePrevious}
              className="w-1/2 mr-2 py-3 rounded-md font-medium text-sm md:text-base bg-gray-200 hover:bg-gray-300 text-black transition"
            >
              Previous
            </button>
            <button
              type="submit"
              disabled={loading}
              className="w-1/2 ml-2 py-3 rounded-md font-medium text-sm md:text-base bg-emerald-500 hover:bg-emerald-600 text-white transition"
            >
              {loading ? "Saving..." : "Next"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
