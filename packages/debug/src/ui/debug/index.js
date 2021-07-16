import { isStarted } from "../../core/start";
import { eventBus, EVENT_TYPE } from "../../core/event";
import { showTabBar, hideTabBar } from "../../core/utils";
import { getCurrrentApiHost } from "../../core/apiHost";

const animateClassName = {
  fadeIn: "fadeIn",
  fadeOut: "fadeOut",
  slideInUp: "slideInUp",
  slideOutDown: "slideOutDown",
};

const TABS_MAP = {
  NETWORK: "NETWORK",
  SETTING: "SETTING",
};

const tabs = [
  {
    key: TABS_MAP.NETWORK,
    label: "network",
  },
  {
    key: TABS_MAP.SETTING,
    label: "setting",
  },
];

const DEBUG_TEXT = "debug";

const boundary = 16;
let debugSize = { width: 76, height: 36 };

Component({
  data: {
    tabs,
    TABS_MAP,
    debugText: DEBUG_TEXT,
    position: {
      left: 0,
      top: 0,
    },
    windowSize: {
      width: 0,
      height: 0,
    },
    showModal: false,
    animateClassName: {
      fade: animateClassName.fadeIn,
      slide: animateClassName.slideInUp,
    },
    activeTab: TABS_MAP.SETTING,
    debugLaunch: isStarted(),
  },
  lifetimes: {
    attached() {
      if (!isStarted()) {
        return;
      }

      this.addListeners();

      const currentEnv = getCurrrentApiHost();
      const { windowWidth, windowHeight } = wx.getSystemInfoSync();

      this.setData({
        windowSize: {
          width: windowWidth,
          height: windowHeight,
        },
        position: {
          left: windowWidth - debugSize.width - boundary,
          top: windowHeight - debugSize.height - boundary - windowWidth / 2,
        },
        debugText: currentEnv,
      });
    },
    detached() {
      this.removeListeners();
    },
  },
  methods: {
    addListeners() {
      eventBus.on(
        EVENT_TYPE.close_debug_page,
        this.handleCloseModal.bind(this)
      );
    },
    removeListeners() {
      eventBus.off(
        EVENT_TYPE.close_debug_page,
        this.handleCloseModal.bind(this)
      );
    },
    // TODO: debug 控件尺寸同步获取
    getDebugSize() {
      return new Promise((resolve) => {
        this.createSelectorQuery()
          .select("#__debug__")
          .boundingClientRect(function (res) {
            resolve({
              width: res.width,
              height: res.height,
            });
          })
          .exec();
      });
    },
    handleTouchMove(e) {
      const touch = e.changedTouches[0];
      const { windowSize } = this.data;
      const windowWidth = windowSize.width;
      const windowHeight = windowSize.height;

      let l = Math.max(touch.clientX, boundary);
      let t = Math.max(touch.clientY, boundary);

      if (l + debugSize.width + boundary > windowWidth) {
        l = windowWidth - boundary - debugSize.width;
      }

      if (t + debugSize.height + boundary > windowHeight) {
        t = windowHeight - boundary - debugSize.height;
      }

      this.setData({
        position: {
          left: l,
          top: t,
        },
      });
    },
    handleShowModal() {
      hideTabBar();
      this.setData({
        animateClassName: {
          fade: animateClassName.fadeIn,
          slide: animateClassName.slideInUp,
        },
        showModal: true,
      });
    },
    handleCloseModal() {
      showTabBar();
      this.setData({
        animateClassName: {
          fade: animateClassName.fadeOut,
          slide: animateClassName.slideOutDown,
        },
        showModal: false,
      });
    },
    handleClickTab(e) {
      const { type } = e.currentTarget.dataset;

      this.setData({
        activeTab: type,
      });
    },
  },
});
