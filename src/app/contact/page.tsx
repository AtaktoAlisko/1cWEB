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
              г. Астана, ул. Динмухамед Кунаев, д. 14/2, офис 49
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Часы работы</h2>
            <p className="text-sm text-gray-500">Пн-Пт: 09:00 - 21:00</p>
            <p className="text-sm text-gray-500">Сб-Вс: выходной</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Контакты</h2>
            <p className="text-blue-600 text-lg md:text-xl font-bold">
              Телефон: +7 (771) 200-56-26
            </p>
            <p className="text-blue-600 text-lg md:text-xl font-bold">
              Email: office@softway.kz
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Адрес</h2>
            <p className="text-sm text-gray-500">Есильский район, Нура</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Наши услуги</h2>
            <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
              <li>
                Разработка и кастомизация 1С-решений под уникальные потребности
                клиентов.
              </li>
              <li>Внедрение систем учета, управления и анализа.</li>
              <li>Техническая поддержка и сопровождение 1С-продуктов.</li>
              <li>Обучение и сертификация специалистов.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700">
              Наши достижения
            </h2>
            <p className="text-sm text-gray-600">
              За более чем 10 лет мы успешно реализовали более 500 проектов,
              оптимизировав работу свыше 200 компаний по всей стране. Наши
              специалисты сертифицированы компанией 1С, что подтверждает их
              высокий профессионализм.
            </p>
          </div>
        </div>

        <div className="relative border-2 border-[#A22823] rounded-lg shadow-lg">
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
