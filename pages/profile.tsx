import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Layout from '../components/Layout';
import RightNav from '../components/shared/Layout/RightNav';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileTimeline from '../components/profile/ProfileTimeline';

import { AuthContext } from '../context/AuthContext';
import { ProfileProvider } from '../context/ProfileContext';
import { AppContext } from '../context/AppContext';

export default function Profile() {
  const { user } = useContext(AuthContext);
  const { getMyProfileData } = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push('/');
  }, [user]);

  if (!user) {
    return <h1>Loading...</h1>;
  }

  const { name, tweetsCount } = getMyProfileData;

  return (
    <ProfileProvider>
      <Layout>
        <div className="border-r border-borderGray w-full max-w-600px">
          <div className="border-b border-borderGray flex items-center px-5 py-1 sticky top-0 z-20 bg-black">
            <FontAwesomeIcon
              icon="arrow-left"
              className="text-blue mr-8 cursor-pointer"
              fixedWidth
              onClick={() => router.back()}
            />
            {getMyProfileData && (
              <div>
                <h1 className="text-xl font-extrabold">{name}</h1>
                <p className="text-xs text-lightGray">{tweetsCount} Tweets</p>
              </div>
            )}
          </div>
          <ProfileHeader />

          <ProfileTimeline />
        </div>

        <RightNav />
      </Layout>
    </ProfileProvider>
  );
}
