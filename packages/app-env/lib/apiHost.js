"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setApiHost = setApiHost;
exports.getApiHost = getApiHost;
exports.setCurrrentApi = setCurrrentApi;
exports.getCurrrentApi = getCurrrentApi;

var _storage = require("./storage");

const API_HOST_STORAGE_KEY = "__api_host_storage_key__";
const CURRENT_API_HOST_STORAGE_KEY = "__current_api_host_storage_key__";

function setApiHost(data) {
  (0, _storage.setStorage)(API_HOST_STORAGE_KEY, data);
}

function getApiHost() {
  return (0, _storage.getStorage)(API_HOST_STORAGE_KEY);
}

function setCurrrentApi(data) {
  (0, _storage.setStorage)(CURRENT_API_HOST_STORAGE_KEY, data);
}

function getCurrrentApi() {
  return (0, _storage.getStorage)(CURRENT_API_HOST_STORAGE_KEY);
}