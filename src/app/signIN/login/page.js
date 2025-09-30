"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
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
        "https://kasuwa-gizo-backend.onrender.com/kasuwa/auth/signin",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (res.ok && data.success) {
        console.log("✅ Login success");

        // 🔹 Save slug if backend provides it
        if (data.user?.slug) {
          localStorage.setItem("userSlug", data.user.slug);
        } else {
          // 🔹 If backend doesn’t return slug, keep old one
          const existingSlug = localStorage.getItem("userSlug");
          if (!existingSlug) {
            console.warn("⚠️ No slug found in backend or storage.");
          }
        }

        router.push("/Dashboard");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      console.error("🌐 Network error:", err);
      setError("Network error, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
      bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#4c1d95] animate-gradient px-4">
      
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 md:p-10">
        <h1 className="text-3xl font-bold text-center mb-2 text-black">
          Login
        </h1>
        <p className="text-gray-500 text-center mb-8 text-sm md:text-base">
          Welcome back, sign into your account
        </p>

        {/* Error */}
        {error && <p className="text-red-500 text-center text-sm mb-4">{error}</p>}

        {/* Form */}
        <form className="space-y-5" onSubmit={handleNext}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 text-black placeholder-gray-400 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 text-black placeholder-gray-400 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 py-3 rounded-md font-medium text-sm md:text-base bg-emerald-500 hover:bg-emerald-600 text-white transition disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Next"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-sm text-gray-400">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Sign up link */}
        <p className="text-center text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <a href="/signIN/signup" className="text-emerald-500 hover:underline">
            Sign Up
          </a>
        </p>

        {/* Google Signup */}
        <button className="w-full mt-4 flex items-center justify-center border border-gray-300 py-3 rounded-md hover:bg-gray-50 transition text-sm md:text-base text-black">
          <Image
            src="/icons/google.png"
            alt="Google"
            width={20}
            height={20}
            className="mr-2"
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
}
