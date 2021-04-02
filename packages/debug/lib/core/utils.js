"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isObject = isObject;

function isObject(o) {
  return Object.prototype.toString.apply(o) === "[object Object]";
}