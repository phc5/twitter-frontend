import { createContext, ReactNode, useEffect, useState, useRef } from 'react';
import useSWR, { useSWRInfinite } from 'swr';
import { useRouter } from 'next/router';

import { getProfile, getTweets } from '../lib/backend/queries';
import getKey from '../lib/getKey';
import useIsMountedRef from '../lib/hooks/useIsMountedRef';

type ProfileProviderProps = {
  children: ReactNode;
};

export const ProfileContext = createContext(null);

export const ProfileProvider = ({ children }: ProfileProviderProps) => {
  const isMounted = useIsMountedRef();
  const [getTweetsLoading, setGetTweetsLoading] = useState<boolean>(false);
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

  return (
    <ProfileContext.Provider
      value={{
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

        getTweetsLoading,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
