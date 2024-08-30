"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ThemeSwitcher from '../Components/ThemeSwitcher';  // Make sure this path is correct


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Load the JivoChat script
    const script = document.createElement("script");
    script.src = "//code.jivo.ru/widget/qssjfqh8bY";
    script.async = true;
    document.body.appendChild(script);

    // Add custom CSS to adjust JivoChat widget position
    const style = document.createElement("style");
    style.textContent = `
      #jivo-widget-container {
        margin-left: 20px !important; /* Adjust the value as needed */
      }
    `;
    document.head.appendChild(style);

    // Cleanup script and style on component unmount
    return () => {
      document.body.removeChild(script);
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    const collapseMenu = document.getElementById("collapseMenu");

    function handleClick() {
      setIsMenuOpen(!isMenuOpen);
    }

    const toggleOpen = document.getElementById("toggleOpen");
    const toggleClose = document.getElementById("toggleClose");

    if (toggleOpen) toggleOpen.addEventListener("click", handleClick);
    if (toggleClose) toggleClose.addEventListener("click", handleClick);

    return () => {
      if (toggleOpen) toggleOpen.removeEventListener("click", handleClick);
      if (toggleClose) toggleClose.removeEventListener("click", handleClick);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full text-white shadow-md font-sans tracking-wide z-50">
        <div className="flex flex-wrap items-center justify-between gap-4 px-8 py-4 bg-white dark:bg-[#121212] min-h-[70px]">
          <a href="/">
            <Image 
              src="/logo.png" 
              alt="logo" 
              width={144} 
              height={36} 
              className="dark:hidden"
            />
            <Image 
              src="/logoDark.png" 
              alt="logo" 
              width={144} 
              height={36} 
              className="hidden dark:block"
            />
          </a>
          <div
            id="collapseMenu"
            className={`lg:flex bg-opacity-85 lg:gap-x-3 ${
              isMenuOpen ? "" : "hidden"
            }`}
          >
            <button
              id="toggleClose"
              className={`lg:hidden fixed top-4 right-7 z-[100] w-10 h-10 bg-white dark:bg-gray-800 flex items-center justify-center rounded ${
                isMenuOpen ? "" : "hidden"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-black dark:fill-white"
                viewBox="0 0 320.591 320.591"
              >
                <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"></path>
                <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"></path>
              </svg>
            </button>

            <ul className="lg:flex lg:gap-x-3 max-lg:space-y-3 max-lg:fixed max-lg:bg-white dark:max-lg:bg-[#121212] max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <li className="mb-6 hidden max-lg:block">
              <a href="/">
            <Image 
              src="/logo.png" 
              alt="logo" 
              width={144} 
              height={36} 
              className="dark:hidden"
            />
            <Image 
              src="/logoDark.png" 
              alt="logo" 
              width={144} 
              height={36} 
              className="hidden dark:block"
            />
          </a>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-2">
                <a
                  href="/"
                  className="hover:text-[#a2382b] text-[#333] dark:text-gray-200 block font-bold text-[14px]"
                >
                  Главная
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-2">
                <a
                  href="/aboutus"
                  className="hover:text-[#a2382b] text-[#333] dark:text-gray-200 block font-bold text-[14px]"
                >
                  О нас
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-2">
                <a className="hover:text-[#a2382b] text-[#333] dark:text-gray-200 block font-bold text-[14px]">
                  Продукты
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-2">
                <a
                  href="/services"
                  className="hover:text-[#a2382b] text-[#333] dark:text-gray-200 block font-bold text-[14px]"
                >
                  Услуги
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-2">
                <a
                  href="/projects"
                  className="hover:text-[#a2382b] text-[#333] dark:text-gray-200 block font-bold text-[14px]"
                >
                  Выполненные проекты
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-2">
                <a
                  href="/contact"
                  className="hover:text-[#a2382b] text-[#333] dark:text-gray-200 block font-bold text-[14px]"
                >
                  Контакты
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-2">
                <a
                  href="https://umfo.erpcloud.kz/ru/home"
                  className="hover:text-[#a2382b] text-[#333] dark:text-gray-200 block font-bold text-[14px]"
                >
                  ERP Cloud
                </a>
              </li>
              
            </ul>
          </div>

          <div className="flex max-lg:ml-auto">
            <button
              id="toggleOpen"
              className={`lg:hidden ${isMenuOpen ? "hidden" : ""}`}
            >
              <svg
                className="w-7 h-7 fill-black dark:fill-white"
                fill="#000000" 
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </>
  );
}