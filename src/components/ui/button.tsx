/* ============================================
   src/components/ui/button.tsx
   REUSABLE BUTTON COMPONENT - RABIKU.COM
   ============================================ */

"use client";

import { cn } from "@/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

/* ============================================
   BUTTON PROPS
   ============================================ */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "danger"
    | "success";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
}

/* ============================================
   BUTTON VARIANTS
   ============================================ */
const variants = {
  primary:
    "bg-rabiku-blue text-white hover:bg-rabiku-blue-dark shadow-md hover:shadow-lg hover:-translate-y-0.5",
  secondary:
    "bg-white text-rabiku-blue hover:bg-gray-50 shadow-md border border-gray-200 hover:border-rabiku-blue/30",
  outline:
    "border-2 border-rabiku-blue text-rabiku-blue hover:bg-rabiku-blue/10 hover:shadow-md",
  ghost: "text-rabiku-blue hover:bg-rabiku-blue/10",
  danger: "bg-red-600 text-white hover:bg-red-700 shadow-md hover:shadow-lg",
  success:
    "bg-green-600 text-white hover:bg-green-700 shadow-md hover:shadow-lg",
};

/* ============================================
   BUTTON SIZES - PADDING DIKECILIN
   ============================================ */
const sizes = {
  xs: "px-3 py-1 text-xs rounded-md font-medium min-h-[30px]",
  sm: "px-4 py-2 text-sm rounded-lg font-medium min-h-[38px]",
  md: "px-5 py-2.5 text-base rounded-xl font-semibold min-h-[46px]",
  lg: "px-7 py-3 text-lg rounded-xl font-semibold min-h-[54px]",
  xl: "px-9 py-4 text-xl rounded-2xl font-bold min-h-[54px]",
};

/* ============================================
   BUTTON COMPONENT
   ============================================ */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      fullWidth = false,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2.5",
          "focus:outline-none focus:ring-2 focus:ring-rabiku-blue/50 focus:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "transition-all duration-200 ease-in-out",
          "active:scale-[0.98]",
          fullWidth && "w-full",
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;