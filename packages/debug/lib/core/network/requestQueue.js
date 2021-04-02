"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function formatMessages(messages) {
  try {
    return messages.map(info => {
      try {
        const {
          request,
          response
        } = info;
        return {
          requestUrl: request.url,
          requestMethod: request.method,
          statusCode: response.statusCode,
          requestHeaders: request.header,
          responseHeaders: response.header,
          response: response
        };
      } catch (error) {
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