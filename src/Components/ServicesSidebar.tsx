import React from "react";
import Link from "next/link";

const SidebarMenu: React.FC = () => (
  <div className="bg-gray-100 p-4 rounded-lg mb-8 lg:mb-0">
    <nav>
      <ul className="space-y-2">
        <li>
          <Link href="#" className="block p-2 hover:bg-gray-200 rounded">
            1С:ERP Управление предприятием
          </Link>
        </li>
        <li>
          <Link href="#" className="block p-2 hover:bg-gray-200 rounded">
            IT-аудит и оптимизация 1С
          </Link>
        </li>
        <li>
          <Link href="#" className="block p-2 hover:bg-gray-200 rounded">
            Автоматизация бизнес-процессов
          </Link>
        </li>
        <li>
          <Link href="#" className="block p-2 hover:bg-gray-200 rounded">
            Техническое сопровождение информационных систем
          </Link>
        </li>
        <li>
          <Link href="#" className="block p-2 hover:bg-gray-200 rounded">
            1С:Управление холдингом
          </Link>
        </li>
        <li>
          <Link href="#" className="block p-2 hover:bg-gray-200 rounded">
            Управление микрофинансовой организацией (МФО)
          </Link>
        </li>
      </ul>
    </nav>
    <div className="mt-4">
      <Link
        href="#"
        className="block bg-black text-white p-3 rounded text-center mb-4"
      >
        Презентация компании
      </Link>
      <div className="bg-red-600 text-white p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Мы можем помочь Вам?</h2>
        <p className="mb-4">
          Свяжитесь с нами и наши менеджеры дадут Вам полную и бесплатную
          консультацию.
        </p>
        <Link
          href="/contacts"
          className="inline-block bg-white text-red-600 font-semibold py-2 px-4 rounded w-full text-center"
        >
          КОНТАКТЫ
        </Link>
      </div>
    </div>
  </div>
);

export default SidebarMenu;