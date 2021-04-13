import { createContext, useState, useEffect } from 'react';
import { onAuthUIStateChange } from '@aws-amplify/ui-components';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        authState,
        setAuthState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
