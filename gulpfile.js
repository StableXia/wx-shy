const gulp = require("gulp");
const babel = require("gulp-babel");
const less = require("gulp-less");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const rename = require("gulp-rename");
const config = require("./configs/gulp");

const buildTasks = config.tasks
  .map((task) => {
    const scriptTaskName = `script:${task.name}`;
    const lessTaskName = `less:${task.name}`;
    const copyTaskName = `copy:${task.name}`;

    gulp.task(scriptTaskName, () => {
      return gulp
        .src(task.scriptsSrc, task.options)
        .pipe(
          babel({
            plugins: ["@babel/plugin-transform-modules-commonjs"],
          })
        )
        .pipe(gulp.dest(task.dest));
    });

    gulp.task(lessTaskName, () => {
      return gulp
        .src(task.lessSrc, task.options)
        .pipe(
          less().on("error", function (e) {
            console.error(e.message);
            this.emit("end");
          })
        )
        .pipe(postcss([autoprefixer]))
        .pipe(
          rename(function (path) {
            path.extname = ".wxss";
          })
        )
        .pipe(gulp.dest(task.dest));
    });

    gulp.task(copyTaskName, () => {
      return gulp.src(task.copySrc, task.options).pipe(gulp.dest(task.dest));
    });

    return [scriptTaskName, lessTaskName, copyTaskName];
  })
  .reduce((prev, next) => prev.concat(next), []);

gulp.task("build-watch", () => {
  config.tasks.forEach((task) => {
    const scriptTaskName = `script:${task.name}`;
    const lessTaskName = `less:${task.name}`;
    const copyTaskName = `copy:${task.name}`;

    gulp.watch(task.copySrc, gulp.series(copyTaskName));
    gulp.watch(task.scriptsSrc, gulp.series(scriptTaskName));
    gulp.watch(task.lessSrc, gulp.series(lessTaskName));
  });
});

const defaultTasks = [gulp.parallel(buildTasks)];

if (process.env.NODE_ENV === "development") {
  defaultTasks.push("build-watch");
}

gulp.task("default", gulp.series(...defaultTasks));
