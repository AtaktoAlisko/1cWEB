"use client";

import Image from "next/image";
import astana from "../../../public/astana.jpg";
import { useState } from "react";

export default function BasicInfo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="my-20 mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 2xl:mx-40">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          <div className="relative w-full md:w-1/2 h-80 md:h-auto">
            <Image
              src={astana}
              alt="Astana"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center top",
              }}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-[#A22823]">
              <p className="mb-4 text-base md:text-lg leading-relaxed text-gray-700">
                Компания «Softway» работает на рынке биржевого консалтинга и
                информационных технологий в Казахстане.
              </p>
              <p className="mb-4 text-base md:text-lg leading-relaxed text-gray-700">
                Мы реализуем комплексные проекты, направленные на повышение
                эффективности деятельности, предусматриваем развитие передовых
                управленческих и информационных технологий.
              </p>
              {/* Conditional text display based on state and screen size */}
              <p
                className={`mb-4 text-base md:text-lg leading-relaxed text-gray-700 ${
                  isOpen ? "block" : "hidden"
                } md:block`}
              >
                Компания «Softway» видит свою миссию в том, чтобы с помощью
                современных информационных и управленческих технологий
                обеспечить казахстанским, международным и государственным
                организациям качественно новый уровень эффективности
                (управления).
              </p>
              <p
                className={`text-base md:text-lg leading-relaxed text-gray-700 ${
                  isOpen ? "block" : "hidden"
                } md:block`}
              >
                Как и любая другая казахстанская компания, мы являемся частью
                нашей страны, пропитаны духом ее победы и устремлены только
                вперед.
              </p>
              {/* Show toggle button only on mobile screens */}
              <button
                className="mt-4 text-[#A22823] font-semibold hover:underline md:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? "Скрыть" : "Показать больше"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
