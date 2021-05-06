import { getWXDebugStatus, setEnableWXDebug } from "../../core/wxDebug";
import { eventBus, EVENT_TYPE } from "../../core/event";
import { isObject } from "../../core/utils";
import {
  getApiHost,
  getCurrrentApiHost,
  setCurrrentApiHost,
} from "../../core/apiHost";

Component({
  data: {
    envList: [],
    currentEnv: -1,
    wxDebug: getWXDebugStatus(),
  },
  lifetimes: {
    attached() {
      let envList = getApiHost();
      envList = isObject(envList) ? Object.keys(envList) : [];
      const currentEnv = getCurrrentApiHost();

      this.setData({
        envList,
        currentEnv: envList.findIndex((env) => env === currentEnv),
      });
    },
  },
  methods: {
    handleOk(e) {
      this.setData({
        currentEnv: e.detail.value,
      });
    },
    handleSave() {
      setCurrrentApiHost(this.data.envList[this.data.currentEnv]);
      eventBus.emit(EVENT_TYPE.close_debug_page);
    },
    handleWXDebug(e) {
      setEnableWXDebug({
        enableDebug: e.detail.value,
      });
    },
  },
});
