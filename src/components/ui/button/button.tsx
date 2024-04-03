"use client";
import { FC } from "react";
import clsx from "clsx";

export interface ButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: "primary" | "secondary";
}

export const Button: FC<ButtonProps> = ({
  label,
  className = "",
  onClick,
  type,
  disabled,
  variant = "primary",
}) => {
  return (
    <button
      type={type}
      className={clsx(
        "text-white rounded-xs border-0 text-xs hover:cursor-pointer hover:border hover:border-orange-500 hover:text-orange-500 focus:outline-none",
        variant === "primary" &&
          "bg-orange-500 text-accent hover:bg-orange-100",
        variant === "secondary" && "bg-white-100 text-orange-500",
        className,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
