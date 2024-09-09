import React from "react";
import Image from "next/image";
import Link from "next/link";
import ServicesSidebar from "@/Components/ServicesSidebar";
import ServicesAdv from "@/Components/ServicesAdv";

const InfoManagementPage: React.FC = () => {
  return (
    <div className="pt-16 lg:pt-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:flex lg:gap-8">
          <aside className="lg:w-1/4">
            <ServicesSidebar />
          </aside>
          <main className="lg:w-3/4">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Техническое сопровождение информационных систем
            </h1>
            <div className="h-1 w-20 bg-red-600 mb-8"></div>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Стабильная работа информационных систем, в том числе «1С:Предприятие», является залогом эффективной деятельности Вашей организации.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
              Наша компания оказывает следующие услуги по технической поддержке информационных систем «1С:Предприятие»:
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Наши услуги
              </h2>
              <ul className="space-y-4">
                {[
                  "Консультирование по текущим вопросам практического применения программного продукта",
                  "Обновления релизов конфигураций и платформы",
                  "Обеспечение взаимодействия программных продуктов с программами для сдачи финансовой и налоговой отчетности",
                  "Незначительные изменения существующих объектов конфигурации (документов, отчетов)",
                  "Администрирование, настройка, осуществление резервного копирования и восстановления данных",
                  "Сервисные выезды и работы, установка программных продуктов 1С и других, сопутствующих программных продуктов",
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
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <ServicesAdv />
          </main>
        </div>
      </div>
    </div>
  );
};

export default InfoManagementPage;