import { API } from 'aws-amplify';
import gql from 'graphql-tag';

const getMyProfile = async () => {
  const result = await API.graphql({
    query: gql`
      query getMyProfile {
        getMyProfile {
          bio
          backgroundImageUrl
          birthdate
          createdAt
          followersCount
          id
          followingCount
          imageUrl
          likesCount
          location
          name
          username
          tweetsCount
          website
        }
      }
    `,
    authMode: 'AMAZON_COGNITO_USER_POOLS',
  });

  const profile = result.data.getMyProfile;
  profile.imageUrl = profile.imageUrl || 'default_profile.png';

  return profile;
};

export { getMyProfile };
