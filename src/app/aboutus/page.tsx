import Image from "next/image";
import Header from "@/Components/Header";
// import Head from "@/Components/ContactBar";
import Carousel from "@/Components/Carousel";
import EmojiGrid from "@/Components/EmojiGrid";
import ProudNumbersBar from "@/Components/Homepage/ProudNumbersBar";
import BasicInfo from "@/Components/Homepage/BasicInfo";
import Reviews from "@/Components/Homepage/Reviews";
import Footer from "@/Components/Footer";
import ServicesCards from "@/Components/Homepage/ServicesCards";


export default async function Aboutus() {
  return (
    <>
      {/* <ContactBar /> */}
      {/* <Header /> added in layout.tsx */}
      <BasicInfo />
      <h2 className="text-center text-4xl mt-10 mb-10">ПОЧЕМУ ВЫБИРАЮТ НАС</h2>
      <EmojiGrid />
      <ServicesCards />
      <ProudNumbersBar />
      <Reviews />
      {/* <Footer /> added in layout.tsx */}
    </>
  );
}
