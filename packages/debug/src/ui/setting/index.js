import { env, utils, eventBus, EVENT_TYPE } from "@wx-shy/debug";

Component({
  data: {
    envList: [],
    currentEnv: -1,
  },
  lifetimes: {
    attached() {
      let envList = env.getEnv();
      envList = utils.isObject(envList) ? Object.keys(envList) : [];
      const currentEnv = env.getCurrentEnv();

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
      env.setCurrentEnv(this.data.envList[this.data.currentEnv]);
      eventBus.emit(EVENT_TYPE.close_debug_page);
    },
  },
});
