import React, { useState, useEffect } from 'react';
import { useSWRInfinite } from 'swr';
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

const getKey = (pageIndex, previousPageData, queryKey) => {
  if (previousPageData && !previousPageData.nextToken) return null;

  if (pageIndex === 0) return [queryKey, null];

  return [
    `${queryKey}${previousPageData.nextToken}`,
    previousPageData.nextToken,
  ];
};

export default function Timeline({ query, queryKey, queryArgs }) {
  const [ref, setRef] = useState();
  const { isIntersecting } = useIntersectionObserver(ref, {
    rootMargin: '0% 0% 25% 0%',
  });

  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    (pageIndex, previousPageData) =>
      getKey(pageIndex, previousPageData, queryKey),
    (_, nextToken) =>
      queryArgs?.length > 0 ? query(...queryArgs, nextToken) : query(nextToken)
  );

  const tweetsArray =
    Array.isArray(data) && data.map((page) => page.tweets).flat(1);
  const isEnd = data && data[data.length - 1].nextToken == null;

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
        <div ref={setRef}>
          <Spinner />
        </div>
      )}
    </>
  );
}
