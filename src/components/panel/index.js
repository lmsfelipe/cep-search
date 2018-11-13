import React from 'react';
import PropTypes from 'prop-types';

import './panel.css';

const Panel = ({ children }) => <div className="panel">{children}</div>

Panel.propTypes = {
  children: PropTypes.node.isRequired
};

export default Panel;
