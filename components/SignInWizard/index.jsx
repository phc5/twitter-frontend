import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { Auth } from 'aws-amplify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthContext } from '../../context/AuthContext';

export default function SignInWizard() {
  const router = useRouter();
  const { setUser } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInLoading, setSignInLoading] = useState(false);
  const [signInError, setSignInError] = useState('');

  async function signIn() {
    setSignInError('');
    try {
      setSignInLoading(true);
      const user = await Auth.signIn(email, password);
      setUser(user);
      router.push('/home');
      setSignInLoading(false);
    } catch (error) {
      setSignInLoading(false);
      setSignInError(error?.message);
    }
  }

  const errorComponent = signInError !== '' && (
    <div className="rounded-md bg-red-50 p-4 mt-4 text-center flex items-center">
      <FontAwesomeIcon
        icon="exclamation-triangle"
        className="text-red-700 mr-4"
      />
      <p className="mt-1 text-sm text-red-700">{signInError}</p>
    </div>
  );

  return (
    <div className="px-3 mb-8">
      <div className="pt-2">
        <div className="flex justify-between items-center pb-4">
          <p className="text-2xl font-bold">Log in</p>
        </div>

        {errorComponent}

        <div className="w-full bg-lightblue border-b-2 border-dark mb-8 p-2">
          <label htmlFor="emailAddress" className="text-dark">
            Email
          </label>
          <input
            id="emailAddress"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full bg-lightblue text-lg focus:outline-none"
            type="email"
          />
        </div>

        <div className="w-full bg-lightblue border-b-2 border-dark p-2">
          <label htmlFor="password" className="leading-tight text-dark">
            Password
          </label>
          <input
            id="password"
            value={password}
            className="w-full bg-lightblue text-lg focus:outline-none"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button
          className={`w-full rounded-full mt-4 py-3 bg-blue text-white font-bold hover:bg-darkblue focus:outline-none ${
            (!email || !password) && 'opacity-50 pointer-events-none'
          }`}
          onClick={signIn}
        >
          {signInLoading ? (
            <svg
              className="animate-spin m-auto h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            'Log in'
          )}
        </button>
      </div>
    </div>
  );
}
