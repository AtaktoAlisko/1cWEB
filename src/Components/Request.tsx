"use client";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      console.log("Form reference is not set");
      return;
    }

    emailjs
      .sendForm(
        "service_59aatqd",
        "template_8veh5qb",
        form.current,
        "TqxDoU2R-z9cyI7oi"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          form.current?.reset(); // Clear the form
          setIsSubmitted(true); // Set submission state
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className=" w-full max-w-md mx-auto border-sm-[#A22823]">
      <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="p-6">
          <h3 className="text-base text-center font-semibold text-gray-900 dark:text-white mb-4">
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
              <div className="mb-4">
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
                  placeholder=" Ваша Имя..."
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                  htmlFor="Телефон..."
                >
                  Телефон:
                </label>
                <input
                  className="shadow-sm appearance-none border border-gray-300 dark:border-gray-600 rounded-lg w-full py-3 px-4 text-gray-900 dark:text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  id="phone"
                  type="tel"
                  name="user_phone"
                  placeholder="Your Phone Number"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                  htmlFor="email..."
                >
                  Email:
                </label>
                <input
                  className="shadow-sm appearance-none border border-gray-300 dark:border-gray-600 rounded-lg w-full py-3 px-4 text-gray-900 dark:text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  id="email"
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-6">
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
                  placeholder="Your Message"
                  rows={5}
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
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
