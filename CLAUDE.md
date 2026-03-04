# WildVPN Landing Page — Project Rules

## Project Overview

WildVPN — это VPN-сервис, работающий на базе **Marzban** панели с поддержкой протоколов **VMess**, **VLESS** и **VLESS + Reality**. Лендинг должен быть минималистичным, современным, и объяснять суть продукта простым языком. Целевая аудитория — пользователи из СНГ и Ближнего Востока, которым нужен надёжный и быстрый VPN.

---

## Tech Stack

- **Framework**: React (Next.js 14+ App Router)
- **Styling**: Tailwind CSS 4 + CSS variables для кастомной темы
- **Animations**: Framer Motion
- **3D/Shaders**: WebGL shaders (Three.js / custom GLSL) — для hero-секции
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel / Cloudflare Pages

---

## Design Direction

### Aesthetic: Cyber-Organic Dark

Тёмный, глубокий интерфейс с неоновыми акцентами и органическими формами. Вдохновение — ProtonVPN по структуре, но визуально ближе к киберпанку с природными элементами (отсюда "Wild").

### Color Palette (CSS Variables)

```css
:root {
  --bg-primary: #0A0E12;        /* Глубокий тёмно-синий/чёрный */
  --bg-secondary: #0F1923;      /* Карточки и секции */
  --bg-tertiary: #162230;       /* Hover-состояния */
  --accent-primary: #04D5E9;    /* Бирюзовый — основной акцент */
  --accent-secondary: #03595D;  /* Тёмный бирюзовый */
  --accent-glow: rgba(4, 213, 233, 0.15); /* Свечение */
  --text-primary: #f0f0f5;      /* Основной текст */
  --text-secondary: #7A8D9E;    /* Вторичный текст */
  --text-muted: #4A6070;        /* Подписи */
  --border: #1A3040;            /* Границы */
  --danger: #ff4444;            /* Ошибки */
}
```

#### CTA-кнопка (WildButton)
```css
background: linear-gradient(135deg, #03595D 0%, #04D5E9 100%);
/* + диагональный паттерн через ::before (класс .btn-wild-gradient) */
```

### Typography

- **Body / Headings**: SF Pro Display (нативный на Apple) → Inter (fallback) через system font stack:
  `font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Inter', 'Segoe UI', sans-serif`
- **Mono / Tech labels**: `"JetBrains Mono"` — для протоколов, кода, технических данных
- **НЕ использовать**: Plus Jakarta Sans, Roboto, Arial, Space Grotesk

### Spacing System

Используй кратные 4px: `4, 8, 12, 16, 20, 24, 32, 48, 64, 80, 96, 128`. Секции отделяются минимум `py-24` (96px) до `py-32` (128px).

---

## Landing Page Structure

### 1. Header / Navigation
- Логотип WildVPN слева (текстовый лого + иконка щита/волка)
- Навигация по якорям: Возможности, Протоколы, Приложения, Поддержка
- CTA-кнопка "Подключить" справа (accent-primary)
- Sticky header с backdrop-blur при скролле
- Мобильное меню — slide-in с анимацией

### 2. Hero Section ⭐
- **WebGL Shader фон** — использовать компонент с 21st.dev: `aliimam/web-gl-shader`
- Большой заголовок: *"Дикая скорость. Нулевые утечки."* или аналог
- Подзаголовок объясняющий суть в 1-2 предложения
- Две CTA-кнопки: "Подключить VPN" (primary) + "Узнать больше" (ghost/outline)
- Анимированные badge'и: "VLESS + Reality", "Zero Leaks", "Marzban"
- Шейдер должен быть интерактивным (реакция на движение мыши)

### 3. Features Section — "Почему WildVPN"
Сетка 2x2 или 3-колонки с карточками:

| Feature | Icon | Описание |
|---------|------|----------|
| Zero Leaks | Shield | Политика нулевых утечек — без логов, без компромиссов |
| Современные протоколы | Zap | VMess, VLESS, VLESS + Reality — обход любых блокировок |
| Мобильные приложения | Smartphone | Нативная поддержка iOS и Android |
| Быстрая поддержка | Headset | Живая поддержка 24/7 в Telegram |
| Высокая скорость | Gauge | Серверы на высокоскоростных каналах |
| Простая настройка | QrCode | Подключение за 30 секунд по QR-коду или ссылке |

Каждая карточка:
- Иконка из Lucide с accent-primary цветом
- Заголовок (bold, text-lg)
- Описание (text-secondary, 1-2 строки)
- Subtle border с hover glow эффектом
- Staggered fade-in анимация при скролле (Framer Motion `whileInView`)

### 4. Protocols Section — "Технологии"
- Визуальное объяснение протоколов VMess / VLESS / VLESS + Reality
- Для каждого протокола: название, краткое описание, badge уровня безопасности
- Можно в формате горизонтальных карточек или таблицы
- Подсвеченный "рекомендуемый" протокол (VLESS + Reality)
- Пометка "На базе Marzban" с краткой расшифровкой

### 5. How It Works — "Как подключиться"
3 шага с номерами и иконками:
1. Выбери тариф и оплати
2. Получи конфиг или QR-код
3. Подключись через приложение на iOS / Android

Анимация: steps reveal при скролле с линией-connector между ними.

### 6. Apps Section — "Приложения"
- Два блока: iOS и Android
- Mockup телефона или иконки платформ
- Кнопки "App Store" и "Google Play" (или ссылки на клиентские приложения: V2Box, Streisand, V2RayNG и т.д.)
- Упоминание что работает через стандартные клиенты V2Ray

### 7. Support Section
- Блок с призывом обратиться в поддержку
- Кнопка "Написать в Telegram" (основной канал саппорта)
- Иконки контактов: Telegram, Email
- Можно добавить FAQ-аккордеон с 4-5 вопросами

### 8. Footer
- Логотип WildVPN
- Навигационные ссылки
- Копирайт
- Ссылки на соцсети / Telegram
- Минималистичный, без перегруза

---

## Component Library — 21st.dev

При создании компонентов, в промте будут указаны конкретные компоненты с 21st.dev для использования. Общие правила:

- **Hero Section**: использовать `aliimam/web-gl-shader` как фоновый эффект
- Компоненты адаптировать под тёмную тему проекта
- При интеграции — соблюдать единый стиль (цвета, шрифты, spacing)
- Если компонент из 21st.dev требует зависимостей — устанавливать их через `npx shadcn@latest add` или вручную
- Приоритет: использовать код компонента как основу, кастомизировать под WildVPN

---

## Code Style & Conventions

### Файловая структура
```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/              # Переиспользуемые UI-компоненты
│   ├── sections/        # Секции лендинга (Hero, Features, etc.)
│   ├── layout/          # Header, Footer
│   └── effects/         # WebGL, анимации, шейдеры
├── lib/
│   └── utils.ts
├── hooks/
├── constants/
│   └── content.ts       # Весь текстовый контент лендинга
└── public/
    ├── fonts/
    └── images/
```

### Naming
- Компоненты: `PascalCase` (`HeroSection.tsx`, `FeatureCard.tsx`)
- Утилиты и хуки: `camelCase` (`useScrollAnimation.ts`)
- CSS переменные: `kebab-case` (`--bg-primary`)
- Файлы секций: `[SectionName]Section.tsx`

### Component Rules
- Каждый компонент — отдельный файл
- Props типизированы через `interface`, не `type` (для компонентов)
- Весь текстовый контент вынесен в `constants/content.ts` — НЕ хардкодить текст в JSX
- Использовать `"use client"` только где действительно нужен клиентский JS
- Изображения через `next/image` с обязательными alt-тегами
- Все интерактивные элементы доступны с клавиатуры (a11y)

### Animation Guidelines
- Framer Motion для scroll-triggered анимаций
- `whileInView` с `viewport={{ once: true }}` — анимация срабатывает один раз
- Stagger-delay между элементами: 0.1-0.15s
- Основные easing: `[0.25, 0.46, 0.45, 0.94]` (easeOutQuad)
- Длительность: 0.4-0.8s для появлений, 0.2-0.3s для hover
- WebGL-шейдер НЕ должен блокировать рендер — lazy load с fallback

### Performance
- Core Web Vitals — приоритет: LCP < 2.5s, CLS < 0.1
- Шрифты: `font-display: swap`, preload для основных начертаний
- WebGL shader: загружать асинхронно, показывать gradient-fallback до загрузки
- Изображения: WebP/AVIF, responsive sizes
- Минимизировать client-side JS: серверные компоненты по умолчанию

---

## Content Tone & Voice

- **Язык**: Русский (основной), с возможностью i18n в будущем
- **Тон**: Уверенный, технический, но понятный. Без корпоративного буллшита
- **Стиль**: Короткие предложения. Конкретика. Цифры где возможно
- **Запрещено**: "лучший VPN в мире", "невероятная скорость", overclaims
- **Хорошо**: "Подключение за 30 секунд", "Протокол VLESS + Reality обходит DPI", "Поддержка отвечает за 5 минут"

---

## Responsive Breakpoints

```
sm: 640px   — Мобильный (горизонтальный)
md: 768px   — Планшет
lg: 1024px  — Малый десктоп
xl: 1280px  — Десктоп
2xl: 1536px — Большой десктоп
```

Mobile-first подход. Все секции должны выглядеть отлично на 375px ширине.

---

## Important Notes

1. **Не создавать лишних страниц** — это одностраничный лендинг с якорными ссылками
2. **WebGL shader** — обязательный элемент hero-секции, но с graceful degradation
3. **ProtonVPN** — референс по структуре и UX, НЕ по визуалу. Наш стиль — тёмный кибер-органик
4. **Marzban** — бэкенд-панель, упоминать как технологию, но не делать на ней фокус для пользователя
5. **Клиентские приложения** — WildVPN работает через стандартные V2Ray-клиенты (V2Box, Streisand для iOS; V2RayNG, Nekobox для Android), своего приложения нет — это нормально, описать как преимущество ("используй любимый клиент")
6. **Telegram** — основной канал поддержки и коммуникации
7. **SEO** — мета-теги, Open Graph, структурированные данные
8. **Favicon** — подготовить в формате SVG + PNG fallback
