import React, { PureComponent, Fragment } from 'react';

import GoogleMaps from '../../components/google-maps';
import Loading from '../../components/loading';
import Title from '../../components/title';
import CepServices, { MAPS_KEY } from '../../services';
import './search-cep.css';

class SearchCep extends PureComponent {
  state = {
    mapsResp: null,
    cepResponse: null,
    loading: false,
    cepValue: '',
    error: false,
    isClosed: false
  };

  setError = () => {
    this.setState({
      error: true,
      loading: false
    });
  }

  getCep = async () => {
    const { cepValue } = this.state;
    this.setState({
      loading: true,
      cepResponse: null,
      mapsResp: null,
      isClosed: false
    });

    try {
      const cepResponse = await CepServices.GetAddressFromCep(cepValue);
      const response = await CepServices.GetInfosFromAddress(cepResponse.data.logradouro);

      if (cepResponse.data.erro) {
        return this.setError();
      }

      return this.setState({
        mapsResp: response.data,
        cepResponse: cepResponse.data,
        error: false,
        loading: false 
      });
    } catch (error) {
      return this.setError();
    }
  }

  handleInputChange = (e) => this.setState({ cepValue: e.target.value });

  handleKeyPress = (target) => {
    if (target.key === 'Enter') {
      this.getCep();
    }
  }

  closePanel = () => this.setState({ isClosed: true, error: false });

  renderMap = () => {
    const { mapsResp, cepResponse, error, isClosed } = this.state;
    
    if (mapsResp && mapsResp.status === 'OK' && !isClosed) {
      return (
        <div className="panel">
          <button className="close-button" onClick={this.closePanel}>X</button>
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
        </div>
      );
    } else if (error){
      return (
        <div className="panel">
          <h2>Ops, CEP Inexistente. =/</h2>
        </div>
      );
    }

    return null;
  }

  render() {
    const { cepValue, loading } = this.state;

    return (
      <Fragment>
        <Title>Consulta de Endereço</Title>
        <div className="panel">
          <div>
            <input
              className="input-search"
              placeholder="Digite um CEP"
              type="text"
              value={cepValue}
              onChange={this.handleInputChange}
              onKeyPress={this.handleKeyPress}
              autoFocus
            />
            <button className="primary-button" onClick={this.getCep}>Buscar</button>
          </div>
        </div>
        {loading ? <Loading /> : this.renderMap()}
      </Fragment>
    );
  }
}

export default SearchCep;
