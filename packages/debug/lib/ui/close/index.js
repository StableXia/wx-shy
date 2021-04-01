"use strict";

var _debug = _interopRequireDefault(require("@wx-debug/debug"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  event,
  EVENT_TYPE
} = _debug.default;
Component({
  methods: {
    handleClose() {
      event.emit(EVENT_TYPE.close_debug_page);
    }

  }
});