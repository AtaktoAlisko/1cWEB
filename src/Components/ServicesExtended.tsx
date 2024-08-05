import Image from "next/image";

export default function ServicesExtended() {
  return (
    <div className="flex flex-col gap-10 px-4 md:px-20 mb-16">
      <div className="flex flex-col md:flex-row bg-white shadow-secondary-1 dark:bg-surface-dark rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2">
          <Image
            className="object-cover"
            src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
            alt="Nature Image"
            width={600}
            height={400}
            layout="responsive"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 text-surface dark:text-white flex flex-col justify-center">
          <h5 className="mb-2 text-xl font-medium leading-tight text-center md:text-left">
            1С:ERP Управление предприятием
          </h5>
          <p className="mb-4 text-base text-center md:text-left">
            Мы предоставляем полный комплекс услуг по внедрению решений и
            обеспечиваем самый высокий уровень обслуживания.
          </p>
          <div className="flex justify-center md:justify-start">
            <button
              type="button"
              className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              Button
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse bg-white shadow-secondary-1 dark:bg-surface-dark rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2">
          <Image
            className="object-cover"
            src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
            alt="Nature Image"
            width={600}
            height={400}
            layout="responsive"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 text-surface dark:text-white flex flex-col justify-center">
          <h5 className="mb-2 text-xl font-medium leading-tight text-center md:text-left">
            1С:Управление холдингом
          </h5>
          <p className="mb-4 text-base text-center md:text-left">
            Мы ответственно подходим к своему делу. Всегда следим за
            соблюдением сроков и качества выполнения работ.
          </p>
          <div className="flex justify-center md:justify-start">
            <button
              type="button"
              className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              Button
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row bg-white shadow-secondary-1 dark:bg-surface-dark rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2">
          <Image
            className="object-cover"
            src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
            alt="Nature Image"
            width={600}
            height={400}
            layout="responsive"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 text-surface dark:text-white flex flex-col justify-center">
          <h5 className="mb-2 text-xl font-medium leading-tight text-center md:text-left">
            ВСЕ УСЛУГИ
          </h5>
          <p className="mb-4 text-base text-center md:text-left">
            В нашей компетенции внедрять решения в крупных проектах и
            ​​доводить их до победы
          </p>
          <div className="flex justify-center md:justify-start">
            <button
              type="button"
              className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}