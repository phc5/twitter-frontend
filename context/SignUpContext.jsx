import { createContext, useState } from 'react';

export const SignUpContext = createContext(null);

export const SignUpProvider = ({ children }) => {
  // STEP: create your account
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthDate] = useState('');

  // STEP: Customize
  const [isGetMoreChecked, setIsGetMoreChecked] = useState(false);
  const [isConnectChecked, setIsConnectChecked] = useState(false);
  const [isPersonalizedChecked, setIsPersonalizedChecked] = useState(false);

  return (
    <SignUpContext.Provider
      value={{
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
      }}
    >
      {children}
    </SignUpContext.Provider>
  );
};
