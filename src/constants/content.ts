export const SITE = {
  name: "WildVPN",
  tagline: "Дикая скорость. Нулевые утечки.",
  description:
    "VPN нового поколения на протоколах VLESS + Reality. Обходит DPI, не хранит логи, работает на iOS и Android.",
  telegramSupport: "https://t.me/wildvpn_support",
  telegramChannel: "https://t.me/wildvpn",
};

export const NAV_LINKS = [
  { label: "Возможности", href: "/#features" },
  { label: "Протоколы", href: "/#protocols" },
  { label: "Тарифы", href: "/#pricing" },
  { label: "Приложения", href: "/#apps" },
  { label: "Поддержка", href: "/#support" },
];

export const FEATURES = [
  {
    icon: "Shield",
    title: "Zero Leaks",
    description:
      "Политика нулевых утечек. Без логов, без компромиссов. Ваш трафик — только ваш.",
  },
  {
    icon: "Zap",
    title: "Современные протоколы",
    description:
      "VMess, VLESS и VLESS + Reality — обход DPI и блокировок любого уровня.",
  },
  {
    icon: "Smartphone",
    title: "iOS и Android",
    description:
      "Работает через проверенные клиенты: V2Box, Streisand, V2RayNG, Nekobox.",
  },
  {
    icon: "Headset",
    title: "Живая поддержка",
    description:
      "Отвечаем в Telegram за 5 минут. Поможем с настройкой и подбором протокола.",
  },
  {
    icon: "Gauge",
    title: "Высокая скорость",
    description:
      "Серверы на каналах 1 Гбит/с. Без ограничений по трафику и скорости.",
  },
  {
    icon: "QrCode",
    title: "Подключение за 30 секунд",
    description:
      "Получи ссылку или QR-код — отсканируй и пользуйся. Без сложных настроек.",
  },
];

export const PROTOCOLS = [
  {
    name: "VMess",
    description:
      "Классический протокол V2Ray. Надёжное шифрование, широкая совместимость.",
    security: "Высокая",
    recommended: false,
  },
  {
    name: "VLESS",
    description:
      "Облегчённый протокол без избыточного шифрования. Быстрее VMess на 15-20%.",
    security: "Высокая",
    recommended: false,
  },
  {
    name: "VLESS + Reality",
    description:
      "Золотой стандарт обхода блокировок. Маскирует трафик под обычный HTTPS. Не определяется DPI.",
    security: "Максимальная",
    recommended: true,
  },
];

export const PRICING_PLANS = [
  {
    name: "Пробный",
    price: "0",
    period: "3 дня",
    description: "Попробуй бесплатно",
    features: [
      "1 устройство",
      "VLESS протокол",
      "1 локация",
      "Ограничение 5 ГБ",
    ],
    cta: "Попробовать",
    highlighted: false,
  },
  {
    name: "Базовый",
    price: "149",
    period: "мес",
    description: "Для повседневного использования",
    features: [
      "3 устройства",
      "Все протоколы",
      "5 локаций",
      "Безлимитный трафик",
      "Поддержка 24/7",
    ],
    cta: "Подключить",
    highlighted: true,
  },
  {
    name: "Про",
    price: "299",
    period: "мес",
    description: "Максимум возможностей",
    features: [
      "5 устройств",
      "Все протоколы",
      "Все локации",
      "Безлимитный трафик",
      "Приоритетная поддержка",
      "Выделенный IP",
    ],
    cta: "Подключить",
    highlighted: false,
  },
];

export const STEPS = [
  {
    step: 1,
    title: "Выбери тариф",
    description: "Выбери подходящий план и оплати через Telegram-бота.",
  },
  {
    step: 2,
    title: "Получи конфиг",
    description:
      "Мгновенно получи ссылку подключения или QR-код в личные сообщения.",
  },
  {
    step: 3,
    title: "Подключись",
    description:
      "Открой V2Box (iOS) или V2RayNG (Android), отсканируй код — готово.",
  },
];

export const STEPS_FEATURES = [
  {
    step: "Шаг 1",
    title: "Выбери тариф",
    content:
      "Выбери подходящий план и оплати через Telegram-бота. Пробный период — бесплатно на 3 дня.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
  },
  {
    step: "Шаг 2",
    title: "Получи конфиг",
    content:
      "Мгновенно получи ссылку подключения или QR-код прямо в Telegram. Никаких сложных настроек.",
    image:
      "https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&w=2070&auto=format&fit=crop",
  },
  {
    step: "Шаг 3",
    title: "Подключись и пользуйся",
    content:
      "Открой V2Box (iOS) или V2RayNG (Android), отсканируй QR-код — готово за 30 секунд.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
  },
];

export const FAQ = [
  {
    question: "Что такое VLESS + Reality?",
    answer:
      "Это самый современный протокол для обхода блокировок. Он маскирует VPN-трафик под обычное HTTPS-соединение, что делает его неотличимым от обычного интернет-трафика для систем DPI.",
  },
  {
    question: "Какие приложения нужны для подключения?",
    answer:
      "Для iOS: V2Box или Streisand (бесплатные в App Store). Для Android: V2RayNG или Nekobox (бесплатные в Google Play). Мы пришлём инструкцию с настройкой.",
  },
  {
    question: "Вы храните логи?",
    answer:
      "Нет. Мы придерживаемся строгой политики Zero Logs. Сервер не записывает, какие сайты вы посещаете, не хранит IP-адреса и временные метки подключений.",
  },
  {
    question: "Что если VPN не работает?",
    answer:
      "Напишите в поддержку в Telegram — мы ответим за 5 минут и поможем сменить протокол или сервер. В 99% случаев проблема решается за один шаг.",
  },
  {
    question: "Можно ли вернуть деньги?",
    answer:
      "Да, в течение 7 дней с момента оплаты мы вернём полную сумму без вопросов.",
  },
];

export const APP_LINKS = {
  ios: "https://apps.apple.com/app/v2box-v2ray-client/id6446814690",
  android: "https://play.google.com/store/apps/details?id=com.v2ray.ang",
  desktop: "#apps",
};

export const APPS = {
  ios: [
    {
      name: "V2Box",
      url: "https://apps.apple.com/app/v2box-v2ray-client/id6446814690",
    },
    {
      name: "Streisand",
      url: "https://apps.apple.com/app/streisand/id6450534064",
    },
  ],
  android: [
    {
      name: "V2RayNG",
      url: "https://play.google.com/store/apps/details?id=com.v2ray.ang",
    },
    {
      name: "Nekobox",
      url: "https://github.com/MatsuriDayo/NekoBoxForAndroid/releases",
    },
  ],
};
