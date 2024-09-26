"use client";

import React, { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      console.log("Form reference is not set");
      return;
    }

    emailjs
      .sendForm(
        "202@softway.kz",
        "template_8veh5qb",
        form.current,
        "TqxDoU2R-z9cyI7oi"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          form.current?.reset();
          setIsSubmitted(true);
        },
        (error: { text: string }) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="w-full max-w-4xl mx-auto border-sm-[#A22823]">
      <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="p-6">
          <h3 className="text-xl text-center font-semibold text-gray-900 dark:text-white mb-6">
            Свяжитесь с нами
          </h3>
          {isSubmitted ? (
            <div className="text-center text-gray-900 dark:text-gray-100">
              Спасибо за ваше сообщение!
            </div>
          ) : (
            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-white dark:bg-gray-800 rounded-lg"
            >
              <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="flex-1 space-y-4">
                  <div>
                    <label
                      className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Ваша Имя:
                    </label>
                    <input
                      className="shadow-sm appearance-none border border-gray-300 dark:border-gray-600 rounded-lg w-full py-3 px-4 text-gray-900 dark:text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                      id="name"
                      type="text"
                      name="user_name"
                      placeholder="Ваша Имя..."
                      required
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                      htmlFor="phone"
                    >
                      Телефон:
                    </label>
                    <input
                      className="shadow-sm appearance-none border border-gray-300 dark:border-gray-600 rounded-lg w-full py-3 px-4 text-gray-900 dark:text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                      id="phone"
                      type="tel"
                      name="user_phone"
                      placeholder="Ваш номер телефона"
                      required
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email:
                    </label>
                    <input
                      className="shadow-sm appearance-none border border-gray-300 dark:border-gray-600 rounded-lg w-full py-3 px-4 text-gray-900 dark:text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                      id="email"
                      type="email"
                      name="user_email"
                      placeholder="Ваш Email"
                      required
                    />
                  </div>
                </div>
                <div className="flex-1 mt-4 md:mt-0">
                  <div>
                    <label
                      className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                      htmlFor="message"
                    >
                      Сообщение:
                    </label>
                    <textarea
                      className="shadow-sm appearance-none border border-gray-300 dark:border-gray-600 rounded-lg w-full py-3 px-4 text-gray-900 dark:text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                      id="message"
                      name="message"
                      placeholder="Ваше сообщение"
                      rows={8}
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center">
                <button
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 transition-colors"
                  type="submit"
                >
                  Отправить
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
