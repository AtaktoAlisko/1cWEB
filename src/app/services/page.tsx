"use client"

import { useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import img1 from "/public/card1.png";
import img2 from "/public/card2.png";
import img3 from "/public/card3.png";
import heroImage from "/public/img-1.jpg";

const services = [
  {
    title: "1С:ERP Управление предприятием",
    description: "Мы предоставляем полный комплекс услуг по внедрению решений и обеспечиваем самый высокий уровень обслуживания.",
    image: img1,
    alt: "ERP Управление предприятием",
    link: "/services/serviceERP",
  },
  {
    title: "IT-аудит и оптимизация 1С",
    description: "Проводим комплексный анализ и оптимизацию систем 1С для повышения эффективности вашего бизнеса.",
    image: img2,
    alt: "IT-аудит и оптимизация 1С",
    link: "/services/serviceITAudit",
  },
  {
    title: "Автоматизация бизнес-процессов",
    description: "Разрабатываем и внедряем решения для автоматизации ключевых бизнес-процессов вашей компании.",
    image: img3,
    alt: "Автоматизация бизнес-процессов",
    link: "/services/serviceAutomation",
  },
  {
    title: "Техническое сопровождение информационных систем",
    description: "Обеспечиваем бесперебойную работу ваших информационных систем с помощью профессиональной технической поддержки.",
    image: img1,
    alt: "Техническое сопровождение",
    link: "/services/serviceTechnicalSupport",
  },
  {
    title: "1С:Управление холдингом",
    description: "Мы ответственно подходим к своему делу. Всегда следим за соблюдением сроков и качества выполнения работ.",
    image: img2,
    alt: "Управление холдингом",
    link: "/services/serviceHolding",
  },
  {
    title: "Управление микрофинансовой организацией (МФО)",
    description: "Предлагаем специализированные решения для эффективного управления микрофинансовыми организациями.",
    image: img3,
    alt: "Управление МФО",
    link: "/services/serviceMFO",
  },
];

export default function ServicesCarousel() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="bg-gray-100">
      <div className="relative h-[50vh] w-full">
        <Image
          src={heroImage}
          alt="Services Hero Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold">Our Services</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
        <Slider ref={sliderRef} {...settings}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="px-2"
            >
              <div className="group flex flex-col rounded-lg bg-white border border-[#A22823] shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl h-full">
                <div className="overflow-hidden rounded-lg p-4">
                  <Image
                    className="rounded-lg mx-auto transition-transform transform group-hover:scale-110"
                    src={service.image}
                    alt={service.alt}
                    width={300}
                    height={300}
                    style={{
                      width: '100%',
                      height: 'auto',
                      aspectRatio: '1/1',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div className="p-6 text-gray-800 flex flex-col flex-grow">
                  <h3 className="mb-2 text-xl font-semibold text-center">{service.title}</h3>
                  <p className="mb-4 text-base text-center flex-grow">{service.description}</p>
                  <div className="flex justify-center mt-auto">
                    <Link
                      href={service.link}
                      className="inline-block rounded bg-[#A22823] px-6 py-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-red-700 focus:bg-red-800 focus:outline-none active:bg-red-900"
                    >
                      Подробнее
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
}