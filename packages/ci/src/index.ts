#!/usr/bin/env node

import commander from "commander";
import packageJson from "../package.json";

commander
  .version(packageJson.version, "-v, --version")
  .name("shyci")
  .usage("微信小程序ci工具");

commander
  .command("upload [workspace]")
  .requiredOption("--type [value]", "项目类型")
  .requiredOption("--pkp [value]", "私钥文件所在路径")
  .option(
    "--qrcodeFormat [value]",
    "二维码文件的格式: terminal|base64|image",
    "image"
  )
  .option("--qrcodeOutputDest [value]", "二维码文件保存路径 ")
  .description("小程序上传")
  .action((workspace, options) => {
    console.log(workspace, options);
  });

commander.parseAsync(process.argv);
