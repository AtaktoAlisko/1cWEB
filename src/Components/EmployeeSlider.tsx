// components/EmployeeSlider.js
"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import employee1 from "../../public/employee1.jpeg"; // Replace with actual image paths

const EmployeeSlider = () => {
  const employees = [
    {
      name: "Мертаев Бауыржан",
      school: "125High School Aktobe",
      image: employee1,
    },
    {
      name: "Сагидуллаев Турар",
      school: "YBYRAI ULTTYQ MEKTEBI",
      image: employee1,
    },
    {
      name: "Нурпеис Қанат",
      school: "125High School Taldyqorgan",
      image: employee1,
    },
    {
      name: "Бексултан Ербол",
      school: "125High School Shymkent 2",
      image: employee1,
    },
  ];

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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-11/12 mx-auto my-8">
      <Slider {...settings}>
        {employees.map((employee, index) => (
          <div key={index} className="p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <Image
                src={employee.image}
                alt={employee.name}
                width={128}
                height={128}
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold text-black dark:text-white">{employee.name}</h3>
              <p className="text-black dark:text-white">{employee.school}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default EmployeeSlider;