function formatMessages(messages) {
  try {
    return messages
      .map((info) => {
        try {
          const { request, response } = info;

          return {
            requestUrl: request.url,
            requestMethod: request.method,
            statusCode: request.statusCode,
            requestHeaders: request.headers,
            responseHeaders: response.headers,
            response: response,
          };
        } catch (error) {
          return null;
        }
      })
      .filter((v) => v);
  } catch (error) {
    return [];
  }
}

export default class RequestQueue {
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
