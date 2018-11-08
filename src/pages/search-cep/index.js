import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import GoogleMaps from './google-maps';

class SearchCep extends PureComponent {
  state = {
    addressResp: null
  }

  getCep = async () => {
    try {
      const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=02085-000&key=AIzaSyCUSvFPCt5OzWY6noWyEFPGgRDALZf4s2A');
      console.log(response);
      this.setState({ addressResp: response.data });
    } catch (error) {
      console.log(error.response);
    }
  }

  render() {
    const { addressResp } = this.state;

    return (
      <Fragment>
        <div>
          <input type="text"/>    
          <button onClick={this.getCep}>Buscar</button>
        </div>
        <div style={{ width: '400px', heigth: '400px' }}>
          {addressResp && addressResp.status === 'OK' && <GoogleMaps
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCUSvFPCt5OzWY6noWyEFPGgRDALZf4s2A&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: '400px' }} />}
            containerElement={<div style={{ height: '400px' }} />}
            mapElement={<div style={{ height: '400px' }} />}
            latitude={addressResp.results[0].geometry.location.lat}
            longitude={addressResp.results[0].geometry.location.lng}
            markerName="Av Nova"
          />}
        </div>
      </Fragment>
    );
  }
}

SearchCep.propTypes = {
  //
};


export default SearchCep;
