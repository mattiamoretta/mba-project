import type { PropsWithChildren, HTMLAttributes } from "react";
import { cn } from "../../utils/cn";

const Card = ({ className, children, ...props }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => (
  <div className={cn("rounded-xl border border-gray-200 bg-white", className)} {...props}>
    {children}
  </div>
);

const CardContent = ({ className, children, ...props }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => (
  <div className={cn("p-4", className)} {...props}>
    {children}
  </div>
);

export { Card, CardContent };
