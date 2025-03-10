import axios from 'axios'
import { _getItemList } from './commonApi'

const pokemonApiUrl = 'https://pokeapi.co/api/v2'

const clientApi = axios.create({ baseURL: pokemonApiUrl })

export async function getItemList(amount: number, offset: number) {
  return _getItemList(clientApi, amount, offset)
}

export default clientApi
