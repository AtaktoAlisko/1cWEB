import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side */}
        <div className="bg-white p-8 md:p-12 shadow-lg rounded-lg border-2 border-[#A22823] space-y-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">
              Softway Service
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              г.Астана, ДИНМУХАМЕД КОНАЕВ, 14/2, 49
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Часы работы</h2>
            <p className="text-sm text-gray-500">Пн-ПТ: 9:00-21:00</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Звоните</h2>
            <p className="text-blue-600 text-lg md:text-xl font-bold">
              +7 (771) 200-56-26
            </p>
            <p className="text-blue-600 text-lg md:text-xl font-bold">
              office@softway.kz
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Приезжайте</h2>
            <p className="text-sm text-gray-500">Есильский район</p>
            <p className="text-sm text-gray-500">Нура</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Наши услуги</h2>
            <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
              <li>
                Разработка и кастомизация 1С решений под уникальные нужды
                клиентов.
              </li>
              <li>Внедрение систем учета, управления и анализа.</li>
              <li>Сопровождение и техническая поддержка 1С продуктов.</li>
              <li>Обучение и сертификация специалистов.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700">
              Наши достижения
            </h2>
            <p className="text-sm text-gray-600">
              За более чем 10 лет работы мы внедрили более 500 проектов,
              оптимизировав работу более чем 200 компаний по всей стране. Наши
              специалисты имеют сертификаты от 1С, что подтверждает их высокий
              уровень профессионализма.
            </p>
          </div>
        </div>
        {/* Right Side */}
        <div className="relative border-2 border-[#A22823] rounded-lg shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.817207851296!2d71.42064427701843!3d51.1302796381827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424586a030d2394f%3A0xae544ee78e269a2a!2s1%2C%20Dinmukhamed%20Qonayev%20St%208%2C%20Astana%20020000%2C%20Kazakhstan!5e0!3m2!1sen!2spl!4v1722768531057!5m2!1sen!2spl"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen
            aria-hidden="false"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
