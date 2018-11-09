import React, { PureComponent, Fragment } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import GoogleMaps from './google-maps';
import './search-cep.css';

class SearchCep extends PureComponent {
  state = {
    mapsResp: null,
    loading: false,
    cepValue: ''
  }

  getCep = async () => {
    const { cepValue } = this.state;
    this.setState({ loading: true });

    try {
      const cepResponse = await axios.get(
        `https://viacep.com.br/ws/${cepValue}/json`
      );

      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=‎${cepResponse.data.logradouro}&key=AIzaSyACONYl7VNCxA4xLHRFnBRZQCwZmHT_1MQ`
      );

      this.setState({
        mapsResp: response.data,
        cepResponse: cepResponse.data,
        loading: false 
      });
    } catch (error) {
      console.log(error.response);
    }
  }

  handleInputChange = (e) => this.setState({ cepValue: e.target.value })

  renderMap = () => {
    const { mapsResp, cepResponse } = this.state;

    if (mapsResp && mapsResp.status === 'OK') {
      return (
        <Fragment>
          <div>
            <p>{cepResponse.bairro}</p>
            <p>{cepResponse.logradouro}</p>
            <p>{cepResponse.cep}</p>
          </div>
          <GoogleMaps
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyACONYl7VNCxA4xLHRFnBRZQCwZmHT_1MQ&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: '400px' }} />}
            containerElement={<div style={{ height: '400px' }} />}
            mapElement={<div style={{ height: '400px' }} />}
            latitude={mapsResp.results[0].geometry.location.lat}
            longitude={mapsResp.results[0].geometry.location.lng}
            markerName="Av Nova"
          />
        </Fragment>
      )
    }
  }

  render() {
    const { cepValue, loading } = this.state;

    if (loading) {
      return 'Loading...';
    }

    return (
      <Fragment>
        <h1>Consulta de CEP</h1>
        <div className="search-cep-container">
          <div>
            <input type="text" value={cepValue} onChange={this.handleInputChange} />
            <button onClick={this.getCep}>Buscar</button>
          </div>
          <div style={{ width: '400px', heigth: '400px' }}>
            {loading ? <h1>Loading Map</h1> : this.renderMap()}
          </div>
        </div>
      </Fragment>
    );
  }
}

SearchCep.propTypes = {
  //
};


export default SearchCep;
