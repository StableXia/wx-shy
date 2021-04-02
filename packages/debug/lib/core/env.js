"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setEnv = setEnv;
exports.getEnv = getEnv;
exports.setCurrentEnv = setCurrentEnv;
exports.getCurrentEnv = getCurrentEnv;

var _storage = require("./storage");

const ENV_STORAGE_KEY = "__debug_env_storage_key__";
const CURRENT_ENV_STORAGE_KEY = "__debug_current_env_storage_key__";

function setEnv(data) {
  (0, _storage.setStorage)(ENV_STORAGE_KEY, data);
}

function getEnv() {
  return (0, _storage.getStorage)(ENV_STORAGE_KEY);
}

function setCurrentEnv(data) {
  (0, _storage.setStorage)(CURRENT_ENV_STORAGE_KEY, data);
}

function getCurrentEnv() {
  return (0, _storage.getStorage)(CURRENT_ENV_STORAGE_KEY);
}