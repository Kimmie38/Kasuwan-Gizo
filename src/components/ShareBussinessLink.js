"use client";

import { useState } from "react";
import { FiShare2 } from "react-icons/fi";

export default function ShareBusinessLink({ slug }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const link = `${window.location.origin}/u/${slug}`;
    navigator.clipboard.writeText(link)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error("❌ Failed to copy:", err));
  };

  return (
    <div
      onClick={handleCopy}
      className="flex items-center mb-2 cursor-pointer hover:bg-gray-100 p-2 rounded-md transition"
    >
      <FiShare2 className="w-5 h-5 text-emerald-600 mr-3" />
      <span className="font-semibold text-gray-800">
        {copied ? "✅ Link copied!" : "Share Business Link"}
      </span>
    </div>
  );
}
