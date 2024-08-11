"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import firstImg from "../../public/img-1.jpg";
import secondImg from "../../public/img-2.jpg";
import thirdImg from "../../public/img-3.jpg";
import Modal from "../Components/Modal";
import AOS from "aos";

const Carousel = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const init = async () => {
      const { Carousel, initTWE } = await import("tw-elements");
      initTWE({ Carousel });
    };
    init();
  }, []);

  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  return (
    <div
      id="carouselExampleCaptions"
      className="relative"
      data-twe-carousel-init
      data-twe-ride="carousel"
    >
      {/* Carousel items */}
      <div className="relative w-full overflow-hidden">
        <div
          className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-active
          data-twe-carousel-item
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src={firstImg}
            className="block w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] 2xl:h-[100vh] object-cover"
            alt="Slide 1"
          />
          <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 text-center text-white">
            <h2
              data-aos="fade-up"
              className="text-xl mt-10 sm:text-3xl sm:mt-1  md:text-4xl lg:text-5xl xl:text-6xl drop-shadow-lg"
            >
              Управление кредитованием
            </h2>
            <p
              data-aos="fade-down"
              className="text-xs mt-6 mb-5 px-10 sm:text-lg sm:mt-10 sm:px-20 md:text-xl lg:text-2xl xl:text-3xl lg:px-28  leading-5 xl:leading-relaxed xl:px-40 drop-shadow-lg"
            >
              Решение позволяет автоматизировать все бизнес-процессы выдачи,
              учета и мониторинга кредитных/лизинговых сделок, обладая при этом
              возможностью гибкой настройки и адаптации под специфику конкретной
              организации.
            </p>
            <div className="relative flex items-center justify-center w-full h-full">
              <button
                onClick={toggleModal}
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-500 font-bold rounded-lg text-xs px-1 py-1 text-center transition-all duration-300 ease-in-out sm:px-3 sm:py-3 md:px-3 md:py-3 lg:px-5 lg:py-5 xl:mt-10 xl:px-14 xl:text-2xl xl:py-5"
              >
                Свяжитесь с нами
              </button>
            </div>
          </div>
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-item
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src={secondImg}
            className="block w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] 2xl:h-[100vh] object-cover"
            alt="Slide 2"
          />
          <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 text-center text-white">
            <h2
              data-aos="fade-up"
              className="text-xl mt-10 sm:text-3xl sm:mt-1 md:text-4xl lg:text-5xl xl:text-6xl drop-shadow-lg"
            >
              1C:ERP
            </h2>
            <p
              data-aos="fade-down"
              className="text-xs mt-6 mb-5 px-10 sm:text-lg sm:mt-10 sm:px-20 md:text-xl lg:text-2xl xl:text-3xl lg:px-28 leading-5 xl:leading-relaxed xl:px-40 drop-shadow-lg"
            >
              Решение для построения комплексных информационных систем управления
              деятельностью многопрофильных предприятий, в том числе с технически
              сложным производством.
            </p>
            <div className="relative flex items-center justify-center w-full h-full">
              <button
                onClick={toggleModal}
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-500 font-bold rounded-lg text-xs px-1 py-1 text-center transition-all duration-300 ease-in-out sm:px-3 sm:py-3 md:px-3 md:py-3 lg:px-5 lg:py-5 xl:mt-10 xl:px-14 xl:text-2xl xl:py-5"
              >
                Свяжитесь с нами
              </button>
            </div>
          </div>
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-item
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src={thirdImg}
            className="block w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] 2xl:h-[100vh] object-cover"
            alt="Slide 3"
          />
          <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 text-center text-white">
            <h2
              data-aos="fade-up"
              className="text-xl mt-10 sm:text-3xl sm:mt-1 md:text-4xl lg:text-5xl xl:text-6xl drop-shadow-lg"
            >
              Управление кредитованием
            </h2>
            <p
              data-aos="fade-down"
              className="text-xs mt-6 mb-5 px-10 sm:text-lg sm:mt-10 sm:px-20 md:text-xl lg:text-2xl xl:text-3xl lg:px-28 leading-5 xl:leading-relaxed xl:px-40 drop-shadow-lg"
            >
              Решение позволяет автоматизировать все бизнес-процессы выдачи, учета и
              мониторинга кредитных/лизинговых сделок, обладая при этом возможностью
              гибкой настройки и адаптации под специфику конкретной организации.
            </p>
            <div className="relative flex items-center justify-center w-full h-full">
              <button
                onClick={toggleModal}
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-500 font-bold rounded-lg text-xs px-1 py-1 text-center transition-all duration-300 ease-in-out sm:px-3 sm:py-3 md:px-3 md:py-3 lg:px-5 lg:py-5 xl:mt-10 xl:px-14 xl:text-2xl xl:py-5"
              >
                Свяжитесь с нами
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel controls */}
      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90"
        type="button"
        data-twe-target="#carouselExampleCaptions"
        data-twe-slide="prev"
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
      </button>

      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90"
        type="button"
        data-twe-target="#carouselExampleCaptions"
        data-twe-slide="next"
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Next
        </span>
      </button>

      {/* Modal */}
      <Modal isOpen={modalIsOpen} toggleModal={toggleModal} />
    </div>
  );
};

export default Carousel;
