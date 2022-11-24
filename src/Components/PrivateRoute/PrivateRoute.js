import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/ContextProvider";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);

  const location = useLocation();

  if (loader) {
    <>
      <progress className="progress w-56"></progress>
    </>;
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
