import { cn } from "@/lib/utils";
import React from "react";

interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: FeatureItem & { index: number }) => {
  const isTopRow = index < 4;

  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-[#1A3040]",
        (index === 0 || index === 4) && "lg:border-l border-[#1A3040]",
        isTopRow && "lg:border-b border-[#1A3040]"
      )}
    >
      {/* Hover gradient overlay */}
      <div
        className={cn(
          "opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full pointer-events-none",
          isTopRow
            ? "bg-gradient-to-t from-[#0F1923] to-transparent"
            : "bg-gradient-to-b from-[#0F1923] to-transparent"
        )}
      />

      {/* Icon */}
      <div className="mb-4 relative z-10 px-10 text-[#7A8D9E] group-hover/feature:text-[#04D5E9] transition-colors duration-200">
        {icon}
      </div>

      {/* Title */}
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        {/* Left accent bar */}
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-[#1A3040] group-hover/feature:bg-[#04D5E9] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-[#7A8D9E] max-w-xs relative z-10 px-10 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

interface FeaturesSectionWithHoverEffectsProps {
  features: FeatureItem[];
}

export function FeaturesSectionWithHoverEffects({
  features,
}: FeaturesSectionWithHoverEffectsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}
