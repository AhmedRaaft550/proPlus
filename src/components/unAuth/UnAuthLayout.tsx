"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "motion/react";
import { unAuthInputs } from "@/constants/forms-Const/unAuthLayoutConst";
import { unAuthLayoutValidation } from "@/validation/formsValidation/unAuthLayoutValidation";
import MainForm from "@/custom/ui/customForm/MainForm";
import FormHeaderMsg from "@/custom/ui/FormHeaderMsg";
import CreateAccount from "../createAccount/CreateAccount";
import { Button, Form, Description } from "@heroui/react";
import BrandingSection from "./BrandingSection";
import { supabaseLoginAction } from "@/actions/supabaseLoginAction";
import { showToast } from "@/helper/toast";
import { useRouter } from "next/navigation";

export type DataTypes = z.infer<typeof unAuthLayoutValidation>;

function UnAuthLayout() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const {
    handleSubmit,
    formState: { errors },
    register,
    watch,
  } = useForm<DataTypes>({
    resolver: zodResolver(unAuthLayoutValidation),
    mode: "onChange",
  });

  const handleSubmitFrom = async (data: DataTypes) => {
    const result = await supabaseLoginAction(data);

    if (result?.success === false) {
      showToast(result.message, "error");
    } else {
      showToast(result?.message, "success");
      router.replace("/profile");
    }
  };

  return (
    <section className="flex min-h-screen bg-sky-50">
      <BrandingSection />

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative h-screen overflow-hidden">
        <div className="w-full max-w-md space-y-8">
          <AnimatePresence mode="wait">
            {isLogin ? (
              // Login Form
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                key="login"
                className=" space-y-8"
              >
                <FormHeaderMsg
                  welcomeMsg="Welcome Back"
                  title="Enter your credentials to access your dashboard"
                />
                <Form
                  className="flex flex-col gap-6 "
                  onSubmit={handleSubmit(handleSubmitFrom)}
                >
                  {unAuthInputs.map((input) => (
                    <MainForm
                      key={input.key}
                      input={input}
                      register={register}
                      error={errors[input.key as keyof DataTypes]}
                      watch={watch}
                    />
                  ))}

                  <div className="flex justify-between items-center text-xs">
                    <Description className="text-sky-400">
                      Must contain at least 8 characters.
                    </Description>
                    <button
                      type="button"
                      className="text-sky-600 hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <div className="flex flex-col gap-3 pt-4">
                    <Button
                      type="submit"
                      className="bg-sky-600 w-full hover:bg-sky-700 text-white h-12 rounded-xl shadow-lg shadow-sky-200 transition-all active:scale-95"
                    >
                      Sign In to Dashboard
                    </Button>

                    <div className="flex flex-col items-center gap-1 mt-4">
                      <span className="text-xs text-sky-900 font-semibold">
                        I do not have an account?
                      </span>
                      <button
                        type="button"
                        onClick={() => setIsLogin(false)}
                        className="text-sm cursor-pointer text-sky-600 font-bold underline hover:text-sky-800 transition-colors"
                      >
                        Create an account
                      </button>
                    </div>
                  </div>
                </Form>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                key="register"
              >
                <CreateAccount onBackToLogin={() => setIsLogin(true)} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default UnAuthLayout;
