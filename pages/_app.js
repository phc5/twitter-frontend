import Amplify from 'aws-amplify';
import '@aws-amplify/ui-react';
import { AuthProvider } from '../context/AuthContext';
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

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
