import React from 'react';
import OurBar from '../../Components/Homepage/OurBar';
import ServicesCards from '../../Components/Homepage/ServicesCards';

const Services: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16" >
      
      <OurBar />
      <ServicesCards />
    </div>
  );
};

export default Services;