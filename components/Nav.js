import React, { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { HomeContext } from '../context/HomeContext';

const NAVIGATION_ITEMS = [
  { displayName: 'Home', href: '/home', icon: 'home' },
  { displayName: 'Explore', href: '/explore', icon: 'hashtag' },
  { displayName: 'Notifications', href: '/notifications', icon: 'bell' },
  { displayName: 'Messages', href: '/messages', icon: 'envelope' },
  { displayName: 'Profile', href: '/profile', icon: 'user' },
];

export default function Nav() {
  const { setIsTweetModalOpen } = useContext(HomeContext);

  return (
    <nav className="flex flex-col w-275 px-3">
      <Link href="/home" passHref>
        <a className="p-3">
          <FontAwesomeIcon icon="kiwi-bird" className=" text-2xl" />
        </a>
      </Link>
      <NavigationItems />
      <div className="text-xl p-2 my-2 font-bold flex items-center hover:text-blue cursor-pointer hover:bg-darkestblue w-fitContent transition-colors rounded-full">
        <FontAwesomeIcon icon="ellipsis-h" className="text-2xl" fixedWidth />
        <p className="hidden lg:block mx-4">More</p>
      </div>
      <div className="w-full lg:p-2 my-2">
        <div className="lg:hidden rounded-full text-white bg-blue hover:bg-darkblue focus:outline-none w-12 h-12 flex items-center justify-center">
          <FontAwesomeIcon icon="feather-alt" className="text-2xl" fixedWidth />
        </div>

        <button
          onClick={() => setIsTweetModalOpen(true)}
          type="button"
          className="hidden lg:block w-full items-center p-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue hover:bg-darkblue focus:outline-none"
        >
          Tweet
        </button>
      </div>
    </nav>
  );
}

function NavigationItems() {
  const { pathname } = useRouter();

  return (
    <>
      {NAVIGATION_ITEMS.map(({ displayName, href, icon }) => {
        return (
          <Link href={href} passHref key={displayName}>
            <a
              className={`${
                pathname === href ? 'text-blue' : ''
              } text-xl font-bold hover:text-blue group`}
            >
              <div className="p-2 my-2 flex items-center rounded-full group-hover:bg-darkestblue w-fitContent transition-colors">
                <FontAwesomeIcon icon={icon} className="text-2xl" fixedWidth />
                <p className="hidden lg:block mx-4">{displayName}</p>
              </div>
            </a>
          </Link>
        );
      })}
    </>
  );
}
