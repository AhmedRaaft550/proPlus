import { Button, Modal } from "@heroui/react";
import Link from "next/link";
import { BellOff, Bell } from "lucide-react";
const NotificationsModal = ({
  notifications,
  open,
  onclose,
  clearNotifications,
}: {
  notifications: string[];
  open: boolean;
  onclose: () => void;
  clearNotifications: () => void;
}) => {
  return (
    <Modal isOpen={open} onOpenChange={onclose}>
      <Modal.Backdrop
        className="bg-linear-to-t from-black/80 via-black/40 to-transparent dark:from-zinc-800/80 dark:via-zinc-800/40"
        variant="blur"
      >
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-90">
            <Modal.Header className="items-center text-center">
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                {notifications.length > 0 ? <Bell /> : <BellOff />}
              </Modal.Icon>
              <Modal.Heading>Notifications</Modal.Heading>
            </Modal.Header>

            <Modal.Body>
              {notifications.length <= 0 ? (
                <p className="text-center text-red-900 font-semibold">
                  No Notifications found
                </p>
              ) : (
                <div>
                  {notifications.map((notify) => {
                    return (
                      <Link
                        className="block mb-2 bg-sky-900 text-center py-3 rounded-md text-white "
                        key={notify}
                        href="/projects"
                      >
                        {notify}
                      </Link>
                    );
                  })}
                </div>
              )}
            </Modal.Body>
            <Modal.Footer className="flex-col-reverse">
              {notifications.length > 0 && (
                <Button className="w-full" onClick={() => clearNotifications()}>
                  Clear
                </Button>
              )}
            </Modal.Footer>
            <Modal.CloseTrigger />
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default NotificationsModal;
