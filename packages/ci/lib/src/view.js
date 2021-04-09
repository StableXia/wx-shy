"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.spining = void 0;
const ora_1 = __importDefault(require("ora"));
const chalk_1 = __importDefault(require("chalk"));
/**
 * 进度条加载
 */
function spining(options) {
    return ora_1.default(options);
}
exports.spining = spining;
class Log {
    error(msg) {
        console.log(chalk_1.default.red(msg));
    }
    warn(msg) {
        console.log(chalk_1.default.yellow(msg));
    }
    primary(...msg) {
        console.log(...msg);
    }
    get chalk() {
        return chalk_1.default;
    }
}
exports.log = new Log();
