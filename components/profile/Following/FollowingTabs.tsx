import React, { useState, useContext } from 'react';

import { ProfileContext } from '../../../context/ProfileContext';
import Link from 'next/link';

export default function FollowingTabs() {
  const { getProfileData } = useContext(ProfileContext);

  return (
    <div className="block">
      <nav className="-mb-px flex" aria-label="Tabs">
        <Link href={`/${getProfileData.username}/followers`} passHref>
          <a className="border-b border-lightGray text-gray-500 hover:text-blue hover:border-blue hover:bg-darkestblue flex-grow whitespace-nowrap py-4 px-1  font-bold text-sm text-center">
            Followers
          </a>
        </Link>

        <Link href={`/${getProfileData.username}/following`} passHref>
          <a className="border-b-2 border-blue text-blue flex-grow whitespace-nowrap py-4 px-1  font-bold text-sm text-center">
            Following
          </a>
        </Link>
      </nav>
    </div>
  );
}
