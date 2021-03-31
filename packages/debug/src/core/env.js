import { getStorage, setStorage } from "./storage";

export const ENV_STORAGE_KEY = "__debug_env_storage_key__";
export const CURRENT_ENV_STORAGE_KEY = "__debug_current_env_storage_key__";

export function setEnv(data) {
  setStorage(ENV_STORAGE_KEY, data);
}

export function getEnv() {
  return getStorage(ENV_STORAGE_KEY);
}

export function setCurrentEnv(data) {
  setStorage(CURRENT_ENV_STORAGE_KEY, data);
}

export function getCurrentEnv() {
  return getStorage(CURRENT_ENV_STORAGE_KEY);
}
