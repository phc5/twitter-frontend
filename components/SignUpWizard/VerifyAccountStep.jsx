import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SignUpContext } from '../../context/SignUpContext';

export default function VerifyAccountStep({ setStep }) {
  const {
    email,
    verificationCode,
    setVerificationCode,
    verifyError,
    verifyLoading,
    hasResentCode,

    verifyUser,
    resendVerificationCode,
  } = useContext(SignUpContext);

  const errorComponent = verifyError !== '' && (
    <div className="rounded-md bg-red-50 p-4 mt-4 text-center flex items-center">
      <FontAwesomeIcon
        icon="exclamation-triangle"
        className="text-red-700 mr-4"
      />
      <p className="mt-1 text-sm text-red-700">{verifyError}</p>
    </div>
  );

  return (
    <div className="px-3 mb-8">
      <div className="flex align-center justify-between mb-4 py-1">
        <button
          className="rounded-fullhover:bg-lightblue focus:outline-none"
          onClick={() => setStep(3)}
        >
          <FontAwesomeIcon icon="arrow-left" className="text-blue" />
        </button>
        <button
          className="rounded-full bg-blue font-bold  mt-2 p-1 pl-3 pr-3 relative hover:bg-darkblue focus:outline-none"
          onClick={verifyUser}
        >
          {verifyLoading ? (
            <svg
              className="animate-spin m-auto h-5 w-5 "
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            'Next'
          )}
        </button>
      </div>
      {errorComponent}
      <div className="pt-2">
        <div className="flex justify-between items-center pb-4">
          <p className="text-2xl font-bold">
            {hasResentCode
              ? "We've sent you a new code!"
              : 'We sent you a code'}
          </p>
        </div>

        <p className="text-dark mb-2">Enter it below to verify {email}.</p>

        <div className="w-full bg-lightblue border-b-2 border-dark p-2">
          <label htmlFor="verificationCode" className="leading-tight text-dark">
            Verification code
          </label>
          <input
            id="verificationCode"
            className="w-full bg-lightblue text-lg focus:outline-none"
            type="text"
            value={verificationCode}
            onChange={(event) => setVerificationCode(event.target.value)}
          />
        </div>

        <button
          className="text-blue mt-1 hover:underline focus:outline-none"
          onClick={resendVerificationCode}
        >
          Didn't receive an email?
        </button>
      </div>
    </div>
  );
}
