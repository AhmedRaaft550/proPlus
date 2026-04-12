import { IUser } from "@/types/app";
import { useForm } from "react-hook-form";
import { handleUpdateUserData } from "@/actions/supabaseUpdateUserAction";
import { showToast } from "@/helper/toast";
import { updateUserDataSchema } from "@/validation/formsValidation/unAuthLayoutValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { Button } from "@heroui/react";

type UpdateForm = {
  email: string;
  name: string;
};

const ModalForm = ({
  user,
  setIsOpen,
}: {
  user: IUser | undefined | null;
  setIsOpen: (open: boolean) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UpdateForm>({
    resolver: zodResolver(updateUserDataSchema),
    defaultValues: {
      email: user?.email || "",
      name: user?.user_metadata?.name || "",
    },
  });
  const router = useRouter();

  const updateData = async (data: { email: string; name: string }) => {
    // check if the user has made any changes
    if (data.email === user?.email && data.name === user?.user_metadata?.name) {
      return showToast("No changes detected", "error");
    }
    // => we have to handle if there are a real changes below

    try {
      const result = await handleUpdateUserData(data.email, data.name);

      if (result?.success) {
        showToast(result.message, "success");
        setIsOpen(false);
        router.refresh();
      } else {
        return showToast(result.message || "Update failed", "error");
      }
    } catch (error) {
      showToast("Something went wrong", "error");
      throw error;
    }
  };
  return (
    <form onSubmit={handleSubmit(updateData)}>
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input
          className="py-2 px-3 border-2 text-black border-sky-600 rounded-md"
          type="text"
          {...register("name")}
          id="name"
        />
      </div>

      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <div className="flex flex-col gap-2 mt-3">
        <label htmlFor="email">Email</label>
        <input
          className="py-2 px-3 border-2 border-sky-600 text-black rounded-md"
          type="email"
          {...register("email")}
          id="email"
        />
      </div>

      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <Button
        isPending={isSubmitting}
        isDisabled={isSubmitting}
        className="w-full mt-4"
        type="submit"
      >
        Update
      </Button>

      <Button
        isDisabled={isSubmitting}
        className="w-full mt-3"
        variant="secondary"
        onClick={() => setIsOpen(false)}
      >
        Cancel
      </Button>
    </form>
  );
};

export default ModalForm;
