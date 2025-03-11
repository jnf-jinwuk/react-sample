import clientAxiosInstance from './clientApi';
import serverAxiosInstance from './serverApi';

export function getAxiosInstance() {
  if (isServerEnvironment()) {
    return serverAxiosInstance;
  } else {
    return clientAxiosInstance;
  }
}

function isServerEnvironment() {
  return typeof window === 'undefined';
}

export async function getItemList(amount: number, offset: number) {
  return await getAxiosInstance().get(
    `/pokemon?limit=${amount}&offset=${offset}`,
  );
}
