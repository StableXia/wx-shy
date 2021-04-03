export function getWXDebugStatus() {
  try {
    return __wxConfig.debug;
  } catch (error) {
    return false;
  }
}

export function setEnableWXDebug(options) {
  wx.setEnableDebug(options);
}
