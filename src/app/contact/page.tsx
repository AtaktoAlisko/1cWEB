import React from 'react';

import Image from 'next/image';

const ContactUs = () => {
  return (
    <>
      <div className="relative min-h-screen bg-white md:bg-transparent mt-16 sm:px-2">
        <div className="container mx-auto px-4 py-8 relative z-10 md:grid md:grid-cols-2 md:gap-8 sm:px-4">
          <div className="space-y-8 bg-white p-6 md:p-0 md:bg-transparent md:space-y-0 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Image src="/logo.png" alt="Phone" width={40} height={40} />
                <div>
                  <h2 className="text-lg font-medium text-blue-600">Phone</h2>
                  <p className="text-gray-600 text-lg font-semibold">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Image src="/logo.png" alt="Email" width={40} height={40} />
                <div>
                  <h2 className="text-lg font-medium text-blue-600">Email</h2>
                  <p className="text-gray-600 text-lg font-semibold">info@example.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Image src="/logo.png" alt="Address" width={40} height={40} />
                <div>
                  <h2 className="text-lg font-medium text-blue-600">Address</h2>
                  <p className="text-gray-600 text-lg font-semibold">123 Main Street, Anytown, USA</p>
                </div>
              </div>
              <div className="w-full h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.817207851296!2d71.42064427701843!3d51.1302796381827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424586a030d2394f%3A0xae544ee78e269a2a!2s1%2C%20Dinmukhamed%20Qonayev%20St%208%2C%20Astana%20020000%2C%20Kazakhstan!5e0!3m2!1sen!2spl!4v1722768531057!5m2!1sen!2spl"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen
                  aria-hidden="false"
                ></iframe>
              </div>
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-blue-600">Opening Hours:</h2>
                <ul className="text-gray-600 text-lg font-semibold">
                  <li>Mon: Closed</li>
                  <li>Tues: 10am - 5pm</li>
                  <li>Wed: 10am - 5pm</li>
                  <li>Thurs: 10am - 9pm</li>
                  <li>Fri: 10am - 5pm</li>
                  <li>Sat: By appointment only</li>
                  <li>Sun: Closed</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative md:block hidden">
            <Image src="/astana.jpg" alt="Astana" layout="fill" objectFit="cover" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
        <div className="absolute inset-0 md:hidden">
          <Image src="/astana.jpg" alt="Astana" layout="fill" objectFit="cover" className="w-full h-full object-cover" />
        </div>
      </div>
    </>
  );
};

export default ContactUs;