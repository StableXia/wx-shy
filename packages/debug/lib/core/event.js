"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.EVENT_TYPE = void 0;

var _utils = require("./utils");

const EVENT_TYPE = {
  close_debug_page: 1
};
exports.EVENT_TYPE = EVENT_TYPE;

class Event {
  constructor() {
    this._fns = {};
  }

  on(key, fn) {
    if (Array.isArray(key)) {
      key.forEach(item => {
        if (typeof item === "string") {
          this.on(item, fn);
        } else if ((0, _utils.isObject)(item)) {
          this.on(item.event, item.fn);
        }
      });
    } else {
      (this._fns[key] || (this._fns[key] = [])).push(fn);
    }
  }

  off(key, fn) {
    if (!key && !fn) {
      this._fns = Object.create(null);
      return this;
    }

    if (Array.isArray(key)) {
      key.forEach(item => {
        if (typeof item === "string") {
          this.off(item, fn);
        } else if ((0, _utils.isObject)(item)) {
          this.off(item.key, item.fn);
        }
      });
      return this;
    }

    if (!this._fns[key]) return this;

    if (!fn) {
      this._fns[key] = null;
    }

    if (fn) {
      let fns = this._fns[key];
      let i = fns.length;

      while (i--) {
        let tmp = fns[i];

        if (tmp === fn || tmp.fn === fn) {
          fns.splice(i, 1);
          break;
        }
      }
    }
  }

  emit(key, ...args) {
    const fns = this._fns[key];

    if (fns && fns.length) {
      return fns.map(fn => {
        return fn.apply(this, args);
      });
    }
  }

}

exports.default = Event;