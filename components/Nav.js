import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NAVIGATION_ITEMS = [
  { displayName: 'Home', href: '/home', icon: 'home' },
  { displayName: 'Explore', href: '/explore', icon: 'hashtag' },
  { displayName: 'Notifications', href: '/notifications', icon: 'bell' },
  { displayName: 'Messages', href: '/messages', icon: 'envelope' },
  { displayName: 'Profile', href: '/profile', icon: 'user' },
];

export default function Nav() {
  return (
    <nav className="flex flex-col w-60">
      <Link href="/home" passHref>
        <a className="p-3">
          <FontAwesomeIcon icon="kiwi-bird" className=" text-2xl" />
        </a>
      </Link>
      <NavigationItems />
      <div className=" text-xl p-3 my-1 mb-3 font-bold flex items-center hover:text-blue cursor-pointer">
        <FontAwesomeIcon icon="ellipsis-h" className="text-2xl mr-4" />
        More
      </div>
    </nav>
  );
}

function NavigationItems() {
  const { pathname } = useRouter();

  return (
    <>
      {NAVIGATION_ITEMS.map(({ displayName, href, icon }) => {
        return (
          <Link href={href} passHref key={displayName}>
            <a
              className={`${
                pathname === href ? 'text-blue' : ''
              } text-xl font-bold hover:text-blue group`}
            >
              <div className="p-2 my-1 flex items-center rounded-full group-hover:bg-darkestblue w-fitContent transition-colors">
                <FontAwesomeIcon icon={icon} className="text-2xl" />
                <p className="mx-4">{displayName}</p>
              </div>
            </a>
          </Link>
        );
      })}
    </>
  );
}
