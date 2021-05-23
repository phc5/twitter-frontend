import React, { useContext, useEffect, useState } from 'react';
import { useSWRInfinite } from 'swr';
import useIntersectionObserver from '@react-hook/intersection-observer';

import FollowersUserItem from './FollowersUserItem';
import Spinner from '../../shared/Spinner';

import { ProfileContext } from '../../../context/ProfileContext';
import { getFollowers } from '../../../lib/backend/queries';
import getKey from '../../../lib/getKey';

export default function FollowersList() {
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
            `getFollowers${getProfileData.id}`
          )
        : null,
    (_, nextToken) => getFollowers(getProfileData.id, nextToken)
  );

  if (!data) {
    return (
      <div className="flex items-center justify-center my-8">
        <Spinner className="text-blue -ml-1 mr-3" />
      </div>
    );
  }

  const followersArray =
    Array.isArray(data) &&
    data
      .map((page) => page.profiles)
      .flat(1)
      .filter((profile) => profile !== null);
  const isEnd = Array.isArray(data) && data[data.length - 1].nextToken == null;

  const profiles =
    followersArray.length > 0 ? (
      followersArray.map((profile) => (
        <FollowersUserItem profile={profile} key={profile.id} />
      ))
    ) : (
      <div>
        <p className="text-center my-8 font-semibold">
          @{getProfileData.username} has no followers.
        </p>
      </div>
    );

  return (
    <>
      {profiles}
      {!isEnd && followersArray.length > 0 && (
        <div ref={setRef} className="flex items-center justify-center h-20">
          <Spinner className="text-blue -ml-1 mr-3" />
        </div>
      )}
    </>
  );
}
