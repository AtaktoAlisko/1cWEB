"use client";
import React from "react";

const departments = [
  { name: "Для руководителя", icon: "👨‍💼" },
  { name: "Для бухгалтерии", icon: "📊" },
  { name: "Для казначейства", icon: "💼" },
  { name: "Для транспортного отдела", icon: "🚚" },
  { name: "Для отдела закупки", icon: "🛒" },
  { name: "Для производства", icon: "🏭" },
  { name: "Для технического отдела", icon: "🔧" },
  { name: "Для склада", icon: "📦" },
  { name: "Для ИТ отдела", icon: "🛠️" },
  { name: "Для службы ИБ", icon: "👥" },
];

const EmojiGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 mx-auto max-w-screen-xl mt-10 mb-20">
      {departments.map((dept, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg shadow-md"
        >
          <div className="text-4xl mb-2">{dept.icon}</div>
          <div className="text-center">{dept.name}</div>
        </div>
      ))}
    </div>
  );
};

export default EmojiGrid;