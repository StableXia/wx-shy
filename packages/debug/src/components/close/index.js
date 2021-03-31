import wxDebug from "@wx-debug/debug";

const { event, EVENT_TYPE } = wxDebug;

Component({
  methods: {
    handleClose() {
      event.emit(EVENT_TYPE.close_debug_page);
    },
  },
});
