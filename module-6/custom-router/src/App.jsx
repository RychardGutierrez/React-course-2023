import { useEffect, useState } from 'react';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';

import { NAVIGATE_EVENT, POP_NAVIGATE_EVENT } from './router-tools/consts';
import Router from './router-tools/Router';
import Page404 from './pages/Page404';
import SearchPage from './pages/SearchPage';

function App() {
  const routes = [
    {
      path: '/',
      Component: HomePage,
    },
    {
      path: '/about',
      Component: AboutPage,
    },
    {
      path: '/search/:query',
      Component: SearchPage,
    },
  ];

  return (
    <main>
      <Router routes={routes} defaulComponent={Page404} />
    </main>
  );
}

export default App;
