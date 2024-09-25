"use client";
import React, { useRef, useEffect, useState, MouseEventHandler } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "/public/ServicesImages/erp.png";
import img2 from "/public/ServicesImages/audit.png";
import img3 from "/public/ServicesImages/auto.png";
import img4 from "/public/ServicesImages/follow.png";
import img5 from "/public/ServicesImages/hold.png";
import img6 from "/public/ServicesImages/micro.png";

const services = [
  {
    title: "1С:ERP Управление предприятием",
    description:
      "Мы предоставляем полный комплекс услуг по внедрению решений и обеспечиваем самый высокий уровень обслуживания.",
    image: img1,
    alt: "ERP Управление предприятием",
    link: "/services/ERP",
  },
  {
    title: "IT-аудит и оптимизация 1С",
    description:
      "Проводим комплексный анализ и оптимизацию систем 1С для повышения эффективности вашего бизнеса.",
    image: img2,
    alt: "IT-аудит и оптимизация 1С",
    link: "/services/It",
  },
  {
    title: "Автоматизация бизнес-процессов",
    description:
      "Разрабатываем и внедряем решения для автоматизации ключевых бизнес-процессов вашей компании.",
    image: img3,
    alt: "Автоматизация бизнес-процессов",
    link: "/services/Automation",
  },
  {
    title: "Техническое сопровождение информационных систем",
    description:
      "Обеспечиваем бесперебойную работу ваших информационных систем с помощью профессиональной технической поддержки.",
    image: img4,
    alt: "Техническое сопровождение",
    link: "/services/Info",
  },
  {
    title: "1С:Управление холдингом",
    description:
      "Мы ответственно подходим к своему делу. Всегда следим за соблюдением сроков и качества выполнения работ.",
    image: img5,
    alt: "Управление холдингом",
    link: "/services/Holding",
  },
  {
    title: "Управление микрофинансовой организацией (МФО)",
    description:
      "Предлагаем специализированные решения для эффективного управления микрофинансовыми организациями.",
    image: img6,
    alt: "Управление МФО",
    link: "/services/MFO",
  },
];

interface ArrowProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -right-10 top-1/2 -translate-y-1/2 z-10 p-2 bg-[#A22823] rounded-full hover:bg-red-700 transition-colors duration-300"
    aria-label="Next slide"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white"
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  </button>
);

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -left-10 top-1/2 -translate-y-1/2 z-10 p-2 bg-[#A22823] rounded-full hover:bg-red-700 transition-colors duration-300"
    aria-label="Previous slide"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white"
    >
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  </button>
);

interface CustomDotsProps {
  dots: React.ReactNode;
  currentSlide: number;
  slidesToShow: number;
  slideCount: number;
}

const CustomDots: React.FC<CustomDotsProps> = ({
  dots,
  currentSlide,
  slidesToShow,
  slideCount,
}) => (
  <div
    className="custom-dots"
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "20px",
    }}
  >
    {React.Children.map(dots, (_, index) => {
      const isActive = Array.from({ length: slidesToShow }, (_, i) => {
        const slideIndex = (currentSlide + i) % slideCount;
        return (
          slideIndex === index ||
          (slideIndex < 0 && slideCount + slideIndex === index)
        );
      }).some(Boolean);

      return (
        <div
          key={index}
          className={`custom-dot ${isActive ? "active" : ""}`}
          style={{
            width: "12px",
            height: "12px",
            margin: "0 5px",
            backgroundColor: isActive ? "#A22823" : "#ccc",
            borderRadius: "50%",
            display: "inline-block",
            transition: "background-color 0.3s ease",
          }}
        />
      );
    })}
  </div>
);

const ServicesCards: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [slideHeight, setSlideHeight] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [slidesToShow, setSlidesToShow] = useState<number>(3);

  const updateSlidesToShow = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    }
  };

  const updateHeight = () => {
    if (sliderRef.current) {
      const slider = sliderRef.current as unknown as {
        innerSlider?: { list?: HTMLElement };
      };
      if (slider.innerSlider && slider.innerSlider.list) {
        const slides = slider.innerSlider.list.querySelectorAll(".slick-slide");
        let maxHeight = 0;
        slides.forEach((slide) => {
          const slideContent = slide.querySelector(".slide-content");
          if (slideContent instanceof HTMLElement) {
            slideContent.style.height = "auto";
            const height = slideContent.offsetHeight;
            maxHeight = Math.max(maxHeight, height);
          }
        });
        setSlideHeight(Math.max(maxHeight, 400));
      }
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
    beforeChange: (_current: number, next: number) => setCurrentSlide(next),
    customPaging: () => <div />,
    appendDots: (dots: React.ReactNode) => (
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
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    updateSlidesToShow();
    updateHeight();

    const handleResize = () => {
      updateSlidesToShow();
      updateHeight();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    updateHeight();
  }, [slidesToShow]);

  return (
    <div className="container mx-auto  sm:px-20 px-10 md:px-10 py-8 md:py-16 relative overflow-hidden">
      <Slider ref={sliderRef} {...settings}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-4 flex items-stretch slide-content"
            style={{ height: `${slideHeight}px` }}
          >
            <div className="rounded-lg shadow-lg overflow-hidden relative flex-grow flex flex-col items-center">
              <div className="relative w-full h-80 mb-6">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="flex-grow px-6 text-center">
                <h3 className="text-lg md:text-xl font-bold mb-4">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-6">
                  {service.description}
                </p>
              </div>
              <div className="py-4">
                <Link
                  href={service.link}
                  className="bg-[#A22823] hover:bg-[#821b19] text-white py-2 px-4 rounded-full"
                >
                  Подробнее
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default ServicesCards;
