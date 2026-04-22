import { create } from "zustand";

interface TNotifications {
  notifications: string[];
  addNotifications: (msg: string) => void;
  clear: () => void;
}

export const useNotifications = create<TNotifications>((set) => ({
  notifications: [], // initial render => no notifications found

  // setter function to add a new notification
  addNotifications: (msg: string) => {
    set((state) => ({
      notifications: [...state.notifications, msg],
    }));
  },

  // setter function to clear the notifications
  clear: () => set({ notifications: [] }),
}));
