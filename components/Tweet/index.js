import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const up = 'inline-flex opacity-0 transform -translate-y-1';
const down = 'inline-flex opacity-0 transform translate-y-1';
const initial = 'inline-flex opacity-1 transform translate-y-0';

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
}) {
  const [tweetLiked, setTweetLiked] = useState(liked);
  const [tweetLikesCount, setTweetLikesCount] = useState(likesCount);
  const [likeAnimation, setLikeAnimation] = useState(initial);

  return (
    <div className="flex border-borderGray border-b p-4 hover:bg-gray-500 hover:bg-opacity-10 cursor-pointer text-sm">
      <div className="mr-4">
        {profile?.imageUrl ? (
          <img src={profile.imageUrl} />
        ) : (
          <FontAwesomeIcon icon="user" className="text-2xl" />
        )}
      </div>
      <div className="w-full">
        <div className="flex mb-2">
          <p className="font-bold mr-1">{profile.name}</p>
          <p className="text-lightGray mr-1">@{profile.username}</p>
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
            className={`${
              retweeted ? 'text-green-500' : 'text-lightGray'
            } hover:text-green-500 cursor-pointer transition-colors`}
          >
            <FontAwesomeIcon icon="retweet" className="text-sm mr-2" />
            {retweetsCount}
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
