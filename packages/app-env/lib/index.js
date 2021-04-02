"use strict";

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