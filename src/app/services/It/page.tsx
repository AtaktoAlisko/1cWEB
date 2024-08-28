import React from "react";
import Image from "next/image";
import Link from "next/link";
import ServicesSidebar from "@/Components/ServicesSidebar";
import ServicesAdv from "@/Components/ServicesAdv";

const ItManagementPage: React.FC = () => {
  return (
    <div className="pt-16 lg:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:flex lg:gap-8">
          <aside className="lg:w-1/4">
            <ServicesSidebar />
          </aside>
          <main className="lg:w-3/4">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              It-аудит и оптимизация 1C(нужны данные)
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
                  { icon: "🏗️", name: "Строительство" },
                  { icon: "🏦", name: "Финансовый сектор" },
                  { icon: "🚜", name: "Сельское хозяйство" },
                  { icon: "🛒", name: "Торговля" },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="text-4xl mb-2">{item.icon}</div>
                    <p className="text-center">{item.name}</p>
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
                  <Image
                    src="/erp.png"
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
            <ServicesAdv />
          </main>
        </div>
      </div>
    </div>
  );
};

export default ItManagementPage;
