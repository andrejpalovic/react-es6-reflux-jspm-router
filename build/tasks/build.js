var gulp = require('gulp');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var to5 = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var paths = require('../paths');
var compilerOptions = require('../babel-options');
var assign = Object.assign || require('object.assign');

// transpiles changed es6 files to SystemJS format
// the plumber() call prevents 'pipe breaking' caused
// by errors from other gulp plugins
// https://www.npmjs.com/package/gulp-plumber
gulp.task('build-system', function () {
  return gulp.src(paths.source)
    .pipe(plumber())
    .pipe(changed(paths.output, {extension: '.js'}))
    .pipe(sourcemaps.init())
    .pipe(to5(assign({}, compilerOptions, {modules:'system'})))
    .pipe(sourcemaps.write({includeContent: false, sourceRoot: '/' + paths.root }))
    .pipe(gulp.dest(paths.output));
});

// copies changed html files to the output directory
gulp.task('build-html', function () {
  return gulp.src(paths.html)
    .pipe(changed(paths.output, {extension: '.html'}))
    .pipe(gulp.dest(paths.output));
});

gulp.task('build-styles', function () {
  return gulp.src(paths.style)
    .pipe(less())
    .pipe(gulp.dest(paths.outputStyles));
});


// this task calls the clean task (located
// in ./clean.js), then runs the build-system
// and build-html tasks in parallel
// https://www.npmjs.com/package/gulp-run-sequence
gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    ['build-system', 'build-html','build-styles'],
    callback
  );
});

gulp.task('build-release',function(){
  var path = require("path");
  var Builder = require('systemjs-builder');
  var builder = new Builder();
  builder.loadConfig('./config.js').then(function(){
     return builder.buildSFX('dist/app', 'outfile.js', { minify: true, sourceMaps: true}).then(function() {
      console.log('Build complete');
    })
    .catch(function(err) {
      console.log('Build error');
      console.log(err);
    });
  });
 
});
