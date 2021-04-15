import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { AuthContext } from '../context/AuthContext';

export default function Home() {
  const { user, authState } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push('/login');
  }, [user]);

  if (!user) {
    return <h1>Loading...</h1>;
  }
  return (
    <Layout>
      <h1>This is the Home page</h1>
    </Layout>
  );
}