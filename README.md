# Twitter Clone Frontend

Built with Next.js, TailwindCSS, AWS Amplify, and GraphQL.

## Overview

This project aims to mirror the functionality of the Twitter web app. Since Twitter has many features, I decided to implement the following features for now (✅ means it is completed):

- Queries:
  - Getting the current user's timeline ✅
  - Getting the current user's profile ✅
  - Getting a user's profile ✅
  - Getting a user's tweets ✅
  - Getting a user's likes ✅
  - Getting a user's followers list ✅
  - Getting a user's following list ✅
  - Searching for a string
  - Searching tweets by hashtag
- Mutations:
  - Tweet ✅
  - Like/Unlike a Tweet ✅
  - Retweet/Unretweet a Tweet ✅
  - Reply to a Tweet
  - Follow/Unfollow a user
  - Edit profile
- Subscriptions:
  - Notify on retweet
  - Notify on like
  - Notify on mention
  - Notify on reply

The backend is built here [twitter-backend](https://github.com/phc5/twitter-backend/).

## Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the project.

## Feedback

Thanks for reading! If you find a bug or have any comments, feel free to open an issue!
