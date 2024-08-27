import React from 'react';
import Image from "next/image";
import heroImage from "/public/new1.jpg";

const OurBar: React.FC = () => {
  return (
    <div className="relative h-[25vh] w-full">
      <Image
        src={heroImage}
        alt="Services Hero Image"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl text-white font-bold">Наши услуги</h1>
      </div>
    </div>
  );
};

export default OurBar;