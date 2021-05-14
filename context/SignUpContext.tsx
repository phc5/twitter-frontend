import { createContext, useState, useContext, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { Auth } from 'aws-amplify';
import { AuthContext } from './AuthContext';
import { ROUTES } from '../lib/constants';

type SignUpProviderProps = {
  children: ReactNode;
};

export const SignUpContext = createContext(null);

export const SignUpProvider = ({ children }: SignUpProviderProps) => {
  const router = useRouter();
  const { setUser } = useContext(AuthContext);

  // STEP: create your account
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthDate] = useState('');

  // STEP: Customize
  const [isGetMoreChecked, setIsGetMoreChecked] = useState(false);
  const [isConnectChecked, setIsConnectChecked] = useState(false);
  const [isPersonalizedChecked, setIsPersonalizedChecked] = useState(false);

  // STEP: Create Password
  const [password, setPassword] = useState('');
  const [revealPassword, setRevealPassword] = useState(false);

  // STEP: Sign Up
  const [signUpLoading, setSignUpLoading] = useState(false);
  const [signUpError, setSignUpError] = useState('');

  // STEP: Verification code
  const [verificationCode, setVerificationCode] = useState('');
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [verifyError, setVerifyError] = useState('');
  const [hasResentCode, setHasResentCode] = useState(false);

  async function signUp(successCallback): Promise<void> {
    setSignUpError('');
    try {
      setSignUpLoading(true);
      await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          name: name,
        },
      });
      setSignUpLoading(false);
      successCallback(4);
    } catch (error) {
      setSignUpLoading(false);
      setSignUpError(error?.message);
    }
  }

  async function verifyUser(): Promise<undefined | void> {
    setVerifyError('');
    if (!verificationCode) {
      setVerifyError(
        'No verification code received. Please enter a verification code.'
      );
      return;
    }

    try {
      setVerifyLoading(true);
      await Auth.confirmSignUp(email, verificationCode);
      const user = await Auth.signIn(email, password);
      setUser(user);
      router.push(ROUTES.HOME);
      setVerifyLoading(false);
    } catch (error) {
      setVerifyLoading(false);
      setVerifyError(error?.message);
    }
  }

  async function resendVerificationCode(): Promise<void> {
    setVerifyError('');
    try {
      await Auth.resendSignUp(email);
      setHasResentCode(true);
    } catch (error) {
      setVerifyError(error?.message);
      setHasResentCode(false);
    }
  }
  return (
    <SignUpContext.Provider
      value={{
        // state
        name,
        setName,
        email,
        setEmail,
        birthdate,
        setBirthDate,
        isGetMoreChecked,
        setIsGetMoreChecked,
        isConnectChecked,
        setIsConnectChecked,
        isPersonalizedChecked,
        setIsPersonalizedChecked,
        password,
        setPassword,
        revealPassword,
        setRevealPassword,
        signUpError,
        signUpLoading,
        setSignUpLoading,
        verificationCode,
        setVerificationCode,
        verifyLoading,
        setVerifyLoading,
        verifyError,
        setVerifyError,
        hasResentCode,

        // methods
        signUp,
        verifyUser,
        resendVerificationCode,
      }}
    >
      {children}
    </SignUpContext.Provider>
  );
};
