// jshint node: true

var gulp = require("gulp");
var sass = require("gulp-sass");
var magicImporter = require('node-sass-magic-importer');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var cleanCSS = require('gulp-clean-css');
var bs = require('browser-sync').create();
var fs = require("fs");

var sassSources = ["source/scss/**/*.scss"];
var htmlSources = ["index.html"];
var jsSources = ["js/**/*.js"];

// Build files once
gulp.task('build', ['css']);

// Watch and build files on change
gulp.task('watch', ['build'], function () {
	bs.init({
		server: "./"
	});
   gulp.watch(jsSources, ['sync']);
	gulp.watch(htmlSources, ['sync']);
	gulp.watch(sassSources, ['css']);
});

// Run BrowserSync after HTML changes
gulp.task("sync", function () {
	// Pipe nothing
	return gulp.src("!./")
		.pipe(bs.stream());
});

// bs, Compiles Sass, autoprefixes, minifies, and creates sourcemaps
gulp.task("css", function () {
	return gulp.src(sassSources)
		.pipe(sourcemaps.init())
		.pipe(sass({
			importer: magicImporter()
		}).on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(cleanCSS({
			level: 1
		}))
		.pipe(sourcemaps.write('/maps'))
		.pipe(gulp.dest('./css'))
		.pipe(bs.stream());
});