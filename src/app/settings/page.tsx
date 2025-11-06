"use client";

import React, { useState } from "react";

export default function SettingsPage() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [activeTab, setActiveTab] = useState<string>("General");
  const tabs = ["General", "Notifications", "Privacy", "Security", "Business"];

  return (
    <div className="w-full">
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
          <p className="text-sm text-gray-500">Customize your platform experience</p>
        </div>

        <div>
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-md shadow-lg hover:opacity-95 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Save Changes
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <aside className="md:col-span-4">
          <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-11.66l-.7.7M4.04 19.96l-.7.7M21 12h-1M4 12H3m15.36 5.66l-.7-.7M6.34 4.34l-.7-.7" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Light Mode</div>
                  <div className="text-xs text-gray-500">Switch to dark theme</div>
                </div>
              </div>

              <div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={theme === "dark"}
                    onChange={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
                  />
                  <div className={`w-11 h-6 rounded-full transition-colors ${theme === "dark" ? "bg-indigo-600" : "bg-gray-200"}`}></div>
                </label>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-gray-100">
              <nav className="flex gap-2 flex-wrap" aria-label="settings tabs">
                {tabs.map((t) => (
                  <button
                    key={t}
                    onClick={() => setActiveTab(t)}
                    className={`px-3 py-1 rounded-md text-sm font-medium ${activeTab === t ? "bg-indigo-600 text-white" : "bg-gray-50 text-gray-700 hover:bg-gray-100"}`}
                  >
                    {t}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </aside>

        <section className="md:col-span-8">
          <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-700">{activeTab}</h2>
              <p className="text-sm text-gray-500">Appearance</p>
            </div>

            {activeTab === "General" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Appearance</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      onClick={() => setTheme("light")}
                      className={`text-left p-4 rounded-lg border transition flex items-center gap-3 ${
                        theme === "light"
                          ? "border-indigo-300 bg-indigo-50 shadow-sm"
                          : "border-gray-200 bg-white hover:bg-gray-50"
                      }`}
                    >
                      <div className="w-9 h-9 rounded-md bg-white flex items-center justify-center border border-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-11.66l-.7.7M4.04 19.96l-.7.7M21 12h-1M4 12H3m15.36 5.66l-.7-.7M6.34 4.34l-.7-.7" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold">Light Mode</div>
                        <div className="text-xs text-gray-500">Clean and bright interface</div>
                      </div>
                    </button>

                    <button
                      onClick={() => setTheme("dark")}
                      className={`text-left p-4 rounded-lg border transition flex items-center gap-3 ${
                        theme === "dark"
                          ? "border-indigo-300 bg-indigo-50 shadow-sm"
                          : "border-gray-200 bg-white hover:bg-gray-50"
                      }`}
                    >
                      <div className="w-9 h-9 rounded-md bg-black flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold">Dark Mode</div>
                        <div className="text-xs text-gray-500">Easy on the eyes</div>
                      </div>
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Account</h3>
                  <div className="space-y-2">
                    <a href="#" className="block p-4 bg-white border border-gray-200 rounded-md hover:bg-gray-50 flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium">Change Password</div>
                        <div className="text-xs text-gray-500">Update your account password</div>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>

                    <a href="#" className="block p-4 bg-white border border-gray-200 rounded-md hover:bg-gray-50 flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium">Export Data</div>
                        <div className="text-xs text-gray-500">Download your account data</div>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {activeTab !== "General" && (
              <div className="text-sm text-gray-600">
                <p className="mb-3">Options for <strong>{activeTab}</strong> will appear here.</p>
                <p>If you want, I can wire up forms and backend integration (change password, notifications preferences, export data) — tell me which ones to implement.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
