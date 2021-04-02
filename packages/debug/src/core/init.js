import NetworkProxy from "./network/index";

export const networkProxy = new NetworkProxy();

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
