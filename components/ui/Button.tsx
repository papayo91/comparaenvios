import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "success" | "danger";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-2xl",

    secondary:
      "bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 shadow hover:shadow-lg",

    success:
      "bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-2xl",

    danger:
      "bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-2xl",
  };

  const sizes = {
    sm: "h-10 px-5 text-sm",
    md: "h-12 px-7 text-base",
    lg: "h-14 px-9 text-lg",
  };

  return (
    <button
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-2xl
        font-semibold
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-[1.02]
        active:scale-[0.98]
        focus:outline-none
        focus:ring-4
        focus:ring-green-200
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}