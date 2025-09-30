"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { AiOutlineCheck } from "react-icons/ai";
import { useState } from "react";
import wall from "../../../../public/wall.png"; // ✅ your wall image

export default function BusinessSocials() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    facebook: "",
    instagram: "",
    twitter: "",
    whatsapp: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        "https://kasuwa-gizo-backend.onrender.com/kasuwa/businesssocial",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (res.ok && data.success) {
        console.log("✅ Saved:", data);
        router.push("/Dashboard"); // move to Dashboard
      } else {
        setError(data.message || "Failed to save socials");
      }
    } catch (err) {
      console.error("🌐 Network error:", err);
      setError("Network error, please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handlePrevious = () => {
    router.back(); // ✅ go back one step
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center 
      bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#4c1d95] animate-gradient px-4"
    >
      {/* Background wall image */}
      <Image
        src={wall}
        alt="Background Wall"
        fill
        className="object-cover opacity-10"
        priority
      />

      {/* Foreground Card */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 md:p-10">
        <h1 className="text-3xl font-bold text-center mb-2 text-black">
          Create Account
        </h1>
        <p className="text-gray-500 text-center mb-8 text-sm md:text-base">
          Link your socials to connect with customers.
        </p>

        {/* Stepper */}
        <div className="flex justify-center items-center space-x-6 mb-8">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-500 text-white font-bold">
              <AiOutlineCheck className="text-lg" />
            </div>
            <p className="text-xs mt-2 font-medium text-black">Personal Info</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-500 text-white font-bold">
              <AiOutlineCheck className="text-lg" />
            </div>
            <p className="text-xs mt-2 font-medium text-black">Business Info</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-500 text-white font-bold">
              3
            </div>
            <p className="text-xs mt-2 text-emerald-500 font-medium">
              Business Socials
            </p>
          </div>
        </div>

        <h2 className="text-lg font-semibold mb-4 text-black">
          Business Socials
        </h2>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}

        {/* Form */}
        <form className="space-y-5" onSubmit={handleNext}>
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Facebook
            </label>
            <input
              type="text"
              name="facebook"
              value={formData.facebook}
              onChange={handleChange}
              placeholder="https://facebook.com/yourbusiness"
              className="w-full px-4 py-3 rounded-md border border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Instagram
            </label>
            <input
              type="text"
              name="instagram"
              value={formData.instagram}
              onChange={handleChange}
              placeholder="@yourbusiness"
              className="w-full px-4 py-3 rounded-md border border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Twitter (X)
            </label>
            <input
              type="text"
              name="twitter"
              value={formData.twitter}
              onChange={handleChange}
              placeholder="@yourbusiness"
              className="w-full px-4 py-3 rounded-md border border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">
              WhatsApp Number
            </label>
            <input
              type="text"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder="+234 8012345678"
              className="w-full px-4 py-3 rounded-md border border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
              className="w-1/2 ml-2 py-3 rounded-md font-medium text-sm md:text-base bg-emerald-500 hover:bg-emerald-600 text-white transition disabled:opacity-50"
            >
              {loading ? "Saving..." : "Next"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
