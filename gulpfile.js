const path = require('path')
const gulp = require('gulp')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const sourcemaps = require('gulp-sourcemaps')
const bulkify = require('bulkify')
const es2040 = require('es2040')
const watchify = require('watchify')

gulp.task('build', function () {
  const bundler = browserify({
    entries: ['./src/index.js'],
    debug: true
  })

  const transforms = [
    { name: es2040, options: {} },
    { name: bulkify, options: {} }
  ]

  transforms.forEach(function (transform) {
    bundler.transform(transform.name, transform.options)
  })

  if (global.isWatching) {
    bundler = watchify(bundler)
    bundler.on('update', rebundle)
  }

  return rebundle()

  function rebundle () {
    bundler.bundle()
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(gulp.dest(path.join('dist')))
  }
})

gulp.task('watch', function () {
  gulp.watch('src/**/*.js', ['build'])
})

gulp.task('default', ['build', 'watch'])
