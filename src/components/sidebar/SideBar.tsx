"use client";

import React from "react";

import { usePathname } from "next/navigation";
import Logo from "@/custom/ui/Logo";
import { ListBox, Separator } from "@heroui/react";
import RenderListBox from "./renderListBox";
import {
  MENU_ITEMS,
  SECONDARY_ITEMS,
} from "../../constants/sidebar-const/sideBar-const";

import { LuLogOut } from "react-icons/lu";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 h-screen border-r border-divider flex flex-col sticky top-0 bg-background">
      <div className="p-8 mb-4 bg-linear-to-l from-sky-900/10 to-transparent">
        <Logo />
      </div>

      <div className="flex-1 px-4 overflow-y-auto">
        <section className="mb-6">
          <p className="text-[10px] font-bold px-3 mb-2 uppercase tracking-[0.2em] text-default-400">
            Main Menu
          </p>
          <RenderListBox
            items={MENU_ITEMS}
            label="Main Navigation"
            pathname={pathname}
          />
        </section>

        <Separator className="my-4 opacity-50" />

        <section className="mt-4">
          <p className="text-[10px] font-bold px-3 mb-2 uppercase tracking-[0.2em] text-default-400">
            Support
          </p>
          <RenderListBox
            items={SECONDARY_ITEMS}
            label="Main Navigation"
            pathname={pathname}
          />
        </section>
      </div>

      {/* Logout Section */}
      <div className="p-4 border-t border-divider">
        <ListBox aria-label="Logout" className="p-0">
          <ListBox.Item
            key="logout"
            id="logout"
            textValue="Logout"
            className="text-danger h-11 px-4 rounded-medium hover:bg-danger/10 transition-colors"
          >
            <div className="flex items-center gap-3 font-semibold">
              <LuLogOut className="text-xl" />
              <span>Logout</span>
            </div>
          </ListBox.Item>
        </ListBox>
      </div>
    </aside>
  );
}
