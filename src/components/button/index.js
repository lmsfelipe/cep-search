import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

const Button = ({ children }) => <div className="button">{children}</div>

Button.propTypes = {
  children: PropTypes.node.isRequired
};

export default Button;
