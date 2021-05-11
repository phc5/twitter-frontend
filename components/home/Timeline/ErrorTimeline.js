import React from 'react';

export default function EmptyTimeline() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="font-bold text-xl m-4 mt-6">
        Oops something went wrong :(
      </h3>
      <p className="text-lightGray text-sm w-7/12 mb-4 text-center">
        We're having some techinical difficulties. <br />
        Please try again later.
      </p>
    </div>
  );
}
