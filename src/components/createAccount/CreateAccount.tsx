"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { createAccount } from "@/constants/forms-Const/unAuthLayoutConst";
import { createAccountValidation } from "@/validation/formsValidation/unAuthLayoutValidation";
import MainForm from "@/custom/ui/customForm/MainForm";
import FormHeaderMsg from "@/custom/ui/FormHeaderMsg";
import { Button, Form } from "@heroui/react";
import { handleSignupAction } from "@/actions/supabseSignupAction";
import { showToast } from "@/helper/toast";

export type TCreateAccount = z.infer<typeof createAccountValidation>;

const CreateAccount = ({ onBackToLogin }: { onBackToLogin: () => void }) => {
  const {
    handleSubmit,
    formState: { errors },
    watch,
    register,
  } = useForm<TCreateAccount>({
    resolver: zodResolver(createAccountValidation),
    mode: "onChange",
  });

  // supabase should be handled here
  const handleSubmitFrom = async (data: TCreateAccount) => {
    const result = await handleSignupAction(data);

    if (result?.success === false) {
      showToast(result.message, "error");
    } else {
      showToast(result.message, "success");
      onBackToLogin();
    }
  };

  return (
    <div className="space-y-8">
      <FormHeaderMsg
        welcomeMsg="Create your account"
        title="It's quick and easy."
      />

      <Form
        className="flex flex-col gap-6"
        onSubmit={handleSubmit(handleSubmitFrom)}
      >
        {createAccount.map((input) => (
          <MainForm<TCreateAccount>
            key={input.key}
            input={input}
            register={register}
            error={errors[input.key as keyof TCreateAccount]}
            watch={watch}
          />
        ))}

        <div className="flex flex-col gap-3 pt-4">
          <Button
            type="submit"
            className="bg-sky-600 w-full hover:bg-sky-700 text-white font-bold h-12 rounded-xl shadow-lg shadow-sky-200 transition-all active:scale-95"
          >
            Create Account
          </Button>

          <div className="flex flex-col items-center gap-1 mt-4">
            <span className="text-xs text-sky-900 font-semibold">
              Already have an account?
            </span>
            <button
              type="button"
              onClick={onBackToLogin}
              className="text-sm cursor-pointer text-sky-600 font-bold underline hover:text-sky-800 transition-colors"
            >
              Sign in
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default CreateAccount;
