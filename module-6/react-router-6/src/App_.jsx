import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import { useRoutes } from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/search',
    element: <SearchPage />,
  },
];

const App = () => {
  const element = useRoutes(routes);

  return (
    <>
      <h1>Use Routes</h1>

      {element}
    </>
  );
};

export default App;
