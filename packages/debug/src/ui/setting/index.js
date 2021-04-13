import {
  utils,
  eventBus,
  EVENT_TYPE,
  getWXDebugStatus,
  setEnableWXDebug,
} from "../../";
import {
  getApiHost,
  getCurrrentApiHost,
  setCurrrentApiHost,
} from "@wx-shy/app-env";

Component({
  data: {
    envList: [],
    currentEnv: -1,
    wxDebug: getWXDebugStatus(),
  },
  lifetimes: {
    attached() {
      let envList = getApiHost();
      envList = utils.isObject(envList) ? Object.keys(envList) : [];
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
