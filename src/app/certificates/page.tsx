"use client";
import React, { useState } from "react";
import prof1 from "../../../public/1cProf/prof1.png";

interface Certificate {
  href: string;
  imgSrc: string;
  alt: string;
  description: string;
}

interface CertificateSection {
  title: string;
  certificates: Certificate[];
}

const CertificateCard: React.FC<Certificate> = ({
  href,
  imgSrc,
  alt,
  description,
}) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
      <img src={imgSrc} alt={alt} className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-base font-semibold text-gray-800 hover:text-[#A22823] transition-colors duration-300">
          {description}
        </p>
      </div>
    </a>
  </div>
);

const CertificatesPage: React.FC = () => {
  const sections: CertificateSection[] = [
    {
      title: "Деменев Асхат Жанатович",
      certificates: [
        {
          href: "/1c8.3/d1.pdf", // Ссылка на большое изображение
          imgSrc:
            "https://nastroy1c.ru/wp-content/uploads/2017/03/%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D1%8B-1%D1%81.jpg",
          alt: "Открыть большое изображение",
          description:
            'Сертификат о курсе "Основы клиент-серверного программирования в 1С:Предприятие 8.3" (16 часов)',
        },
        {
          href: "/1c8.3/d2.pdf", // Ссылка на большое изображение
          imgSrc:
            "https://nastroy1c.ru/wp-content/uploads/2017/03/%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D1%8B-1%D1%81.jpg",
          alt: "Открыть большое изображение",
          description:
            'Сертификат по курсу "Механизм системы компоновки данных" (40 часов)',
        },
        {
          href: "/1cProf/prof1.pdf", // Ссылка на большое изображение
          imgSrc:
            "https://avatars.dzeninfra.ru/get-zen_doc/5219020/pub_63bd283cdde7a57ee1096bcf_63bd2840dde7a57ee1096f79/scale_1200",
          alt: "Открыть большое изображение",
          description:
            'Сертификат "1С:Профессионал" на знание механизмов платформы 1С:Предприятие 8.1',
        },
        {
          href: "/1cProf/prof2.pdf", // Ссылка на большое изображение
          imgSrc:
            "https://nastroy1c.ru/wp-content/uploads/2017/03/%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D1%8B-1%D1%81.jpg",
          alt: "Открыть большое изображение",
          description:
            'Сертификат "1С:Профессионал" на знание особенностей и применение программы 1С:Бухгалтерия 8 для Казахстана',
        },
        {
          href: "/1cProf/prof3.pdf", // Ссылка на большое изображение
          imgSrc:
            "https://nastroy1c.ru/wp-content/uploads/2017/03/%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D1%8B-1%D1%81.jpg",
          alt: "Открыть большое изображение",
          description:
            'Сертификат "1С:Профессионал" по программе 1С:Зарплата и управление персоналом 8 для Казахстана',
        },
        {
          href: "/1cSpec/spec1.pdf", // Ссылка на большое изображение
          imgSrc:
            "https://nastroy1c.ru/wp-content/uploads/2017/03/%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D1%8B-1%D1%81.jpg",
          alt: "Открыть большое изображение",
          description:
            'Сертификат "1С:Специалист-консультант" по внедрению 1С:Зарплата и управление персоналом 8',
        },
        {
          href: "/1cSpec/spec2.pdf", // Ссылка на большое изображение
          imgSrc:
            "https://nastroy1c.ru/wp-content/uploads/2017/03/%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D1%8B-1%D1%81.jpg",
          alt: "Открыть большое изображение",
          description:
            'Сертификат "1С:Специалист" по конфигурированию и внедрению бухгалтерской подсистемы (1С:Предприятие 8)',
        },
        {
          href: "/1cSpec/spec3.pdf", // Ссылка на большое изображение
          imgSrc:
            "https://nastroy1c.ru/wp-content/uploads/2017/03/%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D1%8B-1%D1%81.jpg",
          alt: "Открыть большое изображение",
          description:
            'Сертификат "1С:Специалист" по разработке и модификации прикладных решений на платформе 1С:Предприятие 8',
        },
        {
          href: "/1cSpec/spec4.pdf", // Ссылка на большое изображение
          imgSrc: "https://nastroy1c.ru/wp-content/uploads/2017/03/%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D1%8B-1%D1%81.jpg",
          alt: "Открыть большое изображение",
          description:
            'Сертификат "1С:Специалист-консультант" по внедрению 1С:Бухгалтерия 8',
        },
        {
          href: "/management/m1.pdf", // Ссылка на большое изображение
          imgSrc: "https://nastroy1c.ru/wp-content/uploads/2017/03/%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D1%8B-1%D1%81.jpg",
          alt: "Открыть большое изображение",
          description:
            'Сертификат "1С:Руководитель проектов" по автоматизации управления и учета на базе 1С:Предприятие',
        },
        {
          href: "/management/m2.pdf", // Ссылка на большое изображение
          imgSrc: "https://nastroy1c.ru/wp-content/uploads/2017/03/%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D1%8B-1%D1%81.jpg",
          alt: "Открыть большое изображение",
          description: 'Сертификат "1С:Управление проектами"',
        },
        {
          href: "/management/m3.pdf", // Ссылка на большое изображение
          imgSrc: "https://nastroy1c.ru/wp-content/uploads/2017/03/%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D1%8B-1%D1%81.jpg",
          alt: "Открыть большое изображение",
          description: 'Сертификат "Основы менеджмента"',
        },
      ],
    },
    {
      title: "Сафиулин Рустам Тагирович",
      certificates: [
        {
          href: "/1cProf/prof8.pdf", // Ссылка на большое изображение
          imgSrc:
            "https://nastroy1c.ru/wp-content/uploads/2017/03/%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D1%8B-1%D1%81.jpg",
          alt: "Открыть большое изображение",
          description:
            'Сертификат "1С:Профессионал" по программе 1С:Бухгалтерия 8',
        },
        {
          href: "/1cProf/prof10.pdf", // Ссылка на большое изображение
          imgSrc:
            "https://nastroy1c.ru/wp-content/uploads/2017/03/%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D1%8B-1%D1%81.jpg",
          alt: "Открыть большое изображение",
          description:
            'Сертификат "1С:Профессионал" по программе 1С:Торговля и Склад 7.7',
        },
        {
          href: "/1cProf/prof12.pdf", // Ссылка на большое изображение
          imgSrc:
            "https://nastroy1c.ru/wp-content/uploads/2017/03/%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D1%8B-1%D1%81.jpg",
          alt: "Открыть большое изображение",
          description:
            'Сертификат "1С:Профессионал" по программе Управление торговлей для Казахстана (1С:Предприятие 8)',
        },
        {
          href: "/1cProf/prof14.pdf", // Ссылка на большое изображение
          imgSrc:
            "https://nastroy1c.ru/wp-content/uploads/2017/03/%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D1%8B-1%D1%81.jpg",
          alt: "Открыть большое изображение",
          description:
            'Сертификат "1С:Профессионал" по программе Управление холдингом 8 (ред. 3.0)',
        },
      ],
    },
    {
      title: "Сафиулина Елизавета Викторовна",
      certificates: [
        {
          href: "/1cProf/prof15.pdf", // Ссылка на большое изображение
          imgSrc:
            "https://nastroy1c.ru/wp-content/uploads/2017/03/%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D1%8B-1%D1%81.jpg",
          alt: "Открыть большое изображение",
          description:
            'Сертификат "1С:Профессионал" по программе 1С:Бухгалтерия 8 для Казахстана',
        },
      ],
    },
    {
      title: "Давлетбаева Зарина Маратбековна",
      certificates: [
        {
          href: "/1cProf/prof4.pdf", // Ссылка на большое изображение
          imgSrc:
            "https://nastroy1c.ru/wp-content/uploads/2017/03/%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D1%8B-1%D1%81.jpg",
          alt: "Открыть большое изображение",
          description:
            'Сертификат "1С:Профессионал" по программе 1С:Бухгалтерия 8 для Казахстана',
        },
      ],
    },
    {
      title: "Старцева Екатерина Сергеевна",
      certificates: [
        {
          href: "/1cProf/prof16.pdf", // Ссылка на большое изображение
          imgSrc:
            "https://nastroy1c.ru/wp-content/uploads/2017/03/%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D1%8B-1%D1%81.jpg",
          alt: "Открыть большое изображение",
          description:
            'Сертификат "1С:Профессионал" по программе 1С:ERP Управление предприятием 2',
        },
        {
          href: "/1cProf/prof17.pdf", // Ссылка на большое изображение
          imgSrc:
            "https://nastroy1c.ru/wp-content/uploads/2017/03/%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D1%8B-1%D1%81.jpg",
          alt: "Открыть большое изображение",
          description:
            'Сертификат "1С:Профессионал" по программе 1С:Бухгалтерия 8 для Казахстана',
        },
      ],
    },
    {
      title: "Жанисбаева Айгуль Серикпаевна",
      certificates: [
        {
          href: "/1cProf/prof5.pdf", // Ссылка на большое изображение
          imgSrc:
            "https://nastroy1c.ru/wp-content/uploads/2017/03/%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D1%8B-1%D1%81.jpg",
          alt: "Открыть большое изображение",
          description:
            'Сертификат "1С:Профессионал" по сопровождению пользователей и внедрению 1С:ИТС',
        },
        {
          href: "/1cProf/prof6.pdf", // Ссылка на большое изображение
          imgSrc:
            "https://nastroy1c.ru/wp-content/uploads/2017/03/%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D1%8B-1%D1%81.jpg",
          alt: "Открыть большое изображение",
          description:
            'Сертификат "1С:Профессионал" по программе 1С:Бухгалтерия 8 для Казахстана',
        },
        {
          href: "/1cProf/prof7.pdf", // Ссылка на большое изображение
          imgSrc:
            "https://nastroy1c.ru/wp-content/uploads/2017/03/%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D1%8B-1%D1%81.jpg",
          alt: "Открыть большое изображение",
          description:
            'Сертификат "1С:Профессионал" по программе 1С:Зарплата и управление персоналом 8 для Казахстана (ред. 3.1)',
        },
      ],
    },
    {
      title: "Якимов Максим Иванович",
      certificates: [
        {
          href: "/1cProf/prof9.pdf", // Ссылка на большое изображение
          imgSrc:
            "https://nastroy1c.ru/wp-content/uploads/2017/03/%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D1%8B-1%D1%81.jpg",
          alt: "Открыть большое изображение",
          description:
            'Сертификат "1С:Профессионал" по технологическим вопросам',
        },
        {
          href: "/1cProf/prof11.pdf", // Ссылка на большое изображение
          imgSrc:
            "https://nastroy1c.ru/wp-content/uploads/2017/03/%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D1%8B-1%D1%81.jpg",
          alt: "Открыть большое изображение",
          description:
            'Сертификат "1С:Профессионал" по знанию механизмов платформы 1С:Предприятие 8.1',
        },
        {
          href: "/1cProf/prof13.pdf", // Ссылка на большое изображение
          imgSrc:
            "https://nastroy1c.ru/wp-content/uploads/2017/03/%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D1%8B-1%D1%81.jpg",
          alt: "Открыть большое изображение",
          description:
            'Сертификат "1С:Профессионал" по программе Управление торговлей для Казахстана (1С:Предприятие 8)',
        },
        {
          href: "/1cSpec/spec5.pdf", // Ссылка на большое изображение
          imgSrc: "https://nastroy1c.ru/wp-content/uploads/2017/03/%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D1%8B-1%D1%81.jpg",
          alt: "Открыть большое изображение",
          description:
            'Сертификат "1С:Специалист" по разработке и модификации прикладных решений на платформе 1С:Предприятие 8',
        },
        {
          href: "/management/m4.pdf", // Ссылка на большое изображение
          imgSrc: "https://nastroy1c.ru/wp-content/uploads/2017/03/%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D1%8B-1%D1%81.jpg",
          alt: "Открыть большое изображение",
          description: 'Сертификат "1С:Эксперт" по технологическим вопросам',
        },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(sections[0].title);

  return (
    <div className="container mx-auto px-4 py-8 font-sans mt-20">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#A22823]">
        Государственные сертификаты
      </h1>
      <h2 className="text-2xl font-semibold mb-6 text-center text-[#A22823]">
        Государственные сертификаты, полученные программными продуктами фирмы 1С
      </h2>

      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-2">
          {sections.map((section) => (
            <button
              key={section.title}
              onClick={() => setActiveTab(section.title)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeTab === section.title
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>

      {sections.map((section) => (
        <div
          key={section.title}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
            activeTab === section.title ? "block" : "hidden"
          }`}
        >
          {section.certificates.map((cert, index) => (
            <CertificateCard key={index} {...cert} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default CertificatesPage;
