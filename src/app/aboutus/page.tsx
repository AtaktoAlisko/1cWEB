import Image from "next/image";
import Header from "@/Components/Header";
// import Head from "@/Components/ContactBar";
import Carousel from "@/Components/Carousel";
import EmojiGrid from "@/Components/EmojiGrid";
import ProudNumbersBar from "@/Components/ProudNumbersBar";
import BasicInfo from "@/Components/BasicInfo";
import Reviews from "@/Components/Reviews";
import Footer from "@/Components/Footer";
import ServicesCards from "@/Components/ServicesCards";


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
