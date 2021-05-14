import { createContext, useState, ReactNode } from 'react';

type NavProviderProps = {
  children: ReactNode;
};

export const NavContext = createContext(null);

export const NavProvider = ({ children }: NavProviderProps) => {
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
