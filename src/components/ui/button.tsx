import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:shadow-neon hover:from-violet-500 hover:to-cyan-400",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-cyan-500/50 text-white bg-transparent hover:border-cyan-400 hover:bg-white/10 glass",
        secondary: "bg-gradient-to-r from-cyan-500/80 to-violet-500/80 text-white hover:from-cyan-500 hover:to-violet-500",
        ghost: "text-cyan-400 hover:bg-white/10 hover:text-cyan-300",
        link: "text-cyan-400 underline-offset-4 hover:underline hover:text-cyan-300",
        hero: "bg-gradient-to-r from-cyan-500 to-cyan-600 text-black hover:from-cyan-400 hover:to-cyan-500 shadow-neon font-bold",
        gold: "bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:shadow-neon hover:from-violet-500 hover:to-cyan-400",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-lg px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
