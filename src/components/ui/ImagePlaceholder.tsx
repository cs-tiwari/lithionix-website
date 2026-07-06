"use client";

import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  className?: string;
  icon?: string;
  label?: string;
  gradient?: "blue" | "purple" | "green" | "orange";
}

export function ImagePlaceholder({
  className = "",
  icon = "📸",
  label = "Image",
  gradient = "blue",
}: ImagePlaceholderProps) {
  const gradientClasses = {
    blue: "from-blue-500 to-cyan-500",
    purple: "from-purple-500 to-pink-500",
    green: "from-green-500 to-emerald-500",
    orange: "from-orange-500 to-red-500",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl bg-gradient-to-br",
        gradientClasses[gradient],
        className
      )}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <div className="text-6xl mb-2">{icon}</div>
        <div className="text-sm font-medium opacity-90">{label}</div>
      </div>
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
    </div>
  );
}