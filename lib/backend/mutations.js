import { API } from 'aws-amplify';
import gql from 'graphql-tag';

const tweet = async (text) => {
  const result = await API.graphql({
    query: gql`
      mutation MyMutation($text: String!) {
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

export { tweet };
