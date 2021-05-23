import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { ProfileContext } from '../../../context/ProfileContext';
import FollowersTabs from './FollowersTabs';

export default function FollowersProfileBar() {
  const { getProfileData } = useContext(ProfileContext);
  const router = useRouter();

  return getProfileData ? (
    <div className="border-b border-borderGray sticky top-0 z-20 bg-black">
      <div className="flex items-center px-5 py-1 ">
        <FontAwesomeIcon
          icon="arrow-left"
          className="text-blue mr-8 cursor-pointer"
          fixedWidth
          onClick={() => router.back()}
        />
        <div>
          <h1 className="text-xl font-extrabold">{getProfileData.name}</h1>
          <p className="text-xs text-lightGray">@{getProfileData.username}</p>
        </div>
      </div>
      <FollowersTabs />
    </div>
  ) : null;
}
