const buildConfig = {
  debug: {
    name: "debug",
    options: {
      base: "packages/debug/src",
      allowEmpty: true,
    },
    scriptsSrc: "packages/debug/src/**/*.js",
    lessSrc: ["packages/debug/src/**/*.less", "!packages/debug/src/less/*.*"],
    copySrc: ["packages/debug/src/**/*.{wxml,json}"],
    dest: "packages/debug/lib",
  },
  appEnv: {
    name: "appEnv",
    options: {
      base: "packages/app-env/src",
      allowEmpty: true,
    },
    scriptsSrc: "packages/app-env/src/**/*.js",
    lessSrc: [
      "packages/app-env/src/**/*.less",
      "!packages/app-env/src/less/*.*",
    ],
    copySrc: ["packages/app-env/src/**/*.{wxml,json}"],
    dest: "packages/app-env/lib",
  },
};

let buildTasks = [];

if (process.env.target) {
  buildTasks = [buildConfig[process.env.target]];
} else {
  buildTasks = Object.keys(buildConfig).map((key) => buildConfig[key]);
}

module.exports = { tasks: buildTasks };
