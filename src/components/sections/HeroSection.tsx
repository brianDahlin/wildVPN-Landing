"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { WildButton } from "@/components/ui/wild-button";
import { SITE } from "@/constants/content";

const CanvasRevealEffect = dynamic(
  () =>
    import("@/components/ui/canvas-reveal-effect").then(
      (m) => m.CanvasRevealEffect
    ),
  { ssr: false }
);

const BADGES = ["VLESS + Reality", "Zero Leaks", "Marzban"];

export function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* WebGL background */}
      <div className="absolute inset-0">
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-[#0A0E12] h-full"
          colors={[
            [4, 213, 233],
            [3, 89, 93],
          ]}
          dotSize={4}
          showGradient={false}
        />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,14,18,0.3)_0%,rgba(10,14,18,0.95)_70%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-center gap-6"
        >
          {/* Logo with corner brackets */}
          <div className="relative inline-flex items-center justify-center mb-2">
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#04D5E9] rounded-tl-sm" />
            <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[#04D5E9] rounded-tr-sm" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[#04D5E9] rounded-bl-sm" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#04D5E9] rounded-br-sm" />
            <Logo size={48} />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
            {SITE.tagline}
          </h1>

          <p className="text-lg md:text-xl text-[#7A8D9E] max-w-2xl leading-relaxed">
            {SITE.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center mt-2">
            <WildButton
              text="Подключить VPN"
              className="w-48"
              onClick={() => handleScroll("#pricing")}
            />
            <button
              onClick={() => handleScroll("#features")}
              className="px-8 py-2.5 rounded-full border border-[#1A3040] text-white text-sm font-semibold hover:border-[#04D5E9]/50 transition-colors"
            >
              Узнать больше
            </button>
          </div>

          {/* Badges */}
          <motion.div className="flex flex-wrap gap-3 justify-center mt-2">
            {BADGES.map((badge, i) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6 + i * 0.12,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="text-xs text-[#7A8D9E] border border-[#1A3040] rounded-full px-4 py-1.5 bg-[#0A0E12]/60 backdrop-blur-sm"
              >
                {badge}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
