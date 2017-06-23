const gulp = require('gulp')
const esLint = require('gulp-eslint')

//添加各种任务
gulp.task('esLint', function () {
  return gulp.src('src/*')
    .pipe(esLint())
    .pipe(esLint.format());
});
