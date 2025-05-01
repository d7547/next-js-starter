// File: src/components/ActionButton/ActionButton.tsx
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';


// Action button variants using class-variance-authority
const actionButtonVariants = cva(
  // Base styles applied to all action buttons
  "flex items-center w-[100px]   h-[39px] justify-center px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      // Different variants/styles
      variant: {
        primary: "bg-blue-400 text-white hover:bg-blue-500 focus:ring-blue-400",
        secondary: "bg-gray-200 text-gray-600 hover:bg-gray-300 focus:ring-gray-400",
        outline: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-300",
        ghost: "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
      },
      // Different sizes of the button
      size: {
        sm: "px-4 py-1 text-xs",
        md: "px-6 py-2 text-sm",
        lg: "px-8 py-3 text-base",
      },
      // Full width option
      fullWidth: {
        true: "w-full",
      },
      // Rounded style variations
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
      // Disabled state
      disabled: {
        true: "opacity-50 cursor-not-allowed pointer-events-none",
      },
    },
    // Default values if not specified
    defaultVariants: {
      variant: "primary",
      size: "md",
      rounded: "md",
      fullWidth: false,
    },
  }
);

// Props interface for ActionButton
export interface ActionButtonProps 
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    VariantProps<typeof actionButtonVariants> {
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
  className?: string;
}

// ActionButton component
export const ActionButton = React.forwardRef<HTMLButtonElement, ActionButtonProps>(
  ({
    children,
    variant,
    size,
    fullWidth,
    rounded,
    disabled,
    icon,
    iconPosition = 'left',
    isLoading = false,
    className,
    ...props
  }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          actionButtonVariants({ 
            variant, 
            size, 
            fullWidth, 
            rounded, 
            disabled: disabled || isLoading 
          }),
          className
        )}
        {...props}
      >
        {isLoading ? (
          <>
            <svg 
              className="animate-spin -ml-1 mr-2 h-4 w-4" 
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
            Loading...
          </>
        ) : (
          <>
            {icon && iconPosition === 'left' && (
              <span className="mr-2">{icon}</span>
            )}
            {children}
            {icon && iconPosition === 'right' && (
              <span className="ml-2">{icon}</span>
            )}
          </>
        )}
      </button>
    );
  }
);

ActionButton.displayName = 'ActionButton';
