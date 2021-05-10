import { createContext, useState } from 'react';

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isTweetModalOpen, setIsTweetModalOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        // state
        loading,
        setLoading,
        isTweetModalOpen,
        setIsTweetModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
