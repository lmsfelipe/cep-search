import React from 'react';

import loadingGif from '../../assets/images/loader.gif';
import './loading.css';

const Loading = () => (
  <div className="loading-wrapper">
    <img
      className="loading-image"
      src={loadingGif}
      alt="Loader"
    />
  </div>
);

export default Loading;