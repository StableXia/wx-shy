import path from "path";
import ci from "miniprogram-ci";
import { assertExists, getProjectConfig } from "./utils";
import { log } from "./view";

interface IOptions {
  workspace: string;
}

log.error("[project.config.json] 获取失败");

class Shyci {
  private workspace: string;
  project: ci.Project;
  projectConfig;

  constructor(options: IOptions) {
    assertExists(
      path.join(options.workspace, "project.config.json"),
      "[project.config.json] 不存在"
    );

    this.workspace = options.workspace;
    this.projectConfig = getProjectConfig(
      path.join(options.workspace, "project.config.json")
    );

    this.project = this.createProject();
  }

  private createProject() {
    try {
      return new ci.Project({
        appid: this.projectConfig.appid,
        type: "miniProgram",
        projectPath: path.resolve(__dirname, "../"),
        privateKeyPath: path.resolve(
          __dirname,
          "../private.wx01ddfcc465fe577a.key"
        ),
        ignores: ["node_modules/**/*"],
      });
    } catch (error) {
      throw error;
    }
  }

  async upload() {
    try {
      const uploadResult = await ci.upload({
        project: this.project,
        version: "0.0.1",
        desc: "测试版本",
        setting: {
          es6: true,
        },
        onProgressUpdate: console.log,
      });
    } catch (error) {
      throw error;
    }
  }

  async preview() {
    try {
      const previewResult = await ci.preview({
        project,
        desc: "测试版本",
        setting: {
          es6: true,
        },
        qrcodeFormat: "image",
        qrcodeOutputDest: path.resolve(__dirname, "../qrcodes/qrcode.jpg"),
        onProgressUpdate: console.log,
      });
    } catch (error) {}
  }
}
