import { createContext, useState, useEffect, ReactNode } from 'react';
import { Auth } from 'aws-amplify';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { useRouter } from 'next/router';

export const AuthContext = createContext(null);

type Props = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [authState, setAuthState] = useState(null);
  const [user, setUser] = useState(null);
  const router = useRouter();
  console.log('in AuthContext');
  console.log(user);

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      switch (nextAuthState) {
        case AuthState.SignedOut:
          signout();
        default:
          break;
      }
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  async function signout() {
    await Auth.signOut({ global: true });
    router.push('/');
  }

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
