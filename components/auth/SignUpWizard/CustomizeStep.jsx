import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SignUpContext } from '../../../context/SignUpContext';

export default function CustomizeStep({ setStep }) {
  const {
    isGetMoreChecked,
    setIsGetMoreChecked,
    isConnectChecked,
    setIsConnectChecked,
    isPersonalizedChecked,
    setIsPersonalizedChecked,
  } = useContext(SignUpContext);

  return (
    <div className="px-3 mb-8">
      <div className="flex align-center justify-between mb-4 py-1">
        <button
          className="rounded-fullhover:bg-lightblue focus:outline-none"
          onClick={() => setStep(0)}
        >
          <FontAwesomeIcon icon="arrow-left" className="text-blue" />
        </button>
        <button
          className="rounded-full bg-blue font-bold  mt-2 p-1 pl-3 pr-3 relative hover:bg-darkblue focus:outline-none text-white"
          onClick={() => setStep(2)}
        >
          Next
        </button>
      </div>

      <div className="flex justify-between items-center pb-4">
        <p className="text-2xl font-bold">Customize your experience</p>
      </div>

      <div className="mt-5 mb-8">
        <label htmlFor="getMore" className="font-bold text-xl mb-1">
          Get more out of Twitter
        </label>
        <div className="flex justify-between items-top">
          <p>Receive email about your Twitter activity and recommendations.</p>
          <input
            id="getMore"
            value={isGetMoreChecked}
            onChange={(event) => setIsGetMoreChecked(event.target.checked)}
            className="mt-1 ml-2 mr-2"
            type="checkbox"
          />
        </div>
      </div>

      <div className="mt-5 mb-8">
        <label htmlFor="connect" className="font-bold text-xl mb-1">
          Connect with people you know
        </label>
        <div className="flex justify-between items-top">
          <p>Let others find your Twitter account by your email address.</p>
          <input
            id="connect"
            value={isConnectChecked}
            onChange={(event) => setIsConnectChecked(event.target.checked)}
            className="mt-1 ml-2 mr-2"
            type="checkbox"
          />
        </div>
      </div>

      <div className="mt-5 mb-5">
        <label htmlFor="personalizedAds" className="font-bold text-xl mb-1">
          Personalized ads
        </label>
        <div className="flex justify-between items-top">
          <p>
            You will always see ads on Twitter based on your Twitter activity.
            When this setting is enabled, Twitter may further personalize ads
            from Twitter advertisers, on and off Twitter, by combining your
            Twitter activity with other online activity and information from
            partners.
          </p>
          <input
            id="personalizedAds"
            value={isPersonalizedChecked}
            onChange={(event) => setIsPersonalizedChecked(event.target.checked)}
            className="mt-1 ml-2 mr-2"
            type="checkbox"
          />
        </div>
      </div>
    </div>
  );
}
