import Image from "next/image";
import astana from "../../public/astana.jpg";

export default function About() {
  return (
    <>
      <div className="my-20 mx-4 sm:mx-10 md:mx-20 lg:mx-32 xl:mx-40 2xl:mx-52">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          <div className="relative w-full md:w-1/2 h-96 md:h-auto">
            <Image src={astana} alt="oNas" layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="mb-6 text-lg leading-relaxed">
                Компания «Softway» работает на рынке биржевого консалтинга и информационных технологий в Казахстане.
              </p>
              <p className="mb-6 text-lg leading-relaxed">
                Мы реализуем комплексные проекты, направленные на повышение эффективности деятельности, предусматриваем развитие передовых управленческих и информационных технологий.
              </p>
              <p className="mb-6 text-lg leading-relaxed">
                Компания «Softway» видит свою миссию в том, чтобы с помощью современных информационных и управленческих технологий обеспечить казахстанским, международным и государственным организациям качественно новый уровень эффективности (управления).
              </p>
              <p className="text-lg leading-relaxed">
                Как и любая другая казахстанская компания, мы являемся частью нашей страны, пропитаны духом ее победы и устремлены только вперед.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}