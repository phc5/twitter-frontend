import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SignUpContext } from '../../context/SignUpContext';

export default function SignUpStep({ setStep }) {
  const {
    name,
    setName,
    email,
    setEmail,
    birthdate,
    setBirthDate,
    signUp,
    signUpError,
    signUpLoading,
  } = useContext(SignUpContext);

  async function onSignUpClick() {
    if (name && email && birthdate) {
      await signUp(setStep);
    }
  }

  const errorComponent = signUpError !== '' && (
    <div className="rounded-md bg-red-50 p-4 mt-4 text-center flex items-center">
      <FontAwesomeIcon
        icon="exclamation-triangle"
        className="text-red-700 mr-4"
      />
      <p className="mt-1 text-sm text-red-700">{signUpError}</p>
    </div>
  );

  return (
    <div className="px-3 mb-8">
      <div className="flex align-center justify-between mb-4 py-1">
        <button
          className="rounded-fullhover:bg-lightblue focus:outline-none"
          onClick={() => setStep(2)}
        >
          <FontAwesomeIcon icon="arrow-left" className="text-blue" />
        </button>
      </div>
      <div className="pt-2">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold">Create your account</p>
        </div>

        {errorComponent}

        <div className="w-full bg-lightblue border-b-2 border-dark mt-6 mb-8 p-2">
          <label htmlFor="name" className="text-dark">
            Name
          </label>
          <input
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full bg-lightblue text-lg focus:outline-none"
            type="text"
          />
        </div>
        <div className="w-full bg-lightblue border-b-2 border-dark mb-8 p-2">
          <label htmlFor="emailAddress" className="text-dark">
            Email
          </label>
          <input
            id="emailAddress"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full bg-lightblue text-lg focus:outline-none"
            type="email"
          />
        </div>

        <div className="w-full bg-lightblue border-b-2 border-dark mb-2 p-2">
          <label htmlFor="birthdate" className="text-dark">
            Date of birth
          </label>
          <input
            id="birthdate"
            value={birthdate}
            onChange={(event) => setBirthDate(event.target.value)}
            className="w-full bg-lightblue text-lg focus:outline-none"
            type="date"
          />
        </div>

        <p>
          By signing up, you agree to our{' '}
          <a href="#" className="text-blue">
            Terms
          </a>
          ,{' '}
          <a href="#" className="text-blue">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="#" className="text-blue">
            Cookie Use
          </a>
          .
        </p>
        <button
          className={`w-full rounded-full mt-4 py-3 bg-blue text-white font-bold hover:bg-darkblue focus:outline-none ${
            (!name || !email || !birthdate) && 'opacity-50 pointer-events-none'
          }`}
          onClick={onSignUpClick}
        >
          {signUpLoading ? (
            <svg
              className="animate-spin m-auto h-5 w-5 text-white"
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
            'Sign up'
          )}
        </button>
      </div>
    </div>
  );
}
