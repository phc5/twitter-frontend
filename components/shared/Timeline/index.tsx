import React, { useState, useEffect, useContext } from 'react';
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
import { TimelineType } from '../../../lib/types';

type TimelineProps = {
  data: any[];
  error: any;
  mutate: Promise<any[]>;
  size: number;
  setSize: (size: number) => Promise<any[]>;
  isValidating: boolean;
  getTweetsLoading?: boolean;
  timelineType?: TimelineType;
};

export default function Timeline({
  data,
  error,
  mutate,
  size,
  setSize,
  isValidating,
  getTweetsLoading,
  timelineType,
}: TimelineProps) {
  const [ref, setRef] = useState(null);
  const { isIntersecting } = useIntersectionObserver(ref, {
    rootMargin: '0% 0% 25% 0%',
  });

  useEffect(() => {
    if (isIntersecting && !isEnd) setSize(size + 1);
  }, [isIntersecting]);

  async function onLikeClick(liked: boolean, tweetId: string): Promise<void> {
    liked ? await unlike(tweetId, mutate) : await like(tweetId, mutate);
  }

  async function onRetweetClick(
    retweeted: boolean,
    tweetId: string
  ): Promise<void> {
    retweeted
      ? await unretweet(tweetId, mutate)
      : await retweet(tweetId, mutate);
  }

  if (!data || getTweetsLoading) {
    return (
      <div className="flex items-center justify-center h-20">
        <Spinner className="text-blue -ml-1 mr-3" />
      </div>
    );
  }

  if (error) {
    return <ErrorTimeline />;
  }
  const tweetsArray =
    Array.isArray(data) &&
    data
      .map((page) => page.tweets)
      .flat(1)
      .filter((tweet) => tweet !== null);
  const isEnd = Array.isArray(data) && data[data.length - 1].nextToken == null;

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
      <EmptyTimeline timelineType={timelineType} />
    );

  return (
    <>
      {tweets}
      {!isEnd && tweetsArray.length > 0 && (
        <div ref={setRef} className="flex items-center justify-center h-20">
          <Spinner className="text-blue -ml-1 mr-3" />
        </div>
      )}
    </>
  );
}
