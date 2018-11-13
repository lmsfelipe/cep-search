import React from 'react';
import PropTypes from 'prop-types';

import './title.css';

const Title = ({ children }) => <h1 className="title">{children}</h1>;

Title.propTypes = {
  children: PropTypes.string.isRequired
};

export default Title;
