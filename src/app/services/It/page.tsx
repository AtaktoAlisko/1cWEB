import React from "react";
import Image from "next/image";
import Link from "next/link";
import ServicesSidebar from "@/Components/ServicesSidebar";
import ServicesAdv from "@/Components/ServicesAdv";

const ItManagementPage: React.FC = () => {
  return (
    <div className="pt-16 lg:pt-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:flex lg:gap-8">
          {/* Adjusting the order for mobile */}
          <main className="lg:w-3/4 order-1 lg:order-2">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              It-аудит и оптимизация 1C
            </h1>
            <div className="h-1 w-20 bg-red-600 mb-8"></div>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              IT аудит – независимая проверка IT инфраструктуры и отражения
              бизнес процессов в информационных системах компании.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
              Решение предназначено для проведения независимой проверки IT
              инфраструктуры и анализа того, как бизнес-процессы отражаются в
              информационных системах компании.
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
                  Услуги по проведению аудита включают:
                </h2>
                <ul className="space-y-4">
                  {[
                    "анализ текущей IT – инфраструктуры (оборудование и программное обеспечение). ",
                    "анализ бизнес процессов IT подразделений (ITIL).",
                    "анализ информационных систем и соответствие регламентам и процессам компании.",
                    "выявление и анализ существующих проблем.",
                    "выработка рекомендаций, путей решения проблем.",
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
                  Вы получаете в результате аудита:
                </h2>
                <ul className="space-y-4">
                  {[
                    "выявление истинных причин низкой эффективности используемой инфраструктуры и информационных систем. ",
                    "получение доступных и обоснованных рекомендаций, касающихся улучшения работы ИС, оптимизации затрат на информационные технологии, а также обозначения мероприятий, призванных улучшить качество IT-сервиса.",
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

          <aside className="lg:w-1/4 order-3 lg:order-1">
            <div className="space-y-5">
              <ServicesSidebar />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ItManagementPage;
