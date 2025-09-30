"use client";

import Image from "next/image";
import { useState } from "react";
import wall from "../../../public/wall.png";

export default function Onboarding() {
  const [role, setRole] = useState("");

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Section */}
      <div className="relative w-full md:w-1/2 flex flex-col justify-end items-center text-white p-6 md:p-8">
        <Image
          src={wall}
          alt="Illustration"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay content */}
        <div className="relative z-10 text-center mt-40 md:mt-0 mb-8 md:mb-12 max-w-md px-4">
          <h2 className="text-lg md:text-xl font-semibold mb-2">How it works</h2>
          <p className="text-xs md:text-sm leading-relaxed text-gray-200">
            Create an account and set up your profile to begin. Explore the
            marketplace to find products or vendors, buy and sell securely with
            our trusted payment system, track your orders in real time, and
            share reviews to help others.
          </p>

          {/* Small progress dots */}
          <div className="flex justify-center mt-6 space-x-2">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <div className="max-w-md w-full px-4 sm:px-6 md:px-8 py-12 md:py-0">
          <h1 className="text-2xl font-bold text-center mb-2 text-black">
            Welcome to KASUWAN GIZO
          </h1>
          <p className="text-gray-600 text-center mb-4 md:mb-6 whitespace-nowrap text-sm md:text-base">
            Indicate whether you are registering as a User or a Vendor.
          </p>

          <p className="text-center text-gray-500 mb-4 text-sm md:text-base">
            Select an option which best describes you
          </p>

          {/* Options */}
          <div className="space-y-4">
            <button
              onClick={() => setRole("user")}
              className={`flex items-center justify-between w-full px-4 py-3 rounded-xl border transition text-sm md:text-base ${
                role === "user"
                  ? "bg-emerald-900 border-emerald-500 text-white"
                  : "bg-emerald-50 border-gray-300 text-black"
              }`}
            >
              <span className="font-medium">User</span>
              <Image src="/icons/user.svg" alt="User" width={20} height={20} />
            </button>

            <button
              onClick={() => setRole("vendor")}
              className={`flex items-center justify-between w-full px-4 py-3 rounded-xl border transition text-sm md:text-base ${
                role === "vendor"
                  ? "bg-emerald-900 border-emerald-500 text-white"
                  : "bg-emerald-50 border-gray-300 text-black"
              }`}
            >
              <span className="font-medium">Vendor</span>
              <Image src="/icons/user.svg" alt="Vendor" width={20} height={20} />
            </button>
          </div>

          {/* Next Button */}
          <button
            disabled={!role}
            className={`w-full mt-6 md:mt-8 py-3 rounded-xl font-medium text-sm md:text-base ${
              role
                ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
