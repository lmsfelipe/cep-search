import React, { PureComponent, Fragment } from 'react';

import GoogleMaps from '../../components/google-maps';
import CepServices, { MAPS_KEY } from '../../services';
import './search-cep.css';

class SearchCep extends PureComponent {
  state = {
    mapsResp: null,
    loading: false,
    cepValue: '',
    error: false
  };

  getCep = async () => {
    const { cepValue } = this.state;
    this.setState({ loading: true });

    try {
      const cepResponse = await CepServices.GetAddressFromCep(cepValue);
      const response = await CepServices.GetInfosFromAddress(cepResponse.data.logradouro);

      this.setState({
        mapsResp: response.data,
        cepResponse: cepResponse.data,
        loading: false 
      });
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.response.data,
        loading: false 
      });
    }
  }

  handleInputChange = (e) => this.setState({ cepValue: e.target.value })

  renderMap = () => {
    const { mapsResp, cepResponse, error } = this.state;
    
    if (mapsResp && mapsResp.status === 'OK') {
      return (
        <Fragment>
          <div>
            <p>{cepResponse.bairro}</p>
            <p>{cepResponse.logradouro}</p>
            <p>{cepResponse.cep}</p>
          </div>
          <GoogleMaps
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${MAPS_KEY}&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: '400px' }} />}
            containerElement={<div style={{ height: '400px' }} />}
            mapElement={<div style={{ height: '400px' }} />}
            latitude={mapsResp.results[0].geometry.location.lat}
            longitude={mapsResp.results[0].geometry.location.lng}
            markerName="Av Nova"
          />
        </Fragment>
      );
    } else if (error) {
      return <h2>Opss, houve um problema ao carregar o mapa. =/</h2>
    }
  }

  render() {
    const { cepValue, loading } = this.state;

    return (
      <Fragment>
        {/* <h1>Consulta de CEP</h1> */}
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

export default SearchCep;
