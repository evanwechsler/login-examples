import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../../styles/globals.scss";
import Button from "../../../components/one/Button/Button";
import TextInput from "../../../components/one/Input/TextInput";
import classNames from "classnames/bind";
import styles from "./login.scss";
import { useNavigate, Link } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";

const cx = classNames.bind(styles);

const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`;

const LoginOne = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleRedirect = () => {
    navigate("/signup1", { replace: true });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <form className={cx("form")} onSubmit={handleSubmit}>
      <TextInput label="Username" onChange={handleChange} value={username} />
      <TextInput
        label="Password"
        onChange={handleChange}
        value={password}
        type="password"
      />
      <Button text="Login" type="submit" />
      <Link className={cx("form__forgot-password")} to="/forgot-password1">
        Forgot password?
      </Link>
      <hr className={cx("form__divider")} />
      <Button text="Sign Up" variant="outline" onClick={handleRedirect} />
    </form>
  );
};

LoginOne.propTypes = {};

export default LoginOne;
