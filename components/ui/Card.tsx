import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
};

export default function Card({
  children,
  className = "",
  hover = false,
  padding = "md",
}: CardProps) {
  const paddingClass = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={`
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-md
        ${paddingClass[padding]}
        ${hover ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}