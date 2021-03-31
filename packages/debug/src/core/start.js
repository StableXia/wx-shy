let started = false;

export function start() {
  if (started) {
    return;
  }

  started = true;
}

export function isStarted() {
  return started;
}
