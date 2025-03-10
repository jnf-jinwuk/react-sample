import axios from 'axios';

const pokemonApiUrl = 'https://pokeapi.co/api/v2';

const serverAxiosInstance = axios.create({
  adapter: 'fetch',
  baseURL: pokemonApiUrl,
});

serverAxiosInstance.interceptors.response.use(
  async responseConfig => {
    console.log('interceptor');
    console.log(await loadCookie());
    return responseConfig;
  },
  error => {
    return 200;
  },
);

async function loadCookie() {
  const { cookies } = await import('next/headers');
  return cookies();
}

export default serverAxiosInstance;
