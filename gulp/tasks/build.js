var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', 'Builds the code along with running quality checks (tests, hints, etc...)', function(done) {
  runSequence(
    'copy-self',
    'jshint',
    ['sass', 'javascript', 'html-minify'],
    'static-rewrite',
    //'karma',
    'complexity',
    done
  );
});

gulp.task('build-quick', 'Builds the code without running quality checks', function(done) {
  runSequence(
    'copy-self',
    ['sass', 'javascript', 'html-minify'],
    'static-rewrite',
    done
  );
});
