import React from 'react';

const ServicesAdvBar = () => {
  const advantages = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: "Удобный интерфейс",
      description: "Учитывает потребности каждого пользователя",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Эффективная поддержка",
      description: "Качественное послепродажное обслуживание",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Интеграция с 1С",
      description: "Эффективное интегрирование с приложениями",
    },
  ];

  return (
    <aside className="bg-white dark:bg-gray-800 p-8 sm:p-6 rounded-lg shadow-lg mb-8 border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        Преимущества
      </h2>
      <div className="h-1 w-16 bg-red-600 mb-6"></div>
      <div className="space-y-6">
        {advantages.map((advantage, index) => (
          <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md transition duration-300 ease-in-out hover:shadow-lg">
            <div className="flex items-center mb-3">
              <div className="bg-red-600 text-white p-2 rounded-full mr-4 flex-shrink-0">
                {advantage.icon}
              </div>
              <h3 className="text-base font-semibold text-gray-800 dark:text-white">
                {advantage.title}
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {advantage.description}
            </p>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default ServicesAdvBar;