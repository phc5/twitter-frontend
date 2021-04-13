import React, { useContext } from 'react';
import {
  AmplifyAuthenticator,
  AmplifySignUp,
  AmplifySignOut,
} from '@aws-amplify/ui-react';
import { AuthState } from '@aws-amplify/ui-components';
import Layout from '../components/Layout';
import { AuthContext } from '../context/AuthContext';

export default function Login() {
  const { user, authState } = useContext(AuthContext);
  return (
    <Layout>
      <AmplifyAuthenticator usernameAlias="email">
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
      </AmplifyAuthenticator>
    </Layout>
  );
}
