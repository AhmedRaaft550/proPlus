import { Input, Label, TextField, FieldError } from "@heroui/react";
import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";
import {
  UseFormRegister,
  FieldError as RHFFieldError,
  FieldValues,
  Path,
  UseFormWatch,
} from "react-hook-form";

interface FormInput {
  key: string;
  type: string;
  label: string;
  placeholder: string;
}

interface FormInputProps<T extends FieldValues> {
  input: FormInput;
  register: UseFormRegister<T>;
  error: RHFFieldError | undefined;
  watch: UseFormWatch<T>;
}

const MainForm = <T extends FieldValues>({
  input,
  register,
  watch,
  error,
}: FormInputProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);
  const currentValue = watch(input.key as Path<T>);

  // prevent the Arabic letters
  const preventArabicLetters = (e: React.InputEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    target.value = target.value.replace(/[\u0600-\u06FF]/g, "");
  };

  return (
    <TextField
      isInvalid={!!error}
      name={input.key}
      type={input.type}
      className="flex flex-col gap-2 relative"
    >
      <Label className="text-sky-900 font-medium text-sm">{input.label}</Label>
      <div className="relative flex items-center">
        <Input
          type={input.type === "password" && showPassword ? "text" : input.type}
          {...register(input.key as Path<T>)}
          onInput={preventArabicLetters}
          autoComplete={input.key === "password" ? "current-password" : "email"}
          placeholder={input.placeholder}
          className="border-sky-500 border hover:border-sky-400 focus-within:border-sky-600! h-12 px-2 pr-10 rounded-xl transition-colors text-sky-900 placeholder:text-sky-600 w-full"
        />

        {input.type === "password" && (
          <button
            type="button"
            disabled={!currentValue || currentValue.length === 0}
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 text-sky-500 disabled:opacity-50"
          >
            {showPassword ? (
              <BsEyeSlashFill size={20} />
            ) : (
              <IoEyeSharp size={20} />
            )}
          </button>
        )}
      </div>

      <FieldError className="text-xs text-red-500">{error?.message}</FieldError>
    </TextField>
  );
};

export default MainForm;
