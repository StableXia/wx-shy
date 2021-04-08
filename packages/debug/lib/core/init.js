"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.networkProxy = undefined;
exports.start = start;
exports.isStarted = isStarted;

var _index = require("./network/index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const networkProxy = exports.networkProxy = new _index2.default();
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