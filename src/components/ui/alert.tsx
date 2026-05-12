import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-[var(--radius-card)] border p-4 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:size-5 [&>svg+div]:pl-8 [&>svg~*]:pl-8",
  {
    variants: {
      variant: {
        default:
          "border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-card-foreground)]",
        info: "border-[var(--color-marine-blue)]/30 bg-[var(--color-marine-blue)]/8 text-[var(--color-foreground)] [&>svg]:text-[var(--color-marine-blue)]",
        warning:
          "border-[var(--color-status-aging)]/40 bg-[var(--color-status-aging)]/10 text-[var(--color-foreground)] [&>svg]:text-[var(--color-status-aging)]",
        destructive:
          "border-[var(--color-destructive)]/40 bg-[var(--color-destructive)]/10 text-[var(--color-foreground)] [&>svg]:text-[var(--color-destructive)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(
      "mb-1 text-sm font-bold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm leading-relaxed [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
