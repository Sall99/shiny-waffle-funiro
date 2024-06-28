"use client";
import { FC } from "react";
import clsx from "clsx";
import { Minus, Plus } from "lucide-react";
import { Spinner } from "../spinner";

export interface ButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: "primary" | "secondary" | "tertiary" | "black";
  loading?: boolean;
}

export interface SocialLoginButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
  icon: React.ReactNode;
}

export interface QuantityPickerProps {
  value: number;
  onChange: (newValue: number) => void;
}

export const Button: FC<ButtonProps> = ({
  label,
  className = "",
  onClick,
  type,
  disabled,
  variant = "primary",
  loading,
}) => {
  return (
    <button
      type={type}
      className={clsx(
        "flex gap-2",
        variant !== "black" &&
          "text-white rounded-xs border text-xs hover:cursor-pointer hover:border-orange-500 hover:text-orange-500 focus:outline-none",
        variant === "primary" &&
          "bg-orange-500 text-accent hover:bg-orange-100",
        variant === "secondary" && "bg-white-100 text-orange-500",
        variant === "black" && "border-b-2 border-black-800",
        variant === "tertiary" && "rounded-xl border-2 px-8 py-4 font-medium",
        className,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <p>{label}</p>
      {loading && <Spinner />}
    </button>
  );
};

export const QuantityPicker: FC<QuantityPickerProps> = ({
  value,
  onChange,
}) => {
  const increment = () => onChange(value + 1);
  const decrement = () => onChange(value - 1);

  return (
    <div className="flex w-28 items-center justify-between rounded-xl border-2 px-4 py-4 font-medium hover:cursor-pointer hover:border-orange-500 hover:text-orange-500">
      <button onClick={decrement} disabled={value <= 1}>
        <Minus size={14} />
      </button>
      <span className="text-sm">{value}</span>
      <button onClick={increment}>
        <Plus size={14} />
      </button>
    </div>
  );
};

export const SocialLoginButton: FC<SocialLoginButtonProps> = ({
  icon,
  label,
  onClick,
}) => {
  return (
    <button className="log-with-btn" onClick={onClick}>
      {icon}
      <span>{label}</span>
    </button>
  );
};
