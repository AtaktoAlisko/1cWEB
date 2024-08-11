import Image from "next/image";
import img1 from "../../public/image-1.jpeg";
import img2 from "../../public/image-2.jpeg";
import img3 from "../../public/image-3.jpeg";

export default function ServicesCards() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20 mb-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="group block rounded-lg bg-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl dark:bg-surface-dark"
          >
            <a href={service.link}>
              <div className="overflow-hidden rounded-t-lg">
              <Image
  className="rounded-t-lg mx-auto transition-transform transform group-hover:scale-110 p-4"
  src={service.image}
  alt={service.alt}
  width={300}
  height={300}
/>
              </div>
            </a>
            <div className="p-6 text-gray-800 dark:text-gray-200">
              <h5 className="mb-2 text-xl font-semibold text-center">
                {service.title}
              </h5>
              <p className="mb-4 text-base text-center">
                {service.description}
              </p>
              <div className="flex justify-center">
                <button
                  type="button"
                  className="inline-block rounded bg-primary px-6 py-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-accent-300 focus:bg-primary-accent-300 focus:outline-none active:bg-primary-600 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                >
                  Подробнее
                </button>
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
    link: "#!",
  },
  {
    title: "1С:Управление холдингом",
    description:
      "Мы ответственно подходим к своему делу. Всегда следим за соблюдением сроков и качества выполнения работ.",
    image: img2,
    alt: "Управление холдингом",
    link: "#!",
  },
  {
    title: "ВСЕ УСЛУГИ",
    description:
      "В нашей компетенции внедрять решения в крупных проектах и ​​доводить их до победы.",
    image: img3,
    alt: "Все услуги",
    link: "#!",
  },
];
