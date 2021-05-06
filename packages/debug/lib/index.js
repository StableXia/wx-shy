"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _init = require("./core/init");

Object.defineProperty(exports, "start", {
  enumerable: true,
  get: function () {
    return _init.start;
  }
});
Object.defineProperty(exports, "isStarted", {
  enumerable: true,
  get: function () {
    return _init.isStarted;
  }
});

var _apiHost = require("./core/apiHost");

Object.keys(_apiHost).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _apiHost[key];
    }
  });
});