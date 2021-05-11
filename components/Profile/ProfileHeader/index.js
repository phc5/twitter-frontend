import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spinner from '../../Spinner';
import { AppContext } from '../../../context/AppContext';

export default function ProfileHeader() {
  const { getMyProfileData } = useContext(AppContext);

  if (!getMyProfileData) {
    return <Spinner />;
  }

  const { name, tweetsCount, imageUrl } = getMyProfileData;

  return (
    <div>
      <div className="flex items-center px-5 py-1 sticky top-0 z-20 bg-black">
        <FontAwesomeIcon
          icon="arrow-left"
          className="text-blue mr-8"
          fixedWidth
        />
        <div>
          <h1 className="text-xl font-extrabold">{name}</h1>
          <p className="text-xs text-lightGray">{tweetsCount} Tweets</p>
        </div>
      </div>

      <div>
        <div className="bg-borderGray">
          <div className="overflow-hidden bg-borderGray block relative">
            <div className="pb-1/3 w-full block"></div>
            <div className="h-full w-full absolute top-0 left-0 bottom-0"></div>
          </div>
        </div>
        <div className="mb-4 px-4 pt-3 relative">
          <div className="flex items-end justify-between flex-wrap">
            {imageUrl ? (
              <img
                className="rounded-full overflow-hidden border-4 border-black cursor-pointer min-w-40px outline-none w-1/4 -ml-1 -mb-1 -mt-3/20"
                src="/paulhyunchong.jpeg"
              />
            ) : (
              <FontAwesomeIcon icon="user" className="text-2xl" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
