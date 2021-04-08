"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utils = exports.EVENT_TYPE = exports.eventBus = exports.networkProxy = exports.isStarted = exports.start = exports.setEnableWXDebug = exports.getWXDebugStatus = undefined;

var _wxDebug = require("./core/wxDebug");

Object.defineProperty(exports, "getWXDebugStatus", {
  enumerable: true,
  get: function () {
    return _wxDebug.getWXDebugStatus;
  }
});
Object.defineProperty(exports, "setEnableWXDebug", {
  enumerable: true,
  get: function () {
    return _wxDebug.setEnableWXDebug;
  }
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
Object.defineProperty(exports, "networkProxy", {
  enumerable: true,
  get: function () {
    return _init.networkProxy;
  }
});

var _event = require("./core/event");

var _event2 = _interopRequireDefault(_event);

var _utils = require("./core/utils");

var utils = _interopRequireWildcard(_utils);

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const eventBus = exports.eventBus = new _event2.default();
exports.EVENT_TYPE = _event.EVENT_TYPE;
exports.utils = utils;