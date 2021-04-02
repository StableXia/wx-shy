"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "EVENT_TYPE", {
  enumerable: true,
  get: function () {
    return _event.EVENT_TYPE;
  }
});
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
exports.utils = exports.env = exports.eventBus = void 0;

var _event = _interopRequireWildcard(require("./core/event"));

var env = _interopRequireWildcard(require("./core/env"));

exports.env = env;

var utils = _interopRequireWildcard(require("./core/utils"));

exports.utils = utils;

var _init = require("./core/init");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const eventBus = new _event.default();
exports.eventBus = eventBus;