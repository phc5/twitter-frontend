import React from 'react';
import Search from '../Search';
import WhoToFollow from '../WhoToFollow';
import WhatsHappening from '../WhatsHappening';
import Footer from '../Footer';

export default function RightNav() {
  return (
    <div className="hidden lg:flex w-350 mr-3 flex-col py-2">
      <Search />
      <div className="sticky top-0">
        <WhatsHappening />
        <WhoToFollow />
        <Footer />
      </div>
    </div>
  );
}
