import Image from "next/image";

const InfoCart = [
  { name: "Для руководителя", icon: "👨‍💼" },
  { name: "Для бухгалтерии", icon: "📊" },
  { name: "Для казначейства", icon: "💼" },
  { name: "Для транспортного отдела", icon: "🚚" },
  { name: "Для отдела закупки", icon: "🛒" },
  { name: "Для производства", icon: "🏭" },
  { name: "Для технического отдела", icon: "🔧" },
  { name: "Для склада", icon: "📦" },
];

export default function Info() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-[200px] mb-16 ">
        <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
          <a href="#!">
            <div className="flex justify-center">
              <Image
                className="rounded-t-lg mx-auto"
                src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                alt="Nature Image"
                width={300}
                height={300}
              />
            </div>
          </a>
          <div className="p-6 text-surface dark:text-white">
            <h5 className="mb-2 text-xl font-medium leading-tight text-center">
              1С:ERP Управление предприятием
            </h5>
            <p className="mb-4 text-base text-center">
              Мы предоставляем полный комплекс услуг по внедрению решений и
              обеспечиваем самый высокий уровень обслуживания.
            </p>
            <div className="flex justify-center">
              {" "}
              <button
                type="button"
                className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong "
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                Button
              </button>
            </div>
          </div>
        </div>

        <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
          <a href="#!">
            <div className="flex justify-center">
              <Image
                className="rounded-t-lg mx-auto"
                src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                alt="Nature Image"
                width={300}
                height={300}
              />
            </div>
          </a>
          <div className="p-6 text-surface dark:text-white">
            <h5 className="mb-2 text-xl font-medium leading-tight  text-center">
              1С:Управление холдингом
            </h5>
            <p className="mb-4 text-base">
              Мы ответственно подходим к своему делу. Всегда следим за
              соблюдением сроков и качества выполнения работ.
            </p>
            <div className="flex justify-center">
              {" "}
              <button
                type="button"
                className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong "
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                Button
              </button>
            </div>
          </div>
        </div>

        <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
          <a href="#!">
            <div className="flex justify-center">
              <Image
                className="rounded-t-lg mx-auto"
                src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                alt="Nature Image"
                width={300}
                height={300}
              />
            </div>
          </a>
          <div className="p-6 text-surface dark:text-white">
            <h5 className="mb-2 text-xl font-medium leading-tight text-center">
              ВСЕ УСЛУГИ
            </h5>
            <p className="mb-4 text-base text-center">
              В нашей компетенции внедрять решения в крупных проектах и
              ​​доводить их до победы
            </p>
            <div className="flex justify-center">
              {" "}
              <button
                type="button"
                className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong "
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
