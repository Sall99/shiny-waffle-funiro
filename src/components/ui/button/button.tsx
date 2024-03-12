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
        "text-white bg-orange-500 hover:bg-orange-100 rounded-xs border-0 text-xs hover:cursor-pointer focus:outline-none",
        className,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
