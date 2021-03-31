import NetworkProxy from "./network";

let started = false;

export function start() {
  started = true;

  const networkProxy = new NetworkProxy();
  networkProxy.createProxy();
}

export function isStarted() {
  return started;
}
