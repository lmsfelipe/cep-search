import axios from 'axios';

export const MAPS_KEY = process.env.REACT_APP_MAPS_KEY;
export const GEOCODE_KEY = process.env.REACT_APP_GEOCODE_KEY;

class CepServices {
  static GetAddressFromCep(data) {
    return axios.get(`https://viacep.com.br/ws/${data}/json`);
  }

  static GetInfosFromAddress(data) {
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=‎${data}&key=${GEOCODE_KEY}`);
  }
}

export default CepServices;
