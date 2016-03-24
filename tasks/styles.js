'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');
let outputStyle = 'compressed';

gulp.task('styles', stylesTask);

function stylesTask() {
  return gulp
    .src('./styles/app.scss')
    .pipe(sass({outputStyle}).on('error', onError));
}

function onError(err) {
  let gutil = require('gulp-util');
  var message = new gutil.PluginError('gulp-sass', err.messageFormatted).toString();
  process.stderr.write(message + '\n');
  gutil.beep();
};
