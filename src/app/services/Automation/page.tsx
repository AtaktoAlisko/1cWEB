import React from "react";
import Image from "next/image";
import Link from "next/link";
import ServicesSidebar from "@/Components/ServicesSidebar";
import ServicesAdvBar from "@/Components/ServicesAdvBar";

const AutomationManagementPage: React.FC = () => {
  return (
    <div className="pt-16 lg:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row lg:gap-8">
          {/* <aside className="w-full lg:w-1/4 mb-8 lg:mb-0 order-2 lg:order-1"> */}
          <aside className="lg:w-1/4">
            <div className="space-y-5">
              <ServicesSidebar />
              <ServicesAdvBar />
            </div>
          </aside>
          <main className="lg:w-3/4 ">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Автоматизация бизнес-процессов
            </h1>
            <div className="h-1 w-20 bg-red-600 mb-6 sm:mb-8"></div>

            <div className="space-y-6 sm:space-y-8 mb-8">
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
                Система «Управление микрофинансовой организацией» (УМФО) предлагает комплексное решение для автоматизации ключевых бизнес-процессов финансовых организаций. Это инновационное решение разработано на базе системы 1С Предприятие 8 Бухгалтерский учет для Казахстана ред. 3.0 и полностью интегрировано с бухгалтерским учетом.
              </p>

              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
                УМФО реализована с использованием облачных технологий и предоставляется на основе аренды (размещение базы данных на сервере компании «ERPCloud» с подключением через Интернет или VPN), либо путем передачи лицензий для установки на сервер заказчика.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Кому подойдет решение
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: "🏗️", name: "Строительство" },
                  { icon: "🏦", name: "Финансовый сектор" },
                  { icon: "🚜", name: "Сельское хозяйство" },
                  { icon: "🛒", name: "Торговля" },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="text-4xl mb-2">{item.icon}</div>
                    <p className="text-center dark:text-gray-300">{item.name}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-10 sm:mt-12">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Основные автоматизируемые процессы
              </h2>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  { text: "Привлечение клиентов и CRM функции", emoji: "🤝" },
                  { text: "Рассмотрение кредитных заявок", emoji: "📝" },
                  { text: "Открытие кредитных линий и выдача займов", emoji: "💰" },
                  { text: "Формирование договоров и расчет графиков погашения", emoji: "📊" },
                  { text: "Учет задолженности и начисление вознаграждений", emoji: "💼" },
                  { text: "Посткредитное обслуживание", emoji: "🛠️" },
                  { text: "Работа с проблемными займами", emoji: "🚨" },
                  { text: "Учет залогового обеспечения", emoji: "🏠" },
                  { text: "Формирование отчетности", emoji: "📈" },
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 dark:text-red-400 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                      {item.text} {item.emoji}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-10 sm:mt-12">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Детальные возможности
              </h2>
              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-white">Работа с клиентами</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    <li>Формирование рассылок и проведение обзвонов</li>
                    <li>Запрос кредитной истории из ПКБ</li>
                    <li>Рассылка уведомлений через SMS, WhatsApp, Telegram</li>
                    <li>Формирование электронных и печатных документов по шаблонам</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-white">Кредитование и займы</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    <li>Учет балансовой и забалансовой задолженности</li>
                    <li>Начисление вознаграждения, пени, учет просроченных обязательств</li>
                    <li>Мониторинг целевого использования займов</li>
                    <li>Учет судебной задолженности</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mt-10 sm:mt-12">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Дополнительные функции
              </h2>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 sm:p-6 rounded-lg">
                <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  <li>Учет залогового обеспечения и гарантий</li>
                  <li>Страхование, осмотры залогового обеспечения</li>
                  <li>Учет правоустанавливающих документов</li>
                  <li>Формирование кредитного досье</li>
                  <li>Передача сведений о выданных займах в кредитные бюро</li>
                  <li>Учет привлеченных средств, депозитов, ценных бумаг</li>
                  <li>Периодические расчеты (дисконтирование, расчет провизий)</li>
                </ul>
                <div className="mt-4 sm:mt-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900 dark:text-white">Для лизинговых компаний:</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    <li>Учет договоров с поставщиками предметов лизинга</li>
                    <li>Накопление стоимости предметов лизинга, включая доп. расходы</li>
                    <li>Передача предметов лизинга</li>
                    <li>Страхование, осмотры предметов лизинга</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mt-10 sm:mt-12">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Особенности системы
              </h2>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  "Ведение учёта по большому количеству предприятий в одной информационной базе",
                  "Наличие особого партионного учёта",
                  "Упрощение сопоставимости данных в бухгалтерском и налоговом учёте",
                  "Возможность учёта деятельности различных ИП с упрощённой системой налогообложения",
                  "Наличие аналитического опционального учёта по месту хранения",
                  "Опция учёта товаров по их продажной цене в розничной торговле",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <div className="mt-10 sm:mt-12">
              {/* Additional content if needed */}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AutomationManagementPage;