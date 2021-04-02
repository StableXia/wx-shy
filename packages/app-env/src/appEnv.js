const ENV_DEVELOP = "develop";
const ENV_TRIAL = "trial";
const ENV_RELEASE = "release";

export const APP_ENV = {
  develop: ENV_DEVELOP,
  trial: ENV_TRIAL,
  release: ENV_RELEASE,
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
export function getEnv(defaultEnv = ENV_RELEASE) {
  return getEnvByWxConfig() || getEnvByAccountInfo() || defaultEnv;
}
