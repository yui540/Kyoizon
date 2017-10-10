'use strict'

import gulp       from 'gulp'
import gutil      from 'gutil'
import sass       from 'gulp-sass'
import sassGlob   from 'gulp-sass-glob'
import browserify from 'browserify'
import source     from 'vinyl-source-stream'
import babelify   from 'babelify'

const SRC         = './src'
,     DEST        = './public'
,     SCRIPT_NAME = 'app.js'
,     BUNDLE_NAME = 'app.min.js'

// css
gulp.task('css', () => {
  return gulp.src(`${ SRC }/sass/style.sass`)
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(gulp.dest(`${ DEST }/stylesheets`))
})

// js
gulp.task('js', () => {
  return browserify(`${ SRC }/scripts/${ SCRIPT_NAME }`, { debug: true })
    .transform(babelify)
    .bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error.'))
    .pipe(source(`${ BUNDLE_NAME }`))
    .pipe(gulp.dest(`${ DEST }/scripts`))
})

// default
gulp.task('default', ['js', 'css'])

// watch
gulp.task('watch', () => {
  gulp.watch([
    `${ SRC }/**/*.js`,
    `${ SRC }/**/*.jsx`,
    `${ SRC }/**/*.json`,
    `${ SRC }/**/*.sass`
  ], ['js', 'css'])
})
