import React from 'react';
import PropTypes from 'prop-types';

import './input.css';

const Input = ({
  placeholder,
  type,
  value,
  onChange,
  onKeyPress,
  isAutoFocus
}) => (
  <input
    className="input-search"
    placeholder={placeholder}
    type={type}
    value={value}
    onChange={onChange}
    onKeyPress={onKeyPress}
    autoFocus={isAutoFocus}
  />
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
  isAutoFocus: PropTypes.bool,
};

Input.defaultProps = {
  isAutoFocus: false,
};

export default Input;
