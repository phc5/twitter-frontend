import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { AuthContext } from '../context/AuthContext';

export default function Notifications() {
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
      <div className="w-997">NOTIFICATIONS</div>
    </Layout>
  );
}
