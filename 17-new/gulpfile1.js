var gulp = require('gulp'),
	less = require('gulp-less'),
	cssmin = require('gulp-minify-css'),
	notify = require('gulp-notify'),
	uglify = require('gulp-uglify'), //js压缩
	concat = require('gulp-concat'), //文件合并
	rename = require('gulp-rename'), //文件更名
	plumber = require('gulp-plumber'),
	autoprefixer = require('gulp-autoprefixer');

var baseLessArray = [
	'common/**/*.less',
	'manage/**/*.less',
	'site/*.less',
	'index/**/*.less',
	'ymd/**/*.less',
	'trade/**/*.less',
	'free/**/*.less',
	'pay/**/*.less',
	'plans/*.less',
	'secure/**/*.less',
	'setting/**/*.less',
	'report/**/*.less',
	'cloud_save/**/*.less',
	'activity/join/*.less',
    'activity/electronic/*.less',
	'communication/**/*.less'
];

var baseJsArray =[
	'index/index.js',
	'report/js/report.js',
	'report/js/cdn.js',
	'report/js/map_system.js',
	'setting/*.js',
	'manage/**/*.js',
	'pay/**/*.js',
	'ymd/**/*.js',
	'secure/**/*.js',
	'ymd/**/*.js',
	'cloud_save/**/*.js',
	'add_sub_sites/**/*.js',
	'!**/*.min.js'
];

var ymdJsArray =[
	'common/js/underscore.min.js',
	'common/js/validator.min.js',
	'common/js/select27.min.js',
	'ymd/js/_ymd.js'
];
/*less编译压缩*/
gulp.task('less', function () {
	return gulp.src(
			baseLessArray.concat('!**/_*.less'), {
				base: '.'
			})
		.pipe(plumber({
			errorHandler: notify.onError('Error: <%= error.message %>')
		}))
		.pipe(less())
		.pipe(autoprefixer()) //自动添加前缀
		.pipe(cssmin({
			compatibility: 'ie7'
		}))
		.pipe(gulp.dest(''));
});

/*js编译压缩*/
gulp.task('js', function () {
	return gulp.src(baseJsArray.concat([
			'!**/_*.js'
		]), {
			base: '.'
		})
		.pipe(plumber({
			errorHandler: notify.onError('Error: <%= error.message %>')
		}))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(uglify())
		.pipe(gulp.dest(''));
});

//压缩主文件
gulp.task('jsCommonMin', function () {
	return gulp.src([
			'common/js/_/_common.js'
		])
		.pipe(plumber({
			errorHandler: notify.onError('Error: <%= error.message %>')
		}))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(uglify())
		.pipe(gulp.dest('common/js/_'));
});

gulp.task('jsCommonConcat', ['jsCommonMin'], function () {
	return gulp.src([
			'common/js/_/_jquery.with.tools.min.js', //这个文件不能用uglify 压缩，在ie8以下会报错
			'common/js/_/_common.min.js'
		])
		.pipe(concat('common.min.js'))
		.pipe(plumber({
			errorHandler: notify.onError('Error: <%= error.message %>')
		}))
		.pipe(gulp.dest('common/js'));
});

//羊毛盾
gulp.task('ymdJs',function () {
	return gulp.src(ymdJsArray)
		.pipe(concat('ymd.min.js'))
		.pipe(plumber({
			errorHandler: notify.onError('Error: <%= error.message %>')
		}))
		.pipe(gulp.dest('ymd/js'));
});

/*初始化*/
gulp.task('init', ['less', 'jsCommonConcat', 'ymdJs', 'js']);

/*监听*/
gulp.task('watch', function () {
	gulp.watch(baseLessArray, ['less']);
	gulp.watch(['common/js/_/_common.js'], ['jsCommonConcat']);
	gulp.watch(baseJsArray, ['js','ymdJs']);
});
