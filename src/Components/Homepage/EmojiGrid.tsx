"use client";
import React from "react";

const departments = [
  { name: "Комплексный подход", icon: "🧩" },
  { name: "Ответственность", icon: "👔" },
  { name: "Большой проект", icon: "💼" },
  { name: "Надежность", icon: "🛡️" },
  { name: "Квалификация специалистов", icon: "🎓" },
  { name: "Опыт", icon: "📚" },
  { name: "Доступность", icon: "🟢" },
  { name: "Поддержка", icon: "🤝" },
];

const EmojiGrid = () => {
  return (
    <>
      <h2 className="text-center text-3xl font-extrabold text-[#A22823] mt-1 mb-1 sm:text-4xl md:text-5xl">
        Почему выбирают нас?
      </h2>
      <div className="grid text-sm grid-cols-2 sm:grid-cols-2 md:grid-cols-4 2xl:grid-cols-8 gap-6 p-6 mx-auto max-w-screen-2xl mt-12 mb-12">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 p-8 rounded-2xl border border-[#A22823] shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:border-transparent hover:bg-gradient-to-b hover:from-[#A22823] hover:to-[#c0392b] hover:text-white"
          >
            <div className="text-6xl mb-4 text-[#A22823] transition-colors duration-300 hover:text-white">
              {dept.icon}
            </div>
            <div className="text-sm sm:text-base md:text-base lg:text-lg font-semibold text-gray-700 text-center transition-colors duration-300 hover:text-white">
              {dept.name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default EmojiGrid;