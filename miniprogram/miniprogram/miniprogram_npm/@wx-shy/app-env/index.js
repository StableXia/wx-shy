module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1617378359642, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _appEnv = require("./appEnv");

Object.keys(_appEnv).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _appEnv[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _appEnv[key];
    }
  });
});

var _apiHost = require("./apiHost");

Object.keys(_apiHost).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _apiHost[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _apiHost[key];
    }
  });
});
}, function(modId) {var map = {"./appEnv":1617378359643,"./apiHost":1617378359644}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1617378359643, function(require, module, exports) {


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
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1617378359644, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setApiHost = setApiHost;
exports.getApiHost = getApiHost;
exports.setCurrrentApiHost = setCurrrentApiHost;
exports.getCurrrentApiHost = getCurrrentApiHost;

var _storage = require("./storage");

const API_HOST_STORAGE_KEY = "__api_host_storage_key__";
const CURRENT_API_HOST_STORAGE_KEY = "__current_api_host_storage_key__";

function setApiHost(data) {
  (0, _storage.setStorage)(API_HOST_STORAGE_KEY, data);
}

function getApiHost() {
  return (0, _storage.getStorage)(API_HOST_STORAGE_KEY);
}

function setCurrrentApiHost(data, reset = true) {
  if (reset) {
    (0, _storage.setStorage)(CURRENT_API_HOST_STORAGE_KEY, data);
    return;
  }

  if (getCurrrentApiHost()) {
    return;
  }

  (0, _storage.setStorage)(CURRENT_API_HOST_STORAGE_KEY, data);
}

function getCurrrentApiHost() {
  return (0, _storage.getStorage)(CURRENT_API_HOST_STORAGE_KEY);
}
}, function(modId) { var map = {"./storage":1617378359645}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1617378359645, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStorage = getStorage;
exports.setStorage = setStorage;
exports.removeStorage = removeStorage;
exports.clearStorage = clearStorage;

function getStorage(key) {
  return wx.getStorageSync(key);
}

function setStorage(key, data) {
  wx.setStorageSync(key, data);
}

function removeStorage(key) {
  wx.removeStorageSync(key);
}

function clearStorage() {
  wx.clearStorageSync();
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1617378359642);
})()
//# sourceMappingURL=index.js.map