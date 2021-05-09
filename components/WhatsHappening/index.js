import React from 'react';

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

export default function WhatsHappening() {
  return (
    <div className="bg-darkerGray flex flex-col rounded-2xl mb-4">
      <h3 className="font-bold text-xl border-b border-borderGray px-4 py-3">
        Whats happening
      </h3>

      {whatsHappening.map(({ time, type, imageSrc, description }, index) => (
        <div
          key={imageSrc}
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
            <div className="">
              <img
                draggable="true"
                className="w-16 h-16 rounded-2xl object-cover"
                src={imageSrc}
              ></img>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
