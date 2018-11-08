import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class GoogleMaps extends Component {
  render() {
    const {
      google,
      latitude,
      longitude,
      markerName
    } = this.props;
    return (
      <Map
        google={google}
        zoom={15}
        containerStyle={{
          position: 'relative',
          width: '100%',
          height: '400px'
        }}
        initialCenter={{
          lat: latitude,
          lng: longitude
        }}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={markerName}
        />
        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{markerName}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

GoogleMaps.propTypes = {
  google: PropTypes.object.isRequired,
  latitude: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
  markerName: PropTypes.string.isRequired,
};

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCUSvFPCt5OzWY6noWyEFPGgRDALZf4s2A')
})(GoogleMaps);
