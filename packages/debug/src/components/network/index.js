Component({
  data: {
    logs: [],
  },
  lifetimes: {
    attached() {
      this.setData({
        logs: networkProxy.getLogs(),
      });
    },
  },
  methods: {
    handleClear() {},
  },
});
