import type { AxiosInstance } from 'axios';

export async function _getItemList(
  axiosInstance: AxiosInstance,
  amount: number,
  offset: number,
) {
  return await axiosInstance.get(`/pokemon?limit=${amount}&offset=${offset}`);
}
