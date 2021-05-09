import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SignUpContext } from '../../context/SignUpContext';

export default function CreatePassword({ setStep }) {
  const {
    password,
    setPassword,
    revealPassword,
    setRevealPassword,
  } = useContext(SignUpContext);

  return (
    <div className="px-3 mb-8">
      <div className="flex align-center justify-between mb-4 py-1">
        <button
          className="rounded-fullhover:bg-lightblue focus:outline-none"
          onClick={() => setStep(1)}
        >
          <FontAwesomeIcon icon="arrow-left" className="text-blue" />
        </button>
        <button
          className={`rounded-full bg-blue font-bold  mt-2 p-1 pl-3 pr-3 relative hover:bg-darkblue focus:outline-none text-white ${
            (!password || password.length < 8) &&
            'opacity-50 pointer-events-none'
          }`}
          onClick={() => setStep(3)}
        >
          Next
        </button>
      </div>
      <div className="pt-2">
        <div className="flex justify-between items-center pb-4">
          <p className="text-2xl font-bold">You'll need a password</p>
        </div>

        <p className="text-dark mb-2">Make sure it's 8 characters or more.</p>

        <div className="w-full bg-lightblue border-b-2 border-dark p-2">
          <label htmlFor="password" className="leading-tight text-dark">
            Password
          </label>
          <input
            id="password"
            value={password}
            className="w-full bg-lightblue text-lg focus:outline-none"
            type={revealPassword ? 'text' : 'password'}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button
          className="text-blue mt-1"
          onClick={() => setRevealPassword(!revealPassword)}
        >
          Reveal password
        </button>
      </div>
    </div>
  );
}
