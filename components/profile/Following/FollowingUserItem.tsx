import React, { useContext } from 'react';
import Link from 'next/link';
import { AppContext } from '../../../context/AppContext';

export default function FollowingUserItem({ profile }) {
  const { getMyProfileData } = useContext(AppContext);
  console.log(profile);

  return (
    <div className="flex border-borderGray border-b p-4 hover:bg-gray-500 hover:bg-opacity-10 cursor-pointer text-sm">
      <Link href={`/${profile.username}`} passHref>
        <a>
          <img
            className="bg-profileBlue rounded-full border-4 border-black cursor-pointer outline-none w-14 h-14 mr-4"
            src={profile?.imageUrl ? profile.imageUrl : '/twitter-egg.jpg'}
          />
        </a>
      </Link>

      <div className="w-full">
        <div className="flex mb-2 justify-between">
          <Link href={`/${profile.username}`} passHref>
            <a className="flex flex-col">
              <p className="font-bold mr-1">{profile.name}</p>
              <div className="flex">
                <p className="text-lightGray mr-1">@{profile.username}</p>
                {profile.followedBy && (
                  <span className="bg-darkGray text-lightGray px-1 rounded-md text-xs flex items-center">
                    Follows you
                  </span>
                )}
              </div>
            </a>
          </Link>
          {profile.id !== getMyProfileData.id &&
            (profile.following ? (
              <button className="font-bold rounded-full bg-blue px-4">
                Following
              </button>
            ) : (
              <button className="border border-blue rounded-full text-blue w-20 font-semibold h-8 focus:outline-none">
                Follow
              </button>
            ))}
        </div>
        <p className="mb-2">{profile.bio}</p>
      </div>
    </div>
  );
}
