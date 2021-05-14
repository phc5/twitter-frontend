import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const up = 'inline-flex opacity-0 transform -translate-y-1';
const down = 'inline-flex opacity-0 transform translate-y-1';
const initial = 'inline-flex opacity-1 transform translate-y-0';

type RetweetProps = {
  id: string;
  createdAt: string;
  profile: {
    id: string;
    imageUrl?: string;
    name: string;
    username: string;
  };
  retweetOf: {
    id: string;
    createdAt: string;
    liked: boolean;
    likesCount: number;
    repliesCount: number;
    retweeted: boolean;
    retweetsCount: number;
    text: string;
    profile: {
      id: string;
      imageUrl?: string;
      name: string;
      username: string;
    };
  };
  onLikeClick: (liked: boolean, tweetId: string) => Promise<void>;
  onRetweetClick: (retweeted: boolean, tweetId: string) => Promise<void>;
};

export default function Retweet({
  id,
  createdAt,
  profile,
  retweetOf,
  onLikeClick,
  onRetweetClick,
}: RetweetProps) {
  const { name } = profile;
  const {
    id: retweetedId,
    createdAt: retweetedCreatedAt,
    liked,
    likesCount,
    profile: retweetedProfile,
    repliesCount,
    retweeted,
    retweetsCount,
    text,
  } = retweetOf;

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
    <div className="border-borderGray border-b py-2 px-4 hover:bg-gray-500 hover:bg-opacity-10 cursor-pointer text-sm">
      <div className="flex text-sm text-lightGray items-center px-4 space-x-2 mb-2">
        <FontAwesomeIcon icon="retweet" fixedWidth />
        <p>{name} Retweeted</p>
      </div>
      <div className="flex">
        <div className="mr-4">
          {retweetedProfile?.imageUrl ? (
            <img src={retweetedProfile.imageUrl} />
          ) : (
            <FontAwesomeIcon icon="user" className="text-2xl" />
          )}
        </div>
        <div className="w-full">
          <div className="flex mb-2">
            <p className="font-bold mr-1">{retweetedProfile.name}</p>
            <p className="text-lightGray mr-1">@{retweetedProfile.username}</p>
            <p className="text-lightGray mr-1">·</p>
            <p className="text-lightGray mr-1">
              {new Date(retweetedCreatedAt).toLocaleDateString()}
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
                onRetweetClick(tweetRetweeted, retweetedId);
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
                    return tweetLiked
                      ? tweetLikesCount - 1
                      : tweetLikesCount + 1;
                  });
                }, 100);
                setTimeout(() => setLikeAnimation(tweetLiked ? up : down), 100);
                setTimeout(() => setLikeAnimation(initial), 200);
                onLikeClick(tweetLiked, retweetedId);
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
    </div>
  );
}
