import RequestQueue from "./requestQueue";
import { NETWORK_CALLEE } from "./constants";
import { isObject } from "../utils";

const requestQueue = new RequestQueue();

function proxyHandler(networkFun, payload) {
  const requestOpts = isObject(payload) ? payload : {};
  const proxyOpts = Object.assign({}, requestOpts);

  proxyOpts.success = (res) => {
    requestQueue.add({
      request: requestOpts,
      response: res,
    });

    if (typeof requestOpts.success === "function") {
      requestOpts.success(res);
    }
  };

  proxyOpts.fail = (err) => {
    requestQueue.add({
      request: requestOpts,
      response: err,
    });

    if (typeof requestOpts.fail === "function") {
      requestOpts.fail(err);
    }
  };

  return networkFun(proxyOpts);
}

class NetworkProxy {
  constructor() {
    this._networkCallee = NETWORK_CALLEE;
  }

  createProxy() {
    this._networkCallee.forEach((method) => {
      const networkFun = wx[method];

      Object.defineProperty(wx, method, {
        get: () => (payload) => proxyHandler(networkFun, payload),
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

export const networkProxy = new NetworkProxy();
