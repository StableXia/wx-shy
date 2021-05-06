import { eventBus, EVENT_TYPE } from "../../core/event";

Component({
  methods: {
    handleClose() {
      eventBus.emit(EVENT_TYPE.close_debug_page);
    },
  },
});
