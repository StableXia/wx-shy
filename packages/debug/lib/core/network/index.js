"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _requestQueue = _interopRequireDefault(require("./requestQueue"));

var _constants = require("./constants");

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const requestQueue = new _requestQueue.default();

function proxyHandler(networkCalleeType, networkFun, payload) {
  const requestOpts = (0, _utils.isObject)(payload) ? payload : {};
  const proxyOpts = Object.assign({}, requestOpts);

  proxyOpts.success = res => {
    requestQueue.add({
      networkCalleeType,
      request: requestOpts,
      response: res
    });

    if (typeof requestOpts.success === "function") {
      requestOpts.success(res);
    }
  };

  proxyOpts.fail = err => {
    requestQueue.add({
      networkCalleeType,
      request: requestOpts,
      response: err
    });

    if (typeof requestOpts.fail === "function") {
      requestOpts.fail(err);
    }
  };

  return networkFun(proxyOpts);
}

class NetworkProxy {
  constructor() {
    this.networkCallee = _constants.NETWORK_CALLEE;
  }

  createProxy() {
    this.networkCallee.forEach(method => {
      const networkFun = wx[method];
      Object.defineProperty(wx, method, {
        get: () => payload => proxyHandler(method, networkFun, payload)
      });
    });
  }

  getLogs() {
    return requestQueue.getFormattedRequest();
  }

  clearLogs() {
    requestQueue.clear();
  }

}

exports.default = NetworkProxy;