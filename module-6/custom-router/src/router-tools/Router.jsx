import { useEffect, useState } from 'react';
import { match } from 'path-to-regexp';

import { NAVIGATE_EVENT, POP_NAVIGATE_EVENT } from './consts';

function DefaultComponent404() {
  return <h3>404</h3>;
}

const Router = ({
  routes = [],
  defaulComponent: DefaultComponent = () => <DefaultComponent404 />,
}) => {
  const [currentPath, setCurrentPath] = useState(location.pathname);
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(location.pathname);
    };

    window.addEventListener(NAVIGATE_EVENT, onLocationChange);

    window.addEventListener(POP_NAVIGATE_EVENT, onLocationChange);

    return () => {
      window.removeEventListener(NAVIGATE_EVENT, onLocationChange);
      window.addEventListener(POP_NAVIGATE_EVENT, onLocationChange);
    };
  }, []);

  let routeParams = {};

  const PageToRender = routes.find((route) => {
    if (route.path === currentPath) {
      return true;
    }
    const matcherUrl = match(route.path, { decode: decodeURIComponent });
    const matched = matcherUrl(currentPath);
    if (!matched) {
      return false;
    }

    routeParams = matched.params;
    return true;
  })?.Component;

  return PageToRender ? (
    <PageToRender routeParams={routeParams} />
  ) : (
    <DefaultComponent routeParams={routeParams} />
  );
};

export default Router;
