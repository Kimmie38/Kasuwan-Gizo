"use client";

import React, { useState } from "react";

type SettingCard = {
  id: string;
  icon: string;
  title: string;
  description: string;
  status?: string;
  badge?: string;
  action?: () => void;
};

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "+234 802 123 4567",
  });

  const [business, setBusiness] = useState({
    businessName: "John's Fashion Store",
    category: "Fashion & Accessories",
    address: "Lagos, Nigeria",
    website: "https://example.com",
    description: "Premium fashion and accessories for everyone",
  });

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    smsAlerts: true,
    marketingEmails: false,
    twoFactorAuth: false,
    publicProfile: true,
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const settingGroups = [
    {
      name: "Account & Profile",
      color: "from-blue-500 to-cyan-500",
      cards: [
        {
          id: "profile",
          icon: "👤",
          title: "Personal Information",
          description: "Update your name, email, and phone number",
          status: "Active",
        },
        {
          id: "password",
          icon: "🔐",
          title: "Password & Security",
          description: "Change password, setup two-factor authentication",
          badge: "Last changed 3 months ago",
        },
        {
          id: "avatar",
          icon: "🖼️",
          title: "Profile Picture",
          description: "Upload or change your profile photo",
          status: "Set",
        },
      ] as SettingCard[],
    },
    {
      name: "Business Settings",
      color: "from-indigo-500 to-purple-500",
      cards: [
        {
          id: "business-info",
          icon: "🏢",
          title: "Business Information",
          description: "Manage business name, category, and details",
          status: "Configured",
        },
        {
          id: "location",
          icon: "📍",
          title: "Location & Website",
          description: "Set your business address and website URL",
          status: "Set",
        },
        {
          id: "media",
          icon: "🎨",
          title: "Branding Assets",
          description: "Upload logo, cover image, and brand photos",
          badge: "Logo pending",
        },
      ] as SettingCard[],
    },
    {
      name: "Notifications & Communication",
      color: "from-orange-500 to-red-500",
      cards: [
        {
          id: "notifications",
          icon: "🔔",
          title: "Notification Preferences",
          description: "Choose how you want to receive updates",
          status: "Customized",
        },
        {
          id: "email",
          icon: "📧",
          title: "Email Settings",
          description: "Manage email frequency and content preferences",
          status: "Active",
        },
        {
          id: "sms",
          icon: "📱",
          title: "SMS & Mobile Alerts",
          description: "Configure urgent notifications via SMS",
          status: preferences.smsAlerts ? "Enabled" : "Disabled",
        },
      ] as SettingCard[],
    },
    {
      name: "Privacy & Data",
      color: "from-green-500 to-emerald-500",
      cards: [
        {
          id: "privacy",
          icon: "🔒",
          title: "Privacy Controls",
          description: "Manage what information is public",
          status: "Custom",
        },
        {
          id: "data",
          icon: "💾",
          title: "Data & Export",
          description: "Download your data or delete account",
          badge: "Last exported 2 weeks ago",
        },
        {
          id: "sessions",
          icon: "🌐",
          title: "Active Sessions",
          description: "View and manage your active sessions",
          status: "1 active",
        },
      ] as SettingCard[],
    },
  ];

  return (
    <div className="settings-page bg-gray-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <div className="settings-header mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Settings & Preferences</h1>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Customize your account, business profile, and how you interact with the platform. All changes are saved automatically.
          </p>
        </div>

        {saved && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 flex items-center gap-2">
            <span>✓</span> All changes saved successfully
          </div>
        )}

        <div className="space-y-10">
          {settingGroups.map((group) => (
            <section key={group.name} className="settings-group">
              <div className="mb-5 flex items-center gap-3">
                <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${group.color}`}></div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{group.name}</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {group.cards.map((card) => (
                  <button
                    key={card.id}
                    onClick={() => setActiveSection(activeSection === card.id ? null : card.id)}
                    className="setting-card group relative bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg hover:border-gray-300 transition cursor-pointer text-left"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="text-3xl">{card.icon}</div>
                      {card.status && (
                        <span className="text-xs font-medium px-2 py-1 bg-green-50 text-green-700 rounded-full">
                          {card.status}
                        </span>
                      )}
                    </div>

                    <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">{card.description}</p>

                    {card.badge && (
                      <p className="text-xs text-gray-400 mt-3 italic">{card.badge}</p>
                    )}

                    <div className="absolute top-5 right-5 text-gray-300 group-hover:text-gray-600 transition">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>

              {activeSection && (
                <div className="mt-6 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                  {activeSection === "profile" && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="First Name"
                          value={profile.firstName}
                          onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                        />
                        <input
                          type="text"
                          placeholder="Last Name"
                          value={profile.lastName}
                          onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                        />
                        <input
                          type="email"
                          placeholder="Email"
                          value={profile.email}
                          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                        />
                        <input
                          type="tel"
                          placeholder="Phone"
                          value={profile.phone}
                          onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div className="flex gap-3 justify-end pt-4">
                        <button
                          onClick={() => setActiveSection(null)}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleSave}
                          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  )}

                  {activeSection === "password" && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Password & Security</h3>
                      <div className="space-y-4">
                        <input
                          type="password"
                          placeholder="Current Password"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                        />
                        <input
                          type="password"
                          placeholder="New Password"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                        />
                        <input
                          type="password"
                          placeholder="Confirm Password"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                        />
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <span className="text-sm text-gray-700">Two-Factor Authentication</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only"
                              checked={preferences.twoFactorAuth}
                              onChange={(e) =>
                                setPreferences({ ...preferences, twoFactorAuth: e.target.checked })
                              }
                            />
                            <div
                              className={`w-11 h-6 rounded-full transition-colors ${
                                preferences.twoFactorAuth ? "bg-indigo-600" : "bg-gray-300"
                              }`}
                            ></div>
                          </label>
                        </div>
                      </div>
                      <div className="flex gap-3 justify-end pt-4">
                        <button
                          onClick={() => setActiveSection(null)}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleSave}
                          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                        >
                          Update Password
                        </button>
                      </div>
                    </div>
                  )}

                  {activeSection === "business-info" && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Business Information</h3>
                      <div className="space-y-4">
                        <input
                          type="text"
                          placeholder="Business Name"
                          value={business.businessName}
                          onChange={(e) => setBusiness({ ...business, businessName: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                        />
                        <select
                          value={business.category}
                          onChange={(e) => setBusiness({ ...business, category: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                        >
                          <option>Fashion & Accessories</option>
                          <option>Food & Beverages</option>
                          <option>Electronics</option>
                          <option>Services</option>
                        </select>
                        <textarea
                          placeholder="Business Description"
                          value={business.description}
                          onChange={(e) => setBusiness({ ...business, description: e.target.value })}
                          rows={3}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div className="flex gap-3 justify-end pt-4">
                        <button
                          onClick={() => setActiveSection(null)}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleSave}
                          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                        >
                          Save Business Info
                        </button>
                      </div>
                    </div>
                  )}

                  {activeSection === "notifications" && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Notification Preferences</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <span className="text-sm text-gray-700">Email Notifications</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only"
                              checked={preferences.emailNotifications}
                              onChange={(e) =>
                                setPreferences({ ...preferences, emailNotifications: e.target.checked })
                              }
                            />
                            <div
                              className={`w-11 h-6 rounded-full transition-colors ${
                                preferences.emailNotifications ? "bg-indigo-600" : "bg-gray-300"
                              }`}
                            ></div>
                          </label>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <span className="text-sm text-gray-700">SMS Alerts</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only"
                              checked={preferences.smsAlerts}
                              onChange={(e) =>
                                setPreferences({ ...preferences, smsAlerts: e.target.checked })
                              }
                            />
                            <div
                              className={`w-11 h-6 rounded-full transition-colors ${
                                preferences.smsAlerts ? "bg-indigo-600" : "bg-gray-300"
                              }`}
                            ></div>
                          </label>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <span className="text-sm text-gray-700">Marketing Emails</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only"
                              checked={preferences.marketingEmails}
                              onChange={(e) =>
                                setPreferences({ ...preferences, marketingEmails: e.target.checked })
                              }
                            />
                            <div
                              className={`w-11 h-6 rounded-full transition-colors ${
                                preferences.marketingEmails ? "bg-indigo-600" : "bg-gray-300"
                              }`}
                            ></div>
                          </label>
                        </div>
                      </div>
                      <div className="flex gap-3 justify-end pt-4">
                        <button
                          onClick={() => setActiveSection(null)}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleSave}
                          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                        >
                          Save Preferences
                        </button>
                      </div>
                    </div>
                  )}

                  {!["profile", "password", "business-info", "notifications"].includes(activeSection) && (
                    <div className="text-center text-gray-500 py-6">
                      <p>Expand this section to manage these settings.</p>
                    </div>
                  )}
                </div>
              )}
            </section>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200 flex gap-3 justify-end">
          <button className="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium">
            Export Settings
          </button>
          <button className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-lg hover:opacity-90 font-medium">
            Save All Changes
          </button>
        </div>
      </div>
    </div>
  );
}
