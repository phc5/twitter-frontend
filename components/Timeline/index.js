import React from 'react';
import useSWR from 'swr';
import Tweet from '../Tweet';
import { getMyTimeline } from '../../lib/backend';

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

export default function Timeline() {
  // const { data, error } = useSWR('getMyTimeline', () => getMyTimeline());
  if (!data) {
    <div>spinner</div>;
  }

  const tweets =
    data.tweets.length > 0 ? (
      data.tweets.map((tweet) => {
        switch (tweet.__typename) {
          case 'Tweet':
            return <Tweet {...tweet} key={tweet.id} />;
          default:
            return <></>;
        }
      })
    ) : (
      <p>No Tweets</p>
    );

  return <>{tweets}</>;
}
