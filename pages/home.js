import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Layout from '../components/Layout';
import { AuthContext } from '../context/AuthContext';
import { getMyTimeline } from '../lib/backend';

export default function Home() {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  const { data, error } = useSWR('getMyTimeline', () => getMyTimeline());

  useEffect(() => {
    if (!user) router.push('/');
  }, [user]);

  if (!user) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    <div>spinner</div>;
  }

  return (
    <Layout>
      <>
        <div className="max-w-xl border-r border-gray-600 w-full">
          {data.tweets.map((tweet) =>
            tweet.__typename === 'Tweet' ? (
              <Tweet {...tweet} key={tweet.id} />
            ) : (
              <></>
            )
          )}
        </div>
        <div className="w-80 mr-2">
          <div>Search twitter</div>
          <div>Whats happening</div>
          <div>Who to follow</div>
        </div>
      </>
    </Layout>
  );
}

function Tweet({
  id,
  createdAt,
  liked,
  likesCount,
  profile,
  repliesCount,
  retweeted,
  retweetsCount,
  text,
}) {
  return (
    <div className="flex border-gray-600 border-b p-4 hover:bg-gray-500 hover:bg-opacity-10 cursor-pointer text-sm">
      <div className="mr-4">
        {profile?.imageUrl ? (
          <img />
        ) : (
          <FontAwesomeIcon icon="user" className="text-2xl" />
        )}
      </div>
      <div className="w-full">
        <div className="flex mb-2">
          <p className="font-bold mr-1">{profile.name}</p>
          <p className="text-gray-400 mr-1">@{profile.username}</p>
          <p className="text-gray-400 mr-1">·</p>
          <p className="text-gray-400 mr-1">
            {new Date(createdAt).toLocaleDateString()}
          </p>
        </div>
        <p className="mb-2">{text}</p>
        <div className="flex justify-between max-w-sm">
          <span className="text-gray-500 hover:text-blue cursor-pointer transition-colors">
            <FontAwesomeIcon icon="comment" className="text-sm mr-2" />
            {repliesCount}
          </span>
          <span
            className={`${
              retweeted ? 'text-green-500' : 'text-gray-500'
            } hover:text-green-500 cursor-pointer transition-colors`}
          >
            <FontAwesomeIcon icon="retweet" className="text-sm mr-2" />
            {retweetsCount}
          </span>
          <span
            className={`${
              liked ? 'text-blue' : 'text-gray-500'
            } text-gray-500 hover:text-red-500 cursor-pointer transition-colors`}
          >
            <FontAwesomeIcon icon="heart" className="text-sm mr-2" />
            {likesCount}
          </span>
          <span className="text-gray-500 hover:text-blue cursor-pointer transition-colors">
            <FontAwesomeIcon icon="share" className="text-sm mr-2" />
          </span>
        </div>
      </div>
    </div>
  );
}
