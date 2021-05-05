import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Layout from '../components/Layout';
import { AuthContext } from '../context/AuthContext';
import { getMyTimeline } from '../lib/backend';

import styles from '../styles/home.module.css';

const whatsHappening = [
  {
    type: 'News',
    time: '4 hours ago',
    description:
      'A wide-angle lens in a tight space is the possible explanation for the outcome of the Bidens’ photo with the Carters, photographers say',
    imageSrc:
      'https://pbs.twimg.com/semantic_core_img/1389710415836319745/0H8K2G_M?format=jpg&amp;name=240x240',
  },
  {
    type: 'Business & Finance',
    time: 'Trending',
    description:
      'Dogecoin is on the rise again after soaring 40% to a new record high of $0.5438 on Wednesday ',
    imageSrc:
      'https://pbs.twimg.com/media/E0gFfLAXEAIq4C5?format=jpg&name=360x360',
  },
  {
    type: 'News',
    time: '5 hours ago',
    description: 'A $2-billion mega-project could reshape the Arts District',
    imageSrc:
      'https://pbs.twimg.com/media/E0J0n3bVIAA3ahv?format=jpg&name=360x360',
  },
];

const whoToFollow = [
  {
    imageSrc: 'https://twitter.com/paulhyunchong/photo',
    name: 'Paul Chong',
    handle: '@paulhyunchong',
  },
];

export default function Home() {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const [tweetValue, setTweetValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  // const { data, error } = useSWR('getMyTimeline', () => getMyTimeline());

  useEffect(() => {
    if (!user) router.push('/');
  }, [user]);

  if (!user) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    <div>spinner</div>;
  }

  const data = {
    tweets: [
      {
        id: '01F4B47T1C8EGXYNB5F4GYPNSV',
        createdAt: '2021-04-28T02:16:59.692Z',
        __typename: 'Reply',
        text: 'a;lkfja;sdjfdf',
        retweetsCount: 0,
        retweeted: false,
        repliesCount: 0,
        likesCount: 0,
        liked: false,
      },
      {
        id: '01F4B418XG0A9X2Y8RP3ZDQENR',
        createdAt: '2021-04-28T02:13:25.552Z',
        __typename: 'Reply',
        text: 'a;lkfja;sdjfdf',
        retweetsCount: 0,
        retweeted: false,
        repliesCount: 0,
        likesCount: 0,
        liked: false,
      },
      {
        id: '01F4B2N0ERXXXDCXV13QZ6RRRS',
        createdAt: '2021-04-28T01:49:15.096Z',
        __typename: 'Reply',
        text: 'a;lkfja;sdjfdf',
        retweetsCount: 0,
        retweeted: false,
        repliesCount: 0,
        likesCount: 0,
        liked: false,
      },
      {
        id: '01F4B1VNXSTT3JYTAEYPSGVTE3',
        createdAt: '2021-04-28T01:35:25.113Z',
        __typename: 'Tweet',
        text: 'asdf as @PaulR49X0PC5',
        retweetsCount: 0,
        retweeted: false,
        repliesCount: 3,
        likesCount: 0,
        liked: false,
        profile: {
          imageUrl: null,
          id: 'abadc16c-90e0-4e75-821f-209bbb02dc86',
          username: 'PaulR49X0PC5',
          name: 'Paul',
        },
      },
      {
        id: '01F4B1B9JEEBW1QFDWTMVRQ6P3',
        createdAt: '2021-04-28T01:26:28.174Z',
        __typename: 'Tweet',
        text: 'hiii2 @PaulR49X0PC5',
        retweetsCount: 0,
        retweeted: false,
        repliesCount: 0,
        likesCount: 0,
        liked: false,
        profile: {
          imageUrl: null,
          id: 'abadc16c-90e0-4e75-821f-209bbb02dc86',
          username: 'PaulR49X0PC5',
          name: 'Paul',
        },
      },
      {
        id: '01F4B140DRJY1KS04YVC1EM6QF',
        createdAt: '2021-04-28T01:22:29.432Z',
        __typename: 'Tweet',
        text: 'hiii2 @PaulR49X0PC5',
        retweetsCount: 0,
        retweeted: false,
        repliesCount: 0,
        likesCount: 0,
        liked: false,
        profile: {
          imageUrl: null,
          id: 'abadc16c-90e0-4e75-821f-209bbb02dc86',
          username: 'PaulR49X0PC5',
          name: 'Paul',
        },
      },
      {
        id: '01F4B12J7SRBHV7J0KM2JGQ2EE',
        createdAt: '2021-04-28T01:21:42.137Z',
        __typename: 'Tweet',
        text: 'hiii @PaulR49X0PC5',
        retweetsCount: 0,
        retweeted: false,
        repliesCount: 0,
        likesCount: 0,
        liked: false,
        profile: {
          imageUrl: null,
          id: 'abadc16c-90e0-4e75-821f-209bbb02dc86',
          username: 'PaulR49X0PC5',
          name: 'Paul',
        },
      },
      {
        id: '01F4AZ4TTQ8PHPYSVKJD6KMYHC',
        createdAt: '2021-04-28T00:47:59.319Z',
        __typename: 'Tweet',
        text: 'hiii @PaulR49X0PC5',
        retweetsCount: 0,
        retweeted: false,
        repliesCount: 0,
        likesCount: 0,
        liked: false,
        profile: {
          imageUrl: null,
          id: 'abadc16c-90e0-4e75-821f-209bbb02dc86',
          username: 'PaulR49X0PC5',
          name: 'Paul',
        },
      },
      {
        id: '01F4AZ2MSFH0ZVM9QER06RNN6Q',
        createdAt: '2021-04-28T00:46:47.599Z',
        __typename: 'Tweet',
        text: 'hiii @PaulR49X0PC5',
        retweetsCount: 0,
        retweeted: false,
        repliesCount: 0,
        likesCount: 0,
        liked: false,
        profile: {
          imageUrl: null,
          id: 'abadc16c-90e0-4e75-821f-209bbb02dc86',
          username: 'PaulR49X0PC5',
          name: 'Paul',
        },
      },
      {
        id: '01F4AZ1V4JNAPQ7HAGZ41K1404',
        createdAt: '2021-04-28T00:46:21.330Z',
        __typename: 'Tweet',
        text: 'hi @PaulR49X0PC5',
        retweetsCount: 0,
        retweeted: false,
        repliesCount: 0,
        likesCount: 0,
        liked: false,
        profile: {
          imageUrl: null,
          id: 'abadc16c-90e0-4e75-821f-209bbb02dc86',
          username: 'PaulR49X0PC5',
          name: 'Paul',
        },
      },
    ],
    nextToken:
      'eyJ2ZXJzaW9uIjoyLCJ0b2tlbiI6IkFRSUNBSGdrUU45cHVuT1Y5bGVaV2l1QkFJMXcxVUZHemErVENzSVpuckw4S1IzQzJRRkVXVTNGaEhKNHNoWE53SHBvaER6eUFBQUMzakNDQXRvR0NTcUdTSWIzRFFFSEJxQ0NBc3N3Z2dMSEFnRUFNSUlDd0FZSktvWklodmNOQVFjQk1CNEdDV0NHU0FGbEF3UUJMakFSQkF6emVHWDBZMStFVG1BYy9qa0NBUkNBZ2dLUlBJNDdpZG14UnlNajJrTlg4QUtxKzhySzNWUGdKcFFINUNLNDZ2cFFCYjlNUjlzemMvTzFrL3RHRWdrYkpiSENpYUtWQTBLdXljLyt4R0g1TVZHdWZrZ0Y3NmZhNEJVUkd1WURYUmVOUmY1VmRRb3V4a0lkTFRKNWVpTkF3ZkFzaHltZ3B6K0ZjZ2QvZVZLQzRlNDVJcEFBNldEcTI3L3hvbk1XRlRiTkdnT24rOFdGY096Ly92Qmwxc0lNVjVJdUFBNkhYWEtodmZXMU1zM2N6WjZ5OFNjWUVEa1hQMVlGdkNTNXRWVVpDeVFuOEtrNzIxT2NDTHlUcnM4cGlxd245dFF4blNJU0VvaGQ4T3h4V3NHZytxNXpkTGdFcUZCN1FZcTdnSFZOMU1FV05yaHp4aHYxSnptVWgwSXJocjNXNm5jeHNtYVp3MFRiQ1ZDRVpKbi9McUpkWVJCcHQxNkVDNzRpZ0J0UUpaWEdrSEY4S2U3a3UrRzBVMUEvYjEwRVZTem9qcllVSzJuLy81RTZtZyt0T2p0eDhDUXcvS3ZCK1I2Yk5jNitzaVpPZ3gzc0x3WVNKd2c4VVlRUWtQY1k2OENMQlFFUjY4OTkrVkRCWFJ5dldQaXZrYVZIRG5OR1lGSHlEN3B6OGhXb0E1OGpLUzM5NSs5enpzSSt4azdqWjE3NHBTVFkvTkFMOEtSbEdpMXhqODVXWElPeGlTWE84dWVWVVVjdTlkSlZVUmRtdGdmTE9KSE1GeWFtUWI3T0hvLzhld1Myd0w2eGlKZGU4dXpzSHo3ekpyRHlieHlKb3RXOHRRaTlWd2ZmS0dhMk9XbzZBVTRSSDBWM2g2QlYwaG9mV2FZV1JYV2ZWKy9vSEhLdTUyRGg0NWd0TWRocnRINzBkMnRDZ2hXQ1Z1emEzMTJ5TDBjdWo1ejUydVZyaDZHOVN2dkZrU3A3SExQREJPMEt0RFFhRzZqVklsY3hEcUlrakpDaEY0cW9sclBJTXhvSG9GaVN3alJpQUhRWDZ0ZHRYYTBoYTQ0b2lHTVUvTzlBVU9MQzZCL2daS21VZTlWYyt2T3N4YTJBSTliZm5MNGx4aTYwRWRWYm9OMHJXamIxR08zVTdRMEliODViMCtxejVzaW9uOHhMV2pLWVBGMHhveFEwZ1FoZCJ9',
  };

  return (
    <Layout>
      <>
        <div className="max-w-xl border-r border-borderGray w-full">
          <div className="border-b border-borderGray px-4 py-3 sticky top-0 bg-black z-20">
            <h1 className="text-xl font-extrabold">Home</h1>
          </div>
          <div className="flex px-4 p-2">
            <FontAwesomeIcon icon="user" className="text-2xl mr-4 mt-1" />
            <div className="w-full mt-2">
              <label htmlFor="tweet" className="sr-only">
                Tweet
              </label>
              <input
                type="text"
                name="tweet"
                id="tweet"
                className="block w-full text-xl bg-black outline-none mb-4 placeholder-lightGray"
                placeholder="What's happening?"
                value={tweetValue}
                onChange={(event) => setTweetValue(event.target.value)}
              />
              <div className="flex justify-between items-center">
                <div className="flex">
                  <div className="flex w-10 h-10 items-center justify-center text-blue cursor-pointer hover:bg-darkestblue rounded-full -ml-2">
                    <FontAwesomeIcon icon="image" className="text-lg" />
                  </div>
                  <div className="flex w-10 h-10 items-center justify-center text-blue cursor-pointer hover:bg-darkestblue rounded-full">
                    <FontAwesomeIcon icon="chart-bar" className="text-lg" />
                  </div>
                  <div className="flex w-10 h-10 items-center justify-center text-blue cursor-pointer hover:bg-darkestblue rounded-full">
                    <FontAwesomeIcon icon="smile" className="text-lg" />
                  </div>
                  <div className="flex w-10 h-10 items-center justify-center text-blue cursor-pointer hover:bg-darkestblue rounded-full">
                    <FontAwesomeIcon icon="calendar" className="text-lg" />
                  </div>
                </div>
                <button
                  type="button"
                  className={`items-center px-4 py-2 border border-transparent text-base font-semibold rounded-full bg-blue opacity-60 pointer-events-none focus:outline-none ${
                    tweetValue.length > 0
                      ? 'opacity-100 pointer-events-auto'
                      : ''
                  }`}
                >
                  Tweet
                </button>
              </div>
            </div>
          </div>
          <div className="h-3 w-full border-t border-b border-borderGray bg-lightGray bg-opacity-20"></div>
          {data.tweets.length > 0 ? (
            data.tweets.map((tweet) =>
              tweet.__typename === 'Tweet' ? (
                <Tweet {...tweet} key={tweet.id} />
              ) : (
                <></>
              )
            )
          ) : (
            <div>spinner</div>
          )}
        </div>
        <div className="w-350 mr-8 flex flex-col py-2">
          <div className="sticky top-0 z-20 bg-black py-1 mb-3">
            <div className="bg-darkGray flex rounded-full px-4 py-2 items-center border border-darkGray border-opacity-40 focus-within:border-blue text-lightGray focus-within:text-blue">
              <label htmlFor="search" className="sr-only">
                Search Twitter
              </label>
              <FontAwesomeIcon icon="search" className="text-lg mr-4" />
              <input
                type="text"
                name="search"
                id="search"
                className={`block w-full outline-none placeholder-lightGray bg-transparent text-white ${styles.search}`}
                placeholder="Search Twitter"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
              />
            </div>
          </div>

          <div className="bg-darkerGray flex flex-col rounded-2xl mb-4">
            <h3 className="font-bold text-xl border-b border-borderGray px-4 py-3">
              Whats happening
            </h3>

            {whatsHappening.map(
              ({ time, type, imageSrc, description }, index) => (
                <div
                  className={`${
                    index < whatsHappening.length - 1
                      ? 'border-b border-borderGray'
                      : ''
                  } px-4 py-3 tracking-normal leading-tight font-semibold text-sm`}
                >
                  <div className="flex">
                    <div className="flex-1 mr-3">
                      <div className="flex text-lightGray font-normal mb-1">
                        <p className="mr-1">{type}</p>
                        <p className="mr-1">·</p>
                        <p>{time}</p>
                      </div>
                      <div>
                        <p>{description}</p>
                      </div>
                    </div>
                    <div className="w-24 h-24">
                      <img
                        alt=""
                        draggable="true"
                        className="rounded-xl"
                        src={imageSrc}
                      ></img>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
          <div className="bg-darkerGray flex flex-col rounded-2xl">
            <h3 className="font-bold text-xl border-b border-borderGray px-4 py-3">
              Who to follow
            </h3>

            {whoToFollow.map(({ name, handle, imageSrc }, index) => (
              <div
                className={`${
                  index < whoToFollow.length - 1
                    ? 'border-b border-borderGray'
                    : ''
                } px-4 py-3 tracking-normal leading-tight font-semibold text-sm flex justify-between items-center`}
              >
                <div className="flex items-center">
                  <div>
                    <img
                      alt=""
                      draggable="true"
                      className="rounded-full w-12 h-12 mr-2"
                      src="/paulhyunchong.jpeg"
                    />
                  </div>
                  <div>
                    <p>{name}</p>
                    <p className="text-lightGray font-normal">{handle}</p>
                  </div>
                </div>
                <button className="border border-blue rounded-3xl text-base text-blue w-20 font-semibold h-8 focus:outline-none">
                  Follow
                </button>
              </div>
            ))}
          </div>
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
    <div className="flex border-borderGray border-b p-4 hover:bg-gray-500 hover:bg-opacity-10 cursor-pointer text-sm">
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
          <p className="text-lightGray mr-1">@{profile.username}</p>
          <p className="text-lightGray mr-1">·</p>
          <p className="text-lightGray mr-1">
            {new Date(createdAt).toLocaleDateString()}
          </p>
        </div>
        <p className="mb-2">{text}</p>
        <div className="flex justify-between max-w-sm">
          <span className="text-lightGray hover:text-blue cursor-pointer transition-colors">
            <FontAwesomeIcon icon="comment" className="text-sm mr-2" />
            {repliesCount}
          </span>
          <span
            className={`${
              retweeted ? 'text-green-500' : 'text-lightGray'
            } hover:text-green-500 cursor-pointer transition-colors`}
          >
            <FontAwesomeIcon icon="retweet" className="text-sm mr-2" />
            {retweetsCount}
          </span>
          <span
            className={`${
              liked ? 'text-blue' : 'text-lightGray'
            } text-lightGray hover:text-red-500 cursor-pointer transition-colors`}
          >
            <FontAwesomeIcon icon="heart" className="text-sm mr-2" />
            {likesCount}
          </span>
          <span className="text-lightGray hover:text-blue cursor-pointer transition-colors">
            <FontAwesomeIcon icon="share" className="text-sm mr-2" />
          </span>
        </div>
      </div>
    </div>
  );
}
