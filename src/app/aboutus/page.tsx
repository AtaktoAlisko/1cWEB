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
      {/* <ContactBar /> */}
      {/* <Header /> added in layout.tsx */}
      <h2 className="text-center text-4xl mt-10 mb-10">ПОЧЕМУ ВЫБИРАЮТ НАС</h2>
      <EmojiGrid />
      <ServicesCards />
      <ProudNumbersBar />
      <Reviews />
      {/* <Footer /> added in layout.tsx */}
    </>
  );
}
