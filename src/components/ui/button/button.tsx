"use client";
import { FC } from "react";
import clsx from "clsx";

export interface ButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  label,
  className = "",
  onClick,
  type,
  disabled,
}) => {
  return (
    <button
      type={type}
      className={clsx(
        "text-white rounded-xs border-0 bg-orange-500 text-xs hover:cursor-pointer hover:border hover:border-orange-500 hover:bg-orange-100 hover:text-orange-500 focus:outline-none",
        className,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
