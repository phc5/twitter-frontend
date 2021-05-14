import { createContext, useState, ReactNode } from 'react';
import useSWR from 'swr';

import { getMyProfile } from '../lib/backend/queries';

type AppProviderProps = {
  children: ReactNode;
};

export const AppContext = createContext(null);

export const AppProvider = ({ children }: AppProviderProps) => {
  const [loading, setLoading] = useState(true);
  const [isTweetModalOpen, setIsTweetModalOpen] = useState(false);

  const { data, error, isValidating, mutate } = useSWR(
    'getMyProfile',
    getMyProfile
  );

  return (
    <AppContext.Provider
      value={{
        // state
        loading,
        setLoading,
        isTweetModalOpen,
        setIsTweetModalOpen,
        getMyProfileData: data,
        getMyProfileError: error,
        getMyProfileIsValidating: isValidating,
        getMyProfileMutate: mutate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
