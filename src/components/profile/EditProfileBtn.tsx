"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import CustomModal from "@/custom/ui/modals/CustomModal";
import { IUser } from "@/types/app";

const EditProfileBtn = ({ user }: { user: IUser | undefined | null }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="secondary"
        className="hover:scale-105 transition-transform duration-200 font-bold"
        onClick={() => setIsOpen(true)}
      >
        Update Information
      </Button>

      <CustomModal isOpen={isOpen} setIsOpen={setIsOpen} user={user} />
    </>
  );
};

export default EditProfileBtn;
