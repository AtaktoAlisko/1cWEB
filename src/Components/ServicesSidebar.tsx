"use client";

import React, { useState } from "react";
import Link from "next/link";
import Modal from "./Modal";
import { FaDownload } from "react-icons/fa";
import Image from "next/image";
import ERPCl from "../../public/ERPCl.png";

const SidebarMenuBar: React.FC = () => {
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
    <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg mb-8 border border-gray-200 dark:border-gray-700">
      <nav className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="group block rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          >
            <div className="p-3 sm:p-4">
              <h5 className="text-base sm:text-lg font-medium text-gray-800 dark:text-gray-200 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                {item.title}
              </h5>
            </div>
          </Link>
        ))}
      </nav>
      <div className="mt-6 sm:mt-8 space-y-4">
        <a
          href="https://umfo.erpcloud.kz/ru/home"
          className="flex items-center justify-center bg-black text-white p-3 rounded-lg text-center hover:bg-red-700 transition-colors"
        >
          <Image
            src={ERPCl}
            alt="ERP Cloud"
            width={24}
            height={24}
            className="mr-2"
          />
          ERP Cloud
        </a>
        <a
          href="/presentation.pdf"
          download
          className="flex items-center justify-center bg-red-600 text-white p-3 rounded-lg text-center hover:bg-red-700 transition-colors"
        >
          <FaDownload className="mr-2" />
          Скачайте презентацию
        </a>

        <div className="bg-red-500 text-white p-4 sm:p-6 rounded-lg shadow-md">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Как мы можем помочь?</h2>
          <p className="mb-4 text-sm sm:text-base text-gray-200">
            Свяжитесь с нами для получения полной и бесплатной консультации от
            наших специалистов.
          </p>
          <button
            onClick={toggleModal}
            className="bg-white text-red-600 font-semibold py-2 px-4 rounded-lg w-full text-center hover:bg-red-100 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700 transition-colors"
          >
            Связаться с нами
          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} toggleModal={toggleModal} />
    </div>
  );
};

export default SidebarMenuBar;