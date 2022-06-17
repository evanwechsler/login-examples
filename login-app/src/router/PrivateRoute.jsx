import React from "react";
import PropTypes from "prop-types";
import { useUser } from "../context/LoginContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const user = useUser();

  const Element = element;

  return user ? <Element /> : <Navigate to="/login1" />;
};

PrivateRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

export default PrivateRoute;
