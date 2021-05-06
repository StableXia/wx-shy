"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setApiHost = setApiHost;
exports.getApiHost = getApiHost;
exports.setDefaultApiHost = setDefaultApiHost;
exports.getDefaultApiHost = getDefaultApiHost;
exports.setCurrrentApiHost = setCurrrentApiHost;
exports.getCurrrentApiHost = getCurrrentApiHost;

var _storage = require("./storage");

const API_HOST_STORAGE_KEY = "__api_host_storage_key__";
const CURRENT_API_HOST_STORAGE_KEY = "__current_api_host_storage_key__";
const DEFAULT_API_HOST_STORAGE_KEY = "__default_api_host_storage_key__";

function setApiHost(data) {
  (0, _storage.setStorage)(API_HOST_STORAGE_KEY, data);
}

function getApiHost() {
  return (0, _storage.getStorage)(API_HOST_STORAGE_KEY);
}

function setDefaultApiHost(data) {
  (0, _storage.setStorage)(DEFAULT_API_HOST_STORAGE_KEY, data);
}

function getDefaultApiHost(data) {
  (0, _storage.getStorage)(DEFAULT_API_HOST_STORAGE_KEY, data);
}

function setCurrrentApiHost(data) {
  (0, _storage.setStorage)(CURRENT_API_HOST_STORAGE_KEY, data);
}

function getCurrrentApiHost() {
  return (0, _storage.getStorage)(CURRENT_API_HOST_STORAGE_KEY);
}