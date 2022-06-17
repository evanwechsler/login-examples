import React from "react";
import PropTypes from "prop-types";
import { useUser } from "../context/LoginContext";

const Home = (props) => {
  const user = useUser();
  return (
    <div>
      <h1>Welcome</h1>
      <h3>{user.name}</h3>
    </div>
  );
};

Home.propTypes = {};

export default Home;
