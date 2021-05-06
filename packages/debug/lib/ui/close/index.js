"use strict";

var _event = require("../../core/event");

Component({
  methods: {
    handleClose() {
      _event.eventBus.emit(_event.EVENT_TYPE.close_debug_page);
    }

  }
});