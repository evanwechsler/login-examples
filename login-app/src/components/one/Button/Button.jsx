import React from "react";
import PropTypes from "prop-types";
import styles from "./button.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Button = ({ variant, text, disabled, onClick, type, ...props }) => {
  return (
    <button
      disabled={disabled}
      className={cx("button", variant)}
      {...props}
      type={type}
      onClick={() => onClick}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  variant: "primary",
  disabled: false,
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "outline", "secondary"]),
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
