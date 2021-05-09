import { API } from 'aws-amplify';
import gql from 'graphql-tag';

const tweet = async (text) => {
  const result = await API.graphql({
    query: gql`
      mutation TweetMutation($text: String!) {
        tweet(text: $text) {
          createdAt
          id
          liked
          likesCount
          text
          retweetsCount
          retweeted
          repliesCount
          profile {
            imageUrl
            username
            name
          }
        }
      }
    `,
    authMode: 'AMAZON_COGNITO_USER_POOLS',
    variables: {
      text,
    },
  });

  const tweet = result.data.tweet;
  tweet.profile.imageUrl = tweet?.profile?.imageUrl || 'default_profile.png';

  return tweet;
};

const like = async (tweetId) => {
  const result = await API.graphql({
    query: gql`
      mutation LikeMutation($tweetId: ID!) {
        like(tweetId: $tweetId)
      }
    `,
    authMode: 'AMAZON_COGNITO_USER_POOLS',
    variables: {
      tweetId,
    },
  });

  const liked = result.data.like;

  return liked;
};

const unlike = async (tweetId) => {
  const result = await API.graphql({
    query: gql`
      mutation UnlikeMutation($tweetId: ID!) {
        unlike(tweetId: $tweetId)
      }
    `,
    authMode: 'AMAZON_COGNITO_USER_POOLS',
    variables: {
      tweetId,
    },
  });

  const unliked = result.data.unlike;

  return unliked;
};

const retweet = async (tweetId) => {
  const result = await API.graphql({
    query: gql`
      mutation RetweetMutation($tweetId: ID!) {
        retweet(tweetId: $tweetId) {
          createdAt
          id
        }
      }
    `,
    authMode: 'AMAZON_COGNITO_USER_POOLS',
    variables: {
      tweetId,
    },
  });

  const retweet = result.data.retweet;

  return retweet;
};

const unretweet = async (tweetId) => {
  const result = await API.graphql({
    query: gql`
      mutation UnretweetMutation($tweetId: ID!) {
        unretweet(tweetId: $tweetId)
      }
    `,
    authMode: 'AMAZON_COGNITO_USER_POOLS',
    variables: {
      tweetId,
    },
  });

  const unretweet = result.data.unretweet;

  return unretweet;
};

export { tweet, like, unlike, retweet, unretweet };
