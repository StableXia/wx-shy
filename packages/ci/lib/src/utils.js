"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProjectConfig = exports.assertExists = void 0;
const fs_1 = __importDefault(require("fs"));
function assertExists(path, msg) {
    if (!fs_1.default.existsSync(path)) {
        throw new Error(msg);
    }
}
exports.assertExists = assertExists;
function getProjectConfig(filePath) {
    try {
        if (fs_1.default.existsSync(filePath)) {
            return JSON.parse(fs_1.default.readFileSync(filePath).toString());
        }
        return {};
    }
    catch (error) {
        throw error;
    }
}
exports.getProjectConfig = getProjectConfig;
