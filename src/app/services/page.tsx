import React from 'react';
import OurBar from '../../Components/Homepage/OurBar';
import ServicesCards from '../../Components/Homepage/ServicesCards';

const Services: React.FC = () => {
  return (
    <div className=" py-16" >
      
      <OurBar />
      <ServicesCards />
    </div>
  );
};

export default Services;