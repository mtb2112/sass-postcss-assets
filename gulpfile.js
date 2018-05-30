var gulp = require('gulp')
var sass = require('gulp-sass')
var postcss      = require('gulp-postcss')
var sourcemaps   = require('gulp-sourcemaps')
var autoprefixer = require('autoprefixer')
var processors

gulp.task('styles', function() {
  processors = [
    autoprefixer
  ]

  gulp.src('sass/**/*.scss')
  .pipe(sass())
  .pipe(postcss(processors))
  .pipe(gulp.dest('./'))
})

gulp.task('default', function() {
  gulp.watch('sass/**/*.scss',['styles'])
})