"use strict";

var _debug = require("@wx-shy/debug");

var _appEnv = require("@wx-shy/app-env");

Component({
  data: {
    envList: [],
    currentEnv: -1,
    wxDebug: (0, _debug.getWXDebugStatus)()
  },
  lifetimes: {
    attached() {
      let envList = (0, _appEnv.getApiHost)();
      envList = _debug.utils.isObject(envList) ? Object.keys(envList) : [];
      const currentEnv = (0, _appEnv.getCurrrentApiHost)();
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
      (0, _appEnv.setCurrrentApiHost)(this.data.envList[this.data.currentEnv]);

      _debug.eventBus.emit(_debug.EVENT_TYPE.close_debug_page);
    },

    handleWXDebug(e) {
      (0, _debug.setEnableWXDebug)({
        enableDebug: e.detail.value
      });
    }

  }
});