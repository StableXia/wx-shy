const gulp = require("gulp");
const babel = require("gulp-babel");
const less = require("gulp-less");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const rename = require("gulp-rename");
const del = require("del");
const watch = require("gulp-watch");
const gulpConfig = require("./configs/gulp");

const env = process.env.NODE_ENV;

const buildTasks = gulpConfig.tasks.map((task) => {
  function startTask(done) {
    console.log();
    console.log(`Task [${task.name}] starts`);
    console.log();
    done();
  }
  function endTask(done) {
    console.log();
    console.log(`End of task [${task.name}]`);
    console.log();
    done();
  }
  function cleanTask(done) {
    del.sync(task.clean);
    done();
  }
  function scriptTask() {
    return gulp
      .src(task.scriptsSrc, task.options)
      .pipe(
        babel({
          plugins: ["@babel/plugin-transform-modules-commonjs"],
        })
      )
      .pipe(gulp.dest(task.dest));
  }
  function lessTask() {
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
  }
  function copyTask() {
    return gulp.src(task.copySrc, task.options).pipe(gulp.dest(task.dest));
  }
  function watchTask(done) {
    watch(task.scriptsSrc, gulp.series(startTask, scriptTask, endTask));
    watch(task.lessSrc, gulp.series(startTask, lessTask, endTask));
    watch(task.copySrc, gulp.series(startTask, copyTask, endTask));
    done();
  }

  if (env === "production") {
    return gulp.series(
      startTask,
      cleanTask,
      gulp.parallel(scriptTask, lessTask, copyTask),
      endTask
    );
  }

  return gulp.series(
    startTask,
    cleanTask,
    gulp.parallel(scriptTask, lessTask, copyTask),
    watchTask,
    endTask
  );
});

exports.default = gulp.series(...buildTasks);
