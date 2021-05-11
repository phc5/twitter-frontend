import React, { useEffect, useState, useRef } from 'react';

const SIZE = 25;
const STROKE_WIDTH = 2;

export default function CharacterCountCircle({ characterCount }) {
  const [offset, setOffset] = useState(0);
  const circleRef = useRef(null);
  const progress = (characterCount / 180) * 100;
  const center = SIZE / 2;
  const radius = SIZE / 2 - STROKE_WIDTH / 2;
  const circumference = 2 * Math.PI * radius;
  const isNearEnd = 180 - characterCount <= 9;
  const isEnd = 180 - characterCount === 0;

  const stroke = isEnd ? '#DC2626' : isNearEnd ? '#F7B356' : '#2795D9';

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);

    circleRef.current.style = 'transition: stroke-dashoffset 100ms linear';
  }, [setOffset, progress, circumference, offset]);

  return (
    <div className="relative flex items-center justify-center text-center">
      <svg
        className={`${
          characterCount > 0 ? 'block' : 'hidden'
        } text-light transform duration-200 ease-in-out -rotate-90 ${
          isNearEnd ? 'scale-125' : 'scale-100'
        }`}
        width={SIZE}
        height={SIZE}
      >
        <circle
          ref={circleRef}
          stroke="#2F3336"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={STROKE_WIDTH}
        />
        <circle
          ref={circleRef}
          stroke={stroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={STROKE_WIDTH}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <p className="absolute text-sm text-lightGray">
        {isNearEnd ? 180 - characterCount : ''}
      </p>
    </div>
  );
}
