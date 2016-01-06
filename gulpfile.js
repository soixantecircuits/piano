var gulp = require('gulp')
var gls = require('gulp-live-server')
var concat = require('gulp-concat')
var minify = require('gulp-minify')
var minifyCss = require('gulp-minify-css')

gulp.task('serve', function () {
  var server = gls.static('./', 8080)
  server.start()

  gulp.watch(['piano.*', 'layouts/**.*', 'demo/**.*'], function (file) {
    server.notify(server, [file])
  })
})
gulp.task('build', function () {
  console.log('build lib')
  gulp.src(['./piano.js', './layouts/default.js'])
    .pipe(concat('piano.js'))
    .pipe(gulp.dest('./dev/'))

  gulp.src('./dev/*.js')
    .pipe(minify({
      exclude: ['tasks'],
      ignoreFiles: ['.combo.js', '-min.js'],
      mangle: false
    }))
    .pipe(gulp.dest('./dist/'))

  gulp.src('./piano.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/'))
})
