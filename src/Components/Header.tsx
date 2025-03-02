"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <svg
          className="w-5 h-5 text-yellow-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg
          className="w-5 h-5 text-gray-900"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
};

const NavigationMenu: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const menuItems = [
    { href: "/", label: "Главная" },
    { href: "/aboutus", label: "О нас" },
    { href: "/certificates", label: "Сертификаты" },
    { href: "/Enterprise/ERP", label: "1С:Предприятие 8" },
    { href: "/projects", label: "Выполненные проекты" },
    { href: "/contact", label: "Контакты" },
    { href: "/ITC", label: "1С:ИТС" },
    { href: "https://umfo.erpcloud.kz/ru/home", label: "ERP Cloud" },
  ];

  return (
    <nav className={className}>
      <ul className="flex flex-col lg:flex-row items-center">
        {menuItems.map(({ href, label }) => (
          <li key={href} className="mx-2 xl:mx-3">
            <a
              href={href}
              className="hover:text-[#a2382b] text-[#333] dark:text-gray-200 font-bold text-[14px]"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//code.jivo.ru/widget/FcghFAcXjr";
    script.async = true;
    document.body.appendChild(script);

    const style = document.createElement("style");
    style.textContent =
      "#jivo-widget-container { margin-left: 20px !important; }";
    document.head.appendChild(style);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full text-white shadow-md font-sans tracking-wide z-50">
      <div className="flex items-center justify-between px-4 py-2 bg-white dark:bg-[#121212] min-h-[70px]">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <Image
              src="/logoNew.png"
              alt="logo"
              width={100}
              height={100}
              className="w-[35px] h-[35px] sm:w-[40px] sm:h-[40px]"
            />
            <span className="ml-1 text-base sm:text-xl md:text-2xl lg:text-3xl text-black dark:text-white font-bold italic truncate max-w-[150px] sm:max-w-[200px] md:max-w-full">
              Softway Services
            </span>
          </a>
          <div className="mx-2">
            <span className="block h-11 border-l border-gray-300 dark:border-white"></span>
          </div>
          <a href="https://1c.ru/">
            <Image
              src="/franchising.png"
              alt="logo"
              width={80}
              height={80}
              className="w-[35px] h-[30px] sm:w-[50px] sm:h-[40px]"
            />
          </a>
        </div>

        <NavigationMenu className="hidden lg:flex flex-grow justify-center" />

        <div className="flex items-center">
          <ThemeSwitcher />
          <button
            className="lg:hidden ml-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-7 h-7 fill-black dark:fill-white"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <NavigationMenu className="lg:hidden bg-white dark:bg-[#121212] shadow-md py-2" />
      )}
    </header>
  );
}
