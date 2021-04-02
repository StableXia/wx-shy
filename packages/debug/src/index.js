import Event, { EVENT_TYPE } from "./core/event";
import * as env from "./core/env";
import * as utils from "./core/utils";

export { start, isStarted, networkProxy } from "./core/init";
export const eventBus = new Event();
export { EVENT_TYPE, env, utils };
