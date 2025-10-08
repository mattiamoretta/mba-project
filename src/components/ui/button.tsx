import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const baseStyles =
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-50 disabled:pointer-events-none";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, type = "button", ...props }, ref) => (
  <button ref={ref} className={cn(baseStyles, className)} type={type} {...props} />
));

Button.displayName = "Button";

export { Button };
