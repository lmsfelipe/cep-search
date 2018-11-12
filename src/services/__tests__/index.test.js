import axios from 'axios';
import CepServices from '../index';

jest.mock('axios');

test('should fetch address from cep number', () => {
  const resp = {
    data: {
    cep: "02085-000",
    logradouro: "Avenida Luiz Dumont Villares",
    complemento: "até 537/0538",
    bairro: "Jardim São Paulo(Zona Norte)",
    localidade: "São Paulo",
    uf: "SP",
    unidade: "",
    ibge: "3550308",
    gia: "1004"
  }};

  axios.get.mockResolvedValue(resp);

  return CepServices.GetAddressFromCep('02085000').then(address => expect(address).toEqual(resp));
});