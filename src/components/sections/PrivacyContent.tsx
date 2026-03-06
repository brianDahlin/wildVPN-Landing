import { SITE } from "@/constants/content";

export function PrivacyContent() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="max-w-3xl mx-auto px-6 md:px-8">

        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Политика конфиденциальности
          </h1>
          <p className="text-[#7A8D9E] text-sm">
            Последнее обновление: 1 марта 2025 г.
          </p>
          <div className="mt-6 w-full border-t border-dashed border-[#1A3040]" />
        </div>

        {/* Content */}
        <div className="space-y-10 text-[#C8D4DE] leading-relaxed">

          {/* 1. Введение */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
              1. Введение
            </h2>
            <p>
              {SITE.name} (далее — «Сервис», «мы», «нас») предоставляет услуги VPN-подключения
              с использованием современных протоколов шифрования. Настоящая Политика
              конфиденциальности описывает, какие данные мы собираем (и не собираем),
              как мы их используем и какие меры принимаем для защиты вашей приватности.
            </p>
            <p className="mt-3">
              Используя наш Сервис, вы соглашаетесь с условиями данной Политики.
              Если вы не согласны — пожалуйста, прекратите использование Сервиса.
            </p>
          </div>

          {/* 2. Политика нулевых логов */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
              2. Политика нулевых логов (Zero Logs)
            </h2>
            <p>
              {SITE.name} придерживается строгой политики нулевых логов. Когда вы используете
              наш Сервис, мы <strong className="text-white">НЕ</strong> выполняем следующее:
            </p>
            <ul className="mt-4 space-y-2 list-none">
              <li className="flex items-start gap-3">
                <span className="text-[#04D5E9] mt-1 shrink-0">✕</span>
                <span>Не записываем и не отслеживаем ваш трафик, посещённые сайты или содержимое передаваемых данных</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#04D5E9] mt-1 shrink-0">✕</span>
                <span>Не логируем ваш реальный IP-адрес или IP-адрес VPN-сервера, к которому вы подключены</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#04D5E9] mt-1 shrink-0">✕</span>
                <span>Не сохраняем временные метки подключений и отключений</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#04D5E9] mt-1 shrink-0">✕</span>
                <span>Не ограничиваем и не фильтруем протоколы, устройства или приложения</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#04D5E9] mt-1 shrink-0">✕</span>
                <span>Не снижаем скорость подключения намеренно (без троттлинга)</span>
              </li>
            </ul>
            <p className="mt-4">
              Наши VPN-серверы работают на основе панели управления Marzban и используют
              протоколы VMess, VLESS и VLESS + Reality — ни один из них не предусматривает
              серверного логирования пользовательских сессий.
            </p>
          </div>

          {/* 3. Какие данные мы собираем */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
              3. Какие данные мы собираем
            </h2>
            <p>Для функционирования Сервиса мы собираем минимально необходимый набор данных:</p>

            <div className="mt-6 space-y-4">
              <div className="p-5 rounded-xl bg-[#0F1923] border border-[#1A3040]">
                <h3 className="text-white font-semibold mb-2">Данные аккаунта</h3>
                <p className="text-sm">
                  При создании аккаунта мы можем запросить адрес электронной почты или Telegram-аккаунт
                  для идентификации, доставки конфигурационных данных и связи с поддержкой.
                  Мы не требуем указания реального имени, адреса или телефона.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#0F1923] border border-[#1A3040]">
                <h3 className="text-white font-semibold mb-2">Платёжные данные</h3>
                <p className="text-sm">
                  Мы не обрабатываем платёжные данные напрямую. Оплата производится через
                  сторонние платёжные системы или Telegram-бота. Мы сохраняем только факт оплаты
                  и срок действия подписки — без данных банковских карт или платёжных реквизитов.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#0F1923] border border-[#1A3040]">
                <h3 className="text-white font-semibold mb-2">Техническая информация</h3>
                <p className="text-sm">
                  Для обеспечения качества сервиса мы можем собирать агрегированные (обезличенные)
                  данные: общее количество активных подключений на сервере, суммарный объём
                  переданного трафика (без привязки к конкретному пользователю). Эти данные
                  не позволяют идентифицировать отдельного пользователя.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Чего мы НЕ собираем */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
              4. Чего мы НЕ собираем
            </h2>
            <p>Для полной прозрачности — следующие данные никогда не собираются и не хранятся нашим Сервисом:</p>
            <ul className="mt-4 space-y-2 list-none">
              <li className="flex items-start gap-3">
                <span className="text-[#04D5E9] mt-1 shrink-0">—</span>
                <span>Историю посещённых сайтов и DNS-запросов</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#04D5E9] mt-1 shrink-0">—</span>
                <span>Содержимое трафика (файлы, сообщения, данные форм)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#04D5E9] mt-1 shrink-0">—</span>
                <span>Исходный IP-адрес пользователя</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#04D5E9] mt-1 shrink-0">—</span>
                <span>Временные метки подключений</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#04D5E9] mt-1 shrink-0">—</span>
                <span>Информацию об устройстве (модель, IMEI, серийный номер)</span>
              </li>
            </ul>
          </div>

          {/* 5. Безопасность данных */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
              5. Безопасность данных
            </h2>
            <p>
              Все серверы {SITE.name} работают с полным шифрованием диска. Конфигурации пользователей
              передаются по защищённым каналам. Протокол VLESS + Reality обеспечивает дополнительный
              уровень маскировки, делая VPN-трафик неотличимым от обычного HTTPS-соединения.
            </p>
            <p className="mt-3">
              Мы не храним конфигурационные ключи в открытом виде на серверах.
              В случае физического изъятия сервера — восстановление пользовательских данных невозможно,
              так как их попросту не существует.
            </p>
          </div>

          {/* 6. Передача данных третьим лицам */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
              6. Передача данных третьим лицам
            </h2>
            <p>
              Мы не продаём, не передаём и не предоставляем доступ к данным пользователей
              третьим лицам, рекламным сетям или аналитическим платформам.
            </p>
            <p className="mt-3">
              В случае получения юридического запроса на предоставление данных — мы физически
              не можем предоставить информацию о действиях пользователя, так как не храним
              логов подключений и активности.
            </p>
          </div>

          {/* 7. Веб-сайт */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
              7. Веб-сайт
            </h2>
            <p>
              Наш веб-сайт не использует трекеры, аналитические скрипты (Google Analytics,
              Яндекс.Метрика и т.п.) или рекламные пиксели. Мы не устанавливаем cookies
              для отслеживания поведения пользователей на сайте.
            </p>
            <p className="mt-3">
              Сайт размещён на платформе Vercel. Vercel может собирать стандартные серверные
              логи (IP-адрес, User-Agent) в рамках своей инфраструктуры — данные логи не
              контролируются нами и регулируются политикой конфиденциальности Vercel.
            </p>
          </div>

          {/* 8. Клиентские приложения */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
              8. Клиентские приложения
            </h2>
            <p>
              {SITE.name} работает через сторонние клиентские приложения с открытым исходным кодом:
              V2Box и Streisand (iOS), V2RayNG и Nekobox (Android). Мы не разрабатываем
              собственное приложение и не несём ответственности за политику конфиденциальности
              данных клиентов — рекомендуем ознакомиться с их политиками отдельно.
            </p>
            <p className="mt-3">
              Конфигурационные данные (subscription link) передаются напрямую в приложение
              и не проходят через сторонние серверы.
            </p>
          </div>

          {/* 9. Изменения политики */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
              9. Изменения политики
            </h2>
            <p>
              Мы оставляем за собой право обновлять настоящую Политику конфиденциальности.
              При внесении существенных изменений мы уведомим пользователей через Telegram-канал
              или на главной странице сайта. Дата последнего обновления указана в начале документа.
            </p>
          </div>

          {/* 10. Связь */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
              10. Связь с нами
            </h2>
            <p>
              Если у вас есть вопросы по данной Политике конфиденциальности или вы хотите
              запросить удаление вашего аккаунта и связанных данных, свяжитесь с нами:
            </p>
            <div className="mt-4 p-5 rounded-xl bg-[#0F1923] border border-[#1A3040]">
              <p className="text-sm">
                <span className="text-[#7A8D9E]">Telegram поддержка:</span>{" "}
                <a
                  href={SITE.telegramSupport}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#04D5E9] hover:underline"
                >
                  @wildvpn_support
                </a>
              </p>
              <p className="text-sm mt-2">
                <span className="text-[#7A8D9E]">Telegram канал:</span>{" "}
                <a
                  href={SITE.telegramChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#04D5E9] hover:underline"
                >
                  @wildvpn
                </a>
              </p>
            </div>
          </div>

          {/* Separator */}
          <div className="pt-6">
            <div className="w-full border-t border-dashed border-[#1A3040]" />
            <p className="mt-6 text-sm text-[#4A6070]">
              © 2025 {SITE.name}. Все права защищены.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
