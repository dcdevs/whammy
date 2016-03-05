var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var stylus = require('gulp-stylus');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');

var paths = {
  sass: ['./scss/**/*.scss'],
  styl: ['./styl/**/*.styl']
};

// Clean target directory
gulp.task('clean', function() {
  return gulp.src('www', { read: false })
    .pipe(clean());
});


// render all stylus style
gulp.task('stylus', function() {
  return gulp.src('app/assets/css/stylus/app.styl')
    .pipe(stylus())
    .pipe(gulp.dest('www/assets/css'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('www/assets/css'));
});

// Compile JS in a single file
gulp.task('scripts', function() {
  gulp.src(['app/modules/**/*.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('www/scripts'));
});

//Copy files to www folder
gulp.task('copy', function() {
  gulp.src(['app/assets/**/*', '!app/assets/css/{stylus,stylus/**}'])
    .pipe(gulp.dest('www/assets'));

  gulp.src('app/lib/**/*')
    .pipe(gulp.dest('www/lib'));

  gulp.src(['app/templates/**/*.html'])
    .pipe(gulp.dest('www/templates'));
});

//Watch JS syntax
gulp.task('jshint', function() {
  gulp.src(['app/modules/**/*.js', '!app/modules/{app,controllers,directives,filters,services}.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});


// Watch files
gulp.task('watch', ['build'], function() {
  gulp.watch(['app/*.html'], ['app']);
  gulp.watch(['app/templates/**/*.html'], ['copy']);
  gulp.watch(['app/modules/**/*.js'], ['jshint', 'scripts']);
  gulp.watch(['app/assets/css/**/*.styl'], ['stylus']);
});


gulp.task('app', function() {
  gulp.src('app/*.html')
    .pipe(gulp.dest('www'));
});


//gulp.task('default', ['sass']);

// build
gulp.task('build', ['stylus', 'scripts', 'copy', 'app']);


gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

/*gulp.task('watch', function() {
  gulp.watch(paths.styl, ['stylus']);
});*/


gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});
