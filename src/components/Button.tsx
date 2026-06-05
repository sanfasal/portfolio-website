import React from "react";

type Props = {
  title: string;
  icon?: React.ReactNode;
  variant?: "primary" | "outline";
  onClick?: () => void;
  className?: string;
};

export default function Button({
  title,
  icon,
  variant = "primary",
  onClick,
  className = "",
}: Props) {
  const baseClasses = "px-6 py-2.5 rounded-full hover:scale-105 duration-300 cursor-pointer flex items-center justify-center gap-2 font-medium text-sm transition-all";
  
  const variantClasses = variant === "primary"
    ? "bg-primary text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-600 border border-transparent"
    : "bg-transparent border border-white/20 text-white hover:border-indigo-500 hover:text-indigo-400";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      <span>{title}</span>
    </button>
  );
}
