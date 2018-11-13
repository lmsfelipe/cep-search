import axios from 'axios';

export const MAPS_KEY = process.env.REACT_APP_MAPS_KEY;
export const GEOCODE_KEY = process.env.REACT_APP_GEOCODE_KEY;

class CepServices {
  /**
   * Get Infos from Address
   * @async
   * @static
   * @param {data} text
   */
  static GetInfosFromAddress(data) {
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=‎${data}&key=${GEOCODE_KEY}`);
  }
}

export default CepServices;
