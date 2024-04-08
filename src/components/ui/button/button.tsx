"use client";
import { FC } from "react";
import clsx from "clsx";

export interface ButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: "primary" | "secondary" | "black";
}

export interface LoginButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
  icon: React.ReactNode;
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
        variant !== "black" &&
          "text-white rounded-xs border text-xs hover:cursor-pointer hover:border-orange-500 hover:text-orange-500 focus:outline-none",
        variant === "primary" &&
          "bg-orange-500 text-accent hover:bg-orange-100",
        variant === "secondary" && "bg-white-100 text-orange-500",
        variant === "black" && "border-b-2 border-black-800",
        className,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export const LoginButton: FC<LoginButtonProps> = ({ icon, label, onClick }) => {
  return (
    <button className="log-with-btn" onClick={onClick}>
      {icon}
      <span>{label}</span>
    </button>
  );
};
