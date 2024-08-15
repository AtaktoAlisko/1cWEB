import Image from "next/image";
import astana from "../../public/astana.jpg";
import { motion } from "framer-motion";

const textAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

export default function BasicInfo() {
  return (
    <>
      <div className="my-20 mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 2xl:mx-40">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          <div className="relative w-full md:w-1/2 h-80 md:h-auto">
            <Image
              src={astana}
              alt="Astana"
              layout="fill"
              objectFit="cover"
              objectPosition="center top"
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
              <p className="mb-4 text-base md:text-lg leading-relaxed text-gray-700">
                Компания «Softway» видит свою миссию в том, чтобы с помощью
                современных информационных и управленческих технологий
                обеспечить казахстанским, международным и государственным
                организациям качественно новый уровень эффективности
                (управления).
              </p>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                Как и любая другая казахстанская компания, мы являемся частью
                нашей страны, пропитаны духом ее победы и устремлены только
                вперед.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
