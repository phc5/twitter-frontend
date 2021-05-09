import React from 'react';
import { useSWRInfinite } from 'swr';
import Tweet from '../Tweet';
import { getMyTimeline } from '../../lib/backend/queries';

const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.nextToken) return null;

  if (pageIndex === 0) return [`getMyTimeline`, null];

  return [
    `getMyTimeline${previousPageData.nextToken}`,
    previousPageData.nextToken,
  ];
};

export default function Timeline() {
  const {
    data,
    error,
    mutate,
    size,
    setSize,
    isValidating,
  } = useSWRInfinite(getKey, (_, nextToken) => getMyTimeline(nextToken));

  if (!data) {
    return (
      <div className="flex items-center justify-center h-20">
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue"
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
      </div>
    );
  }

  console.log(data);

  const isLoadingInitialData = !data && !error;
  const tweetsArray = data.map((page) => page.tweets).flat(1);
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEnd = data[data.length - 1].nextToken == null;

  const tweets =
    tweetsArray.length > 0 ? (
      tweetsArray.map((tweet) => {
        switch (tweet.__typename) {
          case 'Tweet':
            return <Tweet {...tweet} key={tweet.id} />;
          default:
            return <></>;
        }
      })
    ) : (
      <div className="flex flex-col justify-center">
        <h3 className="font-bold text-xl m-4 mt-6">No Tweets yet?</h3>
        <p className="text-lightGray text-sm w-7/12 mb-4">
          This empty timeline won't be around for long. Start following people
          and you'll see Tweets show up here.
        </p>
        <div>
          <button
            type="button"
            className="items-center px-4 py-2 border border-transparent text-sm font-semibold rounded-full bg-blue focus:outline-none"
          >
            Find people to follow
          </button>
        </div>
      </div>
    );

  return (
    <>
      {tweets}{' '}
      {!isEnd && (
        <button disabled={isLoadingMore} onClick={() => setSize(size + 1)}>
          Load more
        </button>
      )}
    </>
  );
}
