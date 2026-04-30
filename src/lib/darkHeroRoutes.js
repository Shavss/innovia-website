const DARK_HERO_ROUTES = new Set([
  '/',
  '/about',
  '/services',
  '/services/strategy',
  '/services/technology',
  '/services/people-processes',
  '/insights',
  '/careers',
  '/approach',
]);

export function isDarkHeroRoute(pathname) {
  return DARK_HERO_ROUTES.has(pathname);
}

export default DARK_HERO_ROUTES;
