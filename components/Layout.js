import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <div className="h-screen overflow-hidden bg-black flex flex-col ">
      <div className="flex m-0 p-0 min-h-0 min-w-0 w-full">
        <header className="min-h-screen lg:flex-grow flex flex-col items-end border-borderGray border-r max-width-68 lg:w-auto">
          <div className="w-68 lg:w-275">
            <div className="h-full fixed top-0">
              <Nav />
            </div>
          </div>
          <div className="bg-black fixed bottom-0 w-68 lg:w-275 px-4 py-4 flex justify-between items-center">
            <div className="flex items-center px-3 py-2 tracking-tight leading-tight font-semibold text-base">
              <div>
                <img
                  alt=""
                  draggable="true"
                  className="rounded-full lg:w-10 lg:h-10 mr-3"
                  src="/paulhyunchong.jpeg"
                />
              </div>
              <div className="hidden lg:block">
                <p>Paul Chong</p>
                <p className="text-lightGray font-normal">@paulhyunchong</p>
              </div>
            </div>
            <FontAwesomeIcon
              icon="ellipsis-h"
              className="text-sm mr-2 mt-1 focus:outline-none hidden lg:block"
            />
          </div>
        </header>

        <main className="flex-grow flex-shrink items-start overflow-y-scroll">
          <div className="w-full lg:w-990 flex-grow flex-shrink">
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
