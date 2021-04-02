import { getStorage, setStorage } from "./storage";

const API_HOST_STORAGE_KEY = "__api_host_storage_key__";
const CURRENT_API_HOST_STORAGE_KEY = "__current_api_host_storage_key__";

export function setApiHost(data) {
  setStorage(API_HOST_STORAGE_KEY, data);
}

export function getApiHost() {
  return getStorage(API_HOST_STORAGE_KEY);
}

export function setCurrrentApi(data) {
  setStorage(CURRENT_API_HOST_STORAGE_KEY, data);
}

export function getCurrrentApi() {
  return getStorage(CURRENT_API_HOST_STORAGE_KEY);
}
