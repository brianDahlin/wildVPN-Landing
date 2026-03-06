import Link from "next/link";
import { Send } from "lucide-react";
import { NAV_LINKS, SITE } from "@/constants/content";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="bg-[#0A0E12] border-t border-dashed border-[#1A3040]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo + description */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 font-bold text-xl">
              <Logo size={32} />
              <span>
                <span className="text-white">Wild</span>
                <span className="text-[#04D5E9]">VPN</span>
              </span>
            </div>
            <p className="text-sm text-[#7A8D9E] max-w-xs">
              VPN нового поколения на протоколах VLESS + Reality. Без логов,
              без ограничений.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold text-[#4A6070] uppercase tracking-wider">
              Навигация
            </p>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#7A8D9E] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contacts */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold text-[#4A6070] uppercase tracking-wider">
              Контакты
            </p>
            <a
              href={SITE.telegramChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#7A8D9E] hover:text-white transition-colors"
            >
              <Send size={14} />
              Telegram-канал
            </a>
            <a
              href={SITE.telegramSupport}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#7A8D9E] hover:text-white transition-colors"
            >
              <Send size={14} />
              Поддержка
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-dashed border-[#1A3040] flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#4A6070]">
          <p>© 2025 WildVPN. Все права защищены.</p>
          <Link
            href="/privacy"
            className="text-[#7A8D9E] hover:text-[#04D5E9] transition-colors"
          >
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
}
