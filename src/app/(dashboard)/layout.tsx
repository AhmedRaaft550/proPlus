import React from "react";
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/SideBar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="flex flex-1">
        <Sidebar />

        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </section>
    </div>
  );
};

export default DashboardLayout;
