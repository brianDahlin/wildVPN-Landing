"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { WildButton } from "@/components/ui/wild-button";
import { Spotlight } from "@/components/ui/spotlight";
import { SITE } from "@/constants/content";

const SplineScene = dynamic(
  () => import("@/components/ui/splite").then((m) => m.SplineScene),
  { ssr: false }
);

const BADGES = ["VLESS + Reality", "Zero Leaks", "Marzban"];

export function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen w-full bg-[#0A0E12] overflow-hidden">
      {/* Interactive cursor spotlight */}
      <Spotlight size={500} />

      {/* Subtle grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(26,48,64,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(26,48,64,0.3)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]" />

      <div className="relative z-10 flex h-screen flex-col md:flex-row items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Left — text content */}
        <motion.div
          className="flex-1 flex flex-col justify-center py-20 md:py-0 z-10"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 w-fit"
          >
            <span className="h-px w-6 bg-[#04D5E9]" />
            <span className="text-[#04D5E9] text-xs font-mono tracking-widest uppercase">
              VLESS + Reality
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            {SITE.tagline
              .split(". ")
              .map((part, i) => (
                <span key={i}>
                  {i === 0 ? (
                    <span className="text-white">{part}.</span>
                  ) : (
                    <>
                      {" "}
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#04D5E9] to-[#03595D]">
                        {part}.
                      </span>
                    </>
                  )}
                </span>
              ))}
          </h1>

          <p className="text-[#7A8D9E] text-base md:text-lg leading-relaxed mb-8 max-w-md">
            {SITE.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <WildButton
              text="Подключить VPN"
              className="w-48"
              onClick={() => handleScroll("#pricing")}
            />
            <button
              onClick={() => handleScroll("#features")}
              className="px-6 py-2.5 rounded-full border border-[#1A3040] text-[#7A8D9E] text-sm font-medium hover:border-[#04D5E9]/40 hover:text-white transition-all duration-200"
            >
              Узнать больше
            </button>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            {BADGES.map((badge, i) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                className="text-xs text-[#4A6070] border border-[#1A3040] rounded-full px-3 py-1 font-mono"
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Right — Spline robot */}
        <motion.div
          className="flex-1 relative h-[420px] md:h-full w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Teal glow behind the robot */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-72 h-72 rounded-full bg-[#04D5E9]/8 blur-[80px]" />
          </div>

          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </motion.div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0E12] to-transparent pointer-events-none" />
    </section>
  );
}
