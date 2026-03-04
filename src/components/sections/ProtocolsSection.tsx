"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { PROTOCOLS } from "@/constants/content";

export function ProtocolsSection() {
  return (
    <section id="protocols" className="py-24 md:py-32 bg-[#0F1923]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Технологии, которым можно доверять
          </h2>
          <p className="mt-4 text-[#7A8D9E] text-lg max-w-2xl mx-auto">
            Три протокола для разных задач — от совместимости до максимальной
            защиты.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROTOCOLS.map((protocol, i) => (
            <motion.div
              key={protocol.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={`relative bg-[#0A0E12] rounded-2xl p-8 flex flex-col gap-4 transition-all duration-300 ${
                protocol.recommended
                  ? "border border-[#04D5E9]/50 shadow-[0_0_30px_rgba(4,213,233,0.08)]"
                  : "border border-[#1A3040] hover:border-[#04D5E9]/20"
              }`}
            >
              {protocol.recommended && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-[#04D5E9] text-black text-xs font-bold rounded-full px-3 py-1">
                    Рекомендуем
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-white font-mono tracking-tight mt-2">
                {protocol.name}
              </h3>

              <p className="text-[#7A8D9E] text-sm leading-relaxed flex-1">
                {protocol.description}
              </p>

              <div className="flex items-center gap-2">
                <Shield
                  size={14}
                  className={
                    protocol.security === "Максимальная"
                      ? "text-[#04D5E9]"
                      : "text-[#7A8D9E]"
                  }
                />
                <span
                  className={`text-xs font-medium ${
                    protocol.security === "Максимальная"
                      ? "text-[#04D5E9]"
                      : "text-[#7A8D9E]"
                  }`}
                >
                  Безопасность: {protocol.security}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-xs text-[#4A6070] mt-10"
        >
          Работает на базе{" "}
          <span className="text-[#7A8D9E] font-mono">Marzban</span> — открытой
          панели управления VPN
        </motion.p>
      </div>
    </section>
  );
}
