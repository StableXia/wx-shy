export type IType =
  | "miniProgram"
  | "miniProgramPlugin"
  | "miniGame"
  | "miniGamePlugin";

export type IQrcodeFormat = "terminal" | "image" | "base64";

export interface IOptions {
  workspace?: string;
  type?: IType;
  pkp: string;
  qrcodeFormat?: IQrcodeFormat;
  qrcodeOutputDest?: string;
}

export interface IProjectConfig {
  appid: string;
  projectPath: string;
  privateKeyPath: string;
  type: IType;
  ignores: string[];
  setting: { [key: string]: any };
  qrcodeFormat: IQrcodeFormat;
  qrcodeOutputDest: string;
}
