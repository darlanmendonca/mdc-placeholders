'use strict';

let gulp = require('gulp');
gulp.task('watch', watchTask);

function watchTask() {
  gulp.watch('./styles/**/*.scss', ['styles']);
}
