import { Children, useEffect, useState } from 'react';
import { match } from 'path-to-regexp';

import { NAVIGATE_EVENT, POP_NAVIGATE_EVENT } from './consts';
import { getCurrentPath } from './utils';

function DefaultComponent404() {
  return <h3>404</h3>;
}

const Router = ({
  children,
  routes = [],
  defaulComponent: DefaultComponent = () => <DefaultComponent404 />,
}) => {
  const [currentPath, setCurrentPath] = useState(getCurrentPath());

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(getCurrentPath());
    };

    window.addEventListener(NAVIGATE_EVENT, onLocationChange);
    window.addEventListener(POP_NAVIGATE_EVENT, onLocationChange);

    return () => {
      window.removeEventListener(NAVIGATE_EVENT, onLocationChange);
      window.addEventListener(POP_NAVIGATE_EVENT, onLocationChange);
    };
  }, []);

  let routeParams = {};

  // Add router from children <Route /> components
  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type;
    const isRoute = name === 'Route';

    if (!isRoute) {
      return null;
    }
    return props;
  });

  const routeToUse = routes.concat(routesFromChildren).filter(Boolean);

  const PageToRender = routeToUse.find((route) => {
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
