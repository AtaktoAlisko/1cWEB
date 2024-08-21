import Image from "next/image";
import Header from "@/Components/Header";
// import Head from "@/Components/ContactBar";
import Carousel from "@/Components/Homepage/Carousel";
import EmojiGrid from "@/Components/Homepage/EmojiGrid";
import ProudNumbersBar from "@/Components/Homepage/ProudNumbersBar";
import Reviews from "@/Components/Homepage/Reviews";
import Footer from "@/Components/Footer";
import ServicesCards from "@/Components/Homepage/ServicesCards";

export default async function Aboutus() {
  return (
    <>
      <div className="bg-white px-[140px] pb-[40px] border-b border-[#A22823] mt-[100px]">
        {/* Yellow Top Border */}
        <div className="border-t-[10px] border-[#A22823] rounded-sm"></div>

        <div className="px-[60px] py-[40px] border border-[#A22823]">
          <div className="">
            <h1 className="text-3xl font-bold text-[#A22823] mb-10">
              О Компании
            </h1>
            <p className="mb-10">
              Наша группа компаний работает на рынке консалтинга и
              информационных технологий Казахстана уже более 20 лет.
            </p>
            <p className="leading-5 mb-10 ">
              Мы готовы делиться своими знаниями и умениями со всеми, кто ставит
              перед собой амбициозные цели, готов быть выше обстоятельств и
              полон стремления расти. Для этого мы предоставляем своим клиентам
              идеи, инструменты, инфраструктуру и ресурсы для развития.
            </p>
            <p className="leading-5 mb-10">
              Мы реализуем комплексные проекты, направленные на повышение
              эффективности деятельности предприятий посредством внедрения
              передовых управленческих и информационных технологий.
            </p>
            <p className="leading-5 mb-10">
              Как и любая другая компания Казахстана, мы являемся неотъемлемой
              частью нашей страны, пропитаны духом ее побед и устремлены только
              вперед.
            </p>
          </div>

          <div className="">
            <h1 className="text-3xl font-bold text-[#A22823] mb-10">Миссия</h1>
            <p className="mb-10">
              Мы видим свою миссию в том, чтобы с помощью современных
              информационных и управленческих технологий способствовать
              казахстанским, международным и государственным организациям в
              достижении качественно нового уровня эффективности (управления).
            </p>
            <p className="leading-5 mb-10 ">
              Мы стремимся быть как можно более отзывчивыми и внимательными к
              нуждам наших клиентов и предлагаем им эффективный процесс
              изменений, делающий их работу максимально полезной и
              обеспечивающий ожидаемый качественный результат. Компания
              постоянно наращивает базу знаний и совершенствует разрабатываемое
              программное обеспечение, чтобы клиенты могли в полной мере
              воспользоваться преимуществами новых технологий.
            </p>
            <p className="leading-5 mb-10">
              Мы намерены упрочить свое положение на целевом рынке Казахстана,
              предлагая клиентам помимо передовых обоснованных решений, также и
              самый высокий уровень обслуживания. Мы рассматриваем
              индивидуальный подход к нашим клиентам и партнерам как ключевой
              фактор успеха компании.
            </p>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-[#A22823] mb-10">Наши сотрудники</h1>
          </div>
          {/* <EmojiGrid /> */}
          {/* <ServicesCards /> */}
          {/* <ProudNumbersBar /> */}
          <Reviews />
        </div>
      </div>
    </>
  );
}
