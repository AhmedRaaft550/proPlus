"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import CustomModal from "@/custom/ui/CustomModal";
import { IUser } from "@/types/app";

const EditProfileBtn = ({ user }: { user: IUser | undefined | null }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="secondary" onClick={() => setIsOpen(true)}>
        Edit Profile
      </Button>

      <CustomModal isOpen={isOpen} setIsOpen={setIsOpen} user={user} />
    </>
  );
};

export default EditProfileBtn;
