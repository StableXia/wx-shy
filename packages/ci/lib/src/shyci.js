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
const DEFAULT_WORKSPACE = "./";
class Shyci {
    constructor(options = {}) {
        this.workspace = options.workspace || DEFAULT_WORKSPACE;
        utils_1.assertExists(path_1.default.join(this.workspace, "project.config.json"), "[project.config.json] 不存在");
        this.projectConfig = this.createProjectConfig(options);
        this.project = this.createProject();
    }
    createProjectConfig(options) {
        const sourceProjectConfig = utils_1.getProjectConfig(path_1.default.join(this.workspace, "project.config.json"));
        return {
            appid: sourceProjectConfig.appid,
            setting: sourceProjectConfig.setting,
            ignores: ["node_modules/**/*"],
            projectPath: options.workspace || "./",
            privateKeyPath: options.pkp,
            type: options.type,
            qrcodeFormat: options.qrcodeFormat,
            qrcodeOutputDest: options.qrcodeOutputDest,
        };
    }
    createProject() {
        try {
            return new miniprogram_ci_1.default.Project({
                appid: this.projectConfig.appid,
                projectPath: this.projectConfig.projectPath,
                privateKeyPath: this.projectConfig.privateKeyPath,
                type: this.projectConfig.type,
                ignores: this.projectConfig.ignores,
            });
        }
        catch (error) {
            throw error;
        }
    }
    upload() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield miniprogram_ci_1.default.upload({
                    project: this.project,
                    version: "0.0.1",
                    desc: "测试版本",
                    setting: this.projectConfig.setting,
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
                yield miniprogram_ci_1.default.preview({
                    project: this.project,
                    version: "0.0.1",
                    desc: "测试版本",
                    qrcodeFormat: this.projectConfig.qrcodeFormat,
                    qrcodeOutputDest: this.projectConfig.qrcodeOutputDest,
                });
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = Shyci;
