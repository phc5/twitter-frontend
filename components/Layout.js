import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <div className="h-screen overflow-hidden bg-black flex flex-col text-white">
      <div className="flex m-0 p-0 min-h-0 min-w-0 w-full">
        <header className="min-h-screen flex-grow flex flex-col items-end border-gray-600 border-r">
          <div className="w-60">
            <div className="h-full fixed top-0">
              <Nav />
              <button
                type="button"
                className="w-11/12 items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue hover:bg-darkblue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Tweet
              </button>
            </div>
          </div>
        </header>

        <main className="flex-grow flex-shrink items-start">
          <div className="w-896 flex-grow flex-shrink">
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
