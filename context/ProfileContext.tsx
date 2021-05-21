import { createContext, ReactNode, useEffect, useState, useRef } from 'react';
import useSWR, { useSWRInfinite } from 'swr';
import { useRouter } from 'next/router';

import { getLikes, getProfile, getTweets } from '../lib/backend/queries';
import getKey from '../lib/getKey';
import useIsMountedRef from '../lib/hooks/useIsMountedRef';

type ProfileProviderProps = {
  children: ReactNode;
};

export const ProfileContext = createContext(null);

export const ProfileProvider = ({ children }: ProfileProviderProps) => {
  const isMounted = useIsMountedRef();
  const [getTweetsLoading, setGetTweetsLoading] = useState<boolean>(false);
  const [getLikesLoading, setGetLikesLoading] = useState<boolean>(false);
  const [currentTab, setCurrentTab] = useState<number>(0);
  const router = useRouter();
  const { username } = router.query;

  const {
    data: getProfileData,
    error: getProfileError,
    isValidating: getProfileIsValidating,
    mutate: getProfileMutate,
  } = useSWR(username ? `getProfile${username}` : null, () =>
    getProfile(username)
  );

  const {
    data: getTweetsData,
    error: getTweetsError,
    mutate: getTweetsMutate,
    size: getTweetsSize,
    setSize: getTweetsSetSize,
    isValidating: getTweetsIsValidating,
  } = useSWRInfinite(
    (pageIndex, previousPageData) =>
      getProfileData
        ? getKey(pageIndex, previousPageData, `getTweets${getProfileData.id}`)
        : null,
    (_, nextToken) => getTweets(getProfileData.id, nextToken)
  );

  const {
    data: getLikesData,
    error: getLikesError,
    mutate: getLikesMutate,
    size: getLikesSize,
    setSize: getLikesSetSize,
    isValidating: getLikesIsValidating,
  } = useSWRInfinite(
    (pageIndex, previousPageData) =>
      getProfileData
        ? getKey(pageIndex, previousPageData, `getLikes${getProfileData.id}`)
        : null,
    (_, nextToken) => getLikes(getProfileData.id, nextToken)
  );

  useEffect(() => {
    if (isMounted && username) {
      (async () => {
        setGetTweetsLoading(true);
        const profile = await getProfileMutate();
        // @ts-ignore
        await getTweetsMutate(`getTweets${profile.id}`);
        setGetTweetsLoading(false);
      })();
    }
  }, [username]);

  useEffect(() => {
    console.log(currentTab, isMounted, username);
    if (isMounted && username && getProfileData) {
      (async () => {
        switch (currentTab) {
          case 0:
            // @ts-ignore
            await getTweetsMutate(`getTweets${getProfileData.id}`);
          case 4:
            setGetLikesLoading(true);
            // @ts-ignore
            await getLikesMutate(`getLikes${getProfileData.id}`);
            setGetLikesLoading(false);
        }
      })();
    }
  }, [currentTab]);

  return (
    <ProfileContext.Provider
      value={{
        // state
        currentTab,
        setCurrentTab,
        getTweetsLoading,
        getLikesLoading,

        // getProfile
        getProfileData,
        getProfileError,
        getProfileIsValidating,
        getProfileMutate,

        // getTweets
        getTweetsData,
        getTweetsError,
        getTweetsMutate,
        getTweetsSize,
        getTweetsSetSize,
        getTweetsIsValidating,

        // getLikes
        getLikesData,
        getLikesError,
        getLikesMutate,
        getLikesSize,
        getLikesSetSize,
        getLikesIsValidating,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
