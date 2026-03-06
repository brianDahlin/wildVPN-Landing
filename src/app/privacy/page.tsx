import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PrivacyContent } from "@/components/sections/PrivacyContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — WildVPN",
  description:
    "Политика конфиденциальности и обработки данных сервиса WildVPN.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0A0E12]">
      <Header />
      <PrivacyContent />
      <Footer />
    </main>
  );
}
