"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Department {
  name: string;
  icon: string;
}

interface FloatingCardProps {
  department: Department;
  index: number;
}

const FloatingCard: React.FC<FloatingCardProps> = ({ department, index }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const angle = (Date.now() + index * 1000) / 1000; // Уникальный угол для каждой карточки
      const x = Math.sin(angle) * 20; // Амплитуда по X
      const y = Math.cos(angle) * 20; // Амплитуда по Y
      setPosition({ x, y });
    }, 50); // Обновляем каждые 50мс для плавности

    return () => clearInterval(interval);
  }, [index]);

  return (
    <motion.div
      className="bg-white p-6 rounded-lg border-2 border-[#A22823] shadow-lg"
      animate={{ 
        x: position.x,
        y: position.y,
      }}
      transition={{ 
        type: "spring",
        stiffness: 50,
        damping: 20
      }}
    >
      <div className="text-5xl mb-4 flex justify-center">{department.icon}</div>
      <p className="text-center font-semibold text-gray-800">{department.name}</p>
    </motion.div>
  );
};

const EmojiGrid: React.FC = () => {
  const departments: Department[] = [
    { name: "Комплексный подход", icon: "🧩" },
    { name: "Ответственность", icon: "👔" },
    { name: "Большой проект", icon: "💼" },
    { name: "Надежность", icon: "🛡️" },
    { name: "Квалификация специалистов", icon: "🎓" },
    { name: "Опыт", icon: "📚" },
    { name: "Доступность", icon: "🟢" },
    { name: "Поддержка", icon: "🤝" }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 py-16 min-h-screen flex flex-col justify-center">
      <motion.h2 
        className="text-center text-4xl font-extrabold text-[#A22823] mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Почему выбирают нас?
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        {departments.map((dept, index) => (
          <FloatingCard key={index} department={dept} index={index} />
        ))}
      </div>
    </div>
  );
};

export default EmojiGrid;