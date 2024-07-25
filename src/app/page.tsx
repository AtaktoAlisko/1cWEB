import Image from "next/image";
import Header from "../Components/Header";
import Head from "../Components/Head";
import Carousel from "../Components/Carousel";
import Info from "../Components/Info";
import DepartmentGrid from "../Components/DepartmentGrid";
import Statistic from "@/Components/Statistic";
import Nas from "../Components/oNas";
import Reviews from "../Components/Reviews";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <Head />
      <Header />
      <Carousel />
      <Nas />
      <h2 className="text-center text-4xl mt-10 mb-10">ПОЧЕМУ ВЫБИРАЮТ НАС</h2>
      <DepartmentGrid />
      <Info />
      <Statistic />
      <Reviews />
      <Footer />
    </>
  );
}
