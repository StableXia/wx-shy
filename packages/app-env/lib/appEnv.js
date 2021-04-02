"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEnv = getEnv;
exports.APP_ENV = exports.APP_ENV_RELEASE = exports.APP_ENV_TRIAL = exports.APP_ENV_DEVELOP = void 0;
const APP_ENV_DEVELOP = "develop";
exports.APP_ENV_DEVELOP = APP_ENV_DEVELOP;
const APP_ENV_TRIAL = "trial";
exports.APP_ENV_TRIAL = APP_ENV_TRIAL;
const APP_ENV_RELEASE = "release";
exports.APP_ENV_RELEASE = APP_ENV_RELEASE;
const APP_ENV = {
  develop: APP_ENV_DEVELOP,
  trial: APP_ENV_TRIAL,
  release: APP_ENV_RELEASE
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


function getEnv(defaultEnv = APP_ENV_RELEASE) {
  return getEnvByWxConfig() || getEnvByAccountInfo() || defaultEnv;
}