import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();
  if (loader) {
    <>
      <h1 className="text-2xl text-center font-bold ">Loading......</h1>
    </>;
  }
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default PrivateRoute;
