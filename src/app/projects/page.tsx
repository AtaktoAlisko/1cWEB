"use client";
import Image from "next/image";

// Интерфейс для описания типа проекта
interface Project {
  title: string;
  description: string;
  logo: string;
}

// Массив с данными о проектах, использующий интерфейс Project
const projects: Project[] = [
  {
    title: "KazAgroFinance",
    description:
      "Разработка и внедрение программного комплекса для управления лизинговой компанией.",
    logo: "../logo/logo1.png", // замените на актуальное имя файла логотипа
  },
  {
    title: "Аграрная кредитная корпорация",
    description:
      "Разработка и внедрение программного комплекса для управления кредитной компанией",
    logo: "../logo/logo2.png",
  },
  {
    title: "Фонд Финансовой Поддержки ",
    description:
      "Разработка и внедрение системы управления кредитованием. Система обеспечивает полный цикл управления компанией – от ввода заявок до формирования финансового результата.",
    logo: "../logo/logo3.png",
  },
  {
    title: "ТехноЛизинг",
    description:
      "Автоматизация финансового, оперативного и бухгалтерского учета в лизинговой компании.",
    logo: "../logo/logo4.png",
  },
  {
    title: "КазМедТех",
    description: "Внедрение системы управления лизинговой компанией.",
    logo: "../logo/logo5.png",
  },
  {
    title: "AIFC",
    description: "Внедрение системы Управления холдингом.",
    logo: "../logo/logo6.png",
  },
  {
    title: "AIFC",
    description:
      "Внедрение системы Управления холдингом.Совместный проект с KPMG.",
    logo: "../logo/logo6.png",
  },
  {
    title: "KPE",
    description: "Внедрение Корпоративной системы управления предприятием .",
    logo: "../logo/logo7.png",
  },
  {
    title: "kazmedia",
    description: "Корпоративная система для улучшения управления предприятием.",
    logo: "../logo/logo8.png",
  },
  {
    title: "AGROGARANT",
    description: "Проект для компании КазАгро.",
    logo: "../logo/logo9.png",
  },
  {
    title: "БРК-Лизинг",
    description: "Проект для компании ЗаманБанк.",
    logo: "../logo/logo10.png",
  },
];

// Компонент для отображения информации о проекте с типизацией
function ProjectCard({ title, description, logo }: Project) {
  return (
    <div className="border p-6 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 bg-white">
      <div className="w-full h-40 flex justify-center items-center mb-6 bg-gray-100 rounded-md overflow-hidden">
        <Image
          src={`/logos/${logo}`}
          alt={`${title} logo`}
          width={200}
          height={100}
          className="object-contain h-full"
        />
      </div>
      <h3 className="text-xl font-bold text-center text-gray-800 mb-4">
        {title}
      </h3>
      <p className="text-center text-gray-600">{description}</p>
    </div>
  );
}

// Страница "Выполненные проекты"
export default function Projects() {
  return (
    <>
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 px-6 sm:px-16 md:px-24 lg:px-32 xl:px-40 py-16">
        <div className="border-t-4 border-red-600 rounded-sm"></div>
        <h2 className="text-center text-4xl font-extrabold text-red-600 mt-12 mb-12 sm:text-5xl md:text-6xl">
          Выполненные проекты
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              logo={project.logo}
            />
          ))}
        </div>
      </div>
    </>
  );
}
