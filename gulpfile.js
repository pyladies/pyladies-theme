
// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    del = require('del');
    plumber = require('gulp-plumber')


// Styles
gulp.task('styles', function() {
  return sass('_assets/css/_sass/main.sass', { style: 'expanded' })
  	.pipe(plumber())
  	.pipe(autoprefixer({browsers: ['last 2 version']}))
    .pipe(gulp.dest('_assets/css/'))
    .pipe(notify({ message: 'Styles task complete' }));
});
 
// Clean
gulp.task('clean', function(cb) {
    del(['_assets/css'], cb)
});
 
// Default task
gulp.task('default', ['clean'], function() {
    gulp.start('styles');
});
 
// Watch
gulp.task('watch', function() {
 
  // Watch .sass files
  gulp.watch('_assets/css/_sass/main.sass', ['styles']);
 
});