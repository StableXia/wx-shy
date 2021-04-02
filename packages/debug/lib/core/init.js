"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = start;
exports.isStarted = isStarted;
exports.networkProxy = void 0;

var _index = _interopRequireDefault(require("./network/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const networkProxy = new _index.default();
exports.networkProxy = networkProxy;
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