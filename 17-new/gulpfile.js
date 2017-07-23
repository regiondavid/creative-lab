var gulp = require('gulp');
var less = require('gulp-less');
var LessAutoprefix = require('less-plugin-autoprefix'),
	uglify = require('gulp-uglify'), //js压缩
	notify = require('gulp-notify'),
	rename = require('gulp-rename'), //文件更名
	plumber = require('gulp-plumber');
var autoprefix = new LessAutoprefix({browsers: ['last 2 versions']})

var baseJsArray =[
    'js/*.js',
    '!js/*.min.js'
];
gulp.task('lessc', function() {
  return gulp.src('*.less')
    .pipe(less({
      plugins: [autoprefix]
    }))
    .pipe(gulp.dest('./css'))
});

gulp.task('watch', function(){
  return gulp.watch('*.less',['lessc']);
})
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
