import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
  FaAward,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-16 px-6 sm:px-10 lg:px-20 mt-14">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Side */}
        <div className="bg-white p-10 border-2 border-[#A22823] rounded-xl shadow-xl">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-[#A22823]">
                Softway Service
              </h1>
              <p className="text-lg text-gray-700 flex items-center">
                <FaMapMarkerAlt className="text-[#A22823] text-2xl mr-3" />
                г. Астана, ул. Динмухамед Кунаев, д. 14/2, офис 49
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-700 flex items-center">
                <FaClock className="text-[#A22823] text-2xl mr-3" />
                Часы работы
              </h2>
              <p className="text-gray-600">Пн-Пт: 09:00 - 21:00</p>
              <p className="text-gray-600">Сб-Вс: выходной</p>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-700 flex items-center">
                <FaPhone className="text-[#A22823] text-2xl mr-3" />
                Контакты
              </h2>
              <p className="text-blue-600 text-lg md:text-xl font-bold">
                Телефон: +7 (771) 200-56-26
              </p>
              <p className="text-blue-600 text-lg md:text-xl font-bold flex items-center">
                <FaEnvelope className="text-[#A22823] text-2xl mr-3" />
                Email: office@softway.kz
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-700 flex items-center">
                <FaMapMarkerAlt className="text-[#A22823] text-2xl mr-3" />
                Адрес
              </h2>
              <p className="text-gray-600">Есильский район, Нура</p>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-700 flex items-center">
                <FaAward className="text-[#A22823] text-2xl mr-3" />
                Наши достижения
              </h2>
              <p className="text-gray-600">
                За более чем 10 лет мы успешно реализовали более 500 проектов,
                оптимизировав работу свыше 200 компаний по всей стране. Наши
                специалисты сертифицированы компанией 1С, что подтверждает их
                высокий профессионализм.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-700">
                Наши услуги
              </h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  Разработка и кастомизация 1С-решений под уникальные
                  потребности клиентов.
                </li>
                <li>Внедрение систем учета, управления и анализа.</li>
                <li>Техническая поддержка и сопровождение 1С-продуктов.</li>
                <li>Обучение и сертификация специалистов.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-white border-2 border-[#A22823] rounded-xl shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8410.625670734771!2d71.4357788074902!3d51.128167057220246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2scz!4v1724790122750!5m2!1sen!2scz"
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
