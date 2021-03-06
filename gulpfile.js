var autoprefixer = require('gulp-autoprefixer');
var csslint = require('gulp-csslint');
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var umd = require('gulp-umd');

gulp.task('jsbuild', function() {
  return gulp.src('src/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(umd({
      exports: function(file) {
        return 'materialDesignHamburger';
      },
      namespace: function(file) {
        return 'materialDesignHamburger';
      }
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('cssbuild', function() {
  return gulp.src('src/*.css')
    .pipe(csslint())
    .pipe(csslint.reporter())
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch('src/*.css', ['cssbuild']);
  gulp.watch('src/*.js', ['jsbuild']);
});

gulp.task('build', ['cssbuild', 'jsbuild']);