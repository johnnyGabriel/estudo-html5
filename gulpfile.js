var gulp = require('gulp'),
	gutil = require('gulp-util'),
	less = require('gulp-less'),
	path = require('path'),
	rename = require('gulp-rename'),
	minifyCSS = require('gulp-minify-css'),
	watch = require('gulp-watch'),
	useref = require('gulp-useref'),
	server = require('gulp-server-livereload');

gulp.task('less', function() {
	return gulp.src('source/less/**/*.less')
		.pipe(less({
			paths: [ path.join(__dirname, 'less') ]
		}))
		.pipe(gulp.dest('source/css'))
		.pipe(minifyCSS())
		.pipe(rename({suffix: '-min'}))
		.pipe(gulp.dest('source/css'));
});

gulp.task('watch', function() {
	watch(['source/less/**/*.less', 'source/js/**/*.js', 'source/**/*.html'], function() {
		gulp.start('less', 'bundle');
	})
});

gulp.task('bundle', function() {
	var assets = useref.assets();
	return gulp.src('source/index.html')
		.pipe(assets)
		.pipe(assets.restore())
		.pipe(useref())
		.pipe(gulp.dest('public'));
});

gulp.task('server', function() {
	gulp.src('public')
		.pipe(server({
			livereload: true,
			open: true,
			defaultFile: 'index.html'
		}))
});