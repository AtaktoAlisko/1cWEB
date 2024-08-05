import Image from "next/image";
import Header from "../Components/Header";
// import Head from "../Components/ContactBar";
import Carousel from "../Components/Carousel";
import Info from "../Components/ServicesCards";
import DepartmentGrid from "../Components/EmojiGrid";
import ProudNumbersBar from "@/Components/ProudNumbersBar";
import About from "../Components/BasicInfo";
import Reviews from "../Components/Reviews";
import Footer from "../Components/Footer";
import ServicesCards from "../Components/ServicesCards";
import ServicesExtended from "@/Components/ServicesExtended";

export default function Home() {
  return (
    <>
      {/* <Head /> looks bad imo*/}
      {/* <Header /> added in layout.tsx */}
      <Carousel />
      <About />
      <h2 className="text-center text-4xl mt-10 mb-10">ПОЧЕМУ ВЫБИРАЮТ НАС</h2>
      <DepartmentGrid />
      <ServicesCards />
      <ServicesExtended />
      <ProudNumbersBar />
      <Reviews />
      {/* <Footer /> added in layout.tsx */}
    </>
  );
}
