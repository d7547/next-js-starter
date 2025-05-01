import React from "react";
import { IconCheck } from "@tabler/icons-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

// Define variants for the badge using class-variance-authority
const serviceBadgeVariants = cva("flex items-center gap-2 mb-3", {
  variants: {
    color: {
      default: "text-gray-600",
      primary: "text-blue-600",
      success: "text-green-600",
      danger: "text-red-600",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

const iconWrapperVariants = cva("rounded-full p-1", {
  variants: {
    color: {
      default: "bg-cadetBlueLight dark:bg-cadetBlueDark",
      primary: "bg-blue-100 dark:bg-blue-800",
      success: "bg-green-100 dark:bg-green-800",
      danger: "bg-red-100 dark:bg-red-800",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

export interface ServiceBadgeProps extends VariantProps<typeof serviceBadgeVariants> {
  service: string;
  className?: string;
}

export const ServiceBadge = ({
  service,
  color,
  className,
}: ServiceBadgeProps) => {
  return (
    <div className={cn(serviceBadgeVariants({ color }), className)}>
      <div className={cn(iconWrapperVariants({ color }))}>
        <IconCheck size={16} className="text-white w-5 h-5" />
      </div>
      <span className="text-sm">{service}</span>
    </div>
  );
};
