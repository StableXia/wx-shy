"use strict";

var _debug = require("@wx-shy/debug");

Component({
  data: {
    envList: [],
    currentEnv: -1
  },
  lifetimes: {
    attached() {
      let envList = _debug.env.getEnv();

      envList = _debug.utils.isObject(envList) ? Object.keys(envList) : [];

      const currentEnv = _debug.env.getCurrentEnv();

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
      _debug.env.setCurrentEnv(this.data.envList[this.data.currentEnv]);

      _debug.eventBus.emit(_debug.EVENT_TYPE.close_debug_page);
    }

  }
});