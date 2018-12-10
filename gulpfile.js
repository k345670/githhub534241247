var gulp = require('gulp');//引用gulp模块
var uglify = require('gulp-uglify');//压缩js
var minify = require('gulp-minify-css');//压缩css
var htmlminify = require('gulp-html-minify');//压缩html
var imagemin = require('gulp-imagemin');//压缩图片
var babel = require('gulp-babel');//es6转es5
var concat = require('gulp-concat');//合并文件夹
var rename = require("gulp-rename");//重命名文件夹
var connect = require('gulp-connect');//建立服务器
//var less = require("gulp-less");//编译less
var livereload = require('gulp-livereload');//自动刷新
var rev = require('gulp-rev');//添加哈希编码
var del = require('del');//删除
var runSequence = require('run-sequence')
var collector = require('gulp-rev-collector');
gulp.task('default',['watch','miniHtml','miniJs','miniCss','connect']);
gulp.task('miniCss', function(){
	gulp.src('app/**/*.css')
//		.pipe(minify())
		.pipe(gulp.dest('dist'));
});//css压缩
gulp.task('miniJs', function(){
	gulp.src('app/**/*.js')
	    .pipe(babel({
       	 presets: ['@babel/env']
   		 }))
//		.pipe(uglify())
//		.pipe(rev())//添加哈西编码
		.pipe(gulp.dest('dist'))
		.pipe(connect.reload());
//		.pipe(rev.manifest())
//		.pipe(rename({
//			suffix:'.min'//重命名添加后缀
//		}))
//		.pipe(gulp.dest('rev/js'));
});//js压缩和转es5
gulp.task('collector', function(){
	gulp.src(['rev/**/*.json','app/**/*.html'])
		.pipe(collector())
		.pipe(gulp.dest('dist'));
});
gulp.task('miniHtml', function(){
	gulp.src('app/**/*.html')
//		.pipe(htmlminify())
		.pipe(gulp.dest('dist'))
		.pipe(connect.reload());
		
});//压缩Html
gulp.task('imagemin', function(){
	gulp.src('app/static/images/**/*')
//		.pipe(imagemin())
		.pipe(gulp.dest('dist/static/images'));
});//压缩图片
gulp.task('concat', function(){
	gulp.src('app/**/*.js')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('concat'))
});//合并文件
gulp.task('watch', function(){
	gulp.watch('app/**/*.html' ,['miniHtml'])
})//开启监听
gulp.task('connect', function(){
	connect.server({
		root: 'dist',
		port: '3456',
		livereload:true
	});
});//开启本地服务器
gulp.task('clean', () =>{
	del(['rev','dist']);//删除文件
});
