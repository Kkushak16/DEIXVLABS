import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd700] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#ffd700] text-[#0b0b0e] hover:brightness-110",
        outline: "border border-[#ffd700]/50 bg-transparent text-[#f8fafc] hover:bg-[#ffd700]/15",
        ghost: "text-[#f8fafc] hover:bg-[#ffd700]/10",
      },
      size: {
        default: "h-10 px-6",
        lg: "h-12 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />;
  },
);
Button.displayName = "Button";

const liquidbuttonVariants = cva(
  "relative z-10 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium text-white transition-all hover:scale-[1.03] active:scale-[.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd700] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "text-white",
        outline: "text-[#e5e1e6]",
        ghost: "text-[#e5e1e6]",
      },
      size: {
        default: "h-10 px-6",
        lg: "h-12 px-8",
        xl: "h-14 px-10",
        icon: "size-10",
      },
    },
    defaultVariants: { variant: "default", size: "xl" },
  },
);

export function LiquidButton({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof liquidbuttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="liquid-button"
      className={cn(liquidbuttonVariants({ variant, size, className }))}
      {...props}
    >
      <span className="pointer-events-none absolute inset-0 rounded-full border border-white/25 bg-white/[0.08] shadow-[0_2px_12px_rgba(0,0,0,.28),inset_3px_3px_1px_-3px_rgba(255,255,255,.75),inset_-3px_-3px_1px_-3px_rgba(0,0,0,.7),0_0_18px_rgba(255,215,0,.16)] backdrop-blur-xl" />
      <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-transparent to-[#ffd700]/10 opacity-80" />
      <span className="relative z-10">{children}</span>
    </Comp>
  );
}

export { buttonVariants, liquidbuttonVariants };
