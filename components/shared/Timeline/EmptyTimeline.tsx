import React, { useContext } from 'react';
import { ProfileContext } from '../../../context/ProfileContext';
import { TimelineType } from '../../../lib/types';

export default function EmptyTimeline({ timelineType }) {
  switch (timelineType) {
    case TimelineType.Likes:
      return <LikesEmptyTimeline />;
    default:
      return <DefaultEmptyTimeline />;
  }
}

function LikesEmptyTimeline() {
  const { getProfileData } = useContext(ProfileContext);
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-medium text-sm my-10">
        @{getProfileData.username} has not liked any tweets.
      </p>
    </div>
  );
}

function DefaultEmptyTimeline() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="font-bold text-xl m-4 mt-6">No Tweets yet?</h3>
      <p className="text-lightGray text-sm w-7/12 mb-4">
        This empty timeline won't be around for long. Start following people and
        you'll see Tweets show up here.
      </p>
      <div>
        <button
          type="button"
          className="items-center px-4 py-2 border border-transparent text-sm font-semibold rounded-full bg-blue focus:outline-none"
        >
          Find people to follow
        </button>
      </div>
    </div>
  );
}
