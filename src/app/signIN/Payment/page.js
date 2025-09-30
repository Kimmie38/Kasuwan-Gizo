"use client";

import { useState } from "react";

export default function Subscription() {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [loading, setLoading] = useState(false);

  const plans = [
    { id: "basic", name: "Basic", price: 1000 },
    { id: "pro", name: "Pro", price: 5000 },
    { id: "premium", name: "Premium", price: 10000 },
  ];

  const handlePaystack = (amount) => {
    const handler = window.PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_KEY, // your public key
      email: "kimrwang9@gmail.com", // replace with user email
      amount: amount * 100, // in kobo
      currency: "NGN",
      callback: function (response) {
        alert("✅ Payment complete! Reference: " + response.reference);
      },
      onClose: function () {
        alert("❌ Transaction cancelled.");
      },
    });
    handler.openIframe();
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!selectedPlan) return alert("Please select a plan");
    setLoading(true);

    const plan = plans.find((p) => p.id === selectedPlan);
    handlePaystack(plan.price);

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
      bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#4c1d95] animate-gradient px-4">
      
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 md:p-10">
        <h1 className="text-3xl font-bold text-center mb-2 text-black">
          Subscription
        </h1>
        <p className="text-gray-500 text-center mb-8 text-sm md:text-base">
          Choose a plan to continue
        </p>

        <form className="space-y-5" onSubmit={handleSubscribe}>
          {plans.map((plan) => (
            <label
              key={plan.id}
              className={`flex items-center justify-between p-4 border rounded-md cursor-pointer transition ${
                selectedPlan === plan.id
                  ? "border-emerald-500 bg-emerald-50"
                  : "border-gray-300"
              }`}
            >
              <div>
                <p className="text-black font-medium">{plan.name}</p>
                <p className="text-gray-500 text-sm">₦{plan.price} / month</p>
              </div>
              <input
                type="radio"
                name="plan"
                value={plan.id}
                checked={selectedPlan === plan.id}
                onChange={() => setSelectedPlan(plan.id)}
                className="form-radio text-emerald-500"
              />
            </label>
          ))}

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 py-3 rounded-md font-medium text-sm md:text-base bg-emerald-500 hover:bg-emerald-600 text-white transition disabled:opacity-50"
          >
            {loading ? "Processing..." : "Subscribe"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          You can cancel anytime in your dashboard
        </p>
      </div>
    </div>
  );
}
