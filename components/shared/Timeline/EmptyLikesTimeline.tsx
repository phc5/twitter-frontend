import React, { useContext } from 'react';
import Spinner from '../Spinner';
import { ProfileContext } from '../../../context/ProfileContext';

export default function EmptyLikesTimeline() {
  const { getProfileData } = useContext(ProfileContext);
  return getProfileData ? (
    <div className="flex flex-col justify-center items-center">
      <p className="text-lightGray text-sm w-7/12 mb-4">
        @{getProfileData.username} has not liked any tweets.
      </p>
    </div>
  ) : (
    <div className="flex items-center justify-center h-20">
      <Spinner className="text-blue -ml-1 mr-3" />
    </div>
  );
}
