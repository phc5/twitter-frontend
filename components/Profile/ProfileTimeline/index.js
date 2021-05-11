import React, { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';

export default function ProfileTimeline() {
  const {
    getMyProfileData,
    getMyProfileError,
    getMyProfileIsValidating,
    getMyProfileMutate,
  } = useContext(AppContext);

  console.log(getMyProfileData);
  return <div></div>;
}
