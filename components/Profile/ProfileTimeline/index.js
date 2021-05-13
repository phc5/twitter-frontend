import React, { useState, useContext } from 'react';
import Timeline from '../../shared/Timeline';

import { ProfileContext } from '../../../context/ProfileContext';

const tabs = [
  { name: 'Tweets', href: '#', current: true },
  { name: 'Tweets & Replies', href: '#', current: false },
  { name: 'Media', href: '#', current: false },
  { name: 'Likes', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ProfileTimeline() {
  const [currentTab, setCurrentTab] = useState(0);
  const {
    getTweetsData,
    getTweetsError,
    getTweetsMutate,
    getTweetsSize,
    getTweetsSetSize,
    getTweetsIsValidating,
  } = useContext(ProfileContext);

  return (
    <div className="block">
      <nav className="-mb-px flex" aria-label="Tabs">
        {tabs.map((tab, index) => (
          <a
            onClick={() => setCurrentTab(index)}
            key={tab.name}
            href={tab.href}
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
      <div>
        <Timeline
          data={getTweetsData}
          error={getTweetsError}
          mutate={getTweetsMutate}
          size={getTweetsSize}
          setSize={getTweetsSetSize}
          isValidating={getTweetsIsValidating}
        />
      </div>
    </div>
  );
}
