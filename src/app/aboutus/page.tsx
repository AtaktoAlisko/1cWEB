import Image from "next/image";
import Header from "@/Components/Header";
import Head from "@/Components/Head";
import Carousel from "@/Components/Carousel";
import Info from "@/Components/Info";
import DepartmentGrid from "@/Components/DepartmentGrid";
import Statistic from "@/Components/Statistic";
import About from "@/Components/About";
import Reviews from "@/Components/Reviews";
import Footer from "@/Components/Footer";


export default async function Aboutus() {
  return (
    <>
      {/* <Head /> */}
      {/* <Header /> added in layout.tsx */}
      <About />
      <h2 className="text-center text-4xl mt-10 mb-10">ПОЧЕМУ ВЫБИРАЮТ НАС</h2>
      <DepartmentGrid />
      <Info />
      <Statistic />
      <Reviews />
      {/* <Footer /> added in layout.tsx */}
    </>
  );
}
