import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import Layout from '../components/Layout';
import HomeContent from '../components/home/HomeContent';
import RightNav from '../components/shared/Layout/RightNav';

import { AuthContext } from '../context/AuthContext';
import { HomeProvider } from '../context/HomeContext';
import Link from 'next/link';

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
    <HomeProvider>
      <Layout>
        <div className="border-r border-borderGray w-full max-w-600px">
          <div className="border-b border-borderGray px-4 py-3 sticky top-0 bg-black z-20">
            <h1 className="text-xl font-extrabold">Home</h1>
          </div>
          <HomeContent />
        </div>

        <RightNav />
      </Layout>
    </HomeProvider>
  );
}
