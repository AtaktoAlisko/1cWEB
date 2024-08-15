"use client";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  toggleModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, toggleModal }) => {
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
    <>
      {isOpen && (
        <div
          id="authentication-modal"
          tabIndex={-1}
          aria-hidden={!isOpen}
          className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-60 backdrop-blur-sm"
        >
          <div className="relative p-5 w-full max-w-md border-sm-[#A22823]">
            <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200 dark:border-gray-600">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Свяжитесь с нами
                </h3>
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
                  onClick={toggleModal}
                >
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {isSubmitted ? (
                <div className="p-6 text-center text-gray-900 dark:text-gray-100">
                  Спасибо за ваше сообщение!
                </div>
              ) : (
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="p-6 bg-white dark:bg-gray-800 rounded-lg"
                >
                  <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
                    Contact Us
                  </h2>
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
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="mb-4">
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
                      placeholder="Your Phone Number"
                      required
                    />
                  </div>
                  <div className="mb-4">
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
      )}
    </>
  );
};

export default Modal;
