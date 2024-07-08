import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { useAuth } from "./admin-auth";

const ProtectedRoute: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          // @ts-ignore
          <Component {...props} />
        ) : (
          <Redirect to="/adminlogin" />
        )
      }
    />
  );
};

export default ProtectedRoute;
