"use client";
import { useEffect } from "react";
import Image from "next/image";
import firstImg from "../../public/img-1.jpg";
import secondImg from "../../public/img-2.jpg";
import thirdImg from "../../public/img-3.jpg";

const Carousel = () => {
  useEffect(() => {
    const init = async () => {
      const { Carousel, initTWE } = await import("tw-elements");
      initTWE({ Carousel });
    };
    init();
  }, []);

  return (
    <div
      id="carouselExampleCaptions"
      className="relative"
      data-twe-carousel-init
      data-twe-ride="carousel"
    >
      <div
        className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
        data-twe-carousel-indicators
      >
        <button
          type="button"
          data-twe-target="#carouselExampleCaptions"
          data-twe-slide-to="0"
          data-twe-carousel-active
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-twe-target="#carouselExampleCaptions"
          data-twe-slide-to="1"
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-twe-target="#carouselExampleCaptions"
          data-twe-slide-to="2"
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-label="Slide 3"
        ></button>
      </div>

      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        <div
          className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-active
          data-twe-carousel-item
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src={firstImg}
            className="block w-full h-[700px] object-cover" // Fixed dimensions
            alt="Slide 1"
          />
          <div className="absolute inset-x-0 top-1/2 transform -translate-y-3/4 text-center text-white md:block ">
            <h2 className="text-6xl mt-[400px] mb-10">
              Управление кредитованием
            </h2>
            <p className="text-3xl leading-[50px] mt-[100px] mb-16">
              Решение позволяет автоматизировать <br /> все бизнес-процессы
              выдачи, учета и мониторинга кредитных/лизинговых сделок, <br />{" "}
              обладая при этом возможностью гибкой настройки и <br /> адаптации
              под специфику конкретной организации.
            </p>
            <button className="w-1/5 h-14 bg-slate-700">Связаться</button>
          </div>
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-item
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src={secondImg}
            className="block w-full h-[700px] object-cover" // Fixed dimensions
            alt="Slide 2"
          />
          <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
            <h2 className="text-6xl mb-10">1C:ERP</h2>
            <p className="text-3xl leading-10 mb-16">
              Решение для построения комплексных информационных систем
              управления деятельностью многопрофильных предприятий, в том числе
              с технически сложным производством.
            </p>
            <button className="w-1/5 h-14 bg-slate-700">Связаться</button>
          </div>
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-item
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src={thirdImg}
            className="block w-full h-[700px] object-cover" // Fixed dimensions
            alt="Slide 3"
          />
          <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
            <h2 className="text-6xl mb-10">Управление кредитованием</h2>
            <p className="text-3xl leading-10 mb-16">
              Решение позволяет автоматизировать <br /> все бизнес-процессы
              выдачи, учета и мониторинга кредитных/лизинговых сделок, <br />{" "}
              обладая при этом возможностью гибкой настройки и <br /> адаптации
              под специфику конкретной организации.
            </p>
            <button className="w-1/5 h-14 bg-slate-700">Связаться</button>
          </div>
        </div>
      </div>

      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
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
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
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
    </div>
  );
};

export default Carousel;
