import { API } from 'aws-amplify';
import gql from 'graphql-tag';

const getLikes = async (userId, nextToken = null) => {
  const result = await API.graphql({
    query: gql`
      query getLikes($userId: ID!, $nextToken: String, $limit: Int!) {
        getLikes(userId: $userId, nextToken: $nextToken, limit: $limit) {
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
            ... on Retweet {
              profile {
                id
                imageUrl
                username
                name
              }
              retweetOf {
                id
                createdAt
                profile {
                  imageUrl
                  id
                  username
                  name
                }

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
              }
            }
          }
          nextToken
        }
      }
    `,
    authMode: 'AMAZON_COGNITO_USER_POOLS',
    variables: {
      limit: 10,
      nextToken,
      userId,
    },
  });

  const likes = result.data.getLikes;

  return likes;
};

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

  return profile;
};

const getMyTimeline = async (nextToken = null) => {
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

            ... on Retweet {
              profile {
                id
                imageUrl
                username
                name
              }
              retweetOf {
                id
                createdAt
                profile {
                  imageUrl
                  id
                  username
                  name
                }

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
              }
            }
          }
          nextToken
        }
      }
    `,
    authMode: 'AMAZON_COGNITO_USER_POOLS',
    variables: {
      limit: 10,
      nextToken,
    },
  });

  const timeline = result.data.getMyTimeline;

  return timeline;
};

const getProfile = async (username) => {
  const result = await API.graphql({
    query: gql`
      query getProfile($username: String!) {
        getProfile(username: $username) {
          backgroundImageUrl
          bio
          birthdate
          createdAt
          followedBy
          followersCount
          following
          followingCount
          id
          likesCount
          imageUrl
          location
          name
          tweetsCount
          username
          website
        }
      }
    `,
    authMode: 'AMAZON_COGNITO_USER_POOLS',
    variables: {
      username,
    },
  });

  const profile = result.data.getProfile;

  return profile;
};

const getTweets = async (userId, nextToken = null) => {
  const result = await API.graphql({
    query: gql`
      query getTweets($userId: ID!, $limit: Int!, $nextToken: String) {
        getTweets(userId: $userId, limit: $limit, nextToken: $nextToken) {
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
            ... on Retweet {
              profile {
                id
                imageUrl
                username
                name
              }
              retweetOf {
                id
                createdAt
                profile {
                  imageUrl
                  id
                  username
                  name
                }

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
              }
            }
          }
          nextToken
        }
      }
    `,
    authMode: 'AMAZON_COGNITO_USER_POOLS',
    variables: {
      userId,
      limit: 10,
      nextToken,
    },
  });

  const tweets = result.data.getTweets;

  return tweets;
};

export { getLikes, getMyProfile, getMyTimeline, getProfile, getTweets };
