import path from "path";
import ci from "miniprogram-ci";
import { assertExists, getProjectConfig } from "./utils";
import { IProjectConfig, IOptions } from "./types";

const DEFAULT_WORKSPACE = "./";

class Shyci {
  private workspace: string;
  project: ci.Project;
  projectConfig: IProjectConfig;

  constructor(options: IOptions = {}) {
    this.workspace = options.workspace || DEFAULT_WORKSPACE;

    assertExists(
      path.join(this.workspace, "project.config.json"),
      "[project.config.json] 不存在"
    );

    this.projectConfig = this.createProjectConfig(options);
    this.project = this.createProject();
  }

  private createProjectConfig(options: IOptions) {
    const sourceProjectConfig = getProjectConfig(
      path.join(this.workspace, "project.config.json")
    );

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

  private createProject() {
    try {
      return new ci.Project({
        appid: this.projectConfig.appid,
        projectPath: this.projectConfig.projectPath,
        privateKeyPath: this.projectConfig.privateKeyPath,
        type: this.projectConfig.type,
        ignores: this.projectConfig.ignores,
      });
    } catch (error) {
      throw error;
    }
  }

  async upload() {
    try {
      await ci.upload({
        project: this.project,
        version: "0.0.1",
        desc: "测试版本",
        setting: this.projectConfig.setting,
      });
    } catch (error) {
      throw error;
    }
  }

  async preview() {
    try {
      await ci.preview({
        project: this.project,
        version: "0.0.1",
        desc: "测试版本",
        qrcodeFormat: this.projectConfig.qrcodeFormat,
        qrcodeOutputDest: this.projectConfig.qrcodeOutputDest,
      });
    } catch (error) {
      throw error;
    }
  }
}

export default Shyci;
