"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isObject = isObject;
exports.getWXDebugStatus = getWXDebugStatus;
exports.setEnableWXDebug = setEnableWXDebug;
exports.isCustomTabBar = isCustomTabBar;
exports.showTabBar = showTabBar;
exports.hideTabBar = hideTabBar;

function isObject(o) {
  return Object.prototype.toString.apply(o) === "[object Object]";
}

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

function isCustomTabBar() {
  try {
    return __wxConfig.tabBar.custom;
  } catch (error) {
    return false;
  }
}

function showTabBar() {
  if (!isCustomTabBar()) {
    wx.showTabBar();
  }
}

function hideTabBar() {
  if (!isCustomTabBar()) {
    wx.hideTabBar();
  }
}