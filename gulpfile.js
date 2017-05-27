var gulp=require('gulp');
var uglify=require('gulp-uglify');
var minify=require('gulp-minify-css');
var clean=require('gulp-clean-css');
var myhtml=require('gulp-minify-html');
gulp.task('myjss',function(){
	gulp.src('Bootstrap/js/*.js').pipe(uglify()).pipe(gulp.dest('xiangmu/myjs'));
});

gulp.task('mycs',function(){
	gulp.src('Bootstrap/css/*.css').pipe(minify()).pipe(gulp.dest('xiangmu/mycss'));
});

gulp.task('myhtm',function(){
	gulp.src('Bootstrap/*.html').pipe(myhtml()).pipe(gulp.dest('Bootstrap'));
});

gulp.task('default',['myjss','mycs','myhtm'],function(){
	console.log('执行完毕');
})