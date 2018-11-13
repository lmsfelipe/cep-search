import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

const Button = ({ children, ...rest }) => <div className="button" {...rest}>{children}</div>

Button.propTypes = {
  children: PropTypes.node.isRequired
};

export default Button;
