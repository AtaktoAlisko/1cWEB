
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="px-[150px] bg-[#04395e] text-white py-10">
      <div className="container mx-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h4 className="text-xl font-bold mb-4">О нас</h4>
            <ul>
              <li className="mb-2">
                <a href="#">Наша команда</a>
              </li>
              <li className="mb-2">
                <a href="#">Карьера</a>
              </li>
              <li className="mb-2">
                <a href="#">Пресса</a>
              </li>
              <li className="mb-2">
                <a href="#">Контакты</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Продукты</h4>
            <ul>
              <li className="mb-2">
                <a href="#">Каталог</a>
              </li>
              <li className="mb-2">
                <a href="#">Новые поступления</a>
              </li>
              <li className="mb-2">
                <a href="#">Популярные товары</a>
              </li>
              <li className="mb-2">
                <a href="#">Распродажа</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Услуги</h4>
            <ul>
              <li className="mb-2">
                <a href="#">Консультации</a>
              </li>
              <li className="mb-2">
                <a href="#">Поддержка</a>
              </li>
              <li className="mb-2">
                <a href="#">Доставка</a>
              </li>
              <li className="mb-2">
                <a href="#">Гарантия</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Контакты</h4>
            <ul>
              <li className="mb-2">
                <a href="#">Наш адрес</a>
              </li>
              <li className="mb-2">
                <a href="#">Электронная почта</a>
              </li>
              <li className="mb-2">
                <a href="#">Телефон</a>
              </li>
              <li className="mb-2">
                <a href="#">Социальные сети</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
