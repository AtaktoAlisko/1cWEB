"use client";

import React, { useState } from "react";

const reviews = [
  {
    name: "Когай Д.",
    date: "10 декабря 2022",
    text: "С начала осуществления нашей деятельности в качестве ключевого партнера по разработке и внедрению системы управления нашей компании была выбрана компания ООО «Softway Services». Одной из основных причин выбора стали рекомендации других лиц, в которых отмечалось: высокое качество, глубокое знание особенностей бизнес-процессов в финансовых организациях, доступность обязательных услуг, что в перспективе было подтверждено в рамках нашего проекта.",
    link: "#",
  },
  {
    name: "Сейсенбаев Н.Р.",
    date: "06 апреля 2018",
    text: "Победителем открытого конкурса по разработке и внедрению системы признана компания ТОО «Softway Services», специалисты которой имеют успешный опыт в области автоматизации учета финансовых и кредитующих компаний.В рамках указанного проекта разработана методология проведения учета, на основе соглашений со специалистами ТОО «Softway Services», а также проведена доработка согласно нормативной документации.В связи с вышесказанным корпорация рекомендует использовать систему на платформе 1С в качестве решений по автоматизации бизнес-процессов предприятий, а также учитывать ответственность и ответственность сотрудников компании Softway Services.",
    link: "#",
  },
  {
    name: "Искаков М.",
    date: "17 ноября 2022",
    text: "АО «Фонд поддержки финансового сельского хозяйства» выражает благодарность компании ТОО «Softway Services» за проведение работ по автоматизации учета процессов кредитования. Высокая квалификация и компетентность специалистов позволяют решать поставленные задачи качественно и в срок.",
    link: "#",
  },
  {
    name: "Нуралиев Б.Г.",
    date: "31 марта 2020",
    text: "Диплом победителя в конкурсе “1С:Проект года” компании “Аграрная кредитная корпорация” и партнерской фирмы “1С” “Softway” в номинации “Лучший региональный проект”: Азия “Внедрение “1С:Бухгалтерия 8 для Казахстана” в организации, занимающейся кредитованием”.",
    link: "#",
  },
];

const Reviews = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-10 mt-10 text-center text-gray-800 dark:text-gray-200">
        Отзывы о нас
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-all duration-300 ease-in-out"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full mr-4"></div>
              <div>
                <h4 className="font-bold text-lg text-gray-900 dark:text-gray-100">
                  {review.name}
                </h4>
                <p className="text-gray-500 text-sm">{review.date}</p>
              </div>
            </div>
            <p
              className={`mb-4 transition-all duration-300 ease-in-out ${
                expanded === index ? "line-clamp-none" : "line-clamp-3"
              }`}
            >
              {review.text}
            </p>
            <button
              onClick={() => toggleExpand(index)}
              className="text-blue-600 dark:text-blue-400 hover:underline focus:outline-none"
            >
              {expanded === index ? "Свернуть" : "Развернуть"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
