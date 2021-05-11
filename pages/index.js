import React, { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Auth } from 'aws-amplify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SignUpModal from '../components/auth/SignUpModal';
import SignInModal from '../components/auth/SignInModal';
import { AuthContext } from '../context/AuthContext';
import { AppContext } from '../context/AppContext';
import { ROUTES } from '../lib/constants';

export default function Home() {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const { loading, setLoading } = useContext(AppContext);
  const { setUser } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    async function getAuthenticatedUser() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setUser(user);
        router.push(ROUTES.HOME);
      } catch (error) {
        setLoading(false);
      }
    }
    getAuthenticatedUser();
  }, []);

  return loading ? (
    <div className="flex flex-col md:flex-row w-full h-screen bg-black">
      <FontAwesomeIcon icon="kiwi-bird" className="text-blue text-5xl m-auto" />
    </div>
  ) : (
    <div className="flex flex-col md:flex-row w-full h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* left side */}
      <div className="flex w-full h-full bg-blue p-8 text-gray-50">
        <div className="flex items-center justify-center w-full h-full bg-red">
          <div className="flex flex-col">
            <div className="flex items-center">
              <FontAwesomeIcon icon="search" className=" text-2xl mr-5" />
              <p className=" font-bold text-xl">Follow your interests.</p>
            </div>
            <div className="flex items-center mt-10">
              <FontAwesomeIcon icon="user-friends" className=" text-2xl mr-5" />
              <p className=" font-bold text-xl">
                Hear what people are talking about.
              </p>
            </div>
            <div className="flex items-center mt-10">
              <FontAwesomeIcon icon="comment" className=" text-2xl mr-5" />
              <p className=" font-bold text-xl">Join the conversation.</p>
            </div>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex w-full h-full py-8 pl-4 text-black">
        <div className="flex items-center justify-center w-full xl:w-1/2 h-full p-3">
          <div className="flex flex-col w-3/4 font-bold p-3">
            <FontAwesomeIcon
              icon="kiwi-bird"
              className="text-blue text-2xl mr-5 mb-4"
            />
            <p className="text-3xl mb-12 font-bold w">
              See what's happening in the world right now
            </p>
            <p>Join Kwitter today.</p>
            <button
              className="rounded-full bg-blue font-bold text-lg mt-4 p-3 hover:bg-darkblue focus:outline-none text-white"
              onClick={() => setIsSignUpModalOpen(!isSignUpModalOpen)}
            >
              Sign up
            </button>
            <button
              className="rounded-full border border-blue bg-white font-bold text-lg text-blue mt-4 p-3 hover:bg-lightblue focus:outline-none"
              onClick={() => setIsSignInModalOpen(!isSignInModalOpen)}
            >
              Log in
            </button>
          </div>
        </div>
      </div>

      <SignUpModal
        isSignUpModalOpen={isSignUpModalOpen}
        setIsSignUpModalOpen={setIsSignUpModalOpen}
      />
      <SignInModal
        isSignInModalOpen={isSignInModalOpen}
        setIsSignInModalOpen={setIsSignInModalOpen}
      />
    </div>
  );
}
