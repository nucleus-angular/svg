var gulp = require('gulp');
var gulpConfig = require('../config.js');
var del = require('del');

gulp.task('copy-self', 'Copy this library into the components folder on the test web server', function(done) {
  del.sync('./' + gulpConfig.vendorComponentsPath + '/nucleus-angular-svg');

  return gulp.src([
    'module.js',
    'svg-directive.js'
  ], {
    base: '.'
  })
  .pipe(gulp.dest(gulpConfig.vendorComponentsPath + '/nucleus-angular-svg'));
});
