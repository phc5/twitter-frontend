import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Layout from '../components/Layout';
import RightNav from '../components/shared/Layout/RightNav';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileTimeline from '../components/profile/ProfileTimeline';

import { ProfileContext, ProfileProvider } from '../context/ProfileContext';
import { AuthContext } from '../context/AuthContext';

export default function Profile() {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    if (!user) router.push('/');
  }, [user]);

  if (!user) {
    return <h1>Loading...</h1>;
  }
  return (
    <ProfileProvider>
      <Layout>
        <div className="border-r border-borderGray w-full max-w-600px">
          <ProfileHeaderBar />
          <ProfileHeader />
          <ProfileTimeline />
        </div>

        <RightNav />
      </Layout>
    </ProfileProvider>
  );
}

function ProfileHeaderBar() {
  const { getProfileData } = useContext(ProfileContext);
  const router = useRouter();
  return getProfileData ? (
    <div className="border-b border-borderGray flex items-center px-5 py-1 sticky top-0 z-20 bg-black">
      <FontAwesomeIcon
        icon="arrow-left"
        className="text-blue mr-8 cursor-pointer"
        fixedWidth
        onClick={() => router.back()}
      />
      <div>
        <h1 className="text-xl font-extrabold">{getProfileData.name}</h1>
        <p className="text-xs text-lightGray">
          {getProfileData.tweetsCount} Tweets
        </p>
      </div>
    </div>
  ) : null;
}
