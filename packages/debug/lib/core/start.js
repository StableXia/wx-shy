"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = start;
exports.isStarted = isStarted;
let started = false;

function start() {
  if (started) {
    return;
  }

  started = true;
}

function isStarted() {
  return started;
}