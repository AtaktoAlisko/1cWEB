"use client";
import Image from "next/image";
import logo1 from "../../../public/logo/logo1.png";

interface Project {
  title: string;
  description: string;
  logo: string;
}

const projects: Project[] = [
  {
    title: "KazAgroFinance",
    description:
      "Разработка и внедрение программного комплекса для управления лизинговой компанией.",
    logo: "/logo/logo1.png",
  },
  {
    title: "Аграрная кредитная корпорация",
    description:
      "Разработка и внедрение программного комплекса для управления кредитной компанией",
    logo: "/logo/logo2.png",
  },
  {
    title: "Фонд Финансовой Поддержки ",
    description:
      "Разработка и внедрение системы управления кредитованием. Система обеспечивает полный цикл управления компанией – от ввода заявок до формирования финансового результата.",
    logo: "/logo/logo3.png",
  },
  {
    title: "ТехноЛизинг",
    description:
      "Автоматизация финансового, оперативного и бухгалтерского учета в лизинговой компании.",
    logo: "/logo/logo4.png",
  },
  {
    title: "КазМедТех",
    description: "Внедрение системы управления лизинговой компанией.",
    logo: "/logo/logo5.png",
  },
  {
    title: "AIFC",
    description: "Внедрение системы Управления холдингом.",
    logo: "/logo/logo6.png",
  },
  {
    title: "AIFC",
    description:
      "Внедрение системы Управления холдингом.Совместный проект с KPMG.",
    logo: "/logo/logo6.png",
  },
  {
    title: "KPE",
    description: "Внедрение Корпоративной системы управления предприятием .",
    logo: "/logo/logo7.png",
  },
  {
    title: "kazmedia",
    description: "Корпоративная система для улучшения управления предприятием.",
    logo: "/logo/logo8.png",
  },
  {
    title: "AGROGARANT",
    description: "Проект для компании КазАгро.",
    logo: "/logo/logo9.png",
  },
  {
    title: "БРК-Лизинг",
    description: "Проект для компании ЗаманБанк.",
    logo: "/logo/logo10.png",
  },
];
function ProjectCard({ title, description, logo }: Project) {
  return (
    <div className="border border-gray-200 p-6 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 bg-white">
      <div className="w-full h-40 flex justify-center items-center mb-6 bg-gray-100 rounded-md overflow-hidden">
        <Image
          src={`${logo}`}
          alt={`${title} logo`}
          width={200}
          height={100}
          className="object-contain h-full"
        />
      </div>
      <h3 className="text-xl font-bold text-center text-[#A22823] mb-4">
        {title}
      </h3>
      <p className="text-center text-gray-600">{description}</p>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="bg-white px-[20px] sm:px-[60px] md:px-[80px] lg:px-[100px] xl:px-[140px] pb-[40px] mt-[100px]">
      <div className="border-t-[10px] border-[#A22823] rounded-sm"></div>

      <div className="px-[60px] py-[40px] border border-[#A22823]">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#A22823] mb-12">
          Выполненные проекты
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </div>
  );
}
