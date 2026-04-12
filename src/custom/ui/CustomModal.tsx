"use client";

import { Modal } from "@heroui/react";
import { IUser } from "@/types/app";
import { Pencil } from "lucide-react";
import ModalForm from "@/components/profile/ModalForm";

interface CustomModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  user: IUser | undefined | null;
}

export function CustomModal({ isOpen, setIsOpen, user }: CustomModalProps) {
  return (
    <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
      <Modal.Backdrop
        className="bg-linear-to-t from-black/80 via-black/40 to-transparent dark:from-zinc-800/80 dark:via-zinc-800/40"
        variant="blur"
      >
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-90">
            <Modal.Header className="items-center text-center">
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Pencil size={20} strokeWidth={3} />
              </Modal.Icon>
              <Modal.Heading className="text-xl font-semibold ">
                Update the profile
              </Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <ModalForm user={user} setIsOpen={setIsOpen} />
            </Modal.Body>
            <Modal.CloseTrigger />
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}

export default CustomModal;
