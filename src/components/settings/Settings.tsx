"use client";

import React, { useState } from "react";
import { Card, Switch, Button, Separator } from "@heroui/react";
import { SETTINGS_OPTIONS } from "@/constants/settings";
const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("language");

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 lg:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Settings</h1>
          <p className="text-slate-500">
            Manage your account preferences and security
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 1. Sidebar Navigation */}
          <aside className="lg:col-span-4 space-y-2">
            {SETTINGS_OPTIONS.map((group) => (
              <div key={group.id} className="mb-6">
                <p className="px-4 text-xs font-black text-slate-400 uppercase tracking-widest mb-3">
                  {group.title}
                </p>
                {group.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      activeTab === item.id
                        ? "bg-sky-600 text-white shadow-lg shadow-sky-200"
                        : "text-slate-600 hover:bg-white hover:shadow-sm"
                    }`}
                  >
                    <item.icon size={20} />
                    <span className="font-semibold text-sm">{item.label}</span>
                  </button>
                ))}
              </div>
            ))}
          </aside>

          {/* 2. Main Content Area */}
          <main className="lg:col-span-8">
            <Card className="p-8 border-none shadow-sm min-h-[500px]">
              {/* Dynamic Header based on Active Tab */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 capitalize">
                  {activeTab.replace("-", " ")}
                </h2>
                <p className="text-slate-500 text-sm">
                  Customize how this feature behaves in your application.
                </p>
              </div>

              <Separator className="mb-8 opacity-50" />

              {/* Settings Controls */}
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                  <div className="space-y-1">
                    <p className="font-bold text-slate-700">Enable Feature</p>
                    <p className="text-xs text-slate-400">
                      Toggle the primary functionality for {activeTab}.
                    </p>
                  </div>
                  <Switch defaultSelected />
                </div>

                {/* Example of a more complex setting (like language or currency) */}
                <div className="p-4 border-2 border-slate-100 rounded-2xl border-dashed">
                  <p className="text-center text-slate-400 text-sm">
                    Additional {activeTab} configuration options will appear
                    here.
                  </p>
                </div>
              </div>

              {/* Save Footer */}
              <div className="mt-auto pt-12 flex justify-end">
                <Button className="px-8 font-bold">Save Changes</Button>
              </div>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
