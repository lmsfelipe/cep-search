import axios from 'axios';
import CepServices from '../index';

jest.mock('axios');

test('should fetch address infos from cep number', () => {
  const resp = {
    data: { results: [{
      geometry: {
        location: {
          lat: -23.4904476,
          lng: -46.6103417
        }
      }
    }]}
  };

  axios.get.mockResolvedValue(resp);
  return CepServices.GetInfosFromAddress('Avenida Luiz Dumont Villares').then(address => expect(address).toEqual(resp));
});