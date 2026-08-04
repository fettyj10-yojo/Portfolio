import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97]",
  {
    variants: {
      variant: {
        navCta: "bg-nav-button text-foreground hover:bg-nav-button/80",
        hero: "bg-primary text-primary-foreground hover:brightness-110",
        heroOutline: "border border-foreground/20 bg-transparent text-foreground hover:bg-foreground/10",
      },
      size: {
        default: "h-10 px-4 py-2",
        lg: "h-11 px-6",
      },
    },
    defaultVariants: { variant: "navCta", size: "default" },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({ className = "", variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={`${buttonVariants({ variant, size })} ${className}`}
      {...props}
    />
  );
}
