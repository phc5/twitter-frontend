import React, { useContext } from 'react';
import Timeline from '../../shared/Timeline';
import NewTweet from '../../shared/NewTweet';
import { HomeContext } from '../../../context/HomeContext';

export default function HomeContent() {
  const {
    timelineData,
    timelineError,
    timelineMutate,
    timelineSize,
    timelineSetSize,
    timelineIsValidating,
  } = useContext(HomeContext);
  return (
    <>
      <NewTweet mutate={timelineMutate} />
      <div className="h-3 w-full border-t border-b border-borderGray bg-lightGray bg-opacity-20"></div>
      <Timeline
        data={timelineData}
        error={timelineError}
        mutate={timelineMutate}
        size={timelineSize}
        setSize={timelineSetSize}
        isValidating={timelineIsValidating}
      />
    </>
  );
}
