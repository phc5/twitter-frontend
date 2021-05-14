import { createContext, ReactNode } from 'react';
import { useSWRInfinite } from 'swr';

import { getMyTimeline } from '../lib/backend/queries';
import getKey from '../lib/getKey';

type HomeProviderProps = {
  children: ReactNode,
};

export const HomeContext = createContext(null);

export const HomeProvider = ({ children }: HomeProviderProps) => {
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
