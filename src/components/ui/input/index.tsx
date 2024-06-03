"use client";
import { FC } from "react";
import clsx from "clsx";
import { useTranslations } from "next-intl";

export interface InputProps {
  classname?: string;
  name: string;
  type: "text" | "password" | "email" | "number" | "date" | "textarea";
  placeholder: string;
  value?: string;
  defaultValue?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
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
  label?: boolean;
  labelText?: string;
  border?: boolean;
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
  label,
  labelText,
  border,
  ...rest
}) => {
  const t = useTranslations("Validation");

  const inputProps = {
    ...(register && register(name)),
    className: clsx(
      "w-full border-b-2 border-black-500 pb-2 pt-2 text-sm outline-none focus:outline-none",
      border && "border-2 border-black-500 px-4 rounded-md",
      classname,
      errors && errors[name] ? "border-red-400 border-opacity-90" : "",
    ),
    placeholder,
    autoComplete,
    value,
    defaultValue,
    ...rest,
  };

  return (
    <div>
      {label && <h2 className="mb-4 text-sm font-semibold">{labelText}</h2>}
      {type === "textarea" ? (
        <textarea {...inputProps} />
      ) : (
        <input type={type} {...inputProps} />
      )}
      {errors && errors[name] && (
        <span className="text-xs text-orange-500 opacity-90">
          {t(errors[name].message)}
        </span>
      )}
    </div>
  );
};
