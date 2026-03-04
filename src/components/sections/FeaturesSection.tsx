"use client";

import { motion } from "framer-motion";
import {
  IconShieldLock,
  IconBolt,
  IconDeviceMobile,
  IconHeadset,
  IconGauge,
  IconQrcode,
  IconLock,
  IconClock,
} from "@tabler/icons-react";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";

const features = [
  {
    icon: <IconShieldLock size={28} />,
    title: "Zero Logs. Всегда.",
    description:
      "Мы физически не можем передать ваши данные — потому что не храним их. Никаких записей о посещениях, IP-адресах и сессиях.",
  },
  {
    icon: <IconBolt size={28} />,
    title: "Обходит любой DPI",
    description:
      "VLESS + Reality маскирует трафик под обычный HTTPS. Провайдер видит обычный сайт — не VPN.",
  },
  {
    icon: <IconGauge size={28} />,
    title: "1 Гбит/с без лимитов",
    description:
      "Выделенные серверы на высокоскоростных каналах. Никаких ограничений по трафику или скорости.",
  },
  {
    icon: <IconLock size={28} />,
    title: "Три протокола защиты",
    description:
      "VMess, VLESS и VLESS + Reality — выбери под свою задачу. От совместимости до максимальной анонимности.",
  },
  {
    icon: <IconDeviceMobile size={28} />,
    title: "iOS и Android",
    description:
      "Работает через V2Box, Streisand, V2RayNG, Nekobox — стандартные клиенты без привязки к нам.",
  },
  {
    icon: <IconQrcode size={28} />,
    title: "30 секунд до первого соединения",
    description:
      "Получи QR-код в Telegram, отсканируй в приложении — готово. Никаких инструкций на 10 страниц.",
  },
  {
    icon: <IconHeadset size={28} />,
    title: "Поддержка за 5 минут",
    description:
      "Живые люди в Telegram, не боты. Поможем с настройкой, сменим сервер или протокол — сразу.",
  },
  {
    icon: <IconClock size={28} />,
    title: "7 дней — возврат без вопросов",
    description:
      "Не понравилось — вернём деньги в течение недели. Никаких форм, никаких объяснений.",
  },
];

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

        <FeaturesSectionWithHoverEffects features={features} />
      </div>
    </section>
  );
}
