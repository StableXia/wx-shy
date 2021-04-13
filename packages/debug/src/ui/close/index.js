import { eventBus, EVENT_TYPE } from "../../";

Component({
  methods: {
    handleClose() {
      eventBus.emit(EVENT_TYPE.close_debug_page);
    },
  },
});
