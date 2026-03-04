"use client";

import React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { WildButton } from "@/components/ui/wild-button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

interface DarkGradientPricingProps {
  plans: PricingPlan[];
}

export function DarkGradientPricing({ plans }: DarkGradientPricingProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={cn(
            "relative rounded-2xl p-8 flex flex-col gap-6 transition-all duration-300",
            plan.highlighted
              ? "bg-gradient-to-b from-[#0d2535] to-[#0F1923] border border-[#04D5E9]/50 shadow-[0_0_40px_rgba(4,213,233,0.1)]"
              : "bg-[#0F1923] border border-[#1A3040] hover:border-[#04D5E9]/20"
          )}
        >
          {plan.highlighted && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-[#04D5E9] text-black text-xs font-bold rounded-full px-4 py-1 whitespace-nowrap">
                Популярный выбор
              </span>
            </div>
          )}

          <div>
            <h3 className="text-lg font-semibold text-white mb-1">
              {plan.name}
            </h3>
            <p className="text-sm text-[#7A8D9E]">{plan.description}</p>
          </div>

          <div className="flex items-baseline gap-1">
            {plan.price === "0" ? (
              <span className="text-4xl font-bold text-white">Бесплатно</span>
            ) : (
              <>
                <span className="text-4xl font-bold text-white">
                  ₽{plan.price}
                </span>
                <span className="text-[#7A8D9E] text-sm">/{plan.period}</span>
              </>
            )}
          </div>

          <ul className="flex flex-col gap-3 flex-1">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <div
                  className={cn(
                    "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center",
                    plan.highlighted ? "bg-[#04D5E9]/20" : "bg-[#1A3040]"
                  )}
                >
                  <Check
                    size={12}
                    className={
                      plan.highlighted ? "text-[#04D5E9]" : "text-[#7A8D9E]"
                    }
                  />
                </div>
                <span className="text-sm text-[#7A8D9E]">{feature}</span>
              </li>
            ))}
          </ul>

          {plan.highlighted ? (
            <WildButton text={plan.cta} className="w-full" />
          ) : (
            <InteractiveHoverButton
              text={plan.cta}
              className="w-full border-[#1A3040]"
            />
          )}
        </div>
      ))}
    </div>
  );
}
