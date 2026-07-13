/* ============================================
   src/components/ui/button.tsx
   REUSABLE BUTTON COMPONENT
   ============================================ */

"use client";

import { cn } from "@/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

/* ============================================
   BUTTON VARIANTS
   ============================================ */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const variants = {
      primary: "bg-rabiku-blue text-white hover:bg-rabiku-blue/80",
      secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
      outline: "border-2 border-rabiku-blue text-rabiku-blue hover:bg-rabiku-blue/10",
      ghost: "text-rabiku-blue hover:bg-rabiku-blue/10",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm rounded-md",
      md: "px-4 py-2 text-base rounded-lg",
      lg: "px-6 py-3 text-lg rounded-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "font-medium transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-rabiku-blue/50",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;