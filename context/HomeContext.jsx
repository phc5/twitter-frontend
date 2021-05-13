import { createContext, useState } from 'react';
import { useSWRInfinite } from 'swr';

import { getMyTimeline } from '../lib/backend/queries';
import getKey from '../lib/getKey';

export const HomeContext = createContext(null);

export const HomeProvider = ({ children }) => {
  const {
    data: timelineData,
    error: timelineError,
    mutate: timelineMutate,
    size: timelineSize,
    setSize: timelineSetSize,
    isValidating: timelineIsValidating,
  } = useSWRInfinite(
    (pageIndex, previousPageData) =>
      getKey(pageIndex, previousPageData, 'getMyTimeline'),
    (_, nextToken) => getMyTimeline(nextToken)
  );

  return (
    <HomeContext.Provider
      value={{
        timelineData,
        timelineError,
        timelineMutate,
        timelineSize,
        timelineSetSize,
        timelineIsValidating,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
