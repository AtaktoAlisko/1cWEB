import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className="px-[170px] text-center items-center">
        <ul className="flex justify-between items-center mx-10 p-10">
          <li>
            {" "}
            <Image
              src="/logo.png"
              alt="Next.js Logo"
              width={200}
              height={100}
              priority
            />
          </li>
          <div className="flex gap-10 text-gray-500  ">
            <li className="hover:text-red-600">Главная</li>
            <li className="hover:text-red-600">О нас</li>
            <li className="hover:text-red-600">Продукты</li>
            <li className="hover:text-red-600">Услуги</li>
            <li className="hover:text-red-600">Выполненные проекты</li>
            <li className="hover:text-red-600">Контакты</li>
          </div>
        </ul>
      </header>
    </>
  );
}
