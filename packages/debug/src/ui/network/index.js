Component({
  data: {
    logs: [],
  },
  lifetimes: {
    attached() {
      this.setData({
        logs: [],
      });
    },
  },
  methods: {
    handleClear() {},
  },
});
