import {
  Globe,
  Moon,
  Bell,
  ShieldCheck,
  Coins,
  EyeOff,
  UserMinus,
} from "lucide-react";

export const SETTINGS_OPTIONS = [
  {
    id: "account",
    title: "Account Preferences",
    items: [
      {
        id: "language",
        label: "Language",
        description: "Select your preferred language for the interface",
        icon: Globe,
        color: "text-blue-500",
      },
      {
        id: "theme",
        label: "Appearance",
        description: "Switch between light and dark mode",
        icon: Moon,
        color: "text-purple-500",
      },
      {
        id: "currency",
        label: "Currency & Units",
        description: "Set default currency and area units (sq ft/m²)",
        icon: Coins,
        color: "text-emerald-500",
      },
    ],
  },
  {
    id: "safety",
    title: "Security & Privacy",
    items: [
      {
        id: "notifications",
        label: "Notifications",
        description: "Configure alerts for new listings and price drops",
        icon: Bell,
        color: "text-orange-500",
      },
      {
        id: "security",
        label: "Login & Security",
        description: "Manage your password and two-factor authentication",
        icon: ShieldCheck,
        color: "text-cyan-500",
      },
      {
        id: "privacy",
        label: "Privacy",
        description: "Control who sees your saved searches and activity",
        icon: EyeOff,
        color: "text-slate-500",
      },
    ],
  },
  {
    id: "danger",
    title: "Management",
    items: [
      {
        id: "delete",
        label: "Deactivate Account",
        description: "Temporarily hide or permanently delete your account",
        icon: UserMinus,
        color: "text-red-500",
      },
    ],
  },
];
