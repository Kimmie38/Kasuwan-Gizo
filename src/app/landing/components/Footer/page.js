"use client";

import React from "react";
import Link from "next/link";

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Restaurants", href: "#" },
      { name: "Hotels", href: "#" },
      { name: "Automotives", href: "#" },
      { name: "Contractors", href: "#" },
      { name: "Pharmacies", href: "#" },
      { name: "Hospitals and clinics", href: "#" },
      { name: "Shopping", href: "#" },
      { name: "Legal", href: "#" },
    ],
  },
  {
    title: "Users",
    links: [
      { name: "Add business", href: "#" },
      { name: "Remove business", href: "#" },
      { name: "Sign up", href: "#" },
    ],
  },
  {
    title: "Links",
    links: [
      { name: "Sign up", href: "#" },
      { name: "Locations", href: "#" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "FAQs", href: "#" },
      { name: "About", href: "#" },
      { name: "Contact us", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#27312E] text-gray-300 px-6 sm:px-10 lg:px-16 py-12">
      {/* Grid Links */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {footerLinks.map((section, i) => (
          <div key={i}>
            <h4 className="text-lg font-semibold text-white mb-5 tracking-wide">
              {section.title}
            </h4>
            <ul className="space-y-3">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-gray-400 hover:text-teal-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom note */}
      <div className="max-w-7xl mx-auto mt-12 border-t border-gray-700 pt-6 text-center text-xs sm:text-sm text-gray-400">
        © {new Date().getFullYear()} <span className="font-medium text-white">Your Company</span>. All rights reserved.
      </div>
    </footer>
  );
}
