import Image from "next/image";
import Header from "../Components/Header";
// import Head from "../Components/ContactBar";
import Carousel from "../Components/Homepage/Carousel";
import Info from "../Components/Homepage/ServicesCards";
import DepartmentGrid from "../Components/Homepage/EmojiGrid";
import ProudNumbersBar from "@/Components/Homepage/ProudNumbersBar";
import BasicInfo from "../Components/Homepage/BasicInfo";
import Reviews from "../Components/Homepage/Reviews";
import Footer from "../Components/Footer";
import ServicesCards from "../Components/Homepage/ServicesCards";
import ServicesCarousel from "./services/page";

export default function Home() {
  return (
    <>
      <Carousel />
      <BasicInfo />

      <DepartmentGrid />
      {/* <ServicesCards /> */}
      <ServicesCarousel />
      <ProudNumbersBar />
      <Reviews />
    </>
  );
}
