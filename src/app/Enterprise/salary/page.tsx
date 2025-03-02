import React from "react";
import Image from "next/image";
import CServicesSidebar from "@/Components/CServicesSidebar";
import ServicesAdv from "@/Components/ServicesAdv";

const ZUPPage: React.FC = () => {
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
              1С:Зарплата и управление персоналом 8
            </h1>
            <div className="h-1 w-20 bg-red-600 mb-8"></div>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              В «1С:Зарплате и управлении персоналом 8» поддерживаются все
              основные процессы управления персоналом, а также процессы
              кадрового учета, расчета зарплаты, планирования расходов на оплату
              труда, исчисления НДФЛ и страховых взносов.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Удобные сервисы для повышения эффективности
              </h2>
              <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                <li>
                  <strong>1С-Отчетность</strong> — для подготовки и сдачи
                  регламентированной отчетности из программ «1С» во все
                  контролирующие органы.
                </li>
                <li>
                  <strong>Информационная система 1С:ИТС</strong> — справочная
                  информация по ведению кадрового учета, расчету заработной
                  платы и работе в программе «1С:Зарплата и управление
                  персоналом 8».
                </li>
                <li>
                  <strong>1С:ДиректБанк</strong> — для прямого обмена с банками
                  информацией по зарплатным проектам в электронном виде.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Соответствие законодательству и безопасность
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Типовое решение «1С:Зарплата и управление персоналом 8»
                используется совместно с защищенным программным комплексом
                «1С:Предприятие, версия 8.3z» (сертификат ФСТЭК России No 3442
                от 02.09.2015). В программе реализована возможность регистрации
                доступа к персональным данным и их обработки.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Гибкие отчеты для различных пользователей
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Удобные и гибкие механизмы настройки отчетов позволяют получать
                полную и достоверную информацию в самых разных аналитических
                разрезах, для различных категорий пользователей: руководства,
                бухгалтерии, службы управления персоналом, кадровой службы и
                других.
              </p>
            </section>

            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <Image
                src="/picture.jpg"
                alt="Структура 1С:Зарплата и управление персоналом 8"
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

export default ZUPPage;
