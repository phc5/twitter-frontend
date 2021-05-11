import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import Layout from '../components/Layout';
import RightNav from '../components/RightNav';
import ProfileHeader from '../components/Profile/ProfileHeader';
import ProfileTimeline from '../components/Profile/ProfileTimeline';

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
    <Layout>
      <div className="border-r border-borderGray w-full max-w-600px">
        <ProfileHeader />

        <ProfileTimeline />
      </div>

      <RightNav />
    </Layout>
  );
}
