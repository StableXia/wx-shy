"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWXDebugStatus = getWXDebugStatus;
exports.setEnableWXDebug = setEnableWXDebug;

function getWXDebugStatus() {
  try {
    return __wxConfig.debug;
  } catch (error) {
    return false;
  }
}

function setEnableWXDebug(options) {
  wx.setEnableDebug(options);
}