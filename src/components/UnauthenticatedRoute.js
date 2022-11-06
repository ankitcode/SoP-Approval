import React from "react";
import { Route, Navigate } from "react-router-dom";

export default ({ component: C, appProps, ...rest }) =>
  <Route
    {...rest}
    render={props =>
      !appProps.isAuthenticated
        ? <C {...props} {...appProps} />
        : <Navigate to="/" />}
  />;