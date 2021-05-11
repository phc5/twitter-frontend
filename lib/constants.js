const PAGE_TITLES = Object.freeze({
  HOME: 'Home',
  EXPLORE: 'Explore',
  NOTIFICATIONS: 'Notifications',
  MESSAGES: 'Messages',
  PROFILE: 'Profile',
});

const ROUTES = Object.freeze({
  HOME: '/home',
  EXPLORE: '/explore',
  NOTIFICATIONS: '/notifications',
  MESSAGES: '/messages',
  PROFILE: '/profile',
});

const NAVIGATION_ITEMS = [
  { displayName: PAGE_TITLES.HOME, href: ROUTES.HOME, icon: 'home' },
  { displayName: PAGE_TITLES.EXPLORE, href: ROUTES.EXPLORE, icon: 'hashtag' },
  {
    displayName: PAGE_TITLES.NOTIFICATIONS,
    href: ROUTES.NOTIFICATIONS,
    icon: 'bell',
  },
  {
    displayName: PAGE_TITLES.MESSAGES,
    href: ROUTES.MESSAGES,
    icon: 'envelope',
  },
  { displayName: PAGE_TITLES.PROFILE, href: ROUTES.PROFILE, icon: 'user' },
];

export { NAVIGATION_ITEMS, PAGE_TITLES, ROUTES };
