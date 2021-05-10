import { createContext, useState } from 'react';

export const HomeContext = createContext(null);

export const HomeProvider = ({ children }) => {
  const [isTweetModalOpen, setIsTweetModalOpen] = useState(false);

  return (
    <HomeContext.Provider
      value={{
        // state
        isTweetModalOpen,
        setIsTweetModalOpen,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
