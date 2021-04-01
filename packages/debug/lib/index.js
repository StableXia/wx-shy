"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  networkProxy: true,
  eventBus: true,
  start: true,
  isStarted: true,
  EVENT_TYPE: true
};
exports.start = start;
exports.isStarted = isStarted;
Object.defineProperty(exports, "EVENT_TYPE", {
  enumerable: true,
  get: function () {
    return _event.EVENT_TYPE;
  }
});
exports.eventBus = exports.networkProxy = void 0;

var _index = _interopRequireDefault(require("./core/network/index"));

var _event = _interopRequireWildcard(require("./core/event"));

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

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const networkProxy = new _index.default();
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