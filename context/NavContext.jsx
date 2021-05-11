import { createContext, useState } from 'react';

export const NavContext = createContext(null);

export const NavProvider = ({ children }) => {
  const [isTweetModalOpen, setIsTweetModalOpen] = useState(false);

  return (
    <NavContext.Provider
      value={{
        // state
        isTweetModalOpen,
        setIsTweetModalOpen,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};
