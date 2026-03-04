"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Zap,
  Smartphone,
  Headset,
  Gauge,
  QrCode,
  LucideIcon,
} from "lucide-react";
import { FEATURES } from "@/constants/content";

const ICON_MAP: Record<string, LucideIcon> = {
  Shield,
  Zap,
  Smartphone,
  Headset,
  Gauge,
  QrCode,
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32 bg-[#0A0E12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Почему WildVPN
          </h2>
          <p className="mt-4 text-[#7A8D9E] text-lg max-w-2xl mx-auto">
            Технологии, которые работают. Без лишних слов.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => {
            const Icon = ICON_MAP[feature.icon];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="bg-[#0F1923] border border-[#1A3040] rounded-2xl p-6 flex flex-col gap-4 hover:border-[#04D5E9]/30 hover:shadow-[0_0_20px_rgba(4,213,233,0.05)] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#04D5E9]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#04D5E9]/15 transition-colors">
                  {Icon && <Icon size={20} className="text-[#04D5E9]" />}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#7A8D9E] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
