import type { AppProps } from 'next/app';
import Amplify from 'aws-amplify';
import '@aws-amplify/ui-react';
import { AppProvider } from '../context/AppContext';
import { AuthProvider } from '../context/AuthContext';
import '../lib/font-awesome';
import '../styles/globals.css';

Amplify.configure({
  Auth: {
    region: process.env.NEXT_PUBLIC_COGNITO_REGION,
    userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID,
    userPoolWebClientId: process.env.NEXT_PUBLIC_USER_POOL_WEB_CLIENT,
    mandatorySignIn: true,
  },
});

Amplify.configure({
  aws_appsync_graphqlEndpoint: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  aws_appsync_region: process.env.NEXT_PUBLIC_APPSYNC_REGION,
  aws_appsync_authenticationType:
    process.env.NEXT_PUBLIC_APPSYNC_AUTHENTICATION_TYPE,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </AppProvider>
  );
}

export default MyApp;
