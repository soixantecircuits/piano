var gulp = require('gulp');
var gls = require('gulp-live-server');

gulp.task('serve', function() {
  var server = gls.static('./', 8080);
  server.start();

  gulp.watch(['touchkey.*', 'layouts/**.*', 'demo/**.*'], function (file) {
    server.notify.apply(server, [file]);
  });
});