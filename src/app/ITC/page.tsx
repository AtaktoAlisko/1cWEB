import Reviews from "@/Components/Homepage/Reviews";
import Request from "@/Components/Request";
import Image from "next/image";

export default function ITSPage() {
  return (
    <div className="pt-16 lg:pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white dark:bg-[#121212] shadow-md rounded-lg border border-gray-200 dark:border-gray-700 text-center">
        <Image
          src="/ITC.png"
          alt="Логотип 1С:ИТС"
          width={160}
          height={60}
          className="mx-auto mb-6"
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          1С:ИТС – Информационно-Технологическое Сопровождение
        </h1>
        <div className="h-1 w-24 bg-red-600 mx-auto mt-4 mb-8"></div>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          1С:ИТС – это комплексное сопровождение пользователей программных
          продуктов «1С», включающее обновления, техническую поддержку,
          консультации и доступ к актуальной информации.
        </p>

        <section className="mt-12 text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Основные услуги 1С:ИТС
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Обновление платформы и конфигураций «1С:Предприятие»",
              "Диагностика и проверка информационных баз",
              "Линия консультаций по телефону и электронной почте",
              "Подборка методических материалов",
              "Продажа и установка программ и лицензий «1С»",
              "Подключение и настройка сервисов 1С:ИТС",
              "Настройка и адаптация программ 1С",
              "Обучение пользователей",
              "Обновление нетиповых конфигураций",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-sm"
              >
                <svg
                  className="w-6 h-6 text-green-600 dark:text-green-400 mr-3"
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
                <span className="text-lg text-gray-800 dark:text-gray-200">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Тарифы 1С:ИТС
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Мы предлагаем различные тарифы сопровождения, адаптированные под
            потребности вашего бизнеса. Свяжитесь с нами, чтобы выбрать
            оптимальный вариант.
          </p>
          <div className="mt-6">
            <a
              href="https://its.1c.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D23D38] text-white px-6 py-3 rounded-lg text-lg font-semibold transition hover:bg-[#b82f2c] shadow-md"
            >
              Узнать больше о 1С:ИТС
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
