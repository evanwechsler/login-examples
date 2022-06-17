import React from "react";
import PropTypes from "prop-types";
import styles from "./textInput.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const TextInput = ({
  placeholder,
  label,
  disabled,
  onChange,
  showLabel,
  value,
  type,
  ...props
}) => {
  return (
    <div className="input">
      {showLabel && <label className={cx("input__label")}>{label}</label>}
      <input
        name={label.toLowerCase()}
        className={cx("input__field")}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        aria-label={label}
        type={type}
        {...props}
      />
    </div>
  );
};

TextInput.defaultProps = {
  showLabel: true,
  disabled: false,
};

TextInput.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  showLabel: PropTypes.bool,
  value: PropTypes.string,
  type: PropTypes.string,
};

export default TextInput;
