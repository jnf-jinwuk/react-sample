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

export function getItemList(amount: number, offset: number) {
  return getAxiosInstance().get(`/pokemon?limit=${amount}&offset=${offset}`);
}

export function getItemListFail(after: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('request failed');
    }, after);
  });
}

export function getAbilityList(amount: number, offset: number) {
  return getAxiosInstance().get(`/ability?limit=${amount}&offset=${offset}`);
}
