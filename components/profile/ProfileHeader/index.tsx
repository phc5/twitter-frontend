import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spinner from '../../shared/Spinner';
import { AppContext } from '../../../context/AppContext';

export default function ProfileHeader() {
  const router = useRouter();
  const { getMyProfileData } = useContext(AppContext);

  if (!getMyProfileData) {
    return <Spinner className="text-blue -ml-1 mr-3" />;
  }

  const {
    name,
    tweetsCount,
    imageUrl,
    username,
    createdAt,
    followingCount,
    followersCount,
  } = getMyProfileData;

  return (
    <div className="mb-4">
      <div className="flex items-center px-5 py-1 sticky top-0 z-20 bg-black">
        <FontAwesomeIcon
          icon="arrow-left"
          className="text-blue mr-8 cursor-pointer"
          fixedWidth
          onClick={() => router.back()}
        />
        <div>
          <h1 className="text-xl font-extrabold">{name}</h1>
          <p className="text-xs text-lightGray">{tweetsCount} Tweets</p>
        </div>
      </div>

      <div>
        <div className="bg-borderGray">
          <div className="overflow-hidden bg-borderGray block relative">
            <div className="pb-1/3 w-full block"></div>
            <div className="h-full w-full absolute top-0 left-0 bottom-0"></div>
          </div>
        </div>
        <div className="mb-4 px-4 pt-3 relative flex justify-between items-end">
          <a className="flex items-end justify-between flex-wrap">
            {imageUrl ? (
              <img
                className="absolute rounded-full overflow-hidden border-4 border-black cursor-pointer min-w-40px outline-none top-1/4 w-1/4 -ml-1 -mb-1 -mt-3/20"
                src="/paulhyunchong.jpeg"
              />
            ) : (
              <FontAwesomeIcon icon="user" className="text-2xl" />
            )}
          </a>
          <button className="border border-blue rounded-full text-blue px-4 py-2 text-base font-bold">
            Edit Profile
          </button>
        </div>

        <div className="px-4">
          <h2 className="font-extrabold text-xl">{name}</h2>
          <p className="text-lightGray text-sm mb-2">@{username}</p>
          <div className="text-lightGray text-sm flex mb-2 items-center">
            <FontAwesomeIcon
              icon="calendar"
              className="text-base text-lightGray mr-1.5"
            />{' '}
            <p>Joined {new Date(createdAt).toDateString()}</p>
          </div>
          <div className="flex text-sm">
            <p className="mr-3 font-bold">
              {followingCount}{' '}
              <span className="text-lightGray font-normal">Following</span>
            </p>
            <p className="font-bold">
              {followersCount}{' '}
              <span className="text-lightGray font-normal">Followers</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
