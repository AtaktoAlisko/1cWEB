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
];

const DepartmentGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3  lg:grid-cols-4 p-4 mx-[180px] mt-10 mb-20">
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

export default DepartmentGrid;
