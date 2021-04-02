"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = start;
exports.isStarted = isStarted;

var _network = _interopRequireDefault(require("./network"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const networkProxy = new _network.default();
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