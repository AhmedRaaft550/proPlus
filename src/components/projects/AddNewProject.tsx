"use client";

import { Button } from "@heroui/react";
import { useState } from "react";
import ProjectsModal from "@/custom/ui/modals/ProjectsModal";
const AddNewProject = () => {
  const [previewModal, setPreviewModal] = useState(false);

  return (
    <div className="flex justify-end my-3 items-center ">
      <Button onClick={() => setPreviewModal(true)} className="p-5 rounded-md">
        Add A New Project +
      </Button>

      {previewModal && (
        <ProjectsModal
          onClose={() => setPreviewModal(false)}
          previewModal={previewModal}
        />
      )}
    </div>
  );
};

export default AddNewProject;
