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
  debugUI: {
    name: "debugUI",
    options: {
      base: "packages/debug-ui/src",
      allowEmpty: true,
    },
    scriptsSrc: "packages/debug-ui/src/**/*.js",
    lessSrc: [
      "packages/debug-ui/src/**/*.less",
      "!packages/debug-ui/src/less/*.*",
    ],
    copySrc: ["packages/debug-ui/src/**/*.{wxml,json}"],
    dest: "packages/debug-ui/lib",
  },
};

let buildTasks = [];

if (process.env.target) {
  buildTasks = [buildConfig[process.env.target]];
} else {
  buildTasks = Object.keys(buildConfig).map((key) => buildConfig[key]);
}

module.exports = { tasks: buildTasks };
