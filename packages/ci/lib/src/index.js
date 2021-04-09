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
    .option("--env [value]", "环境类型, 例如 dev|test|prod")
    .option("--type [value]", "项目类型", "miniProgram")
    .option("--version [value]", "发布版本号")
    .option("--desc [value]", "发布简介")
    .option("--pkp [value]", "私钥文件所在路径")
    .option("--proxy [value]", "代理url")
    .option("--robot [value]", "指定CI机器人，1 ~ 30", "1")
    .description("小程序上传")
    .action((workspace, options) => {
    console.log(workspace, options);
});
commander_1.default.parseAsync(process.argv);
