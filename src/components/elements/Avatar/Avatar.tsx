"use client";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

// Avatar variants using class-variance-authority
const avatarVariants = cva(
  // Base styles applied to all avatars
  "flex items-center justify-center rounded-2xl text-white font-bold text-3xl",
  {
    variants: {
      // Different sizes of the avatar
      size: {
        xs: "w-6 h-6 text-xs",
        sm: "w-8 h-8 text-sm",
        md: "w-12 h-12 text-xl",
        lg: "w-16 h-16 text-2xl",
        xl: "w-24 h-24 text-3xl",
      },
      // Different variants/styles
      variant: {
        default: "bg-gray-300 text-white font-bold text-3xl",
        primary: "bg-blue-100 text-blue-600",
        secondary: "bg-purple-100 text-purple-600",
        success: "bg-green-100 text-green-600",
        warning: "bg-yellow-100 text-yellow-600",
        danger: "bg-red-100 text-red-600",
        dark: "bg-gray-700 text-white",
      },
      // Border options
      bordered: {
        true: "ring-2 ring-white ring-offset-2",
      },
      // Status indicators
      status: {
        online:
          "relative after:absolute after:bottom-0 after:right-0 after:w-1/4 after:h-1/4 after:bg-green-500 after:rounded-full after:ring-2 after:ring-white",
        away: "relative after:absolute after:bottom-0 after:right-0 after:w-1/4 after:h-1/4 after:bg-yellow-500 after:rounded-full after:ring-2 after:ring-white",
        busy: "relative after:absolute after:bottom-0 after:right-0 after:w-1/4 after:h-1/4 after:bg-red-500 after:rounded-full after:ring-2 after:ring-white",
        offline:
          "relative after:absolute after:bottom-0 after:right-0 after:w-1/4 after:h-1/4 after:bg-gray-500 after:rounded-full after:ring-2 after:ring-white",
      },
    },
    // Default values if not specified
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

// Props interface for Avatar
export interface AvatarProps extends VariantProps<typeof avatarVariants> {
  src?: string;
  letter?: string;
  alt?: string;
  className?: string;
  isLoading?: boolean;
  fallbackDelay?: number;
}

// Avatar component
export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      src,
      letter,
      alt,
      size,
      variant,
      bordered,
      status,
      className,
      isLoading = false,
      fallbackDelay = 600,
      ...props
    },
    ref
  ) => {
    const [imageError, setImageError] = React.useState(false);
    const [isImageLoaded, setIsImageLoaded] = React.useState(false);
    const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

    // Handle image load failure
    const handleError = () => {
      setImageError(true);
    };

    // Handle image load success
    const handleLoad = () => {
      setIsImageLoaded(true);
    };

    // Set up timeout for fallback delay
    React.useEffect(() => {
      if (src && !isLoading) {
        timeoutRef.current = setTimeout(() => {
          if (!isImageLoaded) {
            // Show skeleton while image is loading
          }
        }, fallbackDelay);
      }

      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }, [src, isLoading, isImageLoaded, fallbackDelay]);

    // If loading, show skeleton
    if (isLoading) {
      return <AvatarSkeleton size={size || "md"} className={className} />;
    }

    return (
      <div
        ref={ref}
        className={cn(
          avatarVariants({ size, variant, bordered, status }),
          className
        )}
        {...props}
      >
        {src && !imageError ? (
          <img
            src={src}
            alt={alt || "Avatar"}
            onError={handleError}
            onLoad={handleLoad}
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          letter && letter.charAt(0).toUpperCase()
        )}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";

// Props interface for AvatarSkeleton
export interface AvatarSkeletonProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
}

// Avatar Skeleton component for loading states
export const AvatarSkeleton: React.FC<AvatarSkeletonProps> = ({
  size = "md",
  className,
}) => {
  const sizeClasses = {
    xs: "w-6 h-6",
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  };

  return (
    <div
      className={cn(
        "rounded-full bg-gray-200 animate-pulse",
        sizeClasses[size],
        className
      )}
      aria-hidden="true"
    />
  );
};

AvatarSkeleton.displayName = "AvatarSkeleton";

// Avatar Group component for grouping multiple avatars
export interface AvatarGroupProps {
  children: React.ReactNode;
  max?: number;
  spacing?: "tight" | "normal" | "loose";
  className?: string;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  children,
  max,
  spacing = "normal",
  className,
}) => {
  const spacingClasses = {
    tight: "-space-x-2",
    normal: "-space-x-4",
    loose: "-space-x-6",
  };

  const childrenArray = React.Children.toArray(children);
  const totalAvatars = childrenArray.length;
  const showMax = max && totalAvatars > max;
  const visibleAvatars = showMax ? childrenArray.slice(0, max) : childrenArray;
  const remainingCount = showMax ? totalAvatars - max : 0;

  return (
    <div
      className={cn("flex items-center", spacingClasses[spacing], className)}
    >
      {visibleAvatars}
      {showMax && (
        <Avatar size="md" variant="dark" letter={`+${remainingCount}`} />
      )}
    </div>
  );
};

AvatarGroup.displayName = "AvatarGroup";
