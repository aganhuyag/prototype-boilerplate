var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

var paths = {
  src: './sass/**/*.scss',
  dest: './css/'
}

function style() {
  return (
    gulp
      .src(paths.src)
      .pipe(sass())
      .on('error', sass.logError)
      .pipe(gulp.dest(paths.dest))
      .pipe(browserSync.stream())
  );
}
function watch() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch(paths.src, style);
  gulp.watch("*.html").on('change', browserSync.reload);
}

function defaultTask() {
  return (
    watch()
  );
}

exports.watch = watch;
// exports.default = defaultTask;
