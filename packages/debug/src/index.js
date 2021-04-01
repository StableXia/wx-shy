import NetworkProxy from "./core/network/index";
import Event, { EVENT_TYPE } from "./core/event";
export * from "./core/env";

export const networkProxy = new NetworkProxy();
export const eventBus = new Event();
export { EVENT_TYPE };

let started = false;
export function start() {
  if (started) {
    return;
  }

  started = true;

  networkProxy.createProxy();
}

export function isStarted() {
  return started;
}
