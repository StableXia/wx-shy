export function getStorage(key) {
  return wx.getStorageSync(key);
}

export function setStorage(key, data) {
  wx.setStorageSync(key, data);
}

export function removeStorage(key) {
  wx.removeStorageSync(key);
}

export function clearStorage() {
  wx.clearStorageSync();
}
