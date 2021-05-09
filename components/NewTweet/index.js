import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { tweet } from '../../lib/backend/mutations';

export default function NewTweet() {
  const [tweetValue, setTweetValue] = useState('');

  async function onTweetClick(event) {
    event.preventDefault();
    const response = await tweet(tweetValue);
  }

  return (
    <div className="flex px-4 p-2">
      <div className="w-12 h-12 mt-1">
        <FontAwesomeIcon icon="user" className="text-2xl w-full" />
      </div>

      <div className="w-full mt-2">
        <label htmlFor="tweet" className="sr-only">
          Tweet
        </label>
        <input
          type="text"
          name="tweet"
          id="tweet"
          className="block w-full text-xl bg-black outline-none mb-4 placeholder-lightGray"
          placeholder="What's happening?"
          value={tweetValue}
          onChange={(event) => setTweetValue(event.target.value)}
        />
        <div className="flex justify-between items-center">
          <div className="flex">
            <div className="flex w-10 h-10 items-center justify-center text-blue cursor-pointer hover:bg-darkestblue rounded-full -ml-2">
              <FontAwesomeIcon icon="image" className="text-lg" />
            </div>
            <div className="flex w-10 h-10 items-center justify-center text-blue cursor-pointer hover:bg-darkestblue rounded-full">
              <FontAwesomeIcon icon="chart-bar" className="text-lg" />
            </div>
            <div className="flex w-10 h-10 items-center justify-center text-blue cursor-pointer hover:bg-darkestblue rounded-full">
              <FontAwesomeIcon icon="smile" className="text-lg" />
            </div>
            <div className="flex w-10 h-10 items-center justify-center text-blue cursor-pointer hover:bg-darkestblue rounded-full">
              <FontAwesomeIcon icon="calendar" className="text-lg" />
            </div>
          </div>
          <button
            type="button"
            className={`items-center px-4 py-2 border border-transparent text-base font-semibold rounded-full bg-blue opacity-60 pointer-events-none focus:outline-none ${
              tweetValue.length > 0 ? 'opacity-100 pointer-events-auto' : ''
            }`}
            onClick={onTweetClick}
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}
