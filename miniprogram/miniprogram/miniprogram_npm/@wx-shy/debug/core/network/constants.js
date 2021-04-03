"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NETWORK_CALLEE = exports.NETWORK_CALLEE_TYPE = void 0;
const NETWORK_CALLEE_TYPE = {
  request: "request",
  downloadFile: "downloadFile",
  uploadFile: "uploadFile"
};
exports.NETWORK_CALLEE_TYPE = NETWORK_CALLEE_TYPE;
const NETWORK_CALLEE = Object.values(NETWORK_CALLEE_TYPE);
exports.NETWORK_CALLEE = NETWORK_CALLEE;