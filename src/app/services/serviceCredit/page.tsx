import React from "react";
import Image from "next/image";
import Link from "next/link";
import ServicesSidebar from "@/Components/ServicesSidebar";

const CreditManagementPage: React.FC = () => {
  return (
    <div className="pt-16 lg:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:flex lg:gap-8">
        <aside className="lg:w-1/4 order-2 lg:order-1">
            <div className="space-y-5">
              <ServicesSidebar />
            </div>
          </aside>
          <main className="lg:w-3/4 order-1 lg:order-2">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              1С:ERP Управление предприятием
            </h1>
            <div className="h-1 w-20 bg-red-600 mb-8"></div>

            <p className="text-lg text-gray-700 mb-6">
              «1С:ERP Управление предприятием 2 для Казахстана» —инновационное
              решение для построения комплексных информационных систем
              управления деятельностью многопрофильных предприятий с учетом
              лучших мировых и отечественных практик автоматизации крупного и
              среднего бизнеса.
            </p>

            <p className="text-lg text-gray-700 mb-12">
              Решение предназначено для оптимизации процесса производства,
              составления достоверного графика деятельности с учетом загрузки
              оборудования и обеспечения ресурсами.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Кому подойдет решение
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  "Строительство",
                  "Финансовый сектор",
                  "Сельское хозяйство",
                  "Торговля",
                ].map((sector, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="bg-red-600 text-white p-4 rounded-full mb-4">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-center font-medium">{sector}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Возможности
                </h2>
                <ul className="space-y-4">
                  {[
                    "Одновременное ведение учёта по большому количеству предприятий в одной информационной базе.",
                    "Наличие особого партионного учёта. Упрощение сопоставимости данных в бухгалтерском и налоговом учёте",
                    "Возможность осуществления учёта деятельности различных ИП с упрощённой системой налогообложения.",
                    "Наличие аналитического опционального учёта по месту хранения.",
                    "Опция по учёту товаров по их продажной цене даже в розничной торговле.",
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
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Подсистемы
                </h2>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">
                    1С:ERP Управление предприятием - построение комплексной
                    информационной системы управления предприятием
                  </h3>
                  <Image
                    src="/card1.png"
                    alt="Функциональные блоки 1С:ERP"
                    width={500}
                    height={300}
                    className="w-full h-auto"
                  />
                  <p className="mt-4 text-sm text-gray-600">
                    Функциональные блоки 1С:ERP
                  </p>
                </div>
              </section>
            </div>

            <section className="mb-12 bg-gray-50 rounded-lg p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Преимущества
              </h2>
              <div className="h-1 w-20 bg-red-600 mb-8"></div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: (
                      <svg
                        className="w-10 h-10"
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
                    ),
                    title: "Удобный интерфейс для пользователя",
                    description:
                      "Позволяет учитывать потребности и особенности работы каждого пользователя",
                  },
                  {
                    icon: (
                      <svg
                        className="w-10 h-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    ),
                    title: "Эффективная система поддержки",
                    description:
                      "Качественная система послепродажного обслуживания",
                  },
                  {
                    icon: (
                      <svg
                        className="w-10 h-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    ),
                    title: "Интеграция с приложениями семейства 1С",
                    description:
                      "Эффективное интегрирование с другими приложениями",
                  },
                ].map((advantage, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-md transition duration-300 ease-in-out hover:shadow-lg"
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-red-600 text-white p-3 rounded-full mr-4">
                        {advantage.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {advantage.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">{advantage.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CreditManagementPage;
