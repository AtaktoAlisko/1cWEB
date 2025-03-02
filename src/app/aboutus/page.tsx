import Reviews from "@/Components/Homepage/Reviews";
import EmployeeSlider from "@/Components/EmployeeSlider";
import Request from "@/Components/Request";
import { Metadata } from "next";
import Image from "next/image";

export default async function Aboutus() {
  return (
    <>
      <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-10 border-b border-[#D23D38] mt-[80px]">
        <div className="border-t-4 border-[#D23D38] rounded-sm"></div>

        <div className="px-6 sm:px-10 py-10 border border-[#D23D38] bg-white dark:bg-[#121212] rounded-lg shadow-lg">
          <section className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#D23D38] mb-6 ">
              О Компании
            </h1>
            {[
              "Наша группа компаний работает на рынке консалтинга и информационных технологий Казахстана уже более 20 лет. Группа компаний имеет статус 1С:Франчайзинг.",
              "Мы готовы делиться своими знаниями и умениями со всеми, кто ставит перед собой амбициозные цели, готов быть выше обстоятельств и полон стремления расти. Для этого мы предоставляем своим клиентам идеи, инструменты, инфраструктуру и ресурсы для развития.",
              "Мы реализуем комплексные проекты, направленные на повышение эффективности деятельности предприятий посредством внедрения передовых управленческих и информационных технологий на платформе 1С: Предприятие 8.",
              "Как и любая другая компания Казахстана, мы являемся неотъемлемой частью нашей страны, пропитаны духом ее побед и устремлены только вперед.",
            ].map((text, index) => (
              <p
                key={index}
                className="text-gray-800 dark:text-gray-200 mb-4 leading-relaxed text-lg"
              >
                {text}
              </p>
            ))}
          </section>

          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#D23D38] mb-6 ">
              Миссия
            </h2>
            {[
              "Мы видим свою миссию в том, чтобы с помощью современных информационных и управленческих технологий способствовать казахстанским, международным и государственным организациям в достижении качественно нового уровня эффективности (управления).",
              "Мы стремимся быть как можно более отзывчивыми и внимательными к нуждам наших клиентов и предлагаем им эффективный процесс изменений, делающий их работу максимально полезной и обеспечивающий ожидаемый качественный результат. Компания постоянно наращивает базу знаний и совершенствует разрабатываемое программное обеспечение, чтобы клиенты могли в полной мере воспользоваться преимуществами новых технологий.",
              "Мы намерены упрочить свое положение на целевом рынке Казахстана, предлагая клиентам помимо передовых обоснованных решений, также и самый высокий уровень обслуживания. Мы рассматриваем индивидуальный подход к нашим клиентам и партнерам как ключевой фактор успеха компании.",
            ].map((text, index) => (
              <p
                key={index}
                className="text-gray-800 dark:text-gray-200 mb-4 leading-relaxed text-lg"
              >
                {text}
              </p>
            ))}
          </section>

          <div className="flex justify-center mb-12">
            <a
              href="https://1c.ru/rus/partners/guideline.jsp"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D23D38] text-white px-6 py-3 rounded-lg text-lg font-semibold transition hover:bg-[#b82f2c]"
            >
              Узнать больше о 1С:Франчайзинг
            </a>
          </div>

          <Reviews />
          <Request />
        </div>
      </div>
    </>
  );
}
