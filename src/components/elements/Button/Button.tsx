import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

// Button variants using class-variance-authority for organized variants
const buttonVariants = cva(
  // Base styles applied to all buttons
  "rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105",
  {
    variants: {
      // Different variants of the button
      variant: {
        primary:
          "bg-bismarkLight dark:bismarkDark text-white hover:bg-bismarkDark focus:ring-blue-500",
        secondary:
          "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
        outline:
          "bg-transparent border-2 border-bismarkLight text-bismarkLight  hover:bg-transparent focus:ring-blue-500",
        ghost:
          "bg-transparent text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
        danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
        success:
          "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
      },
      // Different sizes of the button
      size: {
        sm: "px-3 py-1 text-xs",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-2.5 text-base",
        xl: "px-8 py-3 text-lg",
      },
      // Different width options
      width: {
        auto: "w-auto",
        full: "w-full",
      },
      // Disable state styling
      disabled: {
        true: "opacity-50 cursor-not-allowed pointer-events-none",
      },
    },
    // Default values if not specified
    defaultVariants: {
      variant: "primary",
      size: "md",
      width: "auto",
    },
  }
);

// Props interface extending VariantProps from class-variance-authority
export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  loadingText?: string;
  className?: string;
  disabled?: boolean;
}

// The Button component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant,
      size,
      width,
      disabled,
      className,
      leftIcon,
      rightIcon,
      isLoading = false,
      loadingText,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          buttonVariants({
            variant,
            size,
            width,
            disabled: disabled || isLoading,
          }),
          className
        )}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            {loadingText || children}
          </div>
        ) : (
          <div className="flex items-center justify-center">
            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
          </div>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
