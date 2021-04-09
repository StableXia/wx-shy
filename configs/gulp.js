const DEFAULT_GULP_TASKS = [
  {
    name: "debug",
    options: {
      base: "packages/debug/src",
      allowEmpty: true,
    },
    scriptsSrc: "packages/debug/src/**/*.js",
    lessSrc: ["packages/debug/src/**/*.less", "!packages/debug/src/less/*.*"],
    copySrc: ["packages/debug/src/**/*.{wxml,json}"],
    dest: "packages/debug/lib",
    clean: ["packages/debug/lib/**/*"],
  },
  {
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
    clean: ["packages/app-env/lib/**/*"],
  },
];

function getTasks() {
  const taskName = process.env.TASK_NAME;

  if (taskName) {
    return DEFAULT_GULP_TASKS.filter((task) => task.name === taskName);
  }

  return DEFAULT_GULP_TASKS;
}

exports.gulpTasks = getTasks();
