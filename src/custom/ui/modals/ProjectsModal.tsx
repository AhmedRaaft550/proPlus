"use client";

import { Button, Modal, Label, ListBox, Select } from "@heroui/react";
import { Plus } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { handleAddNewProjectAction } from "@/actions/supabaseAddNewUser";
import { showToast } from "@/helper/toast";
import { useNotifications } from "@/hooks/zustand/useNotifications";

interface ModalProps {
  onClose: () => void;
  previewModal: boolean;
}

const inputs = [
  {
    label: "project name",
    type: "text",
    placeholder: "add a project name",
    id: "title",
  },
  {
    label: "Location",
    type: "text",
    placeholder: "Location",
    id: "location",
  },
  {
    label: "Description",
    type: "text",
    placeholder: "Description",
    id: "description",
  },
];

export interface IAddProjectForm {
  title: string;
  location: string;
  description: string;
  status: string;
}

export function ProjectsModal({ onClose, previewModal }: ModalProps) {
  const { handleSubmit, register, control } = useForm<IAddProjectForm>();
  const addNotification = useNotifications((state) => state.addNotifications);

  const handleAddProjectForm = async (data: IAddProjectForm) => {
    try {
      const res = await handleAddNewProjectAction(data);
      console.log(data, "data");

      if (res?.success) {
        showToast(res.message, "success");
        addNotification(`${data.title} Add to projects list`);
        onClose();
      } else {
        showToast(res.message, "error");
      }
    } catch (error) {
      if (error instanceof Error) {
        showToast(error.message, "error");
      }
      throw new Error("Something went wrong");
    }
  };

  return (
    <div>
      <Modal isOpen={previewModal} onOpenChange={onClose}>
        <Modal.Backdrop>
          <Modal.Container size={"lg"}>
            <Modal.Dialog>
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-default text-foreground">
                  <Plus className="size-5" />
                </Modal.Icon>
                <Modal.Heading className="text-center text-sky-800 font-semibold capitalize underline">
                  Add A new Project
                </Modal.Heading>
              </Modal.Header>
              <Modal.Body>
                <form
                  id="add-project"
                  onSubmit={handleSubmit(handleAddProjectForm)}
                >
                  {inputs.map((input) => (
                    <div key={input.id} className="flex flex-col gap-3 mt-3 ">
                      <label
                        className="font-semibold capitalize"
                        htmlFor={input.id}
                      >
                        {input.label}
                      </label>
                      <input
                        {...register(input.id as keyof IAddProjectForm)}
                        className="border-sky-600 p-3 rounded-md border focus:outline-none focus:border-2 "
                        type={input.type}
                        placeholder={input.placeholder}
                      />
                    </div>
                  ))}
                  <Controller
                    name="status"
                    control={control}
                    defaultValue="active"
                    render={({ field }) => (
                      <Select
                        {...field}
                        className="w-full mt-3"
                        placeholder="Select status"
                      >
                        <Label className="font-semibold capitalize mb-2">
                          Status
                        </Label>
                        <Select.Trigger>
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                          <ListBox>
                            <ListBox.Item id="active" textValue="active">
                              active
                            </ListBox.Item>
                            <ListBox.Item id="inactive" textValue="inactive">
                              inactive
                            </ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    )}
                  />
                </form>
              </Modal.Body>
              <Modal.Footer>
                <Button slot="close" variant="secondary">
                  Cancel
                </Button>
                <Button form="add-project" type="submit">
                  Add
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
}

export default ProjectsModal;
