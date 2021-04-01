import NetworkProxy from "./core/network";
import Event from "./core/event";
export * from "./core/env";

export const networkProxy = new NetworkProxy();
export const eventBus = new Event();

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
