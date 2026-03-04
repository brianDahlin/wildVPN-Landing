"use client"

import { FeatureSteps } from "@/components/ui/feature-steps"
import { STEPS_FEATURES } from "@/constants/content"

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-[#0A0E12]">
      <FeatureSteps
        features={STEPS_FEATURES}
        title="Подключение за 3 шага"
        autoPlayInterval={4000}
        imageHeight="h-[400px]"
        className="bg-transparent"
      />
    </section>
  )
}
