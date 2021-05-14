import React, { Dispatch, SetStateAction, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextareaAutosize from 'react-textarea-autosize';
import Spinner from '../Spinner';
import CharacterCountCircle from '../CharacterCountCircle';
import { tweet } from '../../../lib/backend/mutations';

type NewTweetProps = {
  isModal?: boolean;
  mutate: () => Promise<any[]>;
  setIsTweetModalOpen?: Dispatch<SetStateAction<boolean>>;
};

export default function NewTweet({
  isModal,
  mutate,
  setIsTweetModalOpen,
}: NewTweetProps) {
  const [tweetValue, setTweetValue] = useState('');
  const [loading, setLoading] = useState(false);

  async function onTweetClick(event) {
    event.preventDefault();
    setLoading(true);
    await tweet(tweetValue);
    await mutate();
    isModal && setIsTweetModalOpen(false);
    setLoading(false);
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
        <div className={`max-h-96 ${isModal ? 'min-h-120px' : 'min-h-60px'}`}>
          <TextareaAutosize
            maxLength={180}
            name="tweet"
            id="tweet"
            className="block w-full text-xl bg-black outline-none mb-4 placeholder-lightGray resize-none"
            placeholder="What's happening?"
            value={tweetValue}
            onChange={(event) => setTweetValue(event.target.value)}
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-grow">
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
          <div className="flex flex-grow justify-end items-center">
            <div className="mr-4">
              <CharacterCountCircle characterCount={tweetValue.length} />
            </div>

            <button
              type="button"
              className={`items-center justify-center h-10 px-4 py-2 border border-transparent text-sm font-bold rounded-full bg-blue  pointer-events-none focus:outline-none ${
                tweetValue.length > 0 ? 'pointer-events-auto' : ''
              }`}
              onClick={onTweetClick}
            >
              {loading ? (
                <Spinner className="text-white" />
              ) : (
                <p
                  className={`opacity-60 ${
                    tweetValue.length > 0 ? 'opacity-100' : ''
                  }`}
                >
                  Tweet
                </p>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
