"use client"
import React, { useState } from 'react';

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

const CertificateCard: React.FC<Certificate> = ({ href, imgSrc, alt, description }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
      <img src={imgSrc} alt={alt} className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300">{description}</p>
      </div>
    </a>
  </div>
);

const CertificatesPage: React.FC = () => {
  const sections: CertificateSection[] = [
    {
      title: "1С:Предприятие 8",
      certificates: [
        {
          href: "https://static.1c.ru/rus/products/serts/sert4828.pdf",
          imgSrc: "https://static.1c.ru/rus/products/serts/sert4828_thumb.png",
          alt: "Увеличить",
          description: "Сертификат соответствия ФСТЭК России № 4828 (от 5 августа 2024 г., действителен до 5 августа 2029 г.)"
        },
        {
          href: "https://static.1c.ru/rus/products/serts/sert4183.pdf",
          imgSrc: "https://static.1c.ru/rus/products/serts/sert4183-thumb.png",
          alt: "Увеличить",
          description: "Сертификат соотвествия ФСТЭК России № 4183 (от 04.12.2019, действителен до 04.12.2024)"
        },
        {
          href: "https://static.1c.ru/rus/products/serts/sert83.jpg",
          imgSrc: "https://static.1c.ru/rus/products/serts/sert83-thumb.jpg",
          alt: "Увеличить",
          description: "Сертификат соответствия ФСТЭК России № 3442 (от 2 сентября 2015 г., действителен до 2 сентября 2023 г.)"
        },
        {
          href: "https://static.1c.ru/rus/products/serts/sert15988.pdf",
          imgSrc: "https://static.1c.ru/rus/products/serts/sert15988-thumb.png",
          alt: "Увеличить",
          description: "Сертификат соответствия СМК № ВР 08.1.15988-2022 (от 04.04.2022, действителен до 04.04.2025)"
        },
        {
          href: "https://static.1c.ru/rus/products/serts/81-a.jpg",
          imgSrc: "https://static.1c.ru/rus/products/serts/81-a-thumb.jpg",
          alt: "Увеличить",
          description: "Сертификат соответствия на 1С:Предприятие 8 от 14.10.2009"
        },
        {
          href: "https://static.1c.ru/rus/products/serts/81-b.jpg",
          imgSrc: "https://static.1c.ru/rus/products/serts/81-b-thumb.jpg",
          alt: "Увеличить",
          description: "Приложение к сертификату соответствия от 06.06.2008"
        },
        {
          href: "https://static.1c.ru/rus/products/serts/sert2137.jpg",
          imgSrc: "https://static.1c.ru/rus/products/serts/sert2137_thumb.gif",
          alt: "Увеличить",
          description: "Сертификат соответствия ФСТЭК России по требованиям безопасности информации"
        },
        {
          href: "https://static.1c.ru/rus/products/serts/sert_2137_20072013.jpg",
          imgSrc: "https://static.1c.ru/rus/products/serts/sert_2137_20072013_thumb.gif",
          alt: "Увеличить",
          description: "Сертификат соответствия ФСТЭК России № 2137 (продление от 20.07.2013 г.)"
        }
      ]
    },
    {
      title: "1С:Предприятие 7.7",
      certificates: [
        {
          href: "https://static.1c.ru/rus/products/serts/sert-p1.jpg",
          imgSrc: "https://static.1c.ru/rus/products/serts/sert-p1_137h.jpg",
          alt: "Открыть большое изображение",
          description: "Сертификат соответствия на \"1С:Предприятие 7.7 (сетевая версия) Бухгалтерский учет\" от 17.12.2004"
        },
        {
          href: "https://static.1c.ru/rus/products/serts/sert-p2.jpg",
          imgSrc: "https://static.1c.ru/rus/products/serts/sert-p2_137h.jpg",
          alt: "Открыть большое изображение",
          description: "Приложение к сертификату соответствия от 17.12.2004"
        },
        {
          href: "https://static.1c.ru/rus/products/serts/sert-p3.jpg",
          imgSrc: "https://static.1c.ru/rus/products/serts/sert-p3_137h.jpg",
          alt: "Открыть большое изображение",
          description: "Разрешение на применение знака соответствия ГОСТ Р к продукту \"1С:Предприятие 7.7 (сетевая версия) Бухгалтерский учет\""
        },
        {
          href: "https://static.1c.ru/rus/products/serts/serpre77.jpg",
          imgSrc: "https://static.1c.ru/rus/products/serts/serpre77s.jpg",
          alt: "Открыть большое изображение",
          description: "Сертификат соответствия от 23.12.99"
        },
        {
          href: "https://static.1c.ru/rus/products/serts/pril1.jpg",
          imgSrc: "https://static.1c.ru/rus/products/serts/pril1s.jpg",
          alt: "Открыть большое изображение",
          description: "Приложение к сертификату от 23.12.99. Страница 1."
        },
        {
          href: "https://static.1c.ru/rus/products/serts/pril2.jpg",
          imgSrc: "https://static.1c.ru/rus/products/serts/pril2s.jpg",
          alt: "Открыть большое изображение",
          description: "Приложение к сертификату от 23.12.99. Страница 2."
        }
      ]
    },
    {
      title: "1С:Налогоплательщик",
      certificates: [
        {
          href: "https://static.1c.ru/rus/products/serts/snal220101.jpg",
          imgSrc: "https://static.1c.ru/rus/products/serts/snal220101s.jpg",
          alt: "Открыть большое изображение",
          description: "Сертификат соответствия на \"1С:Налогоплательщик 7.7\" от 22.01.2001"
        },
        {
          href: "https://static.1c.ru/rus/products/serts/sernal77.jpg",
          imgSrc: "https://static.1c.ru/rus/products/serts/sernal77s.jpg",
          alt: "Открыть большое изображение",
          description: "Сертификат соответствия на \"1С:Налогоплательщик 7.7\" от 23.12.1999"
        },
        {
          href: "https://static.1c.ru/rus/products/serts/svidnp98.jpg",
          imgSrc: "https://static.1c.ru/rus/products/serts/svidnp98s.jpg",
          alt: "Открыть большое изображение",
          description: "Свидетельство N7 от 18.05.1998 на \"1С:Налогоплательщик\""
        },
        {
          href: "https://static.1c.ru/rus/products/serts/svidnp97.jpg",
          imgSrc: "https://static.1c.ru/rus/products/serts/svidnp97s.jpg",
          alt: "Открыть большое изображение",
          description: "Свидетельство N1 от 5.01.1998 на \"1С:Налогоплательщик\""
        }
      ]
    },
    {
      title: "1С:Предприятие 7.7 для образования",
      certificates: [
        {
          href: "https://static.1c.ru/rus/products/serts/school1.jpg",
          imgSrc: "https://static.1c.ru/rus/products/serts/school1.jpg",
          alt: "Открыть большое изображение",
          description: "Сертификат соответствия на \"1С:ХроноГраф Школа\" от 24.08.2004 (ГОСТ Р)"
        },
        {
          href: "https://static.1c.ru/rus/products/serts/school2.jpg",
          imgSrc: "https://static.1c.ru/rus/products/serts/school2.jpg",
          alt: "Открыть большое изображение",
          description: "Сертификат соответствия на \"1С:ХроноГраф Школа\" от 21.06.2005 (\"ИНКОМТЕХСЕРТ\")"
        }
      ]
    },
    {
      title: "1С:Образование 3.0",
      certificates: [
        {
          href: "https://static.1c.ru/rus/products/serts/GOST_R_E3.jpg",
          imgSrc: "https://static.1c.ru/rus/products/serts/GOST_R_E3s.jpg",
          alt: "Открыть большое изображение",
          description: "Сертификат соответствия на \"1С:Образование 3.0\" от 14.06.2005 (ГОСТ Р)"
        },
        {
          href: "https://static.1c.ru/rus/products/serts/incomteh_E3.jpg",
          imgSrc: "https://static.1c.ru/rus/products/serts/incomteh_E3s.jpg",
          alt: "Открыть большое изображение",
          description: "Сертификат соответствия на \"1С:Образование 3.0\" от 14.06.2005 (\"ИНКОМТЕХСЕРТ\")"
        }
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(sections[0].title);

  return (
    <div className="container mx-auto px-4 py-8 font-sans">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Государственные сертификаты</h1>
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-600">
        Государственные сертификаты, полученные программными продуктами фирмы "1С"
      </h2>

      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-2">
          {sections.map((section) => (
            <button
              key={section.title}
              onClick={() => setActiveTab(section.title)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeTab === section.title
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
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
            activeTab === section.title ? 'block' : 'hidden'
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