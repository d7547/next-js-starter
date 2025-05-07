import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const badgeVariants = cva(
  'inline-flex  items-center text-sm font-medium px-3 py-1 transition-all',
  {
    variants: {
      variant: {
        featured: 'bg-yellow-400 text-white',
        info: 'bg-blue-500 text-white',
        success: 'bg-green-500 text-white',
        warning: 'bg-orange-500 text-white',
        danger: 'bg-red-500 text-white',
        neutral: 'bg-gray-200 text-gray-700',
      },
      size: {
        sm: 'text-xs px-2 py-0.5',
        md: 'text-sm px-3 py-1',
        lg: 'text-base px-4 py-1.5',
      },
      rounded: {
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'featured',
      size: 'md',
    //   rounded: 'md',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  text: string;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      variant,
      size,
      rounded,
      icon,
      iconPosition = 'left',
      text,
      className,
      ...props
    },
    ref
  ) => {
    return (
        <div
        ref={ref} 
        className='relative' >
        <div   className={cn(badgeVariants({ variant, size, rounded }), className)}
        {...props}>
          {icon && iconPosition === 'left' && <span className="mr-1">{icon}</span>}
          <span>{text}</span>
          {icon && iconPosition === 'right' && <span className="ml-1">{icon}</span>}
        </div>
      </div>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;