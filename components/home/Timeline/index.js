import React, { useState, useEffect } from 'react';
import { useSWRInfinite } from 'swr';
import useIntersectionObserver from '@react-hook/intersection-observer';
import ErrorTimeline from './ErrorTimeline';
import EmptyTimeline from './EmptyTimeline';
import Tweet from '../../shared/Tweet';
import Spinner from '../../shared/Spinner';
import { getMyTimeline } from '../../../lib/backend/queries';
import {
  like,
  retweet,
  unlike,
  unretweet,
} from '../../../lib/backend/mutations';

const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.nextToken) return null;

  if (pageIndex === 0) return [`getMyTimeline`, null];

  return [
    `getMyTimeline${previousPageData.nextToken}`,
    previousPageData.nextToken,
  ];
};

export default function Timeline() {
  const [ref, setRef] = useState();
  const { isIntersecting } = useIntersectionObserver(ref, {
    rootMargin: '0% 0% 25% 0%',
  });

  const {
    data,
    error,
    mutate,
    size,
    setSize,
    isValidating,
  } = useSWRInfinite(getKey, (_, nextToken) => getMyTimeline(nextToken));

  const tweetsArray =
    Array.isArray(data) && data.map((page) => page.tweets).flat(1);
  const isEnd = data && data[data.length - 1].nextToken == null;

  useEffect(() => {
    if (isIntersecting && !isEnd) setSize(size + 1);
  }, [isIntersecting]);

  async function onLikeClick(liked, tweetId) {
    liked ? await unlike(tweetId) : await like(tweetId);
    mutate();
  }

  async function onRetweetClick(retweeted, tweetId) {
    retweeted ? await unretweet(tweetId) : await retweet(tweetId);
    mutate();
  }

  if (error) {
    return <ErrorTimeline />;
  }

  if (!data) {
    return <Spinner />;
  }

  const tweets =
    tweetsArray.length > 0 ? (
      tweetsArray.map((tweet) => {
        switch (tweet.__typename) {
          case 'Tweet':
            return (
              <Tweet
                onLikeClick={onLikeClick}
                onRetweetClick={onRetweetClick}
                {...tweet}
                key={tweet.id}
              />
            );
          default:
            return <></>;
        }
      })
    ) : (
      <EmptyTimeline />
    );

  return (
    <>
      {tweets}
      {!isEnd && (
        <div ref={setRef}>
          <Spinner />
        </div>
      )}
    </>
  );
}
