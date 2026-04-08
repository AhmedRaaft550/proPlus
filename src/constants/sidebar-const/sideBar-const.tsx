import {
  LuLayoutDashboard,
  LuUsers,
  LuFolderKanban,
  LuCalendarDays,
  LuSettings,
  LuShieldCheck,
  LuTable2,
  LuCircle,
} from "react-icons/lu";

export const MENU_ITEMS = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: <LuLayoutDashboard />,
    href: "/dashboard",
  },
  {
    key: "projects",
    label: "Projects",
    icon: <LuFolderKanban />,
    href: "/projects",
  },
  { key: "users", label: "Users", icon: <LuUsers />, href: "/users" },
  {
    key: "tables",
    label: "Data Tables",
    icon: <LuTable2 />,
    href: "/tables",
  },
  {
    key: "calendar",
    label: "Calendar",
    icon: <LuCalendarDays />,
    href: "/calendar",
  },
];

export const SECONDARY_ITEMS = [
  {
    key: "permissions",
    label: "Permissions",
    icon: <LuShieldCheck />,
    href: "/permissions",
  },
  {
    key: "settings",
    label: "Settings",
    icon: <LuSettings />,
    href: "/settings",
  },
  {
    key: "help",
    label: "Help & Support",
    icon: <LuCircle />,
    href: "/help",
  },
];
