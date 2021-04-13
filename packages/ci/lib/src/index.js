#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
const package_json_1 = __importDefault(require("../package.json"));
commander_1.default
    .version(package_json_1.default.version, "-v, --version")
    .name("shyci")
    .usage("微信小程序ci工具");
commander_1.default
    .command("upload [workspace]")
    .requiredOption("--type [value]", "项目类型")
    .requiredOption("--pkp [value]", "私钥文件所在路径")
    .option("--qrcodeFormat [value]", "二维码文件的格式: terminal|base64|image", "image")
    .option("--qrcodeOutputDest [value]", "二维码文件保存路径 ")
    .description("小程序上传")
    .action((workspace, options) => {
    console.log(workspace, options);
});
commander_1.default.parseAsync(process.argv);
