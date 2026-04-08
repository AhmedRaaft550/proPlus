import { toast } from "sonner";

type ToastStatus = "success" | "error" | "loading";

export const showToast = (msg = "", status: ToastStatus = "success") => {
  return toast[status](msg, {
    duration: 3000,
  });
};
