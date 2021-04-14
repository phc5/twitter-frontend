import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* left side */}
      <div className="flex w-full h-full bg-blue p-8">
        <div className="flex items-center justify-center w-full h-full bg-red">
          <div className="flex flex-col">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon="search"
                className="text-white text-2xl mr-5"
              />
              <p className="text-white font-bold text-xl">
                Follow your interests.
              </p>
            </div>
            <div className="flex items-center mt-10">
              <FontAwesomeIcon
                icon="user-friends"
                className="text-white text-2xl mr-5"
              />
              <p className="text-white font-bold text-xl">
                Hear what people are talking about.
              </p>
            </div>
            <div className="flex items-center mt-10">
              <FontAwesomeIcon
                icon="comment"
                className="text-white text-2xl mr-5"
              />
              <p className="text-white font-bold text-xl">
                Join the conversation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex w-full h-full py-8 pl-4">
        <div className="flex items-center justify-center w-full xl:w-1/2 h-full p-3">
          <div className="flex flex-col w-3/4 font-bold p-3">
            <FontAwesomeIcon
              icon="kiwi-bird"
              className="text-blue text-2xl mr-5 mb-4"
            />
            <p className="text-3xl mb-12 font-bold">
              See what's happening in the world right now
            </p>
            <p>Join Kwitter today.</p>

            <button
              className="rounded-full bg-blue font-bold text-lg text-white mt-4 p-3 hover:bg-darkblue focus:outline-none"
              onClick={() => setIsModalOpen(!isModalOpen)}
            >
              Sign up
            </button>

            <Link href="/login">
              <button className="rounded-full border border-blue bg-white font-bold text-lg text-blue mt-4 p-3 hover:bg-lightblue focus:outline-none">
                Log in
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* signup modal */}
      <div
        className={`${
          !isModalOpen && 'hidden'
        } fixed z-10 inset-0 overflow-y-auto`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          {/* overlay */}
          <Transition
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
            show={isModalOpen}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          />

          {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          {/* modal content */}
          <Transition
            className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
            show={isModalOpen}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div>
              <FontAwesomeIcon
                icon="kiwi-bird"
                className="text-blue text-2xl m-auto block"
              />
              <div className="mt-3 text-center sm:mt-5">
                <h3
                  className="text-xl leading-6 font-bold text-gray-900"
                  id="modal-title"
                >
                  Sign Up
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur amet labore.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6">
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
              >
                Go back to dashboard
              </button>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  );
}
