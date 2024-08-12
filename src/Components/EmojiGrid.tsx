"use client";
import React from "react";

const departments = [
  { name: "Комплексный подход", icon: "🧩" },
  { name: "Ответственность", icon: "👔" },
  { name: "Большой проект", icon: "💼" },
  { name: "Надежность", icon: "🛡️ " },
  { name: "Квалификация специалистов", icon: "🎓" },
  { name: "Опыт", icon: "📚" },
  { name: "Доступность", icon: "🟢" },
  { name: "Поддержка", icon: "🤝" },
];

const EmojiGrid = () => {
  return (
    <>
      <h2 className="text-center text-3xl font-extrabold text-[#A22823] mt-12 mb-12 sm:text-4xl md:text-5xl">
        Почему выбирают нас?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 p-6 mx-auto max-w-screen-xl mt-12 mb-24">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white p-8 rounded-xl border border-[#A22823] shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="text-6xl mb-4 text-[#A22823]">{dept.icon}</div>
            <div className="text-xl font-bold text-gray-800 text-center">
              {dept.name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default EmojiGrid;
