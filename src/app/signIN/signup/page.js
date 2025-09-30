"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userSlug, setUserSlug] = useState(null);

  // 🔹 Load slug from localStorage on page load
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedSlug = localStorage.getItem("userSlug");
      if (savedSlug) setUserSlug(savedSlug);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/kasuwa/auth/signup`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName: formData.fullName,
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      let data;
      try {
        data = await res.json();
      } catch {
        throw new Error("Server returned an invalid response (not JSON).");
      }

      if (res.ok && data.success) {
        // ✅ Save slug to localStorage
        if (data.user?.slug) {
          localStorage.setItem("userSlug", data.user.slug);
          setUserSlug(data.user.slug); // also update state
        }

        setSuccess("✅ Signup successful!");
        setFormData({ fullName: "", email: "", password: "", confirmPassword: "" });

        // 👉 Redirect to details page (step 2 of registration)
        setTimeout(() => {
          router.push("/signIN/Details");
        }, 1500);
      } else {
        setError(data?.message || "Signup failed. Please try again.");
      }
    } catch (err) {
      console.error("🌐 Network error:", err);
      setError(err.message || "Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
      bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#4c1d95] animate-gradient px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 md:p-10">
        <h1 className="text-3xl font-bold text-center mb-2 text-black">
          Create Account
        </h1>
        <p className="text-gray-500 text-center mb-8 text-sm md:text-base">
          Get started by setting up your account.
        </p>

        {/* errors */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {success && <p className="text-green-500 text-sm mb-4">{success}</p>}

        {/* ✅ Show user link if available */}
        {userSlug && (
          <p className="text-center text-sm mb-4 text-gray-700">
            Your shop link:{" "}
            <a
              href={`https://your-domain.com/${userSlug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-500 underline"
            >
              https://your-domain.com/{userSlug}
            </a>
          </p>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-md border border-gray-300 text-black 
                placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md border border-gray-300 text-black 
                placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md border border-gray-300 text-black 
                  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </span>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full px-4 py-3 rounded-md border border-gray-300 text-black 
                  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
              >
                {showConfirmPassword ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </span>
            </div>
          </div>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-sm text-gray-400">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <p className="text-center text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <a href="/signIN/login" className="text-emerald-500 hover:underline">
              Sign In
            </a>
          </p>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 py-3 rounded-md font-medium text-sm md:text-base 
              bg-emerald-500 hover:bg-emerald-600 text-white transition"
          >
            {loading ? "Creating Account..." : "Next"}
          </button>
        </form>
      </div>
    </div>
  );
}
