export function isObject(o) {
  return Object.prototype.toString.apply(o) === "[object Object]";
}

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

export function isCustomTabBar() {
  try {
    return __wxConfig.tabBar.custom;
  } catch (error) {
    return false;
  }
}

export function showTabBar() {
  if (!isCustomTabBar()) {
    wx.showTabBar();
  }
}

export function hideTabBar() {
  if (!isCustomTabBar()) {
    wx.hideTabBar();
  }
}
