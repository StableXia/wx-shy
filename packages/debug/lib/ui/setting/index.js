"use strict";

var _event = require("../../core/event");

var _utils = require("../../core/utils");

var _apiHost = require("../../core/apiHost");

Component({
  data: {
    envList: [],
    currentEnv: -1,
    wxDebug: (0, _utils.getWXDebugStatus)()
  },
  lifetimes: {
    attached() {
      let envList = (0, _apiHost.getApiHost)();
      envList = (0, _utils.isObject)(envList) ? Object.keys(envList) : [];
      const currentEnv = (0, _apiHost.getCurrrentApiHost)();
      this.setData({
        envList,
        currentEnv: envList.findIndex(env => env === currentEnv)
      });
    }

  },
  methods: {
    handleOk(e) {
      this.setData({
        currentEnv: e.detail.value
      });
    },

    handleSave() {
      (0, _apiHost.setCurrrentApiHost)(this.data.envList[this.data.currentEnv]);

      _event.eventBus.emit(_event.EVENT_TYPE.close_debug_page);
    },

    handleWXDebug(e) {
      (0, _utils.setEnableWXDebug)({
        enableDebug: e.detail.value
      });
    }

  }
});