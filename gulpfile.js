var gulp = require('gulp')
var sass = require('gulp-sass')
var postcss = require('gulp-postcss')
var assets = require('postcss-assets')
var processors
var options

gulp.task('styles', function() {
  gulp.src('sass/**/*.scss')
  .pipe(sass())
  .pipe(postcss([assets({
      loadPaths: ['images/', 'media/', 'src/'],
      relative: './',
    })]))
  .pipe(gulp.dest('./'))
})

gulp.task('default', function() {
  gulp.watch('sass/**/*.scss',['styles'])
})