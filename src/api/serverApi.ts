import axios from 'axios';

const pokemonApiUrl = 'https://pokeapi.co/api/v2';

const serverAxiosInstance = axios.create({
  adapter: 'fetch',
  baseURL: pokemonApiUrl,
});

serverAxiosInstance.interceptors.request.use(async request => {
  const cookie = await loadCookie();
  cookie.get('something');

  return request;
});

async function loadCookie() {
  const { cookies } = await import('next/headers');
  return cookies();
}

export default serverAxiosInstance;
