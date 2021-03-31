import * as env from "./env";
import * as utils from "./utils";
import Event from "./event";
import { start, isStarted } from "./start";

const event = new Event();

const EVENT_TYPE = {
  close_debug_page: 1,
};

export default {
  env,
  utils,
  event,
  EVENT_TYPE,
  start,
  isStarted,
};
