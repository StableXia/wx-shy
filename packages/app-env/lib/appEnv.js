"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEnv = getEnv;
exports.APP_ENV = void 0;
const ENV_DEVELOP = "develop";
const ENV_TRIAL = "trial";
const ENV_RELEASE = "release";
const APP_ENV = {
  develop: ENV_DEVELOP,
  trial: ENV_TRIAL,
  release: ENV_RELEASE
};
exports.APP_ENV = APP_ENV;

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


function getEnv(defaultEnv = ENV_RELEASE) {
  return getEnvByWxConfig() || getEnvByAccountInfo() || defaultEnv;
}