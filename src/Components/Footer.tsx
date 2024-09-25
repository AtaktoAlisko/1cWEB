import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="px-6 md:px-[100px] lg:px-[150px] bg-[#A22823] text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h4 className="text-2xl font-semibold mb-6 border-b-2 border-gray-400 pb-2">
              О нас
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href=" /aboutus"
                  className="hover:text-gray-300 transition-colors"
                >
                  Наша команда
                </a>
              </li>
              <li>
                <a
                  href=" /aboutus"
                  className="hover:text-gray-300 transition-colors"
                >
                  Карьера
                </a>
              </li>
              <li>
                <a
                  href=" /aboutus"
                  className="hover:text-gray-300 transition-colors"
                >
                  Пресса
                </a>
              </li>
              <li>
                <a
                  href=" /aboutus"
                  className="hover:text-gray-300 transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-semibold mb-6 border-b-2 border-gray-400 pb-2">
              Сертификаты
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/certificates"
                  className="hover:text-gray-300 transition-colors"
                >
                  1C:ПРОФЕССИОНАЛ
                </a>
              </li>
              <li>
                <a
                  href="/certificates"
                  className="hover:text-gray-300 transition-colors"
                >
                  1C:Специалист
                </a>
              </li>
              <li>
                <a
                  href="/certificates"
                  className="hover:text-gray-300 transition-colors"
                >
                  1c:Предприятие 8.3
                </a>
              </li>
              <li>
                <a
                  href="/certificates"
                  className="hover:text-gray-300 transition-colors"
                >
                  Распродажа
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-semibold mb-6 border-b-2 border-gray-400 pb-2">
              Услуги
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/services"
                  className="hover:text-gray-300 transition-colors"
                >
                  Консультации
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-gray-300 transition-colors"
                >
                  Поддержка
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-gray-300 transition-colors"
                >
                  Доставка
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-gray-300 transition-colors"
                >
                  Гарантия
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-semibold mb-6 border-b-2 border-gray-400 pb-2">
              Контакты
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/contact"
                  className="hover:text-gray-300 transition-colors"
                >
                  Наш адрес
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-gray-300 transition-colors"
                >
                  Электронная почта
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-gray-300 transition-colors"
                >
                  Телефон
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-gray-300 transition-colors"
                >
                  Социальные сети
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-400 pt-6 text-center text-sm text-gray-300">
          © 2024 Softway All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
