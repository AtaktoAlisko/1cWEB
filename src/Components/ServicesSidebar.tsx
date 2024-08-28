"use client";

import React, { useState } from "react";
import Link from "next/link";
import Modal from "./Modal";

const SidebarMenu: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const menuItems = [
    { title: "1С:ERP Управление предприятием", link: "/services/ERP" },
    { title: "IT-аудит и оптимизация 1С", link: "/services/It" },
    { title: "Автоматизация бизнес-процессов", link: "/services/Automation" },
    {
      title: "Техническое сопровождение информационных систем",
      link: "/services/Info",
    },
    { title: "1С:Управление холдингом", link: "/services/Holding" },
    {
      title: "Управление микрофинансовой организацией (МФО)",
      link: "/services/MFO",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-8 lg:mb-0 border border-gray-200">
      <nav className="space-y-4">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="group block rounded-lg bg-gray-50 border border-gray-300 shadow-sm hover:bg-gray-100 transition-colors"
          >
            <div className="p-4">
              <h5 className="text-lg font-medium text-gray-800 group-hover:text-red-600 transition-colors">
                {item.title}
              </h5>
            </div>
          </Link>
        ))}
      </nav>
      <div className="mt-8 space-y-4">
        <a
          href="/presentation.pdf"
          download
          className="block bg-red-600 text-white p-3 rounded-lg text-center hover:bg-red-700 transition-colors"
        >
          Скачайте презентацию
        </a>

        <div className="bg-red-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Как мы можем помочь?</h2>
          <p className="mb-4 text-gray-200">
            Свяжитесь с нами для получения полной и бесплатной консультации от
            наших специалистов.
          </p>
          <button
            onClick={toggleModal}
            className="bg-white text-red-600 font-semibold py-2 px-4 rounded-lg w-full text-center hover:bg-red-100 transition-colors"
          >
            Связаться с нами
          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} toggleModal={toggleModal} />
    </div>
  );
};

export default SidebarMenu;
