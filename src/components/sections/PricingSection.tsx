"use client";

import { motion } from "framer-motion";
import { DarkGradientPricing } from "@/components/ui/dark-gradient-pricing";
import { PRICING_PLANS } from "@/constants/content";

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Тарифы
          </h2>
          <p className="mt-4 text-[#8888a0] text-lg max-w-xl mx-auto">
            Начни бесплатно. Переходи на платный план когда будешь готов.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <DarkGradientPricing plans={PRICING_PLANS} />
        </motion.div>
      </div>
    </section>
  );
}
