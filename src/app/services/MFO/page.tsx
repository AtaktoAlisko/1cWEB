import React from "react";
import Image from "next/image";
import Link from "next/link";
import ServicesSidebar from "@/Components/ServicesSidebar";
import ServicesAdv from '@/Components/ServicesAdv';

const CreditManagementPage: React.FC = () => {
    return (
        <div className="pt-16 lg:pt-24 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="lg:flex lg:gap-8">
                    <aside className="lg:w-1/4">
                        <ServicesSidebar />
                    </aside>
                    <main className="lg:w-3/4">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                            Управление микрофинансовой организацией (МФО)
                        </h1>
                        <div className="h-1 w-20 bg-red-600 mb-8"></div>

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                            Разработка и внедрение комплексной информационной системы управления кредитованием.
                        </h2>

                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                            Данное комплексное решение на базе системы 1С:Предприятие8 предназначено для банков и компаний, специализирующихся на предоставлении услуг в области кредитования и финансового лизинга. Решение позволяет автоматизировать все бизнес-процессы выдачи, учета и мониторинга кредитных/лизинговых сделок,обладая при этом возможностью гибкой настройки и адаптации под специфику конкретной организации.
                        </p>

                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                            Разработка данного решения базируется на основе многолетнего опыта разработки и внедрения систему правления лизингом и кредитованием в ряде компаний Казахстана.
                        </p>

                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
                            Предлагаемое решение полностью построено на базе системы 1С:Предприятие8, поэтому вся управленческая, финансовая и прочая информация, а также весь документооборот сведены в системе воедино.
                            Так как система реализована по модульному принципу, имеется возможность запуска отдельных модулей в зависимости от потребностей заказчика.
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
                                        <p className="text-center dark:text-gray-300">{item.name}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                                Состав модулей системы:
                            </h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <ul className="space-y-2">
                                    {[
                                        "Рассмотрение заявок",
                                        "Заключение договоров",
                                        "Учет залогового имущества",
                                        "Учет взаиморасчетов по выданным займам",
                                        "Регламентные операции",
                                        "Постредитное обслуживание",
                                        "Работа с проблемными заемщиками",
                                        "Управление рисками",
                                        "Учет привлеченных займов и ценных бумаг",
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <svg
                                                className="w-5 h-5 text-red-600 mr-2 flex-shrink-0"
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
                                <ul className="space-y-2">
                                    {[
                                        "Казначейство",
                                        "Бюджетирование",
                                        "Взаиморасчеты с поставщиками предметов лизинга",
                                        "Отчетность",
                                        "Интеграция",
                                        "Кадровый учет и расчет заработной платы",
                                        "Регламентированный учет",
                                        "Управление закупками",
                                        "Документооборот",
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <svg
                                                className="w-5 h-5 text-red-600 mr-2 flex-shrink-0"
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
                            </div>
                        </section>
                        <ServicesAdv />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default CreditManagementPage;