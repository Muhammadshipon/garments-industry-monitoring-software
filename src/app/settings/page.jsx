// components/SettingsPage.jsx
import Link from "next/link";
import React from "react";

const SettingsPage = () => {
  return (
    <div className="max-w-3xl mx-auto  p-8 rounded-lg ">
      <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">Settings</h1>
      
      <div className="space-y-6">
        {/* Account Settings */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">Account Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-600 font-medium">Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">Notification Settings</h2>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Email Notifications</span>
            <input type="checkbox" className="form-checkbox text-blue-500 w-6 h-6" />
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-gray-600">Push Notifications</span>
            <input type="checkbox" className="form-checkbox text-blue-500 w-6 h-6" />
          </div>
        </div>

        {/* Display Settings */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">Display Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-600 font-medium">Theme</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300">
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-600 font-medium">Language</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300">
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
              </select>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="text-center mt-8">
        <Link href={'/'}>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
            Save Changes
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
