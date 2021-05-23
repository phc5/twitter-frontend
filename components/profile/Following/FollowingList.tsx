import React, { useContext, useEffect, useState } from 'react';
import { useSWRInfinite } from 'swr';
import useIntersectionObserver from '@react-hook/intersection-observer';

import FollowingUserItem from './FollowingUserItem';
import Spinner from '../../shared/Spinner';

import { ProfileContext } from '../../../context/ProfileContext';
import { getFollowing } from '../../../lib/backend/queries';
import getKey from '../../../lib/getKey';

export default function FollowingList() {
  const [ref, setRef] = useState(null);
  const { isIntersecting } = useIntersectionObserver(ref, {
    rootMargin: '0% 0% 25% 0%',
  });

  useEffect(() => {
    if (isIntersecting && !isEnd) setSize(size + 1);
  }, [isIntersecting]);

  const { getProfileData } = useContext(ProfileContext);
  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    (pageIndex, previousPageData) =>
      getProfileData
        ? getKey(
            pageIndex,
            previousPageData,
            `getFollowing${getProfileData.id}`
          )
        : null,
    (_, nextToken) => getFollowing(getProfileData.id, nextToken)
  );

  if (!data) {
    return (
      <div className="flex items-center justify-center my-8">
        <Spinner className="text-blue -ml-1 mr-3" />
      </div>
    );
  }

  const followingArray =
    Array.isArray(data) &&
    data
      .map((page) => page.profiles)
      .flat(1)
      .filter((profile) => profile !== null);
  const isEnd = Array.isArray(data) && data[data.length - 1].nextToken == null;

  const profiles =
    followingArray.length > 0 ? (
      followingArray.map((profile) => (
        <FollowingUserItem profile={profile} key={profile.id} />
      ))
    ) : (
      <div>
        <p className="text-center my-8 font-semibold">
          @{getProfileData.username} is not following anyone.
        </p>
      </div>
    );

  return (
    <>
      {profiles}
      {!isEnd && followingArray.length > 0 && (
        <div ref={setRef} className="flex items-center justify-center h-20">
          <Spinner className="text-blue -ml-1 mr-3" />
        </div>
      )}
    </>
  );
}
