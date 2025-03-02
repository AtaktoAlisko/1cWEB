import React from "react";
import Image from "next/image";
import Link from "next/link";
import CServicesSidebar from "@/Components/CServicesSidebar";
import ServicesAdv from "@/Components/ServicesAdv";

const ERPMPage: React.FC = () => {
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
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              1С:ERP Управление предприятием
            </h1>
            <div className="h-1 w-20 bg-red-600 mb-8"></div>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              «1С:ERP Управление предприятием» позволит построить комплексную
              информационную систему для управления деятельностью любого
              предприятия. Это инновационное решение от компании «1С» использует
              комплексный подход к управлению бизнесом, лучшие международные
              методики и многолетнюю отечественную практику, что гарантирует
              гибкость настройки, удобство использования и существенный
              экономический эффект. Линейка решений «1С:ERP» охватывает все
              основные отрасли, имеет большой набор функций и программных
              инструментов, подходит для использования на предприятиях любой
              численности.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
              Более 1 000 000 рабочих мест автоматизировано на ERP-решениях
              «1С», а общая численность персонала клиентов превышает 20
              миллионов человек. Свыше 9000 предприятий уже стали пользователями
              «1С:ERP Управление предприятием».
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
                      <span className="dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Подсистемы
                </h2>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <Image
                    src="/erp.png"
                    alt="Функциональные блоки 1С:ERP"
                    width={500}
                    height={300}
                    className="w-full h-auto"
                  />
                  <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
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

export default ERPMPage;
