import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spinner from '../../shared/Spinner';
import { ProfileContext } from '../../../context/ProfileContext';

export default function ProfileHeader() {
  const { getProfileData } = useContext(ProfileContext);

  if (!getProfileData) {
    return (
      <div className="flex items-center justify-center my-20">
        <Spinner className="text-blue text-center" />
      </div>
    );
  }

  const {
    name,
    imageUrl,
    username,
    createdAt,
    followingCount,
    followersCount,
  } = getProfileData;

  return (
    <div className="mb-4">
      <div>
        <div className="bg-borderGray">
          <div className="overflow-hidden bg-borderGray block relative">
            <div className="pb-1/3 w-full block"></div>
            <div className="h-full w-full absolute top-0 left-0 bottom-0"></div>
          </div>
        </div>
        <div className="px-4 pt-3 relative flex justify-between items-end">
          <div className="flex items-end justify-between flex-wrap">
            <img
              className="object-scale-down bg-profileBlue absolute rounded-full overflow-hidden border-4 border-black cursor-pointer min-w-40px outline-none top-1/4 w-1/5 -ml-1 -mb-1 -mt-13/100"
              src={imageUrl ? imageUrl : './twitter-egg.jpg'}
            />
          </div>
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
