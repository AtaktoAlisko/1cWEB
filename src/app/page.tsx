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
import OurBar from '../Components/Homepage/OurBar';
import ServicesCards from '../Components/Homepage/ServicesCards';
import ServicesCarousel from "./services/page";
import ThemeSwitcher from '../Components/ThemeSwitcher';


export default function Home() {
  return (
    <>
      <Carousel />
      <ThemeSwitcher />
      <BasicInfo />

      <DepartmentGrid />

      {/* <ServicesCards /> */}
      <OurBar />
      <ServicesCards />
      <ProudNumbersBar />
      <Reviews />
    </>
  );
}
