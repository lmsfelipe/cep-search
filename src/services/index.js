import axios from 'axios';

export const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_KEY;

class CepServices {
  static GetAddressFromCep(data) {
    return axios.get(`https://viacep.com.br/ws/${data}/json`);
  }

  static GetInfosFromAddress(data) {
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=‎${data}&key=${GOOGLE_KEY}`);
  }
}

export default CepServices;
