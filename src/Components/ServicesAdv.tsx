import React from 'react';

const ServicesAdv = () => {
  const advantages = [
    {
      icon: (
        <svg
          className="w-12 h-12 md:w-16 md:h-16"
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
          className="w-12 h-12 md:w-16 md:h-16"
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
          className="w-12 h-12 md:w-16 md:h-16"
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
  ];

  return (
    <section className="mb-8 sm:mb-12 bg-gray-50 rounded-lg p-4 sm:p-6 lg:p-8 shadow-sm">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
        Преимущества
      </h2>
      <div className="h-1 w-16 sm:w-20 bg-red-600 mb-6 sm:mb-8"></div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {advantages.map((advantage, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-4 sm:p-6 shadow-md transition duration-300 ease-in-out hover:shadow-lg flex flex-col sm:items-center sm:text-center"
          >
            <div className="flex items-center sm:flex-col sm:items-center mb-4">
              <div className="bg-red-600 text-white p-3 rounded-full mr-4 sm:mr-0 sm:mb-4 flex-shrink-0">
                {advantage.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 sm:text-center">
                {advantage.title}
              </h3>
            </div>
            <p className="text-sm md:text-base text-gray-600 sm:text-center">
              {advantage.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesAdv;