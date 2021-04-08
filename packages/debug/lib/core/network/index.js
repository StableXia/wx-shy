"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _requestQueue = require("./requestQueue");

var _requestQueue2 = _interopRequireDefault(_requestQueue);

var _constants = require("./constants");

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const requestQueue = new _requestQueue2.default();

function proxyHandler(networkFun, payload) {
  const requestOpts = (0, _utils.isObject)(payload) ? payload : {};
  const proxyOpts = Object.assign({}, requestOpts);

  proxyOpts.success = res => {
    requestQueue.add({
      request: requestOpts,
      response: res
    });

    if (typeof requestOpts.success === "function") {
      requestOpts.success(res);
    }
  };

  proxyOpts.fail = err => {
    requestQueue.add({
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
    this._networkCallee = _constants.NETWORK_CALLEE;
  }

  createProxy() {
    this._networkCallee.forEach(method => {
      const networkFun = wx[method];
      Object.defineProperty(wx, method, {
        get: () => payload => proxyHandler(networkFun, payload)
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