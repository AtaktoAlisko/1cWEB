import React from "react";
import ServicesAdvBar from "@/Components/ServicesAdvBar";
import CServicesSidebar from "@/Components/CServicesSidebar";
import ServicesAdv from "@/Components/ServicesAdv";

const AutomationManagementPage: React.FC = () => {
  return (
    <div className="pt-16 lg:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row lg:gap-8">
          <aside className="lg:w-1/4 order-2 lg:order-1">
            <div className="space-y-5">
              <CServicesSidebar />
            </div>
          </aside>
          <main className="lg:w-3/4 order-1 lg:order-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              1С:Бухгалтерия 8
            </h1>
            <div className="h-1 w-20 bg-red-600 mb-6 sm:mb-8"></div>

            <div className="space-y-6 sm:space-y-8 mb-8">
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
                «1C:Бухгалтерия 8» — это профессиональный инструмент бухгалтера,
                с помощью которого можно вести бухгалтерский и налоговый учет,
                готовить и сдавать обязательную отчетность. Программа объединила
                в себе все достижения предыдущих версий и новые решения,
                основанные на опыте практической работы бухгалтеров сотен тысяч
                предприятий и организаций.
              </p>

              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
                Понятный учет в соответствии с законодательством и потребностями
                бизнеса, экономия времени при расчетах налогов, оформлении
                документов и хозяйственных операций, эффективная поддержка
                пользователей в сочетании с высоким комфортом работы — лишь
                некоторые ключевые особенности «1C:Бухгалтерии 8».
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
                    <p className="text-center dark:text-gray-300">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-10 sm:mt-12">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Основные возможности «1С:Бухгалтерия 8»:
              </h2>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  { text: "Ведение учета нескольких организаций" },
                  {
                    text: "Автоматическое заполнение реквизитов контрагентов",
                  },
                  {
                    text: "Поддержка различных систем налогообложения",
                  },
                  {
                    text: "Работа с ЕГАИС, ГИСМ и ФГИС «Меркурий»",
                  },
                  {
                    text: "Интеграция с онлайн-ККТ и электронными чеками",
                  },
                  {
                    text: "Контроль доступа к персональным данным сотрудников",
                  },
                  {
                    text: "Экспресс-проверка ведения учета и выявление ошибок",
                  },
                  {
                    text: "Формирование отчетов и досье контрагентов",
                  },
                  {
                    text: "Оценка надежности контрагентов с помощью «1СПарк Риски»",
                  },
                  {
                    text: "Автоматизированное ведение книг покупок и продаж по НДС",
                  },
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
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <div className="mt-10 sm:mt-12">
              <ServicesAdv />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AutomationManagementPage;
