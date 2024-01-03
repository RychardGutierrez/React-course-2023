// import AboutPage from './pages/AboutPage'; // static import
import HomePage from './pages/HomePage';
import Page404 from './pages/Page404';
import SearchPage from './pages/SearchPage';

import Router from './router-tools/Router';
import Route from './router-tools/Route';
import { Suspense, lazy } from 'react';

const LazyAboutPage = lazy(() => import('./pages/AboutPage'));

function App() {
  const routes = [
    // {
    //   path: '/',
    //   Component: HomePage,
    // },
    // {
    //   path: '/about',
    //   Component: AboutPage,
    // },
    {
      path: '/search/:query',
      Component: SearchPage,
    },
    {
      path: '/:lang/about',
      Component: LazyAboutPage,
    },
  ];

  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={routes} defaulComponent={Page404}>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  );
}

export default App;
