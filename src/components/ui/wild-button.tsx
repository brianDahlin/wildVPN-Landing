import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface WildButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  asChild?: boolean;
}

/**
 * CTA-кнопка с фирменным градиентом WildVPN (#03595D → #04D5E9)
 * и диагональным паттерном поверх.
 */
const WildButton = React.forwardRef<HTMLButtonElement, WildButtonProps>(
  ({ text = "Button", className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "btn-wild-gradient group relative cursor-pointer overflow-hidden rounded-full px-6 py-2.5 text-center text-sm font-semibold text-black transition-opacity hover:opacity-90 active:opacity-80",
          className
        )}
        {...props}
      >
        <span className="relative z-10 inline-flex items-center gap-2">
          {text}
          <ArrowRight
            size={14}
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </span>
      </button>
    );
  }
);
WildButton.displayName = "WildButton";
export { WildButton };
