import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import Layout from '../components/Layout';
import Timeline from '../components/Timeline';
import NewTweet from '../components/NewTweet';
import RightNav from '../components/RightNav';

import { AuthContext } from '../context/AuthContext';

export default function Home() {
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
        <div className="border-b border-borderGray px-4 py-3 sticky top-0 bg-black z-20">
          <h1 className="text-xl font-extrabold">Home</h1>
        </div>
        <NewTweet />
        <div className="h-3 w-full border-t border-b border-borderGray bg-lightGray bg-opacity-20"></div>
        <Timeline />
      </div>

      <RightNav />
    </Layout>
  );
}
