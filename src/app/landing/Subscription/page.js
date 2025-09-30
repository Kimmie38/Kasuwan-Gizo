// app/page.jsx
"use client";
import React from "react";
import { Check } from "lucide-react";

const plans = [
  {
    label: "Monthly",
    price: "₦100",
    desc: "Grow your business, reach more customers",
    features: [
      "Promote Your Business",
      "Showcase Products & Services",
      "Grow Visibility",
      "Connect with Customers",
    ],
  },
  {
    label: "Yearly",
    price: "₦1,100",
    desc: "Grow your business, reach more customers",
    features: [
      "Promote Your Business",
      "Showcase Products & Services",
      "Grow Visibility",
      "Connect with Customers",
    ],
  },
];

export default function SubscriptionPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-12">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 text-center">
        Pricing
      </h2>
      <p className="text-gray-500 mb-10 text-center text-sm md:text-base">
        Choose the plan that best fits your needs
      </p>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col border hover:shadow-lg transition"
          >
            {/* Price & Badge */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                {plan.price}
              </p>
              <span className="bg-gradient-to-r from-teal-400 to-teal-500 text-white text-sm sm:text-base md:text-lg font-semibold px-5 py-2 rounded-full shadow">
                {plan.label}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-700 mb-6">
              {plan.desc}
            </p>

            {/* Features */}
            <ul className="space-y-3 text-gray-600 flex-1">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check size={18} className="text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button className="mt-6 bg-[#199A86] text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition w-full">
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
