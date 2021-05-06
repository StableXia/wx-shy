"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStorage = getStorage;
exports.setStorage = setStorage;
exports.removeStorage = removeStorage;
exports.clearStorage = clearStorage;

function getStorage(key) {
  return wx.getStorageSync(key);
}

function setStorage(key, data) {
  wx.setStorageSync(key, data);
}

function removeStorage(key) {
  wx.removeStorageSync(key);
}

function clearStorage() {
  wx.clearStorageSync();
}