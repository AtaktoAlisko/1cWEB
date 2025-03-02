import React from "react";
import ServicesSidebar from "@/Components/ServicesSidebar";
import ServicesAdv from "@/Components/ServicesAdv";
import CServicesSidebar from "@/Components/CServicesSidebar";

const AcoutingPage: React.FC = () => {
  return (
    <div className="pt-16 lg:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:flex lg:gap-8">
          {/* Sidebar for large screens */}
          <aside className="lg:w-1/4 order-2 lg:order-1 hidden lg:block">
            <div className="space-y-5">
              <CServicesSidebar />
            </div>
          </aside>
          <main className="lg:w-3/4 order-1 lg:order-2">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              1С:Управление холдингом
            </h1>
            <div className="h-1 w-20 bg-red-600 mb-8"></div>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Внедрение решения Управление холдингом
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              «1С:Управление холдингом 8» — это инструмент эффективной
              автоматизации работы управляющих компаний и финансовых служб
              бизнес-единиц холдингов. Адекватные сроки внедрения в сочетании с
              невысокой стоимостью поддержки позволяют быстро достичь
              принципиально новых управленческих и финансовых результатов.
              Точные цена и сроки внедрения «1С:Управление холдингом 8»
              определяются специалистами партнеров «1С» в ходе предпроектного
              обследования вашей компании.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
              В эффективности внедрения «1С:Управление холдингом 8» уже смогли
              убедиться более 600 корпоративных клиентов по всей стране, которые
              используют продукт для учета, бюджетирования, бизнес-анализа и
              автоматизации централизованных функций. Комплексное решение класса
              CPM может эффективно интегрироваться с любыми решениями на
              платформе «1С».
            </p>

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

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Предназначен для следующих областей учета
                </h2>
                <ul className="space-y-4">
                  {[
                    "бюджетирование и централизованное казначейство;",
                    "консолидация управленческой отчетности и бизнес-анализ;",
                    "управление договорами;",
                    "управление инвестиционными проектами;",
                    "централизованное управление закупками и активами;",
                    "стратегическое управление в соответствии с Balanced Scorecard (ССП, КПР);",
                    "учет, подготовка отдельной и консолидированной отчетности по МСФО;",
                    "управление мастер-данными (нормативно-справочной информацией) группы компаний.",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-red-600 mr-2 flex-shrink-0"
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
                      <span className="dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Вы получаете следующие возможности
                </h2>
                <ul className="space-y-4">
                  {[
                    'бесшовную интеграцию с системами учета и управления на платформе "1С:Предприятие 8" с помощью прямого соединения, включая расшифровку до документа внешней учетной системы;',
                    "интеграцию с любыми внешними учетными системами с помощью таких технологий, как веб-сервисы и ADO;",
                    "управление мастер-данными (эталонной и централизованной нормативно-справочной информацией) группы компаний;",
                    'в дополнение к тонкому и веб-клиенту "1С:Управление холдингом 8 для Казахстана" включает add-on для Microsoft Excel – специальный клиент, позволяющий в целях бюджетирования и анализа управленческой отчетности работать с данными информационной базы "1С:Управления холдингом 8 для Казахстана", не покидая привычного для многих пользователей офисного пакета;',
                    'архитектура программного продукта позволяет с минимальной трудоемкостью осуществить объединение с учетными конфигурациями на платформе "1С:Предприятие" версии 8.3',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-red-600 mr-2 flex-shrink-0"
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
                      <span className="dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
            <ServicesAdv />
          </main>
        </div>

        {/* Sidebar for small and medium screens */}
        <div className="mt-10 sm:mt-12 block lg:hidden">
          <ServicesSidebar />
        </div>
      </div>
    </div>
  );
};

export default AcoutingPage;
