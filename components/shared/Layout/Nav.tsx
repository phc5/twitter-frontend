import React, { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavContext } from '../../../context/NavContext';
import { AppContext } from '../../../context/AppContext';
import {
  NAVIGATION_ITEMS,
  ROUTES,
  NavigationItem,
} from '../../../lib/constants';

export default function Nav() {
  const { setIsTweetModalOpen } = useContext(NavContext);

  return (
    <nav className="flex flex-col w-full lg:w-275 px-3">
      <Link href={ROUTES.HOME} passHref>
        <a className="p-3">
          <FontAwesomeIcon icon="kiwi-bird" className=" text-2xl" />
        </a>
      </Link>
      <NavigationItems />
      <div className="text-xl p-2 my-1 font-bold flex items-center hover:text-blue cursor-pointer hover:bg-darkestblue w-fitContent transition-colors rounded-full">
        <FontAwesomeIcon icon="ellipsis-h" className="text-2xl" fixedWidth />
        <p className="hidden lg:block mx-4">More</p>
      </div>
      <div className="w-full lg:p-2">
        <div
          className="lg:hidden rounded-full text-white bg-blue hover:bg-darkblue cursor-pointer focus:outline-none w-12 h-12 flex items-center justify-center"
          onClick={() => setIsTweetModalOpen(true)}
        >
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
  const { getMyProfileData } = useContext(AppContext);

  return (
    <>
      {NAVIGATION_ITEMS.map(({ displayName, href, icon }: NavigationItem) => {
        return (
          <Link
            href={
              href === ROUTES.PROFILE
                ? getMyProfileData
                  ? getMyProfileData.username
                  : ''
                : href
            }
            passHref
            key={displayName}
          >
            <a
              className={`${
                pathname === href ? 'text-blue' : ''
              } text-xl font-bold hover:text-blue group`}
            >
              <div className="p-2 my-1 flex items-center rounded-full group-hover:bg-darkestblue w-fitContent transition-colors">
                <FontAwesomeIcon
                  icon={icon as IconName}
                  className="text-2xl"
                  fixedWidth
                />
                <p className="hidden lg:block mx-4">{displayName}</p>
              </div>
            </a>
          </Link>
        );
      })}
    </>
  );
}
