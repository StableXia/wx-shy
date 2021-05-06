"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEnv = getEnv;
const APP_ENV = exports.APP_ENV = {
  develop: "develop",
  trial: "trial",
  release: "release"
};

function getEnvByWxConfig() {
  try {
    return __wxConfig.envVersion;
  } catch (error) {
    return null;
  }
}

function getEnvByAccountInfo() {
  try {
    const accountInfo = wx.getAccountInfoSync();
    return accountInfo.miniProgram.envVersion;
  } catch (error) {
    return null;
  }
}
/**
 * 获取当前环境变量
 */


function getEnv() {
  return getEnvByWxConfig() || getEnvByAccountInfo();
}