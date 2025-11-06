"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [forceFullNav, setForceFullNav] = useState(false);

  useEffect(() => {
    try {
      const flag = (window as any).__RSC_OK === false || localStorage.getItem('forceFullNav') === '1';
      setForceFullNav(Boolean(flag));
    } catch (e) {
      setForceFullNav(false);
    }
  }, []);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
         <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white">
  <img
    src="/images/logos.png"
    alt="Logo"
    className="w-full h-full object-contain rounded-lg"
  />
</div>

          <span className="text-xl font-bold text-gray-900">Kasuwan Gizo</span>
        </div>
        <div className="flex items-center gap-3">
          {forceFullNav ? (
            <>
              <a href="/marketplace" className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                Login
              </a>
              <a href="/signup" className="px-6 py-2 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition">
                Get Started
              </a>
            </>
          ) : (
            <>
              <Link
                href="/marketplace"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="px-6 py-2 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
