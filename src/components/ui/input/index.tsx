"use client";
import { FC } from "react";
import clsx from "clsx";
import { useTranslations } from "next-intl";

export interface InputProps {
  classname?: string;
  name: string;
  type: "text" | "password" | "email" | "number" | "date";
  placeholder: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  register?: any;
  required?: boolean;
  errors?: any;
  autoFocus?: boolean;
  autoComplete?: string;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  step?: number;
  pattern?: string;
  id?: string;
}

export const Input: FC<InputProps> = ({
  classname,
  type,
  placeholder,
  required,
  name,
  register,
  errors,
  autoComplete,
  value,
  defaultValue,
}) => {
  const t = useTranslations("Validation");
  console.log(errors);
  return (
    <div>
      <div>
        <input
          type={type}
          {...(register && register(name))}
          className={clsx(
            "w-full border-b-2 border-black-500 pb-2 pt-2 text-sm outline-none focus:outline-none",
            [classname],
            errors && errors[type] ? "border-red-400 border-opacity-90" : "",
          )}
          placeholder={placeholder}
          autoComplete={autoComplete}
          value={value}
          defaultValue={defaultValue}
        />
      </div>{" "}
      {errors && errors[name] && (
        <span className="text-xs text-orange-500 opacity-90">
          {t(errors[name].message)}
        </span>
      )}
    </div>
  );
};
