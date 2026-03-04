"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Lock, Server } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function ProtocolsSection() {
  return (
    <section id="protocols" className="py-16 md:py-32 bg-[#0F1923]">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto max-w-xl space-y-4 text-center"
        >
          <h2 className="text-4xl font-medium lg:text-5xl text-white">
            Технологии, которым можно доверять
          </h2>
          <p className="text-[#7A8D9E]">
            Три протокола для разных задач — от совместимости до максимальной защиты.
            Всё работает на базе <span className="font-mono text-[#04D5E9]">Marzban</span>.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2"
        >

          {/* VLESS + Reality — big featured card */}
          <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2 bg-[#0A0E12] border-[#04D5E9]/40 shadow-[0_0_40px_rgba(4,213,233,0.06)]">
            <CardHeader className="pb-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#04D5E9]/10 flex items-center justify-center">
                    <Lock size={16} className="text-[#04D5E9]" />
                  </div>
                  <span className="text-xs font-mono text-[#04D5E9] tracking-widest uppercase">
                    Рекомендуем
                  </span>
                </div>
                <span className="text-xs text-[#4A6070] border border-[#1A3040] rounded-full px-3 py-1">
                  Безопасность: Максимальная
                </span>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-white font-mono tracking-tight">
                  VLESS + Reality
                </h3>
                <p className="text-[#7A8D9E] text-lg leading-relaxed">
                  Золотой стандарт обхода блокировок. Reality маскирует VPN-трафик
                  под реальный TLS-хендшейк известных сайтов — провайдер видит обычный
                  HTTPS, а не VPN. Неотличим от легитимного трафика даже для глубокой инспекции пакетов.
                </p>
                <ul className="space-y-2 text-sm text-[#7A8D9E]">
                  {[
                    "Обходит ТСПУ и любой DPI",
                    "Минимальный оверхед — максимальная скорость",
                    "Работает там, где другие VPN блокируются",
                  ].map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#04D5E9] flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center gap-2 pt-4 border-t border-[#1A3040]">
                <Shield size={14} className="text-[#04D5E9]" />
                <span className="text-xs text-[#4A6070] font-mono">
                  XTLS Vision · uTLS Fingerprint Spoofing
                </span>
              </div>
            </CardContent>
          </Card>

          {/* VLESS — wide card */}
          <Card className="md:col-span-2 bg-[#0A0E12] border-[#1A3040] hover:border-[#04D5E9]/20 transition-colors duration-300">
            <CardContent className="h-full pt-6">
              <div className="grid h-full grid-rows-[1fr_auto] gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#04D5E9]/10 flex items-center justify-center">
                      <Zap size={14} className="text-[#04D5E9]" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-mono">VLESS</h3>
                    <span className="ml-auto text-xs text-[#4A6070] border border-[#1A3040] rounded-full px-2 py-0.5">
                      Безопасность: Высокая
                    </span>
                  </div>
                  <p className="text-[#7A8D9E]">
                    Облегчённый протокол без избыточного шифрования — работает быстрее VMess
                    на 15–20%. Идеален для потокового видео и задач, где важна скорость
                    без компромисса по безопасности.
                  </p>
                </div>
                <div className="flex items-center gap-2 pt-3 border-t border-[#1A3040]">
                  <Shield size={14} className="text-[#7A8D9E]" />
                  <span className="text-xs text-[#4A6070] font-mono">No encryption overhead · Fast stream</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* VMess — small card */}
          <Card className="bg-[#0A0E12] border-[#1A3040] hover:border-[#04D5E9]/20 transition-colors duration-300">
            <CardContent className="h-full pt-6">
              <div className="grid h-full grid-rows-[1fr_auto] gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#1A3040] flex items-center justify-center">
                      <Shield size={14} className="text-[#7A8D9E]" />
                    </div>
                    <h3 className="text-lg font-bold text-white font-mono">VMess</h3>
                  </div>
                  <p className="text-sm text-[#7A8D9E] leading-relaxed">
                    Классический протокол V2Ray. Надёжное встроенное шифрование,
                    максимальная совместимость со всеми клиентами.
                  </p>
                </div>
                <div className="text-xs text-[#4A6070] font-mono border-t border-[#1A3040] pt-3">
                  Безопасность: Высокая
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Marzban platform card */}
          <Card className="bg-[#0A0E12] border-[#1A3040] hover:border-[#04D5E9]/20 transition-colors duration-300">
            <CardContent className="h-full pt-6">
              <div className="grid h-full grid-rows-[1fr_auto] gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#1A3040] flex items-center justify-center">
                      <Server size={14} className="text-[#7A8D9E]" />
                    </div>
                    <h3 className="text-lg font-bold text-white font-mono">Marzban</h3>
                  </div>
                  <p className="text-sm text-[#7A8D9E] leading-relaxed">
                    Открытая панель управления VPN. Прозрачная инфраструктура,
                    проверенная сообществом — никаких скрытых бэкдоров.
                  </p>
                </div>
                <div className="text-xs text-[#4A6070] font-mono border-t border-[#1A3040] pt-3">
                  Open Source · MIT License
                </div>
              </div>
            </CardContent>
          </Card>

        </motion.div>
      </div>
    </section>
  );
}
