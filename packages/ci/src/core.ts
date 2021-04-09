const path = require("path");
const ci = require("miniprogram-ci");

const project = new ci.Project({
  appid: "wx01ddfcc465fe577a",
  type: "miniProgram",
  projectPath: path.resolve(__dirname, "../"),
  privateKeyPath: path.resolve(__dirname, "../private.wx01ddfcc465fe577a.key"),
  ignores: ["node_modules/**/*"],
});

async function upload() {
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

  const uploadResult = await ci.upload({
    project,
    version: "0.0.1",
    desc: "测试版本",
    setting: {
      es6: true,
    },
    onProgressUpdate: console.log,
  });
}

upload();
