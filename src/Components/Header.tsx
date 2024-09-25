"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    console.log("Toggling theme. Current theme:", theme);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-5 h-5 text-yellow-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-5 h-5 text-gray-900"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//code.jivo.ru/widget/qssjfqh8bY";
    script.async = true;
    document.body.appendChild(script);

    const style = document.createElement("style");
    style.textContent = `
      #jivo-widget-container {
        margin-left: 20px !important; /* Adjust the value as needed */
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full text-white shadow-md font-sans tracking-wide z-50">
        <div className="flex items-center justify-between px-4 py-2 bg-white dark:bg-[#121212] min-h-[70px]">
          <div className="flex items-center flex-shrink-0 ">
            <a href="/" className="flex items-center">
              <Image src="/logoNew.png" alt="logo" width={36} height={36} />
              <span
                className="ml-1 text-lg sm:text-xl md:text-2xl lg:text-3xl text-black dark:text-white mb-[-5px] truncate max-w-[150px] sm:max-w-[200px] md:max-w-full"
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontWeight: "bold",
                  fontStyle: "italic",
                  fontVariationSettings: '"slnt" -10',
                  lineHeight: 1,
                }}
              >
                Softway
              </span>
            </a>
          </div>

          <nav className="hidden lg:flex flex-grow justify-center">
            <ul className="flex items-center">
              <li className="mx-2 xl:mx-3">
                <a
                  href="/"
                  className="hover:text-[#a2382b] text-[#333] dark:text-gray-200 font-bold text-[14px]"
                >
                  Главная
                </a>
              </li>
              <li className="mx-2 xl:mx-3">
                <a
                  href="/aboutus"
                  className="hover:text-[#a2382b] text-[#333] dark:text-gray-200 font-bold text-[14px]"
                >
                  О нас
                </a>
              </li>
              <li className="mx-2 xl:mx-3">
                <a
                  href="/certificates"
                  className="hover:text-[#a2382b] text-[#333] dark:text-gray-200 font-bold text-[14px]"
                >
                  Сертификаты
                </a>
              </li>
              <li className="mx-2 xl:mx-3">
                <a
                  href="/services"
                  className="hover:text-[#a2382b] text-[#333] dark:text-gray-200 font-bold text-[14px]"
                >
                  Услуги
                </a>
              </li>
              <li className="mx-2 xl:mx-3">
                <a
                  href="/projects"
                  className="hover:text-[#a2382b] text-[#333] dark:text-gray-200 font-bold text-[14px]"
                >
                  Выполненные проекты
                </a>
              </li>
              <li className="mx-2 xl:mx-3">
                <a
                  href="/contact"
                  className="hover:text-[#a2382b] text-[#333] dark:text-gray-200 font-bold text-[14px]"
                >
                  Контакты
                </a>
              </li>
              <li className="mx-2 xl:mx-3">
                <a
                  href="https://umfo.erpcloud.kz/ru/home"
                  className="hover:text-[#a2382b] text-[#333] dark:text-gray-200 font-bold text-[14px]"
                >
                  ERP Cloud
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center">
            <ThemeSwitcher />

            <button
              id="toggleOpen"
              className="lg:hidden ml-4"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
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

        {isMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-[#121212] shadow-md">
            <ul className="py-2">
              <li>
                <a
                  href="/"
                  className="block px-4 py-2 hover:text-[#a2382b] text-[#333] dark:text-gray-200 font-bold text-[14px]"
                >
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="/aboutus"
                  className="block px-4 py-2 hover:text-[#a2382b] text-[#333] dark:text-gray-200 font-bold text-[14px]"
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="/certificates"
                  className="block px-4 py-2 hover:text-[#a2382b] text-[#333] dark:text-gray-200 font-bold text-[14px]"
                >
                  Сертификаты
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="block px-4 py-2 hover:text-[#a2382b] text-[#333] dark:text-gray-200 font-bold text-[14px]"
                >
                  Услуги
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="block px-4 py-2 hover:text-[#a2382b] text-[#333] dark:text-gray-200 font-bold text-[14px]"
                >
                  Выполненные проекты
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block px-4 py-2 hover:text-[#a2382b] text-[#333] dark:text-gray-200 font-bold text-[14px]"
                >
                  Контакты
                </a>
              </li>

              <li>
                <a
                  href="https://umfo.erpcloud.kz/ru/home"
                  className="block px-4 py-2 hover:text-[#a2382b] text-[#333] dark:text-gray-200 font-bold text-[14px]"
                >
                  ERP Cloud
                </a>
              </li>
            </ul>
          </div>
        )}
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
