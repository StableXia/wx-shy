import { networkProxy } from "./network/index";

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
