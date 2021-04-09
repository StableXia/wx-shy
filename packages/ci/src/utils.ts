import fs from "fs";

export function assertExists(path: string, msg: string) {
  if (!fs.existsSync(path)) {
    throw new Error(msg);
  }
}

export function getProjectConfig(filePath: string) {
  try {
    if (fs.existsSync(filePath)) {
      return JSON.parse(fs.readFileSync(filePath).toString());
    }
    return {};
  } catch (error) {
    throw error;
  }
}
