import React, { useState, useEffect } from 'react';
import {
  AmplifyAuthenticator,
  AmplifySignUp,
  AmplifySignOut,
} from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import Head from 'next/head';
import Layout from '../components/Layout';
import { getMyProfile } from '../lib/backend';

export default function Home() {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

  useEffect(async () => {
    const profile = await getMyProfile();

    console.log(profile);

    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AmplifyAuthenticator usernameAlias="email">
        <Layout>
          <AmplifySignUp
            slot="sign-up"
            formFields={[
              { type: 'username', label: 'Username (Email) *', required: true },
              { type: 'password', label: 'Password *', required: true },
              { type: 'name', label: 'Name *', required: true },
              { type: 'phone_number', label: 'Phone Number *', required: true },
            ]}
          />
          <div>
            {authState === AuthState.SignedIn && user ? (
              <React.Fragment>
                <h1>Hi, {user.attributes.name}</h1>
                <AmplifySignOut />
              </React.Fragment>
            ) : (
              <AmplifyAuthenticator />
            )}
          </div>
        </Layout>
      </AmplifyAuthenticator>
    </div>
  );
}
