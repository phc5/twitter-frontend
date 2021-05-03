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

const getMyTimeline = async (limit = 10, nextToken = null) => {
  const result = await API.graphql({
    query: gql`
      query getMyTimeline($limit: Int!, $nextToken: String) {
        getMyTimeline(limit: $limit, nextToken: $nextToken) {
          tweets {
            id
            createdAt
            __typename
            ... on Tweet {
              id
              text
              retweetsCount
              retweeted
              repliesCount
              likesCount
              liked
              profile {
                imageUrl
                id
                username
                name
              }
            }
            ... on Reply {
              id
              text
              retweetsCount
              retweeted
              repliesCount
              likesCount
              liked
              createdAt
            }
          }
          nextToken
        }
      }
    `,
    authMode: 'AMAZON_COGNITO_USER_POOLS',
    variables: {
      limit: limit,
      nextToken,
    },
  });

  const timeline = result.data.getMyTimeline;

  return timeline;
};

export { getMyProfile, getMyTimeline };
