"use client";
import { useEffect } from "react";
import Image from "next/image";
import employee1 from "../../public/employee1.jpeg"; // Replace with actual employee images

import { motion, Variants } from "framer-motion";

// Define the type for the custom parameter
const textAnimation: Variants = {
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

const EmployeeCarousel = () => {
  useEffect(() => {
    const init = async () => {
      const { Carousel, initTWE } = await import("tw-elements");

      // Check if the element exists before initializing
      const carouselElement = document.getElementById("employeeCarousel");
      if (carouselElement) {
        initTWE({ Carousel });
      }
    };

    // Use a timeout to ensure the DOM is fully loaded
    const timeoutId = setTimeout(init, 100);

    // Cleanup timeout
    return () => clearTimeout(timeoutId);
  }, []);

  const employees = [
    { img: employee1, name: "John Doe", position: "Software Engineer" },
    { img: employee1, name: "Jane Smith", position: "Project Manager" },
    { img: employee1, name: "Alex Johnson", position: "Marketing Specialist" },
    { img: employee1, name: "Emily Davis", position: "Designer" },
    { img: employee1, name: "Chris Lee", position: "Data Analyst" },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      id="employeeCarousel"
      className="relative max-w-4xl mx-auto" // Carousel container
      data-twe-carousel-init
      data-twe-ride="carousel"
    >
      {/* Carousel items */}
      <div className="relative w-full overflow-hidden grid grid-cols-4 gap-4">
        {employees.map((employee, index) => (
          <div
            key={index}
            className="relative w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-twe-carousel-item
            style={{ backfaceVisibility: "hidden" }}
          >
            <Image
              src={employee.img}
              className="block w-full h-64 object-cover mx-auto mt-4" // Square image
              alt={employee.name}
            />
            <div className="absolute inset-x-0 bottom-0 mb-4 text-center text-white bg-black bg-opacity-50 py-2">
              <motion.h3
                custom={1}
                variants={textAnimation}
                className="text-lg font-semibold"
              >
                {employee.name}
              </motion.h3>
              <motion.p custom={2} variants={textAnimation} className="text-sm">
                {employee.position}
              </motion.p>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel controls */}
      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center p-0 text-center text-white opacity-50 transition-opacity duration-150 hover:opacity-90"
        type="button"
        data-twe-target="#employeeCarousel"
        data-twe-slide="prev"
      >
        <span className="inline-block h-6 w-6">
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
      </button>

      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center p-0 text-center text-white opacity-50 transition-opacity duration-150 hover:opacity-90"
        type="button"
        data-twe-target="#employeeCarousel"
        data-twe-slide="next"
      >
        <span className="inline-block h-6 w-6">
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
      </button>
    </motion.div>
  );
};

export default EmployeeCarousel;
