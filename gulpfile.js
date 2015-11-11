const gulp = require('gulp');
const jscs = require('gulp-jscs');

gulp.task('default', function() {
  return gulp.src(['gulpfile.js'])
  .pipe(jscs())
  .pipe(jscs.reporter());
});
