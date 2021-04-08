"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEnv = getEnv;
const APP_ENV_DEVELOP = exports.APP_ENV_DEVELOP = "develop";
const APP_ENV_TRIAL = exports.APP_ENV_TRIAL = "trial";
const APP_ENV_RELEASE = exports.APP_ENV_RELEASE = "release";
const APP_ENV = exports.APP_ENV = {
  develop: APP_ENV_DEVELOP,
  trial: APP_ENV_TRIAL,
  release: APP_ENV_RELEASE
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


function getEnv(defaultEnv = APP_ENV_RELEASE) {
  return getEnvByWxConfig() || getEnvByAccountInfo() || defaultEnv;
}