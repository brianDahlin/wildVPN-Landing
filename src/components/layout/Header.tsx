"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { NAV_LINKS, APP_LINKS } from "@/constants/content";
import { Logo } from "@/components/ui/Logo";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { useDeviceOS } from "@/hooks/useDeviceOS";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const os = useDeviceOS();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const router = useRouter();

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#")) {
      router.push(href);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleInstallClick = () => {
    const target = APP_LINKS[os];
    if (target.startsWith("#")) {
      setMobileOpen(false);
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(target, "_blank");
    }
  };

  const mobileButtonLabel =
    os === "ios"
      ? "Скачать для iOS"
      : os === "android"
      ? "Скачать для Android"
      : "Установить приложение";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0E12]/90 backdrop-blur-md border-b border-[#1A3040]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 select-none">
          <Logo size={28} />
          <span className="text-lg font-bold tracking-tight">
            <span className="text-white">Wild</span>
            <span className="text-[#04D5E9]">VPN</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm text-[#7A8D9E] hover:text-white transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA — Liquid Glass Button */}
        <div className="hidden md:block">
          <div className="relative group">
            <div className="absolute inset-0 -m-1 rounded-full bg-[#04D5E9]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <LiquidButton
              size="default"
              onClick={handleInstallClick}
              className="relative text-white text-sm font-medium px-5 h-9"
            >
              <span className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Установить
              </span>
            </LiquidButton>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Открыть меню"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-[#0A0E12]/95 backdrop-blur-md border-b border-[#1A3040] px-4 py-6 flex flex-col gap-4"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-base text-[#7A8D9E] hover:text-white transition-colors text-left py-2 border-b border-[#1A3040] last:border-0 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <LiquidButton
              size="lg"
              onClick={handleInstallClick}
              className="text-white text-sm font-medium w-full justify-center h-11 mt-2"
            >
              <span className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                {mobileButtonLabel}
              </span>
            </LiquidButton>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
