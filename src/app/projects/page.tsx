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
    title:
      "Разработка и внедрение программного комплекса для управления лизинговой компанией",
    description: "Описание проекта о лизинговой компании.",
    logo: "leasing-company-logo.png", // замените на актуальное имя файла логотипа
  },
  {
    title:
      "Разработка и внедрение программного комплекса для управления кредитной компанией",
    description: "Описание проекта о кредитной компании.",
    logo: "credit-company-logo.png",
  },
  {
    title: "Победитель конкурса 1С «Проект года 2017»",
    description: "Описание победного проекта.",
    logo: "award-winner-logo.png",
  },
  {
    title: "Разработка и внедрение системы управления кредитованием",
    description:
      "Система обеспечивает полный цикл управления компанией – от ввода заявок до формирования финансового результата.",
    logo: "credit-management-system-logo.png",
  },
  {
    title:
      "Автоматизация финансового, оперативного и бухгалтерского учета в лизинговой компании",
    description:
      "Автоматизация различных аспектов учета в лизинговой компании.",
    logo: "financial-automation-logo.png",
  },
  {
    title: "Внедрение системы управления лизинговой компанией",
    description:
      "Внедрение системы управления для улучшения операционной эффективности.",
    logo: "leasing-management-logo.png",
  },
  {
    title: "Внедрение системы Управления холдингом",
    description: "Управление операциями в рамках крупного холдинга.",
    logo: "holding-management-logo.png",
  },
  {
    title: "Совместный проект с KPMG",
    description: "Проект, выполненный в партнерстве с KPMG.",
    logo: "kpmg-logo.png",
  },
  {
    title: "Внедрение Корпоративной системы управления предприятием",
    description: "Корпоративная система для улучшения управления предприятием.",
    logo: "corporate-management-logo.png",
  },
  {
    title: "КазАгро",
    description: "Проект для компании КазАгро.",
    logo: "kazagro-logo.png",
  },
  {
    title: "ЗаманБанк",
    description: "Проект для компании ЗаманБанк.",
    logo: "zamanbank-logo.png",
  },
  {
    title: "ФортеЛизинг (ForteLeasing) АО",
    description: "Проект для компании ФортеЛизинг (ForteLeasing) АО.",
    logo: "forteleasing-logo.png",
  },
  {
    title: "Экспортная страховая компания KazakhExport",
    description:
      "Проект для компании Экспортная страховая компания KazakhExport.",
    logo: "kazakhexport-logo.png",
  },
  {
    title:
      'Республиканское государственное предприятие на праве хозяйственного ведения "Национальный центр биотехнологии" Комитета науки Министерства образования и науки Республики Казахстан',
    description: "Проект для Национального центра биотехнологии.",
    logo: "biotechnology-center-logo.png",
  },
];

// Компонент для отображения информации о проекте с типизацией
function ProjectCard({ title, description, logo }: Project) {
  return (
    <div className="border p-4 rounded-md shadow-md flex flex-col items-center">
      <Image
        src={`/logos/${logo}`}
        alt={`${title} logo`}
        width={100}
        height={100}
        className="mb-4"
      />
      <h3 className="text-xl font-bold text-center">{title}</h3>
      <p className="text-center">{description}</p>
    </div>
  );
}

// Страница "Выполненные проекты"
export default function Projects() {
  return (
    <>
      <div className="bg-white px-[20px] sm:px-[60px] md:px-[80px] lg:px-[100px] xl:px-[140px] xl:pb-[40px] border-b border-[#A22823] mt-[100px]">
        <div className="border-t-[10px] border-[#A22823] rounded-sm"></div>
        <h2 className="text-center text-3xl font-extrabold text-[#A22823] mt-12 mb-12 sm:text-4xl md:text-5xl">
          Выполненные проекты
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
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
