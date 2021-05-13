import { createContext, useContext } from 'react';
import { useSWRInfinite } from 'swr';

import { AppContext } from './AppContext';
import { getTweets } from '../lib/backend/queries';
import getKey from '../lib/getKey';

export const ProfileContext = createContext(null);

export const ProfileProvider = ({ children }) => {
  const { getMyProfileData } = useContext(AppContext);

  const {
    data: getTweetsData,
    error: getTweetsError,
    mutate: getTweetsMutate,
    size: getTweetsSize,
    setSize: getTweetsSetSize,
    isValidating: getTweetsIsValidating,
  } = useSWRInfinite(
    (pageIndex, previousPageData) =>
      getKey(pageIndex, previousPageData, 'getTweets'),
    (_, nextToken) => getTweets(getMyProfileData.id, nextToken)
  );

  return (
    <ProfileContext.Provider
      value={{
        getTweetsData,
        getTweetsError,
        getTweetsMutate,
        getTweetsSize,
        getTweetsSetSize,
        getTweetsIsValidating,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
