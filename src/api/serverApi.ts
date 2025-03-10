import axios from 'axios'
import { cookies } from 'next/headers'
import { _getItemList } from './commonApi'

const pokemonApiUrl = 'https://pokeapi.co/api/v2'

const serverApi = axios.create({ adapter: 'fetch', baseURL: pokemonApiUrl })

const cookie = cookies()
//console.log('cookie = ', cookie)

export async function getItemList(amount: number, offset: number) {
  return _getItemList(serverApi, amount, offset)
}

export default serverApi
