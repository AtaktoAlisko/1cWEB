import React from "react";
import Image from "next/image";
import CServicesSidebar from "@/Components/CServicesSidebar";
import ServicesAdv from "@/Components/ServicesAdv";

const TradeManagementPage: React.FC = () => {
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
              1С:Управление торговлей 8
            </h1>
            <div className="h-1 w-20 bg-red-600 mb-8"></div>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              В программе могут регистрироваться как уже совершенные, так и еще
              только планируемые хозяйственные операции. «1С:Управление
              торговлей 8» автоматизирует оформление практически всех первичных
              документов торгового и складского учета, а также документов
              движения денежных средств.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              «1С:Управление торговлей 8» рассчитана на любые виды торговых
              операций. Реализованы функции учета — от ведения справочников и
              ввода первичных документов до получения различных аналитических
              отчетов.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Возможности
              </h2>
              <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                <li>
                  Ведение управленческого учета по торговому предприятию в
                  целом, поддержка холдинговых структур.
                </li>
                <li>
                  Поддержка ОСНО, УСН и ПСН с возможностью гибкой настройки
                  функционала.
                </li>
                <li>
                  Автоматический подбор данных для бухгалтерского учета и
                  интеграция с «1С:Бухгалтерия 8».
                </li>
                <li>
                  Комплексная автоматизация оптово-розничных предприятий,
                  совместимость с «1С:Розница 8».
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Кому подходит
              </h2>
              <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Руководители</strong>: анализ данных, контроль
                  товарооборота, планирование развития бизнеса.
                </li>
                <li>
                  <strong>Специалисты торговых подразделений</strong>:
                  управление товародвижением, заказами, складом и
                  ценообразованием.
                </li>
                <li>
                  <strong>Работники учетных служб</strong>: автоматизация
                  повседневной работы, соответствие законодательству.
                </li>
                <li>
                  <strong>ИТ-специалисты</strong>: масштабируемость, удобство
                  администрирования, интеграция с другими решениями.
                </li>
              </ul>
            </section>

            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <Image
                src="/image.png"
                alt="Структура 1С:Управление торговлей 8"
                width={500}
                height={300}
                className="w-full h-auto"
              />
            </div>

            <ServicesAdv />
          </main>
        </div>
      </div>
    </div>
  );
};

export default TradeManagementPage;
