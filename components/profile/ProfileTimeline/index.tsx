import React, { useContext } from 'react';
import Timeline from '../../shared/Timeline';

import { ProfileContext } from '../../../context/ProfileContext';
import { TimelineType } from '../../../lib/types';

type Tab = {
  name: string;
  href: string;
  current: boolean;
};

const tabs: Tab[] = [
  { name: 'Tweets', href: '#', current: true },
  { name: 'Tweets & Replies', href: '#', current: false },
  { name: 'Media', href: '#', current: false },
  { name: 'Likes', href: '#', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function ProfileTimeline() {
  const {
    currentTab,
    setCurrentTab,

    getTweetsData,
    getTweetsError,
    getTweetsMutate,
    getTweetsSize,
    getTweetsSetSize,
    getTweetsIsValidating,
    getTweetsLoading,

    getLikesData,
    getLikesError,
    getLikesMutate,
    getLikesSize,
    getLikesSetSize,
    getLikesIsValidating,
    getLikesLoading,
  } = useContext(ProfileContext);

  function renderContent() {
    switch (currentTab) {
      case 0:
        return (
          <Timeline
            data={getTweetsData}
            error={getTweetsError}
            mutate={getTweetsMutate}
            size={getTweetsSize}
            setSize={getTweetsSetSize}
            isValidating={getTweetsIsValidating}
            getTweetsLoading={getTweetsLoading}
          />
        );
      case 1:
        return <></>;
      case 2:
        return <></>;
      case 3:
        return (
          <Timeline
            data={getLikesData}
            error={getLikesError}
            mutate={getLikesMutate}
            size={getLikesSize}
            setSize={getLikesSetSize}
            isValidating={getLikesIsValidating}
            getTweetsLoading={getLikesLoading}
            timelineType={TimelineType.Likes}
          />
        );
      default:
        return (
          <Timeline
            data={getTweetsData}
            error={getTweetsError}
            mutate={getTweetsMutate}
            size={getTweetsSize}
            setSize={getTweetsSetSize}
            isValidating={getTweetsIsValidating}
            getTweetsLoading={getTweetsLoading}
          />
        );
    }
  }

  return (
    <div className="block">
      <nav className="-mb-px flex" aria-label="Tabs">
        {tabs.map((tab: Tab, index: number) => (
          <a
            onClick={() => setCurrentTab(index)}
            key={tab.name}
            className={classNames(
              currentTab === index
                ? 'border-b-2 border-blue text-blue'
                : 'border-b border-lightGray text-gray-500 hover:text-blue hover:border-blue hover:bg-darkestblue',
              'flex-grow whitespace-nowrap py-4 px-1  font-bold text-sm text-center'
            )}
            aria-current={tab.current ? 'page' : undefined}
          >
            {tab.name}
          </a>
        ))}
      </nav>
      <div>{renderContent()}</div>
    </div>
  );
}
