"use strict";

var _start = require("../../core/start");

var _event = require("../../core/event");

var _utils = require("../../core/utils");

const animateClassName = {
  fadeIn: "fadeIn",
  fadeOut: "fadeOut",
  slideInUp: "slideInUp",
  slideOutDown: "slideOutDown"
};
const TABS_MAP = {
  NETWORK: "NETWORK",
  SETTING: "SETTING"
};
const tabs = [{
  key: TABS_MAP.NETWORK,
  label: "network"
}, {
  key: TABS_MAP.SETTING,
  label: "setting"
}];
let debugSize = {
  width: 62,
  height: 30
};
Component({
  data: {
    tabs,
    TABS_MAP,
    position: {
      left: 0,
      top: 0
    },
    windowSize: {
      width: 0,
      height: 0
    },
    showModal: false,
    animateClassName: {
      fade: animateClassName.fadeIn,
      slide: animateClassName.slideInUp
    },
    activeTab: TABS_MAP.SETTING,
    debugLaunch: (0, _start.isStarted)()
  },
  lifetimes: {
    attached() {
      if (!(0, _start.isStarted)()) {
        return;
      }

      this.addListeners();
      const {
        windowWidth,
        windowHeight
      } = wx.getSystemInfoSync();
      this.setData({
        windowSize: {
          width: windowWidth,
          height: windowHeight
        },
        position: {
          left: windowWidth - 62 - 16,
          top: windowHeight - 30 - 16
        }
      });
    },

    detached() {
      this.removeListeners();
    }

  },
  methods: {
    addListeners() {
      _event.eventBus.on(_event.EVENT_TYPE.close_debug_page, this.handleCloseModal.bind(this));
    },

    removeListeners() {
      _event.eventBus.off(_event.EVENT_TYPE.close_debug_page, this.handleCloseModal.bind(this));
    },

    // TODO: debug 控件尺寸同步获取
    getDebugSize() {
      return new Promise(resolve => {
        this.createSelectorQuery().select("#__debug__").boundingClientRect(function (res) {
          resolve({
            width: res.width,
            height: res.height
          });
        }).exec();
      });
    },

    handleTouchMove(e) {
      const touch = e.changedTouches[0];
      const {
        windowSize
      } = this.data;
      const windowWidth = windowSize.width;
      const windowHeight = windowSize.height;
      let l = Math.max(touch.clientX, 16);
      let t = Math.max(touch.clientY, 16);

      if (l + debugSize.width + 16 > windowWidth) {
        l = windowWidth - 16 - debugSize.width;
      }

      if (t + debugSize.height + 16 > windowHeight) {
        t = windowHeight - 16 - debugSize.height;
      }

      this.setData({
        position: {
          left: l,
          top: t
        }
      });
    },

    handleShowModal() {
      (0, _utils.hideTabBar)();
      this.setData({
        animateClassName: {
          fade: animateClassName.fadeIn,
          slide: animateClassName.slideInUp
        },
        showModal: true
      });
    },

    handleCloseModal() {
      (0, _utils.showTabBar)();
      this.setData({
        animateClassName: {
          fade: animateClassName.fadeOut,
          slide: animateClassName.slideOutDown
        },
        showModal: false
      });
    },

    handleClickTab(e) {
      const {
        type
      } = e.currentTarget.dataset;
      this.setData({
        activeTab: type
      });
    }

  }
});