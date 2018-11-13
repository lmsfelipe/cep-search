import React from 'react';
import PropTypes from 'prop-types';

import {
  GoogleMaps,
  Panel,
} from '../index';
import { MAPS_KEY } from '../../services';

const MapContent = ({ mapsResp, cepResponse, closeMapContent }) => {
  return (
    <Panel>
      <button className="close-button" onClick={closeMapContent}>X</button>
      <div className="address-infos">
        <h2>{cepResponse.logradouro}</h2>
        <p>{cepResponse.bairro}</p>
        <p>{cepResponse.localidade} - {cepResponse.uf}</p>
        <p>{cepResponse.cep}</p>
      </div>
      <GoogleMaps
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${MAPS_KEY}&callback=initMap"`}
        loadingElement={<div style={{ height: '400px' }} />}
        containerElement={<div style={{ height: '400px' }} />}
        mapElement={<div style={{ height: '400px' }} />}
        latitude={mapsResp.results[0].geometry.location.lat}
        longitude={mapsResp.results[0].geometry.location.lng}
        markerName="Av Nova"
      />
    </Panel>
  );
}

MapContent.propTypes = {
  mapsResp: PropTypes.object,
  cepResponse: PropTypes.object,
  closeMapContent: PropTypes.func.isRequired,
};

MapContent.defaultProps = {
  mapsResp: {},
  cepResponse: {},
};

export default MapContent;
