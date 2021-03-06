import React, { Dispatch, SetStateAction } from 'react';
import { Transition } from '@headlessui/react';
import SignUpWizard from '../SignUpWizard';

type SignInModalProps = {
  isSignUpModalOpen: boolean;
  setIsSignUpModalOpen: Dispatch<SetStateAction<boolean>>;
};

export default function SignUpModal({
  isSignUpModalOpen,
  setIsSignUpModalOpen,
}: SignInModalProps) {
  return (
    <div
      className={`${
        !isSignUpModalOpen && 'hidden'
      } fixed z-10 inset-0 overflow-y-auto text-black`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* overlay */}
        <Transition
          onClick={() => setIsSignUpModalOpen(false)}
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          show={isSignUpModalOpen}
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
          className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
          show={isSignUpModalOpen}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div className="bg-white w-full mx-auto rounded-lg z-50 overflow-y-auto max-h-full">
            <SignUpWizard />
          </div>
        </Transition>
      </div>
    </div>
  );
}
