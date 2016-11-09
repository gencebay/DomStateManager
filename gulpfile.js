var gulp = require('gulp');
var ts = require('gulp-typescript');
var connect = require('gulp-connect');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var gutil = require("gulp-util");
var watchify = require("watchify");
var tsProject = ts.createProject("tsconfig.json");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var tsify = require("tsify");
var paths = {
    pages: ['src/*.html']
};

var watchedBrowserify = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: ['src/domStateStorage.ts'],
    cache: {},
    packageCache: {}
}).plugin(tsify).transform('babelify', {
    presets: ['es2015'],
    extensions: ['.ts']
}));

function bundle() {
    return watchedBrowserify
        .bundle()
        .pipe(source('domStateStorage.js'))
        .pipe(gulp.dest("dist"))
        .pipe(connect.reload());
}

gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    livereload: true
  });
});

gulp.task("html", function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
});

gulp.task("default", ["html", "connect"], function () {
    return bundle()
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest("dist"));
});

watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", gutil.log);