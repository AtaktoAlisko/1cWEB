import React from 'react';

const OurBar: React.FC = () => {
  return (
    <div className="bg-gradient-to-l from-[#8B1A17] via-[#A22823] to-[#D1453E] text-white py-7 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-[15vh] flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold text-shadow">Наши услуги</h1>
        </div>
      </div>
    </div>
  );
};

const styles = `
  .text-shadow {
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  }
`;

export default function App() {
  return (
    <>
      <style>{styles}</style>
      <OurBar />
    </>
  );
}