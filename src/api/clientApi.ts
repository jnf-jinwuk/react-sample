import axios from 'axios';

const pokemonApiUrl = 'https://pokeapi.co/api/v2';

const clientAxiosInstance = axios.create({ baseURL: pokemonApiUrl });

clientAxiosInstance.interceptors.request.use(async request => {
  useClientFacility();
  return request;
});

async function useClientFacility() {
  return window.location.href;
}

export default clientAxiosInstance;
