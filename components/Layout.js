import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <div className="h-screen overflow-hidden bg-black flex flex-col ">
      <div className="flex m-0 p-0 min-h-0 min-w-0 w-full">
        <header className="min-h-screen flex-grow flex flex-col items-end border-borderGray border-r">
          <div className="w-275">
            <div className="h-full fixed top-0 px-3">
              <Nav />
              <button
                type="button"
                className="w-11/12 items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue hover:bg-darkblue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Tweet
              </button>
            </div>
          </div>
          <div className="bg-black fixed bottom-0 w-275 px-4 py-3 tracking-normal leading-tight font-semibold text-sm flex justify-between items-center">
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
                <p>Paul Chong</p>
                <p className="text-lightGray font-normal">@paulhyunchong</p>
              </div>
            </div>
            <FontAwesomeIcon
              icon="ellipsis-h"
              className="text-sm mr-4 mt-1 focus:outline-none"
            />
          </div>
        </header>

        <main className="flex-grow flex-shrink items-start overflow-y-scroll">
          <div className="w-990 flex-grow flex-shrink">
            <div className="flex-grow">
              <div className="flex items-stretch justify-between flex-grow w-full min-h-full">
                {children}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
