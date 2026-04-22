"use client";
import { MessageCircleWarning } from "lucide-react";
import { useEffect, useState } from "react";
import { useNotifications } from "@/hooks/zustand/useNotifications";

import NotificationsModal from "@/custom/ui/modals/NotificationsModal";

const Notifications = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const notifications = useNotifications((state) => state.notifications);
  const clearNotifications = useNotifications((state) => state.clear);

  const handleShownNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div className="relative">
      <button onClick={handleShownNotifications}>
        <MessageCircleWarning
          size={20}
          strokeWidth={3}
          className="cursor-pointer"
          color={notifications.length > 0 ? "red" : "black"}
        />
      </button>

      <NotificationsModal
        notifications={notifications}
        open={showNotifications}
        onclose={() => setShowNotifications(false)}
        clearNotifications={clearNotifications}
      />
    </div>
  );
};

export default Notifications;
