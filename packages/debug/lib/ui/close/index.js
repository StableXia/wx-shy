"use strict";

var _debug = require("@wx-shy/debug");

Component({
  methods: {
    handleClose() {
      _debug.eventBus.emit(_debug.EVENT_TYPE.close_debug_page);
    }

  }
});