import React, { useContext, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import Nav from './shared/Layout/Nav';
import TweetModal from './shared/TweetModal';
import { NavProvider } from '../context/NavContext';
import { AppContext } from '../context/AppContext';
import { HomeContext } from '../context/HomeContext';
import { ROUTES } from '../lib/constants';
import { ProfileContext } from '../context/ProfileContext';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const { getMyProfileData } = useContext(AppContext);
  const router = useRouter();

  switch (router.route) {
    case ROUTES.HOME:
      var { timelineMutate: mutate } = useContext(HomeContext);
      break;
    case ROUTES.PROFILE:
      var { getTweetsMutate: mutate } = useContext(ProfileContext);
      break;
  }

  return (
    <NavProvider>
      <div className="h-screen overflow-hidden bg-black flex flex-col ">
        <div className="flex m-0 p-0 min-h-0 min-w-0 w-full">
          <header className="min-h-screen lg:flex-grow flex flex-col items-end border-borderGray border-r max-width-68 lg:w-auto">
            <div className="w-68 lg:w-275">
              <div className="h-full fixed top-0">
                <Nav />
              </div>
            </div>
            {getMyProfileData && (
              <div className="bg-black fixed bottom-0 w-68 lg:w-275 px-4 py-4 flex justify-between items-center">
                <div className="flex items-center px-3 py-2 tracking-tight leading-tight font-semibold text-base">
                  <img
                    className="bg-profileBlue rounded-full border-4 border-black cursor-pointer outline-none w-14 h-14 mr-2"
                    src={
                      getMyProfileData.imageUrl
                        ? getMyProfileData.imageUrl
                        : '/twitter-egg.jpg'
                    }
                  />
                  <div className="hidden lg:block">
                    <p>{getMyProfileData.name}</p>
                    <p className="text-lightGray font-normal w-36 overflow-ellipsis whitespace-nowrap overflow-hidden">
                      @{getMyProfileData.username}
                    </p>
                  </div>
                </div>
                <FontAwesomeIcon
                  icon="ellipsis-h"
                  className="text-sm mr-2 mt-1 focus:outline-none hidden lg:block"
                />
              </div>
            )}
          </header>
          <main className="flex-grow flex-shrink items-start overflow-y-scroll">
            <div className="w-full h-full lg:w-990 flex-grow flex-shrink">
              <div className="flex-grow h-full">
                <div className="flex items-stretch justify-between flex-grow w-full min-h-full">
                  {children}
                </div>
              </div>
            </div>
          </main>
          <TweetModal mutate={mutate} />
        </div>
      </div>
    </NavProvider>
  );
}
