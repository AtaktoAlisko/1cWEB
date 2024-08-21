"use client"

import React, { useRef, useEffect, useState } from 'react';
import { MouseEventHandler } from 'react';
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

const NextArrow: React.FC<{ onClick?: React.MouseEventHandler<HTMLButtonElement> }> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 p-2 bg-[#A22823] rounded-full shadow-md hover:bg-red-700 transition-colors duration-300"
    aria-label="Next slide"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  </button>
);

const PrevArrow: React.FC<{ onClick?: React.MouseEventHandler<HTMLButtonElement> }> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 p-2 bg-[#A22823] rounded-full shadow-md hover:bg-red-700 transition-colors duration-300"
    aria-label="Previous slide"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  </button>
);


interface CustomDotsProps {
  dots: React.ReactNode[];
  currentSlide: number;
  slidesToShow: number;
  slideCount: number;
}

const CustomDots: React.FC<CustomDotsProps> = ({ dots, currentSlide, slidesToShow, slideCount }) => (
  <div className="custom-dots" style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px'
  }}>
    {dots.map((_, index) => {
      const isActive = Array.from({ length: slidesToShow }, (_, i) => {
        const slideIndex = (currentSlide + i) % slideCount;
        return slideIndex === index || (slideIndex < 0 && slideIndex + slideCount === index);
      }).some(Boolean);

      return (
        <div
          key={index}
          className={`custom-dot ${isActive ? 'active' : ''}`}
          style={{
            width: "12px",
            height: "12px",
            margin: "0 5px",
            backgroundColor: isActive ? "#A22823" : "#ccc",
            borderRadius: "50%",
            display: "inline-block",
            transition: "background-color 0.3s ease"
          }}
        />
      );
    })}
  </div>
);

export default function ServicesCarousel() {
  const sliderRef = useRef<Slider | null>(null);
  const [slideHeight, setSlideHeight] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const updateSlidesToShow = () => {
    if (window.innerWidth < 640) {
      setSlidesToShow(1);
    } else if (window.innerWidth < 1024) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(3);
    }
  };

  const updateHeight = () => {
    if (sliderRef.current && sliderRef.current.innerSlider && sliderRef.current.innerSlider.list) {
      const slides = sliderRef.current.innerSlider.list.querySelectorAll('.slick-slide');
      let maxHeight = 0;
      slides.forEach(slide => {
        const slideContent = slide.querySelector('.slide-content');
        if (slideContent instanceof HTMLElement) {
          slideContent.style.height = 'auto';
          const height = slideContent.offsetHeight;
          maxHeight = Math.max(maxHeight, height);
        }
      });
      setSlideHeight(Math.max(maxHeight, 400)); // Устанавливаем минимальную высоту 400px
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    customPaging: () => <div />,
    appendDots: (dots: React.ReactNode[]) => (
      <CustomDots 
        dots={dots} 
        currentSlide={currentSlide} 
        slidesToShow={slidesToShow} 
        slideCount={services.length}
      />
    ),
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

  useEffect(() => {
    updateSlidesToShow();
    updateHeight();

    const handleResize = () => {
      updateSlidesToShow();
      updateHeight();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Добавляем эффект для пересчета высоты при изменении slidesToShow
  useEffect(() => {
    updateHeight();
  }, [slidesToShow]);

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
      <div className="container mx-auto px-4 py-16 relative">
        <Slider ref={sliderRef} {...settings}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="px-2"
            >
              <div 
                className="slide-content group flex flex-col rounded-lg bg-white border border-[#A22823] shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
                style={{ height: `${slideHeight}px`, minHeight: '400px' }}
              >
                <div className="overflow-hidden rounded-lg p-4 flex-shrink-0">
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