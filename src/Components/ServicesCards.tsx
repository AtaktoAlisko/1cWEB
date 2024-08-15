import Image from "next/image";
import Link from "next/link";
import img1 from "../../public/card1.png";
import img2 from "../../public/card2.png";
import img3 from "../../public/card3.png";

export default function ServicesCards() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20 mb-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="group block rounded-lg bg-white border border-[#A22823] shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="overflow-hidden rounded-lg p-4">
              <Image
                className="rounded-lg mx-auto transition-transform transform group-hover:scale-110"
                src={service.image}
                alt={service.alt}
                layout="responsive"
                width={300}
                height={200}
              />
            </div>
            <div className="p-6 text-gray-800">
              <h5 className="mb-2 text-xl font-semibold text-center">
                {service.title}
              </h5>
              <p className="mb-4 text-base text-center">
                {service.description}
              </p>
              <div className="flex justify-center">
                <Link
                  href={service.link}
                  className="inline-block rounded bg-[#A22823] px-6 py-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-accent-light focus:bg-primary-accent-light focus:outline-none active:bg-red-600 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                >
                  Подробнее
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

const services = [
  {
    title: "1С:ERP Управление предприятием",
    description:
      "Мы предоставляем полный комплекс услуг по внедрению решений и обеспечиваем самый высокий уровень обслуживания.",
    image: img1,
    alt: "ERP Управление предприятием",
    link: "/service1",
  },
  {
    title: "1С:Управление холдингом",
    description:
      "Мы ответственно подходим к своему делу. Всегда следим за соблюдением сроков и качества выполнения работ.",
    image: img2,
    alt: "Управление холдингом",
    link: "/service2",
  },
  {
    title: "ВСЕ УСЛУГИ",
    description:
      "В нашей компетенции внедрять решения в крупных проектах и ​доводить их до победы.",
    image: img3,
    alt: "Все услуги",
    link: "/services",
  },
];