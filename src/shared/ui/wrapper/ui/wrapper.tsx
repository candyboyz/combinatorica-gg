import { cn } from "@/shared/lib/utils";
import React, { HTMLAttributes } from "react";

export type WrapperProps = HTMLAttributes<HTMLDivElement> & {};

export const Wrapper = ({ children, className, ...props }: WrapperProps) => {
  return (
    <div
      className={cn("px-6 w-full max-w-[1440px] mx-auto", className)}
      {...props}>
      {children}
    </div>
  );
};
