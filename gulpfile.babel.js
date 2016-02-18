'use strict'

import 'babel-core/register'
import path from 'path'
import gulp from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'
import del from 'del'

const $ = gulpLoadPlugins({
  rename: {
    'gulp-exclude-gitignore': 'excludeGitignore',
    'gulp-jsx-coverage': 'jsxCoverage'
  }
})

// Lint JavaScript
gulp.task('lint', () => gulp.src('./src/**/*.js')
  .pipe($.eslint())
  .pipe($.eslint.format())
  .pipe($.eslint.failOnError())
)

// Coverage
gulp.task('coverage', () => {
  let options = {
    istanbul: {
      preserveComments: true,
      coverageVariable: '__MY_TEST_COVERAGE__',
      exclude: /node_modules/
    },
    transpile: {
      babel: {
        include: /\.js?$/,
        exclude: /node_modules/,
        omitExt: false
      }
    },
    coverage: {
      reporters: ['text-summary', 'json', 'lcov'],
      directory: 'coverage'
    }
  }

  $.jsxCoverage.initModuleLoaderHack(options)

  return gulp.src('./src/**/*.js')
    .pipe($.excludeGitignore())
    .pipe($.jasmine())
    .on('end', $.jsxCoverage.collectIstanbulCoverage(options))
}
)

// Babel transformation
gulp.task('scripts', () => gulp.src('./src/**/*.js')
  .pipe($.changed('./generators'))
  .pipe($.excludeGitignore())
  .pipe($.babel())
  .pipe(gulp.dest('.'))
)

// Clean scripts
gulp.task('clean:scripts', () => del('./generators').then(paths => $.util.log('Clean ./generators directory')
)
)

// Unit testing
gulp.task('jasmine', () => {
  gulp.src('./spec/**/*.js')
    .pipe($.jasmine())
})

// Watch unit testing
gulp.task('watch:jasmine', () => {
  gulp.watch(['./src/**/*.js', './spec/**/*.js'], ['jasmine'])
})

gulp.task('build', ['lint', 'jasmine', 'clean:scripts', 'scripts'])
