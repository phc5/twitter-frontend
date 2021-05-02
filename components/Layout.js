import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <div className="h-screen overflow-hidden bg-black flex flex-col text-white">
      <div className="flex m-0 p-0 min-h-0 min-w-0 w-full">
        <header className="min-h-screen flex-grow flex flex-col items-end border-gray-600 border-r">
          <div className="w-60">
            <div className="h-full fixed top-0">
              <Nav />
            </div>
          </div>
        </header>

        <main className="flex-grow">{children}</main>
      </div>
    </div>
  );
}
