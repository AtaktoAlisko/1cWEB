"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import firstImg from "../../../public/Carousel/img-1.jpg";
import secondImg from "../../../public/Carousel/img-2.jpg";
import thirdImg from "../../../public/Carousel/img-3.jpg";
import Modal from "../Modal";
import { motion, useScroll, useTransform } from "framer-motion";

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const Carousel = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const carouselRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: carouselRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  useEffect(() => {
    const init = async () => {
      const { Carousel, initTWE } = await import("tw-elements");
      initTWE({ Carousel });
    };
    init();
  }, []);

  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  return (
    <motion.div
      ref={carouselRef}
      initial="hidden"
      whileInView="visible"
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
          <motion.div style={{ y }} className="w-full h-full">
            <Image
              src={firstImg}
              className="block w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] 2xl:h-[100vh] object-cover"
              alt="Slide 1"
            />
          </motion.div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 text-center text-white">
            <motion.h2
              custom={1}
              variants={textAnimation}
              className="text-xl mt-10 sm:text-3xl sm:mt-1  md:text-4xl lg:text-5xl xl:text-6xl drop-shadow-lg"
            >
              Управление кредитованием
            </motion.h2>

            <motion.p
              custom={2}
              variants={textAnimation}
              className="text-xs mt-6 mb-5 px-10 sm:text-lg sm:mt-10 sm:px-20 md:text-xl lg:text-2xl xl:text-3xl lg:px-28  leading-5 xl:leading-relaxed xl:px-40 drop-shadow-lg"
            >
              Решение позволяет автоматизировать все бизнес-процессы выдачи,
              учета и мониторинга кредитных/лизинговых сделок, обладая при этом
              возможностью гибкой настройки и адаптации под специфику конкретной
              организации.
            </motion.p>
            <div className="relative flex items-center justify-center w-full h-full">
              <motion.button
                custom={3}
                variants={textAnimation}
                onClick={toggleModal}
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-500 font-bold rounded-lg text-xs px-1 py-1 text-center transition-all duration-300 ease-in-out sm:px-3 sm:py-3 md:px-3 md:py-3 lg:px-5 lg:py-5 xl:mt-10 xl:px-14 xl:text-2xl xl:py-5"
              >
                Свяжитесь с нами
              </motion.button>
            </div>
          </div>
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-item
          style={{ backfaceVisibility: "hidden" }}
        >
          <motion.div style={{ y }} className="w-full h-full">
            <Image
              src={secondImg}
              className="block w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] 2xl:h-[100vh] object-cover"
              alt="Slide 2"
            />
          </motion.div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 text-center text-white">
            <motion.h2
              variants={textAnimation}
              className="text-xl mt-10 sm:text-3xl sm:mt-1 md:text-4xl lg:text-5xl xl:text-6xl drop-shadow-lg"
            >
              1C:ERP
            </motion.h2>
            <p
              data-aos="fade-down"
              className="text-xs mt-6 mb-5 px-10 sm:text-lg sm:mt-10 sm:px-20 md:text-xl lg:text-2xl xl:text-3xl lg:px-28 leading-5 xl:leading-relaxed xl:px-40 drop-shadow-lg"
            >
              Решение для построения комплексных информационных систем
              управления деятельностью многопрофильных предприятий, в том числе
              с технически сложным производством.
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
          <motion.div style={{ y }} className="w-full h-full">
            <Image
              src={thirdImg}
              className="block w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] 2xl:h-[100vh] object-cover"
              alt="Slide 3"
            />
          </motion.div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 text-center text-white">
            <motion.h2
              variants={textAnimation}
              data-aos="fade-up"
              className="text-xl mt-10 sm:text-3xl sm:mt-1 md:text-4xl lg:text-5xl xl:text-6xl drop-shadow-lg"
            >
              Управление холдингом
            </motion.h2>
            <p
              data-aos="fade-down"
              className="text-xs mt-6 mb-5 px-10 sm:text-lg sm:mt-10 sm:px-20 md:text-xl lg:text-2xl xl:text-3xl lg:px-28 leading-5 xl:leading-relaxed xl:px-40 drop-shadow-lg"
            >
              Ведущее решение для эффективной автоматизации работы управляющих
              компаний и финансовых служб бизнес-единиц холдингов.
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
    </motion.div>
  );
};

export default Carousel;