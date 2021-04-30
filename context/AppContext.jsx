import { createContext, useState } from 'react';

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  return (
    <AppContext.Provider
      value={{
        // state
        loading,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
