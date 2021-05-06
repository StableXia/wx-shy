"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const NETWORK_CALLEE_TYPE = exports.NETWORK_CALLEE_TYPE = {
  request: "request",
  downloadFile: "downloadFile",
  uploadFile: "uploadFile"
};
const NETWORK_CALLEE = exports.NETWORK_CALLEE = Object.values(NETWORK_CALLEE_TYPE);