import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  background?: "white" | "slate" | "gradient";
  spacing?: "sm" | "md" | "lg" | "xl";
}

export function Section({
  children,
  className = "",
  containerClassName = "",
  background = "white",
  spacing = "lg",
}: SectionProps) {
  const backgroundClasses = {
    white: "bg-white",
    slate: "bg-slate-50",
    gradient: "bg-gradient-to-br from-slate-50 to-blue-50",
  };

  const spacingClasses = {
    sm: "py-8 md:py-12",
    md: "py-12 md:py-16",
    lg: "py-16 md:py-24",
    xl: "py-24 md:py-32",
  };

  return (
    <section
      className={cn(
        backgroundClasses[background],
        spacingClasses[spacing],
        className
      )}
    >
      <div className={cn("container mx-auto px-4 sm:px-6 lg:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  );
}