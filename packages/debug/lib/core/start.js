"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = start;
exports.isStarted = isStarted;

var _index = require("./network/index");

let started = false;

function start() {
  if (started) {
    return;
  }

  started = true;

  _index.networkProxy.createProxy();
}

function isStarted() {
  return started;
}