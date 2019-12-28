const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const connect = require('gulp-connect');

function sassTask() {
  return gulp
	.src('./styles/main.sass')
	.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: "compressed"}).on('error', sass.logError))
		.pipe(autoprefixer())
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('./styles'))
	.pipe(connect.reload());
}

function watchTask() {
	gulp.watch('./styles/**/*.sass', sassTask);
}

function serverTask() {
	connect.server({
		root: '.',
		livereload: true
	});
}

exports.sassTask = sassTask;
exports.watchTask = watchTask;
exports.default = gulp.parallel(sassTask, gulp.parallel(serverTask, watchTask));