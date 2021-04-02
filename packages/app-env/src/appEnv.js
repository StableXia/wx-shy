export const APP_ENV_DEVELOP = "develop";
export const APP_ENV_TRIAL = "trial";
export const APP_ENV_RELEASE = "release";

export const APP_ENV = {
  develop: APP_ENV_DEVELOP,
  trial: APP_ENV_TRIAL,
  release: APP_ENV_RELEASE,
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
export function getEnv(defaultEnv = APP_ENV_RELEASE) {
  return getEnvByWxConfig() || getEnvByAccountInfo() || defaultEnv;
}
