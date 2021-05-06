export const APP_ENV = {
  develop: "develop",
  trial: "trial",
  release: "release",
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
export function getEnv() {
  return getEnvByWxConfig() || getEnvByAccountInfo();
}
