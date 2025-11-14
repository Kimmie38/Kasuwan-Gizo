"use client";

import React, { useState, ChangeEvent } from "react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("account");
  const [saveSuccess, setSaveSuccess] = useState(false);

  const [accountSettings, setAccountSettings] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "+234 802 123 4567",
    avatar: "",
  });

  const [businessSettings, setBusinessSettings] = useState({
    businessName: "John's Fashion Store",
    category: "Fashion & Accessories",
    description: "Premium fashion and accessories for everyone",
    address: "Lagos, Nigeria",
    website: "https://example.com",
  });

  const [notifications, setNotifications] = useState({
    emailOrders: true,
    emailMessages: true,
    emailMarketing: false,
    smsOrders: true,
    pushNotifications: true,
  });

  const [security, setSecurity] = useState({
    twoFactorAuth: false,
    loginAlerts: true,
    sessionTimeout: "30",
  });

  const [privacy, setPrivacy] = useState({
    profilePublic: true,
    showEmail: false,
    showPhone: false,
  });

  const handleSave = () => {
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleAccountChange = (field: string, value: string) => {
    setAccountSettings((prev) => ({ ...prev, [field]: value }));
  };

  const handleBusinessChange = (field: string, value: string) => {
    setBusinessSettings((prev) => ({ ...prev, [field]: value }));
  };

  const handleNotificationToggle = (field: string) => {
    setNotifications((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSecurityChange = (field: string, value: string | boolean) => {
    setSecurity((prev) => ({ ...prev, [field]: value }));
  };

  const handlePrivacyToggle = (field: string) => {
    setPrivacy((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const tabs = [
    { id: "account", label: "Account", icon: "👤" },
    { id: "business", label: "Business", icon: "🏢" },
    { id: "notifications", label: "Notifications", icon: "🔔" },
    { id: "security", label: "Security", icon: "🔒" },
    { id: "privacy", label: "Privacy", icon: "👁️" },
  ];

  return (
    <div className="settings-page min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="settings-header mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-1">Manage your account, business profile, and preferences</p>
        </div>

        {saveSuccess && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
            ✓ Settings saved successfully
          </div>
        )}

        <div className="flex gap-6">
          <aside className="settings-sidebar w-48">
            <nav className="flex flex-col gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-left px-4 py-3 rounded-lg font-medium transition ${
                    activeTab === tab.id
                      ? "bg-indigo-600 text-white shadow-md"
                      : "text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>
          </aside>

          <main className="settings-content flex-1">
            {activeTab === "account" && (
              <div className="account-section bg-white rounded-lg shadow p-6 space-y-6">
                <div className="section-header border-b pb-4">
                  <h2 className="text-xl font-semibold text-gray-900">Account Settings</h2>
                  <p className="text-sm text-gray-500 mt-1">Update your personal information</p>
                </div>

                <div className="profile-avatar flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold">
                    {accountSettings.firstName[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Profile Picture</p>
                    <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">Change Avatar</button>
                  </div>
                </div>

                <div className="form-grid grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      value={accountSettings.firstName}
                      onChange={(e) => handleAccountChange("firstName", e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      value={accountSettings.lastName}
                      onChange={(e) => handleAccountChange("lastName", e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      value={accountSettings.email}
                      onChange={(e) => handleAccountChange("email", e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={accountSettings.phone}
                      onChange={(e) => handleAccountChange("phone", e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="account-actions border-t pt-4 space-y-2">
                  <button className="w-full md:w-auto px-6 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50">
                    Change Password
                  </button>
                  <p className="text-xs text-gray-500">Last password change: 3 months ago</p>
                </div>
              </div>
            )}

            {activeTab === "business" && (
              <div className="business-section bg-white rounded-lg shadow p-6 space-y-6">
                <div className="section-header border-b pb-4">
                  <h2 className="text-xl font-semibold text-gray-900">Business Profile</h2>
                  <p className="text-sm text-gray-500 mt-1">Manage your business information</p>
                </div>

                <div className="form-grid grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
                    <input
                      type="text"
                      value={businessSettings.businessName}
                      onChange={(e) => handleBusinessChange("businessName", e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                      <select
                        value={businessSettings.category}
                        onChange={(e) => handleBusinessChange("category", e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      >
                        <option>Fashion & Accessories</option>
                        <option>Food & Beverages</option>
                        <option>Electronics</option>
                        <option>Services</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                      <input
                        type="url"
                        value={businessSettings.website}
                        onChange={(e) => handleBusinessChange("website", e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Business Description</label>
                    <textarea
                      value={businessSettings.description}
                      onChange={(e) => handleBusinessChange("description", e.target.value)}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Tell customers about your business..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Business Address</label>
                    <input
                      type="text"
                      value={businessSettings.address}
                      onChange={(e) => handleBusinessChange("address", e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="business-media border-t pt-4">
                  <p className="text-sm font-medium text-gray-700 mb-3">Business Logo & Images</p>
                  <div className="flex gap-4">
                    <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50">
                      Upload Logo
                    </button>
                    <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50">
                      Upload Cover
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "notifications" && (
              <div className="notifications-section bg-white rounded-lg shadow p-6 space-y-6">
                <div className="section-header border-b pb-4">
                  <h2 className="text-xl font-semibold text-gray-900">Notification Preferences</h2>
                  <p className="text-sm text-gray-500 mt-1">Choose how you want to be notified</p>
                </div>

                <div className="notification-group space-y-3">
                  <p className="text-sm font-medium text-gray-700">Email Notifications</p>
                  {[
                    { key: "emailOrders", label: "Order Updates", desc: "Receive notifications for new orders and updates" },
                    { key: "emailMessages", label: "Customer Messages", desc: "Get notified when customers message you" },
                    { key: "emailMarketing", label: "Marketing Emails", desc: "Receive tips, updates, and promotional emails" },
                  ].map(({ key, label, desc }) => (
                    <div key={key} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div>
                        <p className="text-sm font-medium text-gray-700">{label}</p>
                        <p className="text-xs text-gray-500">{desc}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={notifications[key as keyof typeof notifications]}
                          onChange={() => handleNotificationToggle(key)}
                        />
                        <div className={`w-11 h-6 rounded-full transition-colors ${notifications[key as keyof typeof notifications] ? "bg-indigo-600" : "bg-gray-300"}`}></div>
                      </label>
                    </div>
                  ))}
                </div>

                <div className="notification-group border-t pt-6 space-y-3">
                  <p className="text-sm font-medium text-gray-700">Other Notifications</p>
                  {[
                    { key: "smsOrders", label: "SMS for Orders", desc: "Get text messages for urgent order updates" },
                    { key: "pushNotifications", label: "Push Notifications", desc: "Receive browser notifications" },
                  ].map(({ key, label, desc }) => (
                    <div key={key} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div>
                        <p className="text-sm font-medium text-gray-700">{label}</p>
                        <p className="text-xs text-gray-500">{desc}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={notifications[key as keyof typeof notifications]}
                          onChange={() => handleNotificationToggle(key)}
                        />
                        <div className={`w-11 h-6 rounded-full transition-colors ${notifications[key as keyof typeof notifications] ? "bg-indigo-600" : "bg-gray-300"}`}></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "security" && (
              <div className="security-section bg-white rounded-lg shadow p-6 space-y-6">
                <div className="section-header border-b pb-4">
                  <h2 className="text-xl font-semibold text-gray-900">Security Settings</h2>
                  <p className="text-sm text-gray-500 mt-1">Manage your account security and login options</p>
                </div>

                <div className="security-item border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Two-Factor Authentication</p>
                      <p className="text-xs text-gray-500 mt-1">Add an extra layer of security to your account</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={security.twoFactorAuth}
                        onChange={() => handleSecurityChange("twoFactorAuth", !security.twoFactorAuth)}
                      />
                      <div className={`w-11 h-6 rounded-full transition-colors ${security.twoFactorAuth ? "bg-indigo-600" : "bg-gray-300"}`}></div>
                    </label>
                  </div>
                  {security.twoFactorAuth && <p className="text-xs text-indigo-600">2FA is enabled. Download your backup codes.</p>}
                </div>

                <div className="security-item border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Login Alerts</p>
                      <p className="text-xs text-gray-500 mt-1">Get notified of login attempts from new devices</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={security.loginAlerts}
                        onChange={() => handleSecurityChange("loginAlerts", !security.loginAlerts)}
                      />
                      <div className={`w-11 h-6 rounded-full transition-colors ${security.loginAlerts ? "bg-indigo-600" : "bg-gray-300"}`}></div>
                    </label>
                  </div>
                </div>

                <div className="session-management border-t pt-6">
                  <p className="text-sm font-medium text-gray-700 mb-4">Session Management</p>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Auto-logout after inactivity</label>
                    <select
                      value={security.sessionTimeout}
                      onChange={(e) => handleSecurityChange("sessionTimeout", e.target.value)}
                      className="w-full md:w-48 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="15">15 minutes</option>
                      <option value="30">30 minutes</option>
                      <option value="60">1 hour</option>
                      <option value="120">2 hours</option>
                      <option value="never">Never</option>
                    </select>
                  </div>
                </div>

                <div className="active-sessions border-t pt-6">
                  <p className="text-sm font-medium text-gray-700 mb-3">Active Sessions</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 font-medium">Chrome on macOS</p>
                    <p className="text-xs text-gray-500">Last active: 5 minutes ago</p>
                    <button className="text-xs text-red-600 hover:text-red-700 font-medium mt-2">Sign out</button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "privacy" && (
              <div className="privacy-section bg-white rounded-lg shadow p-6 space-y-6">
                <div className="section-header border-b pb-4">
                  <h2 className="text-xl font-semibold text-gray-900">Privacy Settings</h2>
                  <p className="text-sm text-gray-500 mt-1">Control what information is visible to others</p>
                </div>

                <div className="privacy-item border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Public Profile</p>
                      <p className="text-xs text-gray-500 mt-1">Allow others to discover your business profile</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={privacy.profilePublic}
                        onChange={() => handlePrivacyToggle("profilePublic")}
                      />
                      <div className={`w-11 h-6 rounded-full transition-colors ${privacy.profilePublic ? "bg-indigo-600" : "bg-gray-300"}`}></div>
                    </label>
                  </div>
                </div>

                <div className="visibility-settings border-t pt-6 space-y-3">
                  <p className="text-sm font-medium text-gray-700">Show on Public Profile</p>
                  {[
                    { key: "showEmail", label: "Email Address", desc: "Display your email on your public profile" },
                    { key: "showPhone", label: "Phone Number", desc: "Display your phone number on your public profile" },
                  ].map(({ key, label, desc }) => (
                    <div key={key} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div>
                        <p className="text-sm font-medium text-gray-700">{label}</p>
                        <p className="text-xs text-gray-500">{desc}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={privacy[key as keyof typeof privacy]}
                          onChange={() => handlePrivacyToggle(key)}
                        />
                        <div className={`w-11 h-6 rounded-full transition-colors ${privacy[key as keyof typeof privacy] ? "bg-indigo-600" : "bg-gray-300"}`}></div>
                      </label>
                    </div>
                  ))}
                </div>

                <div className="data-management border-t pt-6">
                  <p className="text-sm font-medium text-gray-700 mb-4">Data Management</p>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50">
                      Download My Data
                    </button>
                    <button className="px-4 py-2 bg-white border border-red-300 text-red-600 rounded-lg font-medium hover:bg-red-50">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="settings-footer mt-8 flex gap-3 justify-end">
              <button className="px-6 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50">
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-lg font-medium hover:opacity-90"
              >
                Save Changes
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
