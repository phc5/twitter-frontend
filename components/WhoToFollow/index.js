import React from 'react';

const whoToFollow = [
  {
    imageSrc: 'https://twitter.com/paulhyunchong/photo',
    name: 'Paul Chong',
    handle: '@paulhyunchong',
  },
];

export default function WhoToFollow() {
  return (
    <div className="bg-darkerGray flex flex-col rounded-2xl">
      <h3 className="font-bold text-xl border-b border-borderGray px-4 py-3">
        Who to follow
      </h3>

      {whoToFollow.map(({ name, handle, imageSrc }, index) => (
        <div
          key={handle}
          className={`${
            index < whoToFollow.length - 1 ? 'border-b border-borderGray' : ''
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
  );
}
