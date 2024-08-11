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

export default function Home() {
  return (
    <>
      <Carousel />
      <About />

      <DepartmentGrid />
      <ServicesCards />

      <ProudNumbersBar />
      <Reviews />
    </>
  );
}
