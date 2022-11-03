import React, { ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthorizationType from '../modules/Authentication/authorization-types';

const PrivateRoute = ({
  component: Component,
  ...props
}: {
  component: ReactElement<any, any>
  props?: any
}) => {
  const location = useLocation();

  // change to normal function check !!!
  const { authorizationType, sessionLive } = {
    authorizationType: AuthorizationType.General,
    sessionLive: true,
  };

  // const newLocation = authenticationRedirect(isAuthenticated, location);
  const authorizedLocation = location.pathname === '/Profile';

  if (authorizationType !== AuthorizationType.Anonymous && !authorizedLocation) return Component;

  if (!sessionLive) return <>...</>;

  return <Navigate to="/login" />;
};

PrivateRoute.defaultProps = {
  props: undefined,
};

export default PrivateRoute;
