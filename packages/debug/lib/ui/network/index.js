"use strict";

var _debug = require("@wx-shy/debug");

const DEFAULT_DETAIL = {
  requestUrl: null,
  requestMethod: null,
  statusCode: null,
  responseHeaders: null,
  requestHeaders: null,
  requestParameters: null,
  response: null
};

function formatDetail(detail, clipboard) {
  try {
    return { ...detail,
      response: clipboard ? JSON.parse(detail.response) : JSON.stringify(detail.response, null, 2)
    };
  } catch (error) {
    return DEFAULT_DETAIL;
  }
}

Component({
  data: {
    logs: [],
    showDetail: false,
    detail: DEFAULT_DETAIL
  },
  lifetimes: {
    attached() {
      this.setData({
        logs: _debug.networkProxy.getLogs()
      });
    }

  },
  methods: {
    handleClear() {
      _debug.networkProxy.clearLogs();

      this.setData({
        logs: []
      });
    },

    handleShowDetail(e) {
      const {
        detail
      } = e.currentTarget.dataset;
      console.log("====== [DEBUG] network detail ======", detail);
      this.setData({
        showDetail: true,
        detail: formatDetail(detail)
      });
    },

    handleCopy() {
      wx.setClipboardData({
        data: JSON.stringify(formatDetail(this.data.detail, true), null, 2),

        success(res) {
          wx.showToast({
            title: "已复制到剪切板"
          });
        }

      });
    },

    handleClose() {
      this.setData({
        showDetail: false,
        detail: DEFAULT_DETAIL
      });
    }

  }
});