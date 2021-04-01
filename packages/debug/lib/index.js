"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  networkProxy: true,
  eventBus: true,
  start: true,
  isStarted: true
};
exports.start = start;
exports.isStarted = isStarted;
exports.eventBus = exports.networkProxy = void 0;

var _network = _interopRequireDefault(require("./core/network"));

var _event = _interopRequireDefault(require("./core/event"));

var _env = require("./core/env");

Object.keys(_env).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _env[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _env[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const networkProxy = new _network.default();
exports.networkProxy = networkProxy;
const eventBus = new _event.default();
exports.eventBus = eventBus;
let started = false;

function start() {
  if (started) {
    return;
  }

  started = true;
  networkProxy.createProxy();
}

function isStarted() {
  return started;
}