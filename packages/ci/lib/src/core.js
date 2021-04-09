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
const path = require("path");
const ci = require("miniprogram-ci");
const project = new ci.Project({
    appid: "wx01ddfcc465fe577a",
    type: "miniProgram",
    projectPath: path.resolve(__dirname, "../"),
    privateKeyPath: path.resolve(__dirname, "../private.wx01ddfcc465fe577a.key"),
    ignores: ["node_modules/**/*"],
});
function upload() {
    return __awaiter(this, void 0, void 0, function* () {
        const previewResult = yield ci.preview({
            project,
            desc: "测试版本",
            setting: {
                es6: true,
            },
            qrcodeFormat: "image",
            qrcodeOutputDest: path.resolve(__dirname, "../qrcodes/qrcode.jpg"),
            onProgressUpdate: console.log,
        });
    });
}
upload();
