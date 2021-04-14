import React, { useState } from 'react';

export default function CreateAccountStep({ setStep }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthDate] = useState('');

  return (
    <>
      <div className="pl-1 pr-4 py-1 h-12">
        <button
          className={`rounded-full bg-blue font-bold text-white mt-2 p-1 px-3 relative right-0 float-right hover:bg-darkblue focus:outline-none ${
            (!name || !email || !birthdate) && 'opacity-50 cursor-not-allowed'
          }`}
        >
          Next
        </button>
      </div>
      <div className="pt-5 px-3">
        <div className="flex justify-between items-center pb-8">
          <p className="text-2xl font-bold">Create your account</p>
        </div>
        <div className="w-full bg-lightblue border-b-2 border-dark mb-8 p-2">
          <p className="text-dark">Name</p>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full bg-lightblue text-lg focus:outline-none"
            type="text"
          />
        </div>
        <div className="w-full bg-lightblue border-b-2 border-dark mb-8 p-2">
          <p className="text-dark">Email</p>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full bg-lightblue text-lg focus:outline-none"
            type="text"
          />
        </div>
        <p className="font-bold">Date of birth</p>
        <p className="text-dark">
          This will not be shown publicly. Confirm your own age, even if this
          account is for business, a pet, or something else.
        </p>
        <div className="w-full bg-lightblue border-b-2 border-dark mb-8 p-2">
          <input
            value={birthdate}
            onChange={(event) => setBirthDate(event.target.value)}
            className="w-full bg-lightblue text-lg focus:outline-none"
            type="text"
          />
        </div>
      </div>
    </>
  );
}
