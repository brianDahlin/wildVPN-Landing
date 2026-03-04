"use client";

import { motion } from "framer-motion";
import { Apple, Smartphone, ExternalLink } from "lucide-react";
import { APPS } from "@/constants/content";

export function AppsSection() {
  return (
    <section id="apps" className="py-24 md:py-32 bg-[#0F1923]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Работает на всех устройствах
          </h2>
          <p className="mt-4 text-[#7A8D9E] text-lg max-w-2xl mx-auto">
            WildVPN работает через проверенные V2Ray-клиенты — используй любимое приложение.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* iOS */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-[#0A0E12] border border-[#1A3040] rounded-2xl p-8 flex flex-col gap-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#04D5E9]/10 flex items-center justify-center">
                <Apple size={20} className="text-[#04D5E9]" />
              </div>
              <h3 className="text-xl font-semibold text-white">iOS</h3>
            </div>

            <div className="flex flex-col gap-3">
              {APPS.ios.map((app) => (
                <a
                  key={app.name}
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl border border-[#1A3040] hover:border-[#04D5E9]/30 hover:bg-[#0F1923] transition-all duration-200 group"
                >
                  <span className="text-white font-medium">{app.name}</span>
                  <ExternalLink
                    size={14}
                    className="text-[#4A6070] group-hover:text-[#04D5E9] transition-colors"
                  />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Android */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-[#0A0E12] border border-[#1A3040] rounded-2xl p-8 flex flex-col gap-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#04D5E9]/10 flex items-center justify-center">
                <Smartphone size={20} className="text-[#04D5E9]" />
              </div>
              <h3 className="text-xl font-semibold text-white">Android</h3>
            </div>

            <div className="flex flex-col gap-3">
              {APPS.android.map((app) => (
                <a
                  key={app.name}
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl border border-[#1A3040] hover:border-[#04D5E9]/30 hover:bg-[#0F1923] transition-all duration-200 group"
                >
                  <span className="text-white font-medium">{app.name}</span>
                  <ExternalLink
                    size={14}
                    className="text-[#4A6070] group-hover:text-[#04D5E9] transition-colors"
                  />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
