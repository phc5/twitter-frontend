import React, { useState, useEffect } from 'react';
import useIntersectionObserver from '@react-hook/intersection-observer';
import ErrorTimeline from './ErrorTimeline';
import EmptyTimeline from './EmptyTimeline';
import Tweet from '../Tweet';
import Retweet from '../Retweet';
import Spinner from '../Spinner';
import {
  like,
  retweet,
  unlike,
  unretweet,
} from '../../../lib/backend/mutations';

export default function Timeline({
  data,
  error,
  mutate,
  size,
  setSize,
  isValidating,
}) {
  const [ref, setRef] = useState();
  const { isIntersecting } = useIntersectionObserver(ref, {
    rootMargin: '0% 0% 25% 0%',
  });

  useEffect(() => {
    if (isIntersecting && !isEnd) setSize(size + 1);
  }, [isIntersecting]);

  async function onLikeClick(liked, tweetId) {
    liked ? await unlike(tweetId, mutate) : await like(tweetId, mutate);
  }

  async function onRetweetClick(retweeted, tweetId) {
    retweeted
      ? await unretweet(tweetId, mutate)
      : await retweet(tweetId, mutate);
  }

  if (error) {
    return <ErrorTimeline />;
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center h-20">
        <Spinner className="text-blue -ml-1 mr-3" />
      </div>
    );
  }

  const tweetsArray =
    Array.isArray(data) &&
    data
      .map((page) => page.tweets)
      .flat(1)
      .filter((tweet) => tweet !== null);
  const isEnd = data && data[data.length - 1].nextToken == null;

  console.log(tweetsArray);
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
          case 'Retweet':
            return (
              <Retweet
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
        <div ref={setRef} className="flex items-center justify-center h-20">
          <Spinner className="text-blue -ml-1 mr-3" />
        </div>
      )}
    </>
  );
}
