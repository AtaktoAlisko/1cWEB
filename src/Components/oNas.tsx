import Image from "next/image";
import astana from "../../public/astana.jpg";

export default function oNas() {
  return (
    <>
      <div className="my-20 mx-4 sm:mx-10 md:mx-20 lg:mx-32 xl:mx-40 2xl:mx-52">
  <h1 className="text-3xl sm:text-4xl text-center mb-10 sm:mb-16 md:mb-20">О нас</h1>
  <div className="flex flex-col md:flex-row gap-10 md:gap-20">
    <div className="relative w-full md:w-1/2">
      <Image src={astana} alt="oNas" width={1200} height={1000} className="w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white md:hidden"></div>
      <div className="absolute inset-0 p-4 flex flex-col justify-end md:hidden">
        <p className="text-black mb-6 bg-white">
          Компания «Softway» работает на рынке биржевого консалтинга и
          информационных технологий в Казахстане.
        </p>
        <p className="text-black mb-6 bg-white">
          Мы реализуем комплексные проекты, направленные на повышение
          эффективности деятельности, предусматриваем развитие передовых
          управленческих и информационных технологий.
        </p>
        <p className="text-black mb-6 bg-white">
          Компания «Softway» видит свою миссию в том, чтобы с помощью
          современных информационных и управленческих технологий обеспечить
          казахстанским, международным и государственным организациям
          качественно новый уровень эффективности (управления).
        </p>
        <p className="text-black bg-white">
          Как и любая другая казахстанская компания, мы являемся частью
          нашей страны, пропитаны духом ее победы и устремлены только
          вперед.
        </p>
      </div>
    </div>
    <div className="hidden md:block w-full md:w-1/2">
      <p className="mb-6 bg-white">
        Компания «Softway» работает на рынке биржевого консалтинга и
        информационных технологий в Казахстане.
      </p>
      <p className="mb-6">
        Мы реализуем комплексные проекты, направленные на повышение
        эффективности деятельности, предусматриваем развитие передовых
        управленческих и информационных технологий.
      </p>
      <p className="mb-6">
        Компания «Softway» видит свою миссию в том, чтобы с помощью
        современных информационных и управленческих технологий обеспечить
        казахстанским, международным и государственным организациям
        качественно новый уровень эффективности (управления).
      </p>
      <p>
        Как и любая другая казахстанская компания, мы являемся частью
        нашей страны, пропитаны духом ее победы и устремлены только
        вперед.
      </p>
    </div>
  </div>
</div>
    </>
  );
}
