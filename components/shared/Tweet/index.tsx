import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const up = 'inline-flex opacity-0 transform -translate-y-1';
const down = 'inline-flex opacity-0 transform translate-y-1';
const initial = 'inline-flex opacity-1 transform translate-y-0';

type TweetProps = {
  id: string;
  createdAt: string;
  profile: {
    id: string;
    imageUrl?: string;
    name: string;
    username: string;
  };
  liked: boolean;
  likesCount: number;
  repliesCount: number;
  retweeted: boolean;
  retweetsCount: number;
  text: string;
  onLikeClick: (liked: boolean, tweetId: string) => Promise<void>;
  onRetweetClick: (retweeted: boolean, tweetId: string) => Promise<void>;
};

export default function Tweet({
  id,
  createdAt,
  liked,
  likesCount,
  profile,
  repliesCount,
  retweeted,
  retweetsCount,
  text,
  onLikeClick,
  onRetweetClick,
}: TweetProps) {
  const [tweetLiked, setTweetLiked] = useState(liked);
  const [tweetLikesCount, setTweetLikesCount] = useState(likesCount);
  const [likeAnimation, setLikeAnimation] = useState(initial);

  const [tweetRetweeted, setTweetRetweeted] = useState(retweeted);
  const [tweetRetweetedCount, setTweetRetweetedCount] = useState(retweetsCount);
  const [retweetAnimation, setRetweetAnimation] = useState(initial);

  useEffect(() => {
    setTweetLiked(liked);
    setTweetLikesCount(likesCount);
    setTweetRetweeted(retweeted);
    setTweetRetweetedCount(retweetsCount);
  }, [liked, likesCount, retweeted, retweetsCount]);

  return (
    <div className="flex border-borderGray border-b p-4 hover:bg-gray-500 hover:bg-opacity-10 cursor-pointer text-sm">
      <Link href={`/${profile.username}`} passHref>
        <a>
          <img
            className="bg-profileBlue rounded-full border-4 border-black cursor-pointer outline-none w-14 h-14 mr-4"
            src={profile?.imageUrl ? profile.imageUrl : '/twitter-egg.jpg'}
          />
        </a>
      </Link>

      <div className="w-full">
        <div className="flex mb-2">
          <Link href={`/${profile.username}`} passHref>
            <a className="flex">
              <p className="font-bold mr-1">{profile.name}</p>
              <p className="text-lightGray mr-1">@{profile.username}</p>
            </a>
          </Link>
          <p className="text-lightGray mr-1">·</p>
          <p className="text-lightGray mr-1">
            {new Date(createdAt).toLocaleDateString()}
          </p>
        </div>
        <p className="mb-2">{text}</p>
        <div className="flex justify-between max-w-sm">
          <span className="text-lightGray hover:text-blue cursor-pointer transition-colors">
            <FontAwesomeIcon icon="comment" className="text-sm mr-2" />
            {repliesCount}
          </span>
          <span
            onClick={(event) => {
              event.preventDefault();
              setTimeout(
                () => setRetweetAnimation(tweetRetweeted ? down : up),
                0
              );

              setTimeout(() => {
                setTweetRetweeted(!tweetRetweeted);
                setTweetRetweetedCount(() => {
                  return tweetRetweeted
                    ? tweetRetweetedCount - 1
                    : tweetRetweetedCount + 1;
                });
              }, 100);
              setTimeout(
                () => setRetweetAnimation(tweetRetweeted ? up : down),
                100
              );
              setTimeout(() => setRetweetAnimation(initial), 200);
              onRetweetClick(tweetRetweeted, id);
            }}
            className={`${
              tweetRetweeted ? 'text-green-500' : 'text-lightGray'
            } hover:text-green-500 cursor-pointer transition-colors`}
          >
            <FontAwesomeIcon icon="retweet" className="text-sm mr-2" />
            <span
              className={`${retweetAnimation} ease-in-out duration-200 transition-all`}
            >
              {tweetRetweetedCount}
            </span>
          </span>
          <span
            onClick={(event) => {
              event.preventDefault();
              setTimeout(() => setLikeAnimation(tweetLiked ? down : up), 0);

              setTimeout(() => {
                setTweetLiked(!tweetLiked);
                setTweetLikesCount(() => {
                  return tweetLiked ? tweetLikesCount - 1 : tweetLikesCount + 1;
                });
              }, 100);
              setTimeout(() => setLikeAnimation(tweetLiked ? up : down), 100);
              setTimeout(() => setLikeAnimation(initial), 200);
              onLikeClick(tweetLiked, id);
            }}
            className={`${
              tweetLiked ? 'text-red-500' : 'text-lightGray'
            } hover:text-red-500 cursor-pointer transition-colors`}
          >
            <FontAwesomeIcon icon="heart" className="text-sm mr-2" />
            <span
              className={`${likeAnimation} ease-in-out duration-200 transition-all`}
            >
              {tweetLikesCount}
            </span>
          </span>
          <span className="text-lightGray hover:text-blue cursor-pointer transition-colors">
            <FontAwesomeIcon icon="share" className="text-sm mr-2" />
          </span>
        </div>
      </div>
    </div>
  );
}
