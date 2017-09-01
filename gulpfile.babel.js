'use strict'

import gulp       from 'gulp'
import gutil      from 'gulp-util'
import browserify from 'browserify'
import babelify   from 'babelify'
import source     from 'vinyl-source-stream'

const SRC         = './src'
,     DEST        = './public/js'
,     SCRIPT_NAME = 'core.js'
,     BUNDLE_NAME = 'core.min.js'

gulp.task('js', () => {
	browserify(`${ SRC }/${ SCRIPT_NAME }`, { debug: true })
		.transform(babelify)
		.bundle()
		.on('error', gutil.log.bind(gutil, 'Browserify Error'))
		.pipe(source(BUNDLE_NAME))
		.pipe(gulp.dest(DEST))
})

gulp.task('watch', () => {
	gulp.watch([
		`${ SRC }/**/*.js`,
		`${ SRC }/**/*.jsx`
	], ['js'])
})

gulp.task('build', ['js'])
