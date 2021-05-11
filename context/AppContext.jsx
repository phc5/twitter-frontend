import { createContext, useState } from 'react';
import useSWR from 'swr';

import { getMyProfile } from '../lib/backend/queries';

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
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
