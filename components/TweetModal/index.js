import React, { useContext } from 'react';
import { Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NewTweet from '../NewTweet';

import { NavContext } from '../../context/NavContext';

export default function TweetModal() {
  const { isTweetModalOpen, setIsTweetModalOpen } = useContext(NavContext);

  return (
    <div
      className={`${
        !isTweetModalOpen && 'hidden'
      } fixed z-50 inset-0 overflow-y-auto text-white `}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* overlay */}
        <Transition
          onClick={() => setIsTweetModalOpen(false)}
          className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          show={isTweetModalOpen}
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
          className="absolute top-0 left-1/2 -translate-x-2/4 translate-y-2/4 align-bottom bg-black rounded-lg pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          show={isTweetModalOpen}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div className="bg-black w-full mx-auto rounded-lg z-50 overflow-y-auto max-h-full">
            <div className="flex align-center justify-between pb-4 px-4 border-b border-lightGray">
              <button
                className="rounded-fullhover:bg-lightblue focus:outline-none"
                onClick={() => setIsTweetModalOpen(false)}
              >
                <FontAwesomeIcon icon="times" className="text-blue" />
              </button>
            </div>
            <NewTweet isModal />
          </div>
        </Transition>
      </div>
    </div>
  );
}
