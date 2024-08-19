import React from "react";
import Link from "next/link";

const SidebarMenu: React.FC = () => {
  const menuItems = [
    { title: "1С:ERP Управление предприятием", link: "/serviceERP" },
    { title: "IT-аудит и оптимизация 1С", link: "#" },
    { title: "Автоматизация бизнес-процессов", link: "#" },
    { title: "Техническое сопровождение информационных систем", link: "#" },
    { title: "1С:Управление холдингом", link: "/serviceHolding" },
    { title: "Управление микрофинансовой организацией (МФО)", link: "/serviceMFO" },
  ];

  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-8 lg:mb-0">
      <nav className="grid gap-4">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="group flex items-center justify-center rounded-lg bg-white border border-[#A22823] shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl p-4"
          >
            <h5 className="text-lg font-normal text-center text-gray-800 hover:font-medium transition-all">
              {item.title}
            </h5>
          </Link>
        ))}
      </nav>
      <div className="mt-6 space-y-4">
        <Link
          href="#"
          className="block bg-black text-white p-3 rounded text-center hover:bg-gray-800 transition-colors"
        >
          Презентация компании
        </Link>
        <div className="bg-red-600 text-white p-4 rounded-lg">
          <h2 className="text-xl font-medium mb-2">Мы можем помочь Вам?</h2>
          <p className="mb-4 font-normal">
            Свяжитесь с нами и наши менеджеры дадут Вам полную и бесплатную
            консультацию.
          </p>
          <Link
            href="/contacts"
            className="inline-block bg-white text-red-600 font-medium py-2 px-4 rounded w-full text-center hover:bg-gray-100 transition-colors"
          >
            КОНТАКТЫ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;