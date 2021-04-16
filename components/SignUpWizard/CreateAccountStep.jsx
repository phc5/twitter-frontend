import React, { useContext } from 'react';
import { SignUpContext } from '../../context/SignUpContext';

export default function CreateAccountStep({ setStep }) {
  const {
    name,
    setName,
    email,
    setEmail,
    birthdate,
    setBirthDate,
  } = useContext(SignUpContext);

  return (
    <div className="px-3 mb-8">
      <div className="pl-1 py-1 mb-4 h-12">
        <button
          className={`rounded-full bg-blue font-bold text-white mt-2 p-1 px-3 relative right-0 float-right hover:bg-darkblue focus:outline-none ${
            (!name || !email || !birthdate) && 'opacity-50 pointer-events-none'
          }`}
          onClick={() => setStep(1)}
        >
          Next
        </button>
      </div>
      <div className="flex justify-between items-center pb-4">
        <p className="text-2xl font-bold">Create your account</p>
      </div>
      <div className="w-full bg-lightblue border-b-2 border-dark mb-8 p-2">
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
      <p className="text-dark">
        This will not be shown publicly. Confirm your own age, even if this
        account is for a business, a pet, or something else.
      </p>
    </div>
  );
}
