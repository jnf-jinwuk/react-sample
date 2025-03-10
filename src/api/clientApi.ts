import axios from 'axios';

const pokemonApiUrl = 'https://pokeapi.co/api/v2';

const clientAxiosInstance = axios.create({ baseURL: pokemonApiUrl });

export default clientAxiosInstance;
