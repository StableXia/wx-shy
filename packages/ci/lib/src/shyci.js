"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const miniprogram_ci_1 = __importDefault(require("miniprogram-ci"));
const utils_1 = require("./utils");
const view_1 = require("./view");
view_1.log.error("[project.config.json] 获取失败");
class Shyci {
    constructor(options) {
        utils_1.assertExists(path_1.default.join(options.workspace, "project.config.json"), "[project.config.json] 不存在");
        this.workspace = options.workspace;
        this.projectConfig = utils_1.getProjectConfig(path_1.default.join(options.workspace, "project.config.json"));
        this.project = this.createProject();
    }
    createProject() {
        try {
            return new miniprogram_ci_1.default.Project({
                appid: this.projectConfig.appid,
                type: "miniProgram",
                projectPath: path_1.default.resolve(__dirname, "../"),
                privateKeyPath: path_1.default.resolve(__dirname, "../private.wx01ddfcc465fe577a.key"),
                ignores: ["node_modules/**/*"],
            });
        }
        catch (error) {
            throw error;
        }
    }
    upload() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const uploadResult = yield miniprogram_ci_1.default.upload({
                    project: this.project,
                    version: "0.0.1",
                    desc: "测试版本",
                    setting: {
                        es6: true,
                    },
                    onProgressUpdate: console.log,
                });
            }
            catch (error) {
                throw error;
            }
        });
    }
    preview() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const previewResult = yield miniprogram_ci_1.default.preview({
                    project,
                    desc: "测试版本",
                    setting: {
                        es6: true,
                    },
                    qrcodeFormat: "image",
                    qrcodeOutputDest: path_1.default.resolve(__dirname, "../qrcodes/qrcode.jpg"),
                    onProgressUpdate: console.log,
                });
            }
            catch (error) { }
        });
    }
}
