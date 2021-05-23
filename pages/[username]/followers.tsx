import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import Layout from '../../components/Layout';
import RightNav from '../../components/shared/Layout/RightNav';
import FollowersHeader from '../../components/profile/Followers/FollowersHeader';
import FollowersList from '../../components/profile/Followers/FollowersList';

import { AuthContext } from '../../context/AuthContext';
import { ProfileProvider } from '../../context/ProfileContext';

export default function FollowersPage() {
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
          <FollowersHeader />
          <FollowersList />
        </div>

        <RightNav />
      </Layout>
    </ProfileProvider>
  );
}
