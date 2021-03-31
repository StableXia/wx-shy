"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("./constants");

function formatRequestMessage(info) {
  try {
    const {
      request,
      response
    } = info;
    return {
      general: {
        requestUrl: request.url,
        requestMethod: request.method,
        statusCode: request.statusCode
      },
      request,
      response
    };
  } catch (error) {
    return null;
  }
}

function formatUploadMessage(info) {
  try {
    const {
      request,
      response
    } = info;
    return {
      general: {
        requestUrl: request.url,
        requestMethod: request.method,
        statusCode: request.statusCode
      },
      request,
      response
    };
  } catch (error) {
    return null;
  }
}

function formatDownloadMessage(info) {
  try {
    const {
      request,
      response
    } = info;
    return {
      general: {
        requestUrl: request.url,
        requestMethod: request.method,
        statusCode: request.statusCode
      },
      request,
      response
    };
  } catch (error) {
    return null;
  }
}

function formatMessages(messages) {
  try {
    return messages.map(v => {
      try {
        if (v.networkCalleeType === _constants.NETWORK_CALLEE_TYPE.request) {
          return formatRequestMessage(v);
        }

        if (v.networkCalleeType === _constants.NETWORK_CALLEE_TYPE.downloadFile) {
          return formatUploadMessage(v);
        }

        if (v.networkCalleeType === _constants.NETWORK_CALLEE_TYPE.uploadFile) {
          return formatDownloadMessage(v);
        }

        return null;
      } catch (error) {
        console.error(error);
        return null;
      }
    }).filter(v => v);
  } catch (error) {
    return [];
  }
}

class RequestQueue {
  constructor() {
    this.queue = [];
  }

  get() {
    return this.queue;
  }

  add(info) {
    try {
      this.queue.push(info);
    } catch (error) {
      console.error(error);
    }
  }

  clear() {
    this.queue = [];
  }

  getFormattedRequest() {
    return formatMessages(this.queue);
  }

}

exports.default = RequestQueue;