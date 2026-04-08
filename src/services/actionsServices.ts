import { handleLogoutAction } from "@/actions/supabseLogoutAction";
import { showToast } from "@/helper/toast";

export const actionServices = {
  handleLogoutFunc: async () => {
    try {
      const response = await handleLogoutAction();
      if (response?.success === true) {
        showToast(response?.message, "success");
      } else {
        showToast(response?.message, "error");
      }
      return response;
    } catch (error) {
      if (error instanceof Error) {
        showToast("Something went wrong", "error");
      }
    }
  },
};
