"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";
import { FAQ, SITE } from "@/constants/content";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#0F1923] border border-[#1A3040] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-[#162230] transition-colors"
      >
        <span className="text-white font-medium text-sm pr-4">{question}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown size={16} className="text-[#7A8D9E]" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-[#7A8D9E] text-sm leading-relaxed border-t border-[#1A3040] pt-4">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function SupportSection() {
  return (
    <section id="support" className="py-24 md:py-32 bg-[#0F1923]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Support CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#04D5E9]/10 mb-6">
            <MessageCircle size={28} className="text-[#04D5E9]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Нужна помощь?
          </h2>
          <p className="text-[#7A8D9E] text-lg mb-8 max-w-lg mx-auto">
            Наша команда в Telegram отвечает за 5 минут. Поможем настроить,
            выбрать протокол и решить любую проблему.
          </p>
          <a
            href={SITE.telegramSupport}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wild-gradient inline-flex items-center gap-2 px-8 py-3 text-black font-semibold rounded-full hover:opacity-90 transition-opacity"
          >
            <MessageCircle size={18} />
            <span className="relative z-10">Написать в Telegram</span>
          </a>
        </motion.div>

        {/* Dashed separator */}
        <div className="w-full border-t border-dashed border-[#1A3040] mb-12" />

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Частые вопросы
          </h3>
          <div className="flex flex-col gap-3">
            {FAQ.map((item) => (
              <FAQItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
