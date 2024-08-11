"use client";
import React from "react";

const stats = [
  { value: "1,000+", label: "Успешных Проектов" },
  { value: "12+", label: "Лето Работы" },
  { value: "200+", label: "Постоянных клиентов" },
  { value: "20+", label: "Сотрудников" },
];

const ProudNumbersBar = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white py-10 mb-10 shadow-lg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center p-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            <div className="text-4xl md:text-5xl font-extrabold">
              {stat.value}
            </div>
            <div className="mt-2 text-base md:text-lg font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProudNumbersBar;
