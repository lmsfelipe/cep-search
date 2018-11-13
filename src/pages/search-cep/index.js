import React, { PureComponent, Fragment } from 'react';
import jsonp from 'jsonp';

import {
  Loading,
  Title,
  Panel,
  Input,
  Button,
  MapContent
} from '../../components';
import CepServices from '../../services';
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

  getCep = () => {
    const { cepValue } = this.state;
    this.setState({
      loading: true,
      cepResponse: null,
      mapsResp: null,
      isClosed: false
    });

    jsonp(`https://viacep.com.br/ws/${cepValue}/json?callback=myfn`, null, async (error, data) => {
      if (error) {
        return this.setError();
      } else {
        if (data.erro) {
          return this.setError();
        }
        const mapsResp = await CepServices.GetInfosFromAddress(data.logradouro);
        return this.setState({
          mapsResp: mapsResp.data,
          cepResponse: data,
          error: false,
          loading: false 
        });
      }
    });
  }

  handleInputChange = (e) => {
    const { value } = e.target;
    const numberValue = value.replace(/[^\d]/,'');

    if (!isNaN(numberValue)) {
      return this.setState({ cepValue: numberValue });
    }

    return null;
  }

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
        <MapContent
          mapsResp={mapsResp}
          cepResponse={cepResponse}
          closeMapContent={this.closePanel}
        />
      );
    } else if (error){
      return (
        <Panel>
          <h2>Ops, CEP Inexistente. =/</h2>
        </Panel>
      );
    }

    return null;
  }

  render() {
    const { cepValue, loading } = this.state;

    return (
      <Fragment>
        <Title>Consulta de Endereço</Title>
        <Panel>
          <div className="search-wrapper">
            <Input
              className="input-search"
              placeholder="Digite um CEP"
              type="text"
              value={cepValue}
              onChange={this.handleInputChange}
              onKeyPress={this.handleKeyPress}
              isAutoFocus
            />
            <Button onClick={this.getCep}>Buscar</Button>
          </div>
        </Panel>
        {loading ? <Loading /> : this.renderMap()}
      </Fragment>
    );
  }
}

export default SearchCep;
