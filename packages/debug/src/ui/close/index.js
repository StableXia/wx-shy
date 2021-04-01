import { eventBus, EVENT_TYPE } from "@wx-shy/debug";

Component({
  methods: {
    handleClose() {
      eventBus.emit(EVENT_TYPE.close_debug_page);
    },
  },
});
